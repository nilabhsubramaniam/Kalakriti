'use client';

import { Children, isValidElement, useCallback, useEffect, useId, useMemo, useRef, useState, type ComponentPropsWithoutRef, type CSSProperties, type KeyboardEvent, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Check, ChevronDown, Search } from 'lucide-react';

type Option = { value: string; label: string; disabled: boolean; group?: string; index: number };
type OptionProps = { value?: string | number; label?: string; disabled?: boolean; children?: ReactNode };
function text(node: ReactNode): string {
  return Children.toArray(node).map(child => typeof child === 'string' || typeof child === 'number' ? String(child) : isValidElement<OptionProps>(child) ? text(child.props.children) : '').join('');
}
function collect(children: ReactNode, group?: string, disabled = false): Omit<Option, 'index'>[] {
  return Children.toArray(children).flatMap(child => {
    if (!isValidElement<OptionProps>(child)) return [];
    if (child.type === 'optgroup') return collect(child.props.children, child.props.label, disabled || Boolean(child.props.disabled));
    if (child.type !== 'option') return [];
    const label = child.props.label ?? text(child.props.children);
    return [{ value: String(child.props.value ?? label), label, group, disabled: disabled || Boolean(child.props.disabled) }];
  });
}

/** Shared heritage picker; the native control remains the form/value and SSR fallback. */
export default function SelectField({ children, ...props }: ComponentPropsWithoutRef<'select'>) {
  const uid = useId();
  const native = useRef<HTMLSelectElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const wrapper = useRef<HTMLSpanElement>(null);
  const popup = useRef<HTMLDivElement>(null);
  const search = useRef<HTMLInputElement>(null);
  const typeAhead = useRef({ value: '', time: 0 });
  const options = useMemo(() => collect(children).map((item, index) => ({ ...item, index })), [children]);
  const [hydrated, setHydrated] = useState(false);
  const [internal, setInternal] = useState(String(props.defaultValue ?? options[0]?.value ?? ''));
  const value = props.value !== undefined ? String(props.value) : internal;
  const selected = options.find(option => option.value === value);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState<CSSProperties | null>(null);
  const positioned = position !== null;
  const enhanced = hydrated && !props.multiple && (!props.size || props.size <= 1);
  const searchable = options.length > 12;
  const filtered = options.filter(option => `${option.label} ${option.group ?? ''}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
  const enabled = filtered.filter(option => !option.disabled);
  const listId = `${uid}-options`;
  const label = props['aria-label'] ?? 'Choose an option';

  useEffect(() => { setHydrated(true); }, []);

  // Labels still point to the real select. Forward their focus to its visible trigger.
  useEffect(() => {
    if (!enhanced) return;
    const labels = Array.from(native.current?.labels ?? []);
    const focus = (event: Event) => { event.preventDefault(); trigger.current?.focus(); };
    labels.forEach(element => element.addEventListener('click', focus));
    return () => labels.forEach(element => element.removeEventListener('click', focus));
  }, [enhanced, props.id]);

  const close = (restore = false) => {
    setOpen(false); setPosition(null);
    if (restore) trigger.current?.focus({ preventScroll: true });
  };
  const commit = (option: Option) => {
    if (option.disabled || !native.current) return;
    native.current.value = option.value;
    native.current.dispatchEvent(new Event('change', { bubbles: true }));
    close(true);
  };
  const show = (last = false) => {
    if (props.disabled) return;
    setQuery('');
    setActive(last ? options.filter(item => !item.disabled).at(-1)?.index ?? 0 : selected?.index ?? options.find(item => !item.disabled)?.index ?? 0);
    setPosition(null); setOpen(true);
  };

  const place = useCallback(() => {
    const element = trigger.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const view = window.visualViewport;
    const topEdge = (view?.offsetTop ?? 0) + 12;
    const bottomEdge = (view?.offsetTop ?? 0) + (view?.height ?? window.innerHeight) - 12;
    if (rect.bottom < topEdge || rect.top > bottomEdge) { setOpen(false); return; }
    const availableWidth = Math.min(view?.width ?? window.innerWidth, window.innerWidth) - 24;
    const width = Math.min(Math.max(rect.width, searchable ? 300 : 240), availableWidth);
    const below = bottomEdge - rect.bottom - 8;
    const above = rect.top - topEdge - 8;
    const desired = Math.min(400, options.length * 44 + (searchable ? 74 : 16));
    const upward = below < Math.min(desired, 240) && above > below;
    const tokens: Record<string, string> = {};
    const style = getComputedStyle(element);
    for (const slot of ['paper', 'paper-deep', 'ink', 'accent', 'secondary', 'tertiary', 'line', 'primary', 'gold', 'heritage-paper']) tokens[`--kk-${slot}`] = style.getPropertyValue(`--kk-${slot}`);
    setPosition({ ...tokens, position: 'fixed', width, left: Math.max(12, Math.min(rect.left, window.innerWidth - width - 12)), maxHeight: Math.max(44, Math.min(400, upward ? above : below)), ...(upward ? { bottom: window.innerHeight - rect.top + 8 } : { top: rect.bottom + 8 }) });
  }, [options.length, searchable]);

  useEffect(() => {
    if (!open) return;
    place();
    const outside = (event: Event) => {
      const node = event.target as Node;
      if (!wrapper.current?.contains(node) && !popup.current?.contains(node)) { setOpen(false); setPosition(null); }
    };
    const scroll = (event: Event) => { if (!popup.current?.contains(event.target as Node)) place(); };
    window.addEventListener('pointerdown', outside);
    window.addEventListener('focusin', outside);
    window.addEventListener('resize', place);
    window.addEventListener('scroll', scroll, true);
    window.visualViewport?.addEventListener('resize', place);
    return () => {
      window.removeEventListener('pointerdown', outside);
      window.removeEventListener('focusin', outside);
      window.removeEventListener('resize', place);
      window.removeEventListener('scroll', scroll, true);
      window.visualViewport?.removeEventListener('resize', place);
    };
  }, [open, place]);

  useEffect(() => {
    if (open && positioned && searchable) search.current?.focus({ preventScroll: true });
  }, [open, positioned, searchable]);

  useEffect(() => {
    if (open && positioned) document.getElementById(`${uid}-option-${active}`)?.scrollIntoView({ block: 'nearest' });
  }, [active, open, positioned, uid]);

  const keyboard = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Tab') { if (open) close(true); return; }
    if (event.key === 'Escape' && open) { event.preventDefault(); event.stopPropagation(); close(true); return; }
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      if (!open) { show(event.key === 'End'); return; }
      event.stopPropagation();
      const index = enabled.findIndex(option => option.index === active);
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? enabled.length - 1 : Math.max(0, Math.min(enabled.length - 1, index + (event.key === 'ArrowDown' ? 1 : -1)));
      if (enabled[next]) setActive(enabled[next].index);
      return;
    }
    if (event.key === 'Enter' || (event.key === ' ' && event.target !== search.current)) {
      event.preventDefault();
      if (!open) show();
      else { event.stopPropagation(); const option = enabled.find(item => item.index === active); if (option) commit(option); }
      return;
    }
    if (event.target === search.current || event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1) return;
    event.preventDefault();
    const now = Date.now();
    const next = now - typeAhead.current.time < 700 ? typeAhead.current.value + event.key : event.key;
    typeAhead.current = { value: next, time: now };
    const term = [...next].every(char => char === next[0]) ? next[0] : next;
    const option = options.find(item => !item.disabled && item.label.toLocaleLowerCase().startsWith(term.toLocaleLowerCase()));
    if (option) { if (open) setActive(option.index); else commit(option); }
  };

  let lastGroup: string | undefined;
  return <span className="kk-select" ref={wrapper}>
    <select {...props} ref={native} hidden={enhanced} tabIndex={enhanced ? -1 : props.tabIndex} aria-hidden={enhanced ? true : props['aria-hidden']} onChange={event => { if (props.value === undefined) setInternal(event.target.value); props.onChange?.(event); }}>{children}</select>
    {!enhanced && <ChevronDown className="kk-select-icon" size={18} aria-hidden="true" />}
    {enhanced && <button ref={trigger} className="kk-select-trigger" type="button" role="combobox" disabled={props.disabled} aria-label={`${label}: ${selected?.label ?? ''}`} aria-haspopup="listbox" aria-expanded={open} aria-controls={open ? listId : undefined} aria-describedby={props['aria-describedby']} aria-invalid={props['aria-invalid']} aria-activedescendant={open && !searchable ? `${uid}-option-${active}` : undefined} onClick={() => open ? close() : show()} onKeyDown={keyboard}><span>{selected?.label ?? 'Choose an option'}</span><ChevronDown size={18} aria-hidden="true" /></button>}
    {open && position && createPortal(<div className="kk-select-menu" style={position} ref={popup}>
      {searchable && <div className="kk-select-search"><Search size={17} aria-hidden="true" /><input ref={search} type="search" role="combobox" aria-label={`Filter ${label.toLocaleLowerCase()}`} aria-expanded="true" aria-controls={listId} aria-autocomplete="list" aria-activedescendant={enabled.some(item => item.index === active) ? `${uid}-option-${active}` : undefined} placeholder="Find a state or region…" value={query} onKeyDown={keyboard} onChange={event => { const term = event.target.value; setQuery(term); const first = options.find(item => !item.disabled && `${item.label} ${item.group ?? ''}`.toLocaleLowerCase().includes(term.trim().toLocaleLowerCase())); if (first) setActive(first.index); }} /></div>}
      <div className="kk-select-options" role="listbox" id={listId} aria-label={label}>
        {filtered.map(option => {
          const heading = option.group && option.group !== lastGroup;
          lastGroup = option.group;
          return <div key={option.index} role="presentation">{heading && <p className="kk-select-group" role="presentation">{option.group}</p>}<button type="button" role="option" id={`${uid}-option-${option.index}`} tabIndex={-1} aria-selected={value === option.value} aria-disabled={option.disabled || undefined} disabled={option.disabled} data-active={active === option.index} onMouseDown={event => event.preventDefault()} onPointerMove={event => { if (event.pointerType !== 'touch') setActive(option.index); }} onKeyDown={keyboard} onClick={() => commit(option)}><span>{option.label}</span>{value === option.value && <Check size={17} aria-hidden="true" />}</button></div>;
        })}
        {!filtered.length && <p className="kk-select-empty" role="status">No matching options.</p>}
      </div>
    </div>, document.body)}
  </span>;
}

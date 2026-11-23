'use client';

import { useEffect, useId, useRef, useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, CircleAlert, Eye, EyeOff, KeyRound, Mail, MailCheck, Smartphone } from 'lucide-react';
import { submitAccountRequest } from '@/lib/account/client';
import {
  COUNTRY_CODES, PASSWORD_HINT, PHONE_HINT, emptyAccountValues, fieldsFor, validateAccount, validateField,
  type AccountErrors, type AccountField, type AccountMethod, type AccountMode, type AccountValues,
} from '@/lib/account/validation';

const LABELS: Record<AccountField, string> = {
  firstName: 'First name',
  lastName: 'Last name',
  email: 'Email address',
  password: 'Password',
  phone: 'Mobile number',
};

const COPY = {
  signin: {
    password: { submit: 'Sign in', done: 'You’re signed in — almost.' },
    link: { submit: 'Email me a sign-in link', done: 'Your link is on its way — almost.' },
    phone: { submit: 'Text me a sign-in code', done: 'Your code is on its way — almost.' },
  },
  signup: {
    password: { submit: 'Create account', done: 'Welcome to Kalakriti — almost.' },
    link: { submit: 'Email me a link', done: 'Your link is on its way — almost.' },
    phone: { submit: 'Text me a code', done: 'Your code is on its way — almost.' },
  },
} as const;

/**
 * Sign-in and sign-up, with a password, an emailed link, or a code sent by
 * SMS to a mobile number.
 *
 * Validation runs on submit and then on blur for fields already touched, so
 * nobody is told off before they have finished typing. Errors are listed in
 * a summary that takes focus, and each field carries its own message.
 * Submission goes through `submitAccountRequest`, which has no backend yet.
 */
export default function AccountForm({ mode }: { mode: AccountMode }) {
  const id = useId();
  const [method, setMethod] = useState<AccountMethod>('password');
  const [values, setValues] = useState<AccountValues>(emptyAccountValues);
  const [errors, setErrors] = useState<AccountErrors>({});
  const [touched, setTouched] = useState<Partial<Record<AccountField, boolean>>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [status, setStatus] = useState<'idle' | 'pending' | 'done'>('idle');
  const [submitError, setSubmitError] = useState('');
  const [summaryKey, setSummaryKey] = useState(0);
  const summaryRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef<HTMLHeadingElement>(null);

  const fields = fieldsFor(mode, method);
  const fieldId = (field: AccountField) => `${id}-${field}`;
  const listed = fields.filter(field => errors[field]);
  const copy = COPY[mode][method];

  /* Focus moves to the summary after a failed submit, and to the result
     after a successful one, so keyboard and screen-reader users land on the
     outcome instead of staying on the button. */
  useEffect(() => { if (summaryKey) summaryRef.current?.focus(); }, [summaryKey]);
  useEffect(() => { if (status === 'done') doneRef.current?.focus(); }, [status]);

  const update = (field: keyof AccountValues, value: string | boolean) => {
    const next = { ...values, [field]: value };
    setValues(next);
    /* Once a field has been judged, keep its message current as it changes.
       The dialling code changes what a valid number is, so it re-judges it. */
    const judged: AccountField | null = field === 'countryCode' ? 'phone'
      : field === 'remember' || field === 'updates' ? null : field;
    if (judged && (touched[judged] || errors[judged])) {
      setErrors(current => ({ ...current, [judged]: validateField(judged, next, mode) }));
    }
  };

  const blur = (field: AccountField) => {
    setTouched(current => ({ ...current, [field]: true }));
    if (values[field]) setErrors(current => ({ ...current, [field]: validateField(field, values, mode) }));
  };

  const chooseMethod = (next: AccountMethod) => {
    setMethod(next);
    /* A hidden field must not keep the form invalid. */
    const shown = fieldsFor(mode, next);
    setErrors(current => Object.fromEntries(Object.entries(current).filter(([field]) => shown.includes(field as AccountField))));
    setSubmitError('');
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validateAccount(values, mode, method);
    setErrors(found);
    setTouched(Object.fromEntries(fields.map(field => [field, true])));
    setSubmitError('');
    if (Object.keys(found).length) { setSummaryKey(key => key + 1); return; }

    setStatus('pending');
    const result = await submitAccountRequest({ mode, method, values });
    if (result.status === 'error') { setStatus('idle'); setSubmitError(result.message); return; }
    /* Nothing was sent anywhere; do not keep the password in memory either. */
    setValues(current => ({ ...current, password: '' }));
    setStatus('done');
  };

  const reset = () => {
    setValues(emptyAccountValues);
    setErrors({});
    setTouched({});
    setShowPassword(false);
    setStatus('idle');
  };

  if (status === 'done') {
    const name = values.firstName.trim();
    return (
      <section className="kk-auth-done" aria-labelledby={`${id}-done`}>
        <MailCheck size={34} strokeWidth={1.5} aria-hidden="true" />
        <h2 id={`${id}-done`} ref={doneRef} tabIndex={-1}>{name ? `Thank you, ${name}.` : 'Thank you.'}</h2>
        <p className="kk-auth-done-lead">{copy.done}</p>
        <p>
          Kalakriti accounts open soon. This is a preview: nothing was sent or stored,
          and your details have not left this device.
        </p>
        <div className="kk-auth-done-actions">
          <Link className="kk-auth-submit" href="/explore">Continue exploring <ArrowRight size={17} aria-hidden="true" /></Link>
          <button className="kk-auth-text-button" type="button" onClick={reset}>Back to the form</button>
        </div>
      </section>
    );
  }

  return (
    <form className="kk-auth-form" noValidate onSubmit={submit} aria-describedby={`${id}-preview`}>
      <div className="kk-auth-methods" role="group" aria-label={mode === 'signin' ? 'How would you like to sign in?' : 'How would you like to sign up?'}>
        <button type="button" aria-pressed={method === 'password'} onClick={() => chooseMethod('password')}>
          <KeyRound size={17} aria-hidden="true" />Password
        </button>
        <button type="button" aria-pressed={method === 'link'} onClick={() => chooseMethod('link')}>
          <Mail size={17} aria-hidden="true" />Email link
        </button>
        <button type="button" aria-pressed={method === 'phone'} onClick={() => chooseMethod('phone')}>
          <Smartphone size={17} aria-hidden="true" />Mobile
        </button>
      </div>

      {listed.length > 0 && (
        <div className="kk-auth-summary" ref={summaryRef} tabIndex={-1} role="alert" aria-labelledby={`${id}-summary`} key={summaryKey}>
          <h2 id={`${id}-summary`}><CircleAlert size={18} aria-hidden="true" />Please check {listed.length === 1 ? 'this detail' : `these ${listed.length} details`}</h2>
          <ul>
            {listed.map(field => (
              <li key={field}><a href={`#${fieldId(field)}`} onClick={event => { event.preventDefault(); document.getElementById(fieldId(field))?.focus(); }}>{errors[field]}</a></li>
            ))}
          </ul>
        </div>
      )}

      {mode === 'signup' && (
        <div className="kk-auth-row">
          {(['firstName', 'lastName'] as const).map(field => (
            <Field key={field} field={field} id={fieldId(field)} error={errors[field]}>
              <input
                id={fieldId(field)} name={field} type="text" value={values[field]}
                autoComplete={field === 'firstName' ? 'given-name' : 'family-name'}
                maxLength={60} aria-invalid={Boolean(errors[field])}
                aria-describedby={errors[field] ? `${fieldId(field)}-error` : undefined}
                onChange={event => update(field, event.target.value)} onBlur={() => blur(field)}
              />
            </Field>
          ))}
        </div>
      )}

      {method !== 'phone' && <Field field="email" id={fieldId('email')} error={errors.email}>
        <input
          id={fieldId('email')} name="email" type="email" inputMode="email" value={values.email}
          autoComplete="email" autoCapitalize="none" spellCheck={false} maxLength={254}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? `${fieldId('email')}-error` : undefined}
          onChange={event => update('email', event.target.value)} onBlur={() => blur('email')}
        />
      </Field>}

      {method === 'phone' && (
        <Field field="phone" id={fieldId('phone')} error={errors.phone} hint={PHONE_HINT}>
          <div className="kk-auth-phone">
            <select
              aria-label="Country code" name="countryCode" value={values.countryCode} autoComplete="tel-country-code"
              onChange={event => update('countryCode', event.target.value)}
            >
              {COUNTRY_CODES.map(country => <option key={country.code} value={country.code}>{country.label}</option>)}
            </select>
            <input
              id={fieldId('phone')} name="phone" type="tel" inputMode="tel" value={values.phone}
              autoComplete="tel-national" maxLength={20}
              placeholder={values.countryCode === '+91' ? '98765 43210' : undefined}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={[`${fieldId('phone')}-hint`, errors.phone ? `${fieldId('phone')}-error` : ''].filter(Boolean).join(' ')}
              onChange={event => update('phone', event.target.value)} onBlur={() => blur('phone')}
            />
          </div>
        </Field>
      )}

      {method === 'password' && (
        <Field field="password" id={fieldId('password')} error={errors.password} hint={mode === 'signup' ? PASSWORD_HINT : undefined}>
          <div className="kk-auth-password">
            <input
              id={fieldId('password')} name="password" type={showPassword ? 'text' : 'password'} value={values.password}
              autoComplete={mode === 'signin' ? 'current-password' : 'new-password'} maxLength={128}
              aria-invalid={Boolean(errors.password)}
              aria-describedby={[mode === 'signup' ? `${fieldId('password')}-hint` : '', errors.password ? `${fieldId('password')}-error` : ''].filter(Boolean).join(' ') || undefined}
              onChange={event => update('password', event.target.value)} onBlur={() => blur('password')}
            />
            <button type="button" aria-pressed={showPassword} aria-controls={fieldId('password')} onClick={() => setShowPassword(shown => !shown)}>
              {showPassword ? <EyeOff size={18} aria-hidden="true" /> : <Eye size={18} aria-hidden="true" />}
              <span>{showPassword ? 'Hide' : 'Show'}</span><span className="kk-sr-only"> password</span>
            </button>
          </div>
        </Field>
      )}

      {method === 'link' && (
        <p className="kk-auth-note">
          We’ll email you a one-time link{mode === 'signup' ? ' to confirm your address and finish your account' : ' that signs you in'} — no password to remember.
        </p>
      )}

      {mode === 'signin' && method === 'password' && (
        <div className="kk-auth-options">
          <Check name="remember" checked={values.remember} onChange={checked => update('remember', checked)}>Keep me signed in on this device</Check>
          <button className="kk-auth-text-button" type="button" onClick={() => chooseMethod('link')}>Forgot your password?</button>
        </div>
      )}
      {mode === 'signup' && (
        <Check name="updates" checked={values.updates} onChange={checked => update('updates', checked)}>
          Email me when new regional chapters open (optional)
        </Check>
      )}

      {submitError && <p className="kk-auth-field-error" role="alert">{submitError}</p>}

      <button className="kk-auth-submit" type="submit" disabled={status === 'pending'}>
        {status === 'pending' ? 'One moment…' : copy.submit}<ArrowRight size={17} aria-hidden="true" />
      </button>

      <p className="kk-auth-preview" id={`${id}-preview`}>
        Preview: accounts open soon. This form checks your details but does not send them anywhere yet.
      </p>
    </form>
  );
}

function Field({ field, id, error, hint, children }: {
  field: AccountField; id: string; error?: string; hint?: string; children: React.ReactNode;
}) {
  return (
    <div className="kk-auth-field" data-invalid={error ? 'true' : undefined}>
      <label htmlFor={id}>{LABELS[field]}</label>
      {hint && <p className="kk-auth-hint" id={`${id}-hint`}>{hint}</p>}
      {children}
      {error && <p className="kk-auth-field-error" id={`${id}-error`}><CircleAlert size={15} aria-hidden="true" />{error}</p>}
    </div>
  );
}

function Check({ name, checked, onChange, children }: {
  name: string; checked: boolean; onChange: (checked: boolean) => void; children: React.ReactNode;
}) {
  return (
    <label className="kk-auth-check">
      <input type="checkbox" name={name} checked={checked} onChange={event => onChange(event.target.checked)} />
      <span>{children}</span>
    </label>
  );
}

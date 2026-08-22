'use client';

import { useRef, useEffect, useState, useMemo, useCallback } from 'react';
import {
  STATE_THEMES, BASE_THEME, BRAND_SHLOKA, TOUR_ORDER, themeFor, displayName,
  type Palette, type FontKey,
} from '@/lib/stateThemes';
import { useRegionStore, tourLength } from '@/lib/store/useRegionStore';
import { Motif, Chakra, Trishul, BorderPatti } from '@/components/ornament/Motifs';

const LABEL_ABBR: Record<string, string> = {
  'Jammu & Kashmir':    'J & K',
  'Andhra Pradesh':     'Andhra Pr.',
  'Arunanchal Pradesh': 'Arunachal Pr.',
  'Himachal Pradesh':   'Himachal Pr.',
  'Madhya Pradesh':     'Madhya Pr.',
  'Uttar Pradesh':      'Uttar Pr.',
  'NCT of Delhi':       'Delhi',
};

/** Territories that sit in open water — they get ripples around them. */
const ISLANDS = ['Andaman & Nicobar Island', 'Lakshadweep'];

const SKIP_LABELS = new Set([
  'Andaman & Nicobar Island', 'Lakshadweep',
  'Daman & Diu', 'Dadara & Nagar Havelli',
  'Puducherry', 'Chandigarh',
]);

/** Display-font stack per regional register — mirrors `FontKey`. */
const FONT_STACK: Record<FontKey, string> = {
  classic: 'var(--font-classic-stack)',
  royal:   'var(--font-royal-stack)',
  temple:  'var(--font-temple-stack)',
  folk:    'var(--font-folk-stack)',
};

/** Pause on the full map before the showcase sets off. */
const OPENING_HOLD = 1600;
/** How long each state is held open during the showcase. */
const STATE_HOLD = 2500;
/** Camera move when the user picks a state — unhurried. */
const FLY_MS = 850;
/** Camera move during the showcase — quicker, so the hold is reading time
    rather than travel time. */
const FLY_TOUR_MS = 560;

/** Scripts that Devanagari faces cannot render — fall back to the Noto set. */
const NON_DEVANAGARI = /[ঀ-෿؀-ۿༀ-࿿]/;

/* ── Colour helpers for the canvas, which cannot read CSS transitions ──── */
type RGB = [number, number, number];

function hexToRgb(hex: string): RGB {
  const h = hex.replace('#', '');
  const full = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
  return [
    parseInt(full.slice(0, 2), 16),
    parseInt(full.slice(2, 4), 16),
    parseInt(full.slice(4, 6), 16),
  ];
}

const rgba = (c: RGB, a: number) => `rgba(${c[0] | 0}, ${c[1] | 0}, ${c[2] | 0}, ${a})`;

/** Canvas palette — the four pigments the animated field draws with. */
interface Pigments { accent: RGB; secondary: RGB; tertiary: RGB; ink: RGB }

const pigmentsOf = (p: Palette): Pigments => ({
  accent:    hexToRgb(p.accent),
  secondary: hexToRgb(p.secondary),
  tertiary:  hexToRgb(p.tertiary),
  ink:       hexToRgb(p.ink),
});

const lerpInto = (cur: RGB, target: RGB, t: number) => {
  cur[0] += (target[0] - cur[0]) * t;
  cur[1] += (target[1] - cur[1]) * t;
  cur[2] += (target[2] - cur[2]) * t;
};

export default function IndiaMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const svgRef    = useRef<SVGSVGElement>(null);
  const zoomRef   = useRef<{
    toIndia: (ms?: number) => void;
    toState: (n: string, ms?: number) => void;
  }>({ toIndia: () => {}, toState: () => {} });
  /** Repaints every state path when the theme changes. */
  const restyleRef = useRef<(() => void) | null>(null);
  /** Selection read by the d3 closures below, which are built only once. */
  const selectedRef = useRef<string | null>(null);
  /** Captured before the URL is rewritten, so a shared link still resolves. */
  const initialHash = useRef<string | null>(
    typeof window === 'undefined' ? null : decodeURIComponent(window.location.hash.slice(1)) || null,
  );

  /* The navbar, the map, deep links, and the showcase all write here. */
  const activeState    = useRegionStore(s => s.selected);
  const tour           = useRegionStore(s => s.tour);
  const tourIndex      = useRegionStore(s => s.tourIndex);
  const select         = useRegionStore(s => s.select);
  const selectFromTour = useRegionStore(s => s.selectFromTour);
  const setTour        = useRegionStore(s => s.setTour);
  const stopTour       = useRegionStore(s => s.stopTour);

  const [hoverState, setHoverState] = useState<string | null>(null);
  const [loading,    setLoading]    = useState(true);
  /** True once the geometry is drawn and the camera can be driven. */
  const [ready,      setReady]      = useState(false);

  /* d3's handlers are bound once, so they reach the store through a ref. */
  const selectRef = useRef(select);
  selectRef.current = select;
  /* Read by the camera effect without making the phase one of its deps. */
  const touringRef = useRef(false);
  touringRef.current = tour === 'running';

  /* The selected state's cultural identity — Madhubani when nothing is picked. */
  const theme   = useMemo(() => themeFor(activeState), [activeState]);
  const palette = activeState ? theme.colors : BASE_THEME;
  const isPrimary = Boolean(theme.primary);

  /* Live palette for d3 + canvas, which live outside React's render. */
  const paletteRef = useRef<Palette>(palette);
  paletteRef.current = palette;
  selectedRef.current = activeState;

  const pigmentTarget = useRef<Pigments>(pigmentsOf(palette));
  useEffect(() => { pigmentTarget.current = pigmentsOf(palette); }, [palette]);

  /* Repaint the map whenever the active state (and so the palette) changes. */
  useEffect(() => { restyleRef.current?.(); }, [activeState]);

  /* ── Canvas: mandalas, kolam dots, ocean streams ───────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let dead = false;
    let raf  = 0;

    /* A phone repaints this field every frame on battery, so scale the work
       down with the screen. Desktop keeps the full density. */
    const small = window.innerWidth < 640;
    const dpr = Math.min(window.devicePixelRatio || 1, small ? 1.5 : 2);
    let W = window.innerWidth;
    let H = window.innerHeight;

    const size = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width  = `${W}px`;
      canvas.style.height = `${H}px`;
      canvas.getContext('2d')!.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    window.addEventListener('resize', size);

    /* Pigments the field currently paints with — eased toward the theme. */
    const cur: Pigments = pigmentsOf(paletteRef.current);
    const wheel: (keyof Pigments)[] = ['accent', 'secondary', 'tertiary', 'accent', 'secondary'];

    /* Mandalas — slow-turning rangoli wheels. */
    type Mandala = { x: number; y: number; r: number; rot: number; speed: number; hue: keyof Pigments; petals: number };
    const mandalas: Mandala[] = Array.from({ length: small ? 4 : 7 }, (_, i) => ({
      x:      Math.random() * W,
      y:      Math.random() * H,
      r:      80 + Math.random() * 140,
      rot:    Math.random() * Math.PI * 2,
      speed:  (0.0008 + Math.random() * 0.0014) * (Math.random() > 0.5 ? 1 : -1),
      hue:    wheel[i % wheel.length],
      petals: 6 + Math.floor(Math.random() * 4),
    }));

    const drawMandala = (ctx: CanvasRenderingContext2D, m: Mandala) => {
      const c = cur[m.hue];
      ctx.save();
      ctx.translate(m.x, m.y);
      ctx.rotate(m.rot);

      for (let i = 0; i < m.petals; i++) {
        ctx.save();
        ctx.rotate((i / m.petals) * Math.PI * 2);
        ctx.beginPath();
        ctx.ellipse(0, m.r * 0.55, m.r * 0.18, m.r * 0.48, 0, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(c, 0.075);
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
      }
      for (let ring = 1; ring <= 4; ring++) {
        ctx.beginPath();
        ctx.arc(0, 0, (m.r * ring) / 4, 0, Math.PI * 2);
        ctx.strokeStyle = rgba(c, 0.055 - ring * 0.008);
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }
      ctx.beginPath();
      for (let i = 0; i <= m.petals; i++) {
        const a = (i / m.petals) * Math.PI * 2;
        const px = Math.cos(a) * m.r * 0.3;
        const py = Math.sin(a) * m.r * 0.3;
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.strokeStyle = rgba(c, 0.08);
      ctx.lineWidth = 0.8;
      ctx.stroke();
      ctx.restore();
    };

    /* Kolam dot lattice — the threshold grid, pulsing. */
    const COLS = small ? 11 : 18, ROWS = small ? 7 : 11;
    const dotGrid = Array.from({ length: ROWS * COLS }, (_, i) => ({
      cx: ((i % COLS) + 0.5) / COLS,
      cy: (Math.floor(i / COLS) + 0.5) / ROWS,
      hue: wheel[i % wheel.length],
      phase: (i * 0.41) % (Math.PI * 2),
    }));

    /* The three seas, drawn as flowing line-work. */
    const drawSeas = (ctx: CanvasRenderingContext2D, t: number) => {
      ctx.save();
      ctx.lineWidth = 1;
      const sea = cur.tertiary;

      for (let i = 0; i < 5; i++) {
        const x0 = W * (0.022 + i * 0.018);
        const amp = 9 + i * 4, wl = 65 + i * 18, ph = t * (0.009 + i * 0.002);
        ctx.beginPath();
        for (let y = 0; y <= H; y += 4) {
          const x = x0 + Math.sin(y / wl + ph) * amp;
          y === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = rgba(sea, 0.10 - i * 0.014);
        ctx.stroke();
      }

      for (let i = 0; i < 5; i++) {
        const x0 = W * (0.978 - i * 0.018);
        const amp = 9 + i * 4, wl = 65 + i * 18, ph = t * (0.009 + i * 0.002) + Math.PI;
        ctx.beginPath();
        for (let y = 0; y <= H; y += 4) {
          const x = x0 + Math.sin(y / wl + ph) * amp;
          y === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = rgba(sea, 0.10 - i * 0.014);
        ctx.stroke();
      }

      for (let i = 0; i < 4; i++) {
        const y0 = H * (0.965 - i * 0.016);
        const amp = 10 + i * 5, wl = 110 + i * 25, ph = t * (0.006 + i * 0.002);
        ctx.beginPath();
        for (let x = 0; x <= W; x += 4) {
          const y = y0 + Math.sin(x / wl + ph) * amp;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = rgba(sea, 0.085 - i * 0.013);
        ctx.stroke();
      }
      ctx.restore();
    };

    let t = 0;
    const tick = () => {
      if (dead) return;
      raf = requestAnimationFrame(tick);
      t++;

      /* Ease the pigments toward the active theme — the canvas cross-fades
         in step with the CSS custom-property transition. */
      const target = pigmentTarget.current;
      lerpInto(cur.accent,    target.accent,    0.045);
      lerpInto(cur.secondary, target.secondary, 0.045);
      lerpInto(cur.tertiary,  target.tertiary,  0.045);
      lerpInto(cur.ink,       target.ink,       0.045);

      const ctx = canvas.getContext('2d')!;
      ctx.clearRect(0, 0, W, H);

      for (const d of dotGrid) {
        const pulse = Math.sin(t * 0.012 + d.phase) * 0.5 + 0.5;
        ctx.fillStyle = rgba(cur[d.hue], 0.03 + pulse * 0.05);
        ctx.beginPath();
        ctx.arc(d.cx * W, d.cy * H, 1.4 + pulse * 1.0, 0, Math.PI * 2);
        ctx.fill();
      }

      drawSeas(ctx, t);

      for (const m of mandalas) {
        m.rot += m.speed;
        drawMandala(ctx, m);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => { dead = true; cancelAnimationFrame(raf); window.removeEventListener('resize', size); };
  }, []);

  /* ── SVG India map ──────────────────────────────────────────────────── */
  useEffect(() => {
    if (!svgRef.current) return;
    let dead = false;
    let removeResize = () => {};

    (async () => {
      const d3 = await import('d3');
      const { geoMercator, geoPath, select, zoom: d3zoom, zoomIdentity, json, easeCubicInOut } = d3;
      if (dead) return;

      const svg = svgRef.current!;
      let W = svg.clientWidth  || window.innerWidth;
      let H = svg.clientHeight || window.innerHeight;

      const d3svg = select(svg);
      d3svg.selectAll('*').remove();

      const defs = d3svg.append('defs');

      /* Glow on the selected state — a diya held behind the paper. */
      const glowPrimary = defs.append('filter')
        .attr('id', 'glow-primary').attr('x', '-40%').attr('y', '-40%').attr('width', '180%').attr('height', '180%');
      const glowBlur = glowPrimary.append('feGaussianBlur')
        .attr('in', 'SourceGraphic').attr('stdDeviation', '5').attr('result', 'blur');
      const fmp = glowPrimary.append('feMerge');
      fmp.append('feMergeNode').attr('in', 'blur');
      fmp.append('feMergeNode').attr('in', 'SourceGraphic');

      const hoverGlow = defs.append('filter').attr('id', 'glow-hover')
        .attr('x', '-50%').attr('y', '-50%').attr('width', '200%').attr('height', '200%');
      const drop = hoverGlow.append('feDropShadow')
        .attr('dx', 0).attr('dy', 0).attr('stdDeviation', '10').attr('flood-opacity', '0.55');

      /* Woven texture for the selected state — a kolam dot on a diagonal
         weave, recoloured to whichever tradition is open. */
      const fillPattern = defs.append('pattern')
        .attr('id', 'kk-weave')
        .attr('patternUnits', 'userSpaceOnUse')
        .attr('width', 9).attr('height', 9);
      const patternGround = fillPattern.append('rect')
        .attr('width', 9).attr('height', 9);
      const patternMarks = fillPattern.append('g')
        .attr('fill', 'none').attr('stroke-width', 0.6);
      patternMarks.append('path').attr('d', 'M0 9 L9 0 M-2 2 L2 -2 M7 11 L11 7');
      patternMarks.append('circle').attr('cx', 4.5).attr('cy', 4.5).attr('r', 1.1);

      const root     = d3svg.append('g').attr('class', 'root');
      const rippleG  = root.append('g').attr('class', 'ripples').attr('pointer-events', 'none');
      const statesG  = root.append('g').attr('class', 'states');
      const labelsG  = root.append('g').attr('class', 'labels').attr('pointer-events', 'none');

      /* Line-work and labels are counter-scaled on zoom so the map keeps a
         constant hairline weight instead of thickening into blobs. */
      let applyScale: (k: number) => void = () => {};
      let scale = 1;

      const zb = d3zoom<SVGSVGElement, unknown>()
        .scaleExtent([0.4, 20])
        .on('zoom', ev => {
          root.attr('transform', ev.transform.toString());
          scale = ev.transform.k;
          applyScale(scale);
        });
      d3svg.call(zb);
      d3svg.on('dblclick.zoom', null);

      const statesData: any = await json('/india-states.geojson');
      if (dead) return;
      setLoading(false);

      /* Fit the projection to the element's current size. Called again on
         resize and orientation change — geoPath holds a reference to the
         projection, so refitting in place keeps `path` valid. */
      const proj = geoMercator();
      const path = geoPath(proj);

      const fitProjection = () => {
        W = svg.clientWidth  || window.innerWidth;
        H = svg.clientHeight || window.innerHeight;
        /* On wide screens the hero occupies the left third, so the map is
           fitted to the remaining space rather than dead-centre. */
        const leftInset = W >= 1024 ? 0.28 : 0.04;
        proj.fitExtent([[W * leftInset, H * 0.05], [W * 0.97, H * 0.96]], statesData);
      };
      fitProjection();

      const sName = (d: any): string => d?.properties?.ST_NM ?? '';

      /* Every state is tinted with its *own* tradition's accent, at a whisper;
         the selected one comes up to full pigment. */
      const own = (name: string) => STATE_THEMES[name]?.colors ?? BASE_THEME;
      const isSelected = (name: string) => selectedRef.current === name;


      const baseFill = (d: any) => {
        const n = sName(d);
        const c = hexToRgb(own(n).accent);
        if (isSelected(n)) return 'url(#kk-weave)';
        return rgba(c, 0.09);
      };

      /* Recolour the weave to the open tradition. */
      const tintPattern = () => {
        const p = selectedRef.current ? own(selectedRef.current) : BASE_THEME;
        patternGround.attr('fill', rgba(hexToRgb(p.accent), 0.14));
        patternMarks.attr('stroke', rgba(hexToRgb(p.accent), 0.55));
      };
      tintPattern();
      const baseStroke = (d: any) => {
        const n = sName(d);
        const c = hexToRgb(own(n).accent);
        if (isSelected(n)) return rgba(c, 0.85);
        return rgba(c, 0.32);
      };
      const baseWidth  = (d: any) => (isSelected(sName(d)) ? 1.2 : 0.6);
      const labelSize  = (d: any) => (isSelected(sName(d)) ? 8.5 : 6);
      const baseFilter = (d: any) => (isSelected(sName(d)) ? 'url(#glow-primary)' : null);
      const labelFill  = (d: any) => {
        const n = sName(d);
        const c = hexToRgb(own(n).ink);
        if (isSelected(n)) return rgba(hexToRgb(own(n).accent), 0.95);
        return rgba(c, 0.55);
      };

      const paths = statesG.selectAll<SVGPathElement, any>('path')
        .data(statesData.features)
        .enter().append('path')
        .attr('d',      (d: any) => path(d) ?? '')
        .attr('fill',   baseFill)
        .attr('stroke', baseStroke)
        .attr('stroke-width', baseWidth)
        .attr('filter', baseFilter)
        .style('cursor', 'pointer')
        .style('transition', 'fill 0.45s ease, stroke 0.45s ease')
        .on('mouseenter', function (_, d: any) {
          const n = sName(d);
          const c = hexToRgb(own(n).accent);
          drop.attr('flood-color', own(n).accent);
          select(this)
            .attr('fill',   rgba(c, 0.45))
            .attr('stroke', rgba(c, 0.95))
            .attr('stroke-width', 1.5 / scale)
            .attr('filter', 'url(#glow-hover)')
            .classed('state-holo', true);
          setHoverState(n);
        })
        .on('mouseleave', function (_, d: any) {
          select(this)
            .attr('fill',   baseFill(d))
            .attr('stroke', baseStroke(d))
            .attr('stroke-width', baseWidth(d) / scale)
            .attr('filter', baseFilter(d))
            .classed('state-holo', false);
          setHoverState(null);
        })
        .on('click', (_, d: any) => selectRef.current(sName(d)));

      const labels = labelsG.selectAll('text')
        .data(statesData.features.filter((f: any) => !SKIP_LABELS.has(f.properties?.ST_NM)))
        .enter().append('text')
        .attr('x', (d: any) => path.centroid(d)[0])
        .attr('y', (d: any) => path.centroid(d)[1])
        .attr('text-anchor', 'middle')
        .attr('dominant-baseline', 'middle')
        .attr('fill', labelFill)
        .attr('font-size', (d: any) => `${labelSize(d)}px`)
        .attr('font-weight', (d: any) => (isSelected(sName(d)) ? '600' : '400'))
        .attr('letter-spacing', '0.3')
        .style('font-family', 'var(--font-sans-stack)')
        .style('transition', 'fill 0.45s ease')
        .text((d: any) => LABEL_ABBR[sName(d)] ?? sName(d));

      /* Ring radius for an island cluster, in projected pixels. */
      const rippleRadius = (geom: any) => Math.max(3.5, Math.sqrt(path.area(geom)) * 1.5);

      /* ── Island water ──────────────────────────────────────────────────
         Rings spreading out from the Andamans and Lakshadweep, so the two
         island territories sit in moving water rather than on blank paper.
         They live inside the zoom group, so they stay pinned to the islands;
         non-scaling strokes keep them a hairline at every zoom. */
      ISLANDS.forEach(name => {
        const feat = statesData.features.find((f: any) => sName(f) === name);
        if (!feat) return;

        /* One ring set per island cluster rather than one for the whole
           chain — the Andamans span 800km, and a single ring around all of
           them would sweep across the mainland. */
        const polys: any[] = feat.geometry?.type === 'MultiPolygon'
          ? feat.geometry.coordinates.map((c: any) => ({ type: 'Polygon', coordinates: c }))
          : [feat.geometry];

        const clusters = polys
          .map(geom => ({ geom, area: path.area(geom as any) }))
          .filter(c => c.area > 0.15)
          .sort((a, b) => b.area - a.area)
          .slice(0, 8);

        const g = rippleG.append('g')
          .attr('class', 'kk-ripples')
          .attr('data-island', name);

        clusters.forEach((c, ci) => {
          const [cx, cy] = path.centroid(c.geom as any);
          if (!Number.isFinite(cx) || !Number.isFinite(cy)) return;
          /* Start just outside the island itself. */
          const r0 = rippleRadius(c.geom);

          const set = g.append('g')
            .attr('class', 'kk-ripple-set')
            .datum(c.geom)
            .attr('transform', `translate(${cx}, ${cy})`);
          for (let i = 0; i < 3; i++) {
            set.append('circle')
              .attr('r', r0)
              .attr('fill', 'none')
              .attr('stroke', 'var(--kk-tertiary)')
              .attr('vector-effect', 'non-scaling-stroke')
              .attr('stroke-width', 1)
              /* Stagger both within a set and between clusters, so the water
                 never pulses in unison. */
              .style('animation-delay', `${i * 2.4 + ci * 0.7}s`)
              .classed('kk-ripple', true);
          }
        });
      });

      /* Keep hairlines and labels at a constant on-screen weight. */
      applyScale = (k: number) => {
        paths.attr('stroke-width', (d: any) => baseWidth(d) / k);
        /* Pattern tiles and filter radii live in user space, so they inflate
           with the zoom unless they are divided back out. */
        fillPattern.attr('patternTransform', `scale(${1 / k})`);
        glowBlur.attr('stdDeviation', 5 / k);
        drop.attr('stdDeviation', 10 / k);
        labels
          .attr('font-size', (d: any) => `${labelSize(d) / k}px`)
          .attr('letter-spacing', 0.3 / k);
      };

      /* Restyle hook — React calls this when the selection changes. */
      restyleRef.current = () => {
        tintPattern();
        rippleG.selectAll<SVGGElement, unknown>('.kk-ripples')
          .classed('is-open', function () {
            return this.getAttribute('data-island') === selectedRef.current;
          });
        paths
          .attr('fill', baseFill)
          .attr('stroke', baseStroke)
          .attr('filter', baseFilter);
        labels
          .attr('fill', labelFill)
          .attr('font-weight', (d: any) => (isSelected(sName(d)) ? '600' : '400'));
        applyScale(scale);
      };

      /* These move the camera only. What is *selected* lives in the store,
         and an effect below drives the camera from it — so nav clicks, map
         clicks, deep links, and the showcase all travel the same path. */
      const toState = (name: string, ms = FLY_MS) => {
        const feat = statesData.features.find((f: any) => sName(f) === name);
        if (!feat) return;
        const [[x0, y0], [x1, y1]] = path.bounds(feat);
        /* On a narrow screen the nav sits above the map and the panel covers
           the lower part of it, so frame the state in the band between them
           rather than dead-centre — otherwise it opens behind the panel. */
        const narrow = W < 900;
        const topChrome = narrow ? 108 : 0;           /* nav + control row */
        const panelH = narrow
          ? Math.min(H * (H < 520 ? 0.46 : 0.62), 480) /* mirrors the CSS caps */
          : 0;
        const bandTop = topChrome;
        const bandBot = H - panelH;
        const bandH   = Math.max(bandBot - bandTop, 120);
        const cy      = narrow ? (bandTop + bandBot) / 2 : H / 2;
        const k  = 0.78 / Math.max((x1 - x0) / W, (y1 - y0) / bandH);
        const tx = W / 2 - k * (x0 + x1) / 2;
        const ty = cy    - k * (y0 + y1) / 2;
        d3svg.transition().duration(ms).ease(easeCubicInOut)
          .call(zb.transform, zoomIdentity.translate(tx, ty).scale(k));
      };

      const toIndia = (ms = 680) => {
        d3svg.transition().duration(ms).ease(easeCubicInOut)
          .call(zb.transform, zoomIdentity);
      };

      /* Re-fit on resize and orientation change. Without this the map keeps
         the geometry it was built with and runs off-screen once the viewport
         changes — most visibly when a phone is rotated. */
      const relayout = () => {
        fitProjection();
        paths.attr('d', (d: any) => path(d) ?? '');
        labels
          .attr('x', (d: any) => path.centroid(d)[0])
          .attr('y', (d: any) => path.centroid(d)[1]);
        rippleG.selectAll<SVGGElement, any>('g.kk-ripple-set').each(function (geom: any) {
          const [cx, cy] = path.centroid(geom);
          if (!Number.isFinite(cx) || !Number.isFinite(cy)) return;
          select(this)
            .attr('transform', `translate(${cx}, ${cy})`)
            .selectAll('circle').attr('r', rippleRadius(geom));
        });
        /* Put the camera back where it was, at the new size. */
        const sel = selectedRef.current;
        if (sel) toState(sel, 0);
        else     toIndia(0);
      };

      let resizeTimer: ReturnType<typeof setTimeout>;
      const onResize = () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(relayout, 150);
      };
      window.addEventListener('resize', onResize);
      window.addEventListener('orientationchange', onResize);
      removeResize = () => {
        clearTimeout(resizeTimer);
        window.removeEventListener('resize', onResize);
        window.removeEventListener('orientationchange', onResize);
      };

      zoomRef.current = { toIndia, toState };
      setReady(true);

      /* Deep link — /#Tamil%20Nadu opens straight into that tradition,
         and skips the opening showcase. */
      const fromHash = initialHash.current;
      if (fromHash && STATE_THEMES[fromHash]) selectRef.current(fromHash);
    })();

    return () => { dead = true; restyleRef.current = null; removeResize(); };
  }, []);

  const close = useCallback(() => select(null), [select]);

  /* Follow the URL when it changes under us — an edited or pasted hash, or a
     link to another tradition from elsewhere on the page. */
  useEffect(() => {
    const onHash = () => {
      const name = decodeURIComponent(window.location.hash.slice(1));
      if (name && STATE_THEMES[name]) select(name);
      else if (!name) select(null);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [select]);

  /* Keep the URL in step with the selection, so a tradition can be shared. */
  useEffect(() => {
    const url = activeState
      ? `#${encodeURIComponent(activeState)}`
      : window.location.pathname + window.location.search;
    window.history.replaceState(null, '', url);
  }, [activeState]);

  /* Escape returns to the full map. */
  useEffect(() => {
    if (!activeState) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [activeState, close]);

  /* The camera follows the store. `ready` is in the deps so a selection made
     before the geometry loaded (a deep link) is honoured once it arrives. */
  useEffect(() => {
    if (!ready) return;
    const ms = touringRef.current ? FLY_TOUR_MS : undefined;
    if (activeState) zoomRef.current.toState(activeState, ms);
    else             zoomRef.current.toIndia(ms);
  }, [activeState, ready]);

  /* ── The opening showcase ───────────────────────────────────────────────
     Land on the whole map, hold, then travel state by state. Any deliberate
     input — a click, a key, a scroll, the navbar — hands control back. */
  useEffect(() => {
    if (tour === 'idle') return;
    const stop = () => stopTour();
    window.addEventListener('pointerdown', stop);
    window.addEventListener('wheel', stop, { passive: true });
    window.addEventListener('keydown', stop);
    return () => {
      window.removeEventListener('pointerdown', stop);
      window.removeEventListener('wheel', stop);
      window.removeEventListener('keydown', stop);
    };
  }, [tour, stopTour]);

  useEffect(() => {
    if (!ready) return;
    if (tour !== 'pending') return;
    /* A deep-linked visit is not a showcase. */
    if (activeState) { stopTour(); return; }
    /* Nor is it one for anyone who has asked for less movement — they can
       still start it deliberately from the control. */
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { stopTour(); return; }
    const t = setTimeout(() => setTour('running'), OPENING_HOLD);
    return () => clearTimeout(t);
  }, [ready, tour, activeState, setTour, stopTour]);

  useEffect(() => {
    if (tour !== 'running' || !ready) return;
    const next = tourIndex + 1;
    /* The first stop comes quickly; later ones hold long enough to read. */
    const delay = tourIndex < 0 ? 250 : STATE_HOLD;
    const t = setTimeout(() => {
      if (next >= TOUR_ORDER.length) { select(null); return; }
      selectFromTour(TOUR_ORDER[next], next);
    }, delay);
    return () => clearTimeout(t);
  }, [tour, tourIndex, ready, select, selectFromTour]);

  const hoverTheme = hoverState ? themeFor(hoverState) : null;
  const panelName  = activeState ? displayName(activeState) : null;
  const hoverName  = hoverState  ? displayName(hoverState)  : null;
  const scriptClass = theme.script.native && NON_DEVANAGARI.test(theme.script.native) ? 'kk-indic' : 'kk-deva';

  /* Theme slots handed to CSS — every themed rule reads from these. */
  const themeVars = {
    '--kk-paper':      palette.paper,
    '--kk-paper-deep': palette.paperDeep,
    '--kk-ink':        palette.ink,
    '--kk-ink-soft':   palette.inkSoft,
    '--kk-accent':     palette.accent,
    '--kk-secondary':  palette.secondary,
    '--kk-tertiary':   palette.tertiary,
    '--kk-line':       palette.line,
    '--kk-font-display': FONT_STACK[theme.font],
  } as Record<string, string>;

  /* Applied at the document root rather than on the stage, so chrome outside
     the map — the navbar and its state menu — carries the same theme. */
  useEffect(() => {
    const root = document.documentElement;
    for (const [k, v] of Object.entries(themeVars)) root.style.setProperty(k, v);
  });

  const touring = tour === 'running';

  return (
    <div className="kk-stage" data-tour={touring ? 'true' : 'false'}>

      {/* Animated pigment field — mandalas, kolam dots, seas */}
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none' }}
      />

      {/* Corner ornaments — Krishna's chakra, Shiva's trishul, the state's motif */}
      <Chakra className="kk-corner kk-corner--tr kk-spin-slow" size={132} strokeWidth={1} />
      <Trishul className="kk-corner kk-corner--bl" size={92} strokeWidth={1.1} />
      <Motif
        name={theme.motif}
        className="kk-corner kk-corner--br kk-breathe"
        size={108}
        strokeWidth={1.1}
      />

      {loading && (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3, pointerEvents: 'none' }}>
          <span className="kk-label" style={{ color: 'var(--kk-accent)', animation: 'pulse-glow 1.4s ease-in-out infinite' }}>
            प्रतीक्षा · Loading
          </span>
        </div>
      )}

      {/* Hero — retires once a state is selected */}
      <header className="kk-hero" data-hidden={activeState ? 'true' : 'false'} aria-hidden={activeState ? 'true' : 'false'}>
        <p className="kk-hero-eyebrow kk-label">GI-Tagged · Artisan Direct</p>
        <h1 className="kk-hero-title">
          The living hand<br />of India
        </h1>
        <p className="kk-hero-deva kk-deva" title={BRAND_SHLOKA.meaning}>
          {BRAND_SHLOKA.native}
        </p>
        <p className="kk-hero-lede">
          Every region of this map keeps its own line, its own pigment, its own
          story. Kalakriti begins in Mithila — where Madhubani has been painted
          on walls and paper for five unbroken centuries — and travels outward.
        </p>
        <p className="kk-hero-hint kk-label">Choose a state to enter its tradition</p>
      </header>

      {/* The map */}
      <svg
        ref={svgRef}
        className="kk-map"
        role="img"
        aria-label="Map of India — select a state to see its craft traditions"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 1 }}
      />

      {activeState && (
        <button className="kk-btn kk-back" onClick={close}>
          ← All States
        </button>
      )}

      {/* Showcase readout — doubles as the control to stop or restart it */}
      {ready && (
        <div className="kk-tour">
          {touring ? (
            <button className="kk-btn kk-tour-btn" onClick={stopTour}>
              ❚❚ Showcase · {Math.max(tourIndex + 1, 1)} / {tourLength}
            </button>
          ) : (
            <button
              className="kk-btn kk-tour-btn"
              onClick={() => { selectFromTour(TOUR_ORDER[0], 0); setTour('running'); }}
            >
              ▶ Cultural showcase
            </button>
          )}
        </div>
      )}

      {/* Hover readout */}
      {hoverState && !activeState && hoverTheme && (
        <div className="kk-hoverlabel">
          <span className="kk-hoverlabel-name">{hoverName}</span>
          <span className="kk-hoverlabel-art">{hoverTheme.art}</span>
        </div>
      )}

      {/* State panel */}
      <section
        className="kk-panel"
        data-open={activeState ? 'true' : 'false'}
        aria-hidden={activeState ? 'false' : 'true'}
        aria-label={panelName ? `${panelName} — craft traditions` : undefined}
      >
        <BorderPatti className="kk-panel-patti" height={14} />

        {activeState && (
          <div className="kk-panel-body" key={activeState}>
            <Motif name={theme.motif} className="kk-panel-watermark" size={190} strokeWidth={0.9} />

            {/* Identity */}
            <div className="kk-panel-col">
              <p className="kk-panel-kicker kk-label">
                <Motif name={theme.motif} size={13} strokeWidth={2.2} />
                {isPrimary ? 'Primary Region · Kalakriti' : 'Heritage Region · India'}
              </p>
              <h2 className="kk-panel-name">{panelName}</h2>
              <p className={`kk-panel-script ${scriptClass}`}>{theme.script.native}</p>
              <p className="kk-panel-translit">
                {theme.script.roman} — {theme.script.meaning}
              </p>
            </div>

            {/* Story + the Sanskrit line that sits with this tradition */}
            <div className="kk-panel-col">
              <p className="kk-panel-desc">{theme.description}</p>
              <figure className="kk-shloka">
                <p className="kk-shloka-line kk-deva">{theme.shloka.native}</p>
                <figcaption className="kk-shloka-caption">
                  <span className="kk-shloka-roman">{theme.shloka.roman}</span>
                  <span className="kk-shloka-meaning">{theme.shloka.meaning}</span>
                  <cite className="kk-shloka-source">{theme.shloka.source}</cite>
                </figcaption>
              </figure>
            </div>

            {/* Crafts */}
            <div className="kk-panel-col">
              <p className="kk-panel-art">{theme.art}</p>
              <div className="kk-chips">
                {theme.crafts.map((c, i) => (
                  <span key={c} className={`kk-chip${i === 0 ? ' kk-chip--lead' : ''}`}>{c}</span>
                ))}
              </div>
            </div>

            <button className="kk-btn kk-panel-close" onClick={close} aria-label="Close panel">✕</button>
          </div>
        )}
      </section>
    </div>
  );
}

// MedLink — web dashboard screens
// Light surface with AEGIS Trek brand accents. Clinical density + aerospace chrome.

const ML = {
  bg: '#F5F7FA',
  surface: '#FFFFFF',
  ink: '#0A0E1A',
  ink700: '#3A4A5C',
  ink500: '#6B8A94',
  ink300: '#AFC2CC',
  line: '#E3E9EF',
  lineStrong: '#CFD8DF',
  abyss: '#0A0E1A',
  abyssUp: '#141A2A',
  slate: '#2F3B49',
  glacier: '#C8E8F0',
  amber: '#F5A623',
  amberSoft: '#FEF4E1',
  green: '#4CAF82',
  greenSoft: '#E3F4EC',
  purple: '#2D1B4E',
  red: '#C94B3B',
  redSoft: '#F8E4E0',
};
const mlDisp = '"Chakra Petch", system-ui, sans-serif';
const mlMono = '"JetBrains Mono", ui-monospace, monospace';
const mlText = '"Inter", system-ui, sans-serif';

// Shared app shell (sidebar + topbar + content)
function MLShell({ active = 'patients', topbar = null, children }) {
  const navItems = [
    { id: 'dashboard', lab: 'Overview', sub: 'Fleet · live events' },
    { id: 'patients', lab: 'Patients', sub: 'Connected devices' },
    { id: 'alerts', lab: 'Alerts', sub: '3 active', badge: 3 },
    { id: 'drones', lab: 'Drone fleet', sub: '12 online' },
    { id: 'caches', lab: 'Cache stations', sub: '' },
    { id: 'admin', lab: 'Admin', sub: '' },
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: ML.bg, color: ML.ink,
      fontFamily: mlText, display: 'grid', gridTemplateColumns: '240px 1fr',
      gridTemplateRows: '56px 1fr' }}>
      {/* brand bar top-left */}
      <div style={{ gridRow: '1', gridColumn: '1', borderRight: `1px solid ${ML.line}`,
        borderBottom: `1px solid ${ML.line}`, background: ML.abyss, color: ML.glacier,
        display: 'flex', alignItems: 'center', padding: '0 18px', gap: 10 }}>
        <svg width="22" height="22" viewBox="-20 -20 40 40">
          <g fill="none" stroke={ML.glacier} strokeWidth="1.4">
            <circle r="17" opacity="0.35"/><circle r="12" opacity="0.6"/><circle r="7"/>
          </g>
          <circle r="3" fill={ML.amber}/>
        </svg>
        <div>
          <div style={{ fontFamily: mlDisp, fontWeight: 700, fontSize: 15, letterSpacing: '0.08em' }}>MEDLINK</div>
          <div style={{ fontFamily: mlMono, fontSize: 9, letterSpacing: '0.22em', color: ML.ink300 }}>AEGIS TREK · OPS</div>
        </div>
      </div>

      {/* topbar */}
      <div style={{ gridRow: '1', gridColumn: '2', borderBottom: `1px solid ${ML.line}`,
        background: ML.surface, display: 'flex', alignItems: 'center',
        padding: '0 24px', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>{topbar}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ fontFamily: mlMono, fontSize: 11, letterSpacing: '0.18em',
            color: ML.ink500, display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: ML.green,
              boxShadow: `0 0 6px ${ML.green}` }}/>
            CASCADE OPS · LIVE
          </div>
          <div style={{ fontFamily: mlMono, fontSize: 11, color: ML.ink500 }}>11:48:22 PDT</div>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: ML.purple,
            color: ML.glacier, fontFamily: mlDisp, fontWeight: 600, fontSize: 13,
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>MK</div>
        </div>
      </div>

      {/* sidebar */}
      <div style={{ gridRow: '2', gridColumn: '1', borderRight: `1px solid ${ML.line}`,
        background: ML.surface, padding: '20px 0', overflow: 'auto' }}>
        {navItems.map(n => (
          <div key={n.id} style={{
            padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 12,
            borderLeft: active === n.id ? `3px solid ${ML.amber}` : '3px solid transparent',
            background: active === n.id ? ML.amberSoft : 'transparent',
            cursor: 'pointer',
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 14,
                color: active === n.id ? ML.ink : ML.ink700 }}>{n.lab}</div>
              {n.sub && <div style={{ fontFamily: mlMono, fontSize: 9, letterSpacing: '0.2em',
                color: ML.ink500, marginTop: 2, textTransform: 'uppercase' }}>{n.sub}</div>}
            </div>
            {n.badge && <div style={{ background: ML.amber, color: ML.ink, borderRadius: 10,
              padding: '2px 7px', fontFamily: mlMono, fontSize: 10, fontWeight: 600 }}>{n.badge}</div>}
          </div>
        ))}
        <div style={{ margin: '30px 18px 0', paddingTop: 16, borderTop: `1px solid ${ML.line}`,
          fontFamily: mlMono, fontSize: 10, letterSpacing: '0.22em', color: ML.ink500 }}>
          REGION · PNW · 412 DEVICES
        </div>
      </div>

      {/* content */}
      <div style={{ gridRow: '2', gridColumn: '2', overflow: 'auto' }}>{children}</div>
    </div>
  );
}

function MLChip({ children, tone = 'default' }) {
  const tones = {
    default: { bg: ML.bg, fg: ML.ink700, bd: ML.line },
    critical: { bg: ML.redSoft, fg: ML.red, bd: ML.red },
    warning: { bg: ML.amberSoft, fg: '#8E5A0E', bd: ML.amber },
    good: { bg: ML.greenSoft, fg: '#2B7A55', bd: ML.green },
  };
  const t = tones[tone] || tones.default;
  return <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '3px 10px', borderRadius: 10, background: t.bg, color: t.fg,
    border: `1px solid ${t.bd}`,
    fontFamily: mlMono, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
  }}>{children}</span>;
}

// ─────────────────────────────────────────────────────────────
// 1. OVERVIEW DASHBOARD
// ─────────────────────────────────────────────────────────────
function MLScreen1Overview() {
  return (
    <MLShell active="dashboard" topbar={
      <div>
        <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.22em',
          color: ML.ink500 }}>FLEET OPERATIONS</div>
        <div style={{ fontFamily: mlDisp, fontWeight: 600, fontSize: 18,
          color: ML.ink, marginTop: 2 }}>Overview</div>
      </div>
    }>
      <div style={{ padding: 32 }}>
        {/* kpi row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { lab: 'CONNECTED DEVICES', v: '412', sub: '+14 this week', col: ML.ink, spark: [2,5,4,7,8,6,9,10,12,14,13,15] },
            { lab: 'ACTIVE ALERTS', v: '3', sub: '1 critical · 2 mild', col: ML.amber, spark: [1,0,1,2,1,0,1,1,2,3,3,3] },
            { lab: 'DRONES IN FLIGHT', v: '2', sub: 'AGX-DR-0412 · -0198', col: ML.green, spark: [0,1,0,1,0,1,1,2,1,2,1,2] },
            { lab: 'AVG RESPONSE', v: '4:12', sub: 'MIN · target 5:00', col: ML.ink, spark: [9,8,7,7,6,5,5,4,4,4,4,4] },
          ].map((k, i) => (
            <div key={i} style={{ background: ML.surface, border: `1px solid ${ML.line}`,
              borderRadius: 10, padding: 18 }}>
              <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.2em',
                color: ML.ink500 }}>{k.lab}</div>
              <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 40,
                color: k.col, marginTop: 10, letterSpacing: '-0.02em' }}>{k.v}</div>
              <svg viewBox="0 0 120 28" style={{ width: '100%', height: 24, marginTop: 6 }}>
                <polyline fill="none" stroke={k.col} strokeWidth="1.3" strokeLinecap="round"
                  points={k.spark.map((y, x) => `${x * 11},${28 - y * 1.5}`).join(' ')}/>
              </svg>
              <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.14em',
                color: ML.ink500, marginTop: 4 }}>{k.sub}</div>
            </div>
          ))}
        </div>

        {/* map + alert queue */}
        <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 16 }}>
          {/* map */}
          <div style={{ background: ML.abyss, border: `1px solid ${ML.line}`, borderRadius: 10,
            padding: 0, position: 'relative', overflow: 'hidden', minHeight: 460 }}>
            <div style={{ position: 'absolute', top: 16, left: 20, zIndex: 2 }}>
              <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.22em',
                color: ML.ink300 }}>§ LIVE MAP · PACIFIC NORTHWEST</div>
              <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 20, color: ML.glacier,
                marginTop: 6 }}>Cascade Sector</div>
            </div>
            <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice"
              style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
              <g fill="none" stroke={ML.slate} strokeWidth="0.6" opacity="0.55">
                <path d="M-40 120 Q200 90 400 120 T840 100"/>
                <path d="M-40 180 Q200 150 400 180 T840 160"/>
                <path d="M-40 240 Q200 210 400 240 T840 220"/>
                <path d="M-40 300 Q200 270 400 300 T840 280"/>
                <path d="M-40 360 Q200 330 400 360 T840 340"/>
                <path d="M-40 420 Q200 390 400 420 T840 400"/>
              </g>
              {/* dots */}
              <g>
                {[[120,200],[180,250],[260,170],[340,220],[400,280],[460,200],[520,310],[600,180],[680,270],[300,380],[440,400],[580,420]].map(([x,y],i) => (
                  <g key={i}><circle cx={x} cy={y} r="3.5" fill={ML.green}/></g>
                ))}
                {/* warning */}
                <circle cx="390" cy="250" r="5" fill={ML.amber}/>
                <circle cx="390" cy="250" r="14" fill="none" stroke={ML.amber} opacity="0.5"/>
                {/* critical */}
                <circle cx="520" cy="200" r="6" fill={ML.red}/>
                <circle cx="520" cy="200" r="18" fill="none" stroke={ML.red} opacity="0.6"/>
                <circle cx="520" cy="200" r="28" fill="none" stroke={ML.red} opacity="0.3"/>
                {/* drone + path */}
                <path d="M580 80 Q540 140 520 200" fill="none" stroke={ML.amber} strokeDasharray="2 3"/>
                <g transform="translate(580 80)">
                  <circle r="9" fill={ML.abyss} stroke={ML.amber} strokeWidth="1.2"/>
                  <polygon points="0,-4 4,-1 4,3 0,6 -4,3 -4,-1" fill={ML.amber}/>
                </g>
              </g>
              {/* legend */}
              <g transform="translate(20 440)" fontFamily={mlMono} fontSize="9" fill={ML.glacier} letterSpacing="1.5">
                <circle cx="6" cy="0" r="3" fill={ML.green}/><text x="16" y="3">NORMAL · 407</text>
                <circle cx="140" cy="0" r="3" fill={ML.amber}/><text x="150" y="3">MILD · 2</text>
                <circle cx="230" cy="0" r="3" fill={ML.red}/><text x="240" y="3">CRITICAL · 1</text>
                <circle cx="345" cy="0" r="3" fill={ML.amber}/><text x="355" y="3">DRONE EN-ROUTE · 2</text>
              </g>
            </svg>
          </div>

          {/* alert queue */}
          <div style={{ background: ML.surface, border: `1px solid ${ML.line}`, borderRadius: 10,
            padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px', borderBottom: `1px solid ${ML.line}`,
              display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.22em',
                  color: ML.ink500 }}>§ ACTIVE ALERTS</div>
                <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 16,
                  color: ML.ink, marginTop: 4 }}>Queue</div>
              </div>
              <MLChip tone="critical">3 OPEN</MLChip>
            </div>
            {[
              { name: 'Patient · J. Chen', id: 'AGX-J-0412', sev: 'CRITICAL', t: '3m ago',
                note: 'Core 32.4°C · drone dispatched', tone: 'critical', col: ML.red},
              { name: 'Patient · L. Park', id: 'AGX-J-0398', sev: 'MILD', t: '12m ago',
                note: 'Core 35.6°C · self-resolving', tone: 'warning', col: ML.amber},
              { name: 'Patient · R. Ortiz', id: 'AGX-J-0371', sev: 'MILD', t: '24m ago',
                note: 'SpO₂ drop · altitude adjust', tone: 'warning', col: ML.amber},
            ].map((a, i) => (
              <div key={i} style={{ padding: '14px 20px', borderBottom: `1px solid ${ML.line}`,
                display: 'flex', gap: 14, alignItems: 'center' }}>
                <div style={{ width: 4, height: 44, background: a.col, borderRadius: 2 }}/>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 14,
                      color: ML.ink }}>{a.name}</div>
                    <MLChip tone={a.tone}>{a.sev}</MLChip>
                  </div>
                  <div style={{ fontSize: 12, color: ML.ink700, marginTop: 3 }}>{a.note}</div>
                  <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.18em',
                    color: ML.ink500, marginTop: 3 }}>{a.id} · {a.t}</div>
                </div>
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" stroke={ML.ink500} strokeWidth="1.5">
                  <path d="M2 2l6 6-6 6"/></svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MLShell>
  );
}

// ─────────────────────────────────────────────────────────────
// 2. PATIENT LIST / ROSTER
// ─────────────────────────────────────────────────────────────
function MLScreen2Patients() {
  const rows = [
    { n: 'J. Chen', id: 'AGX-J-0412', loc: 'Cascade Loop · 1842m', core: '32.4', hr: '142', spo: '88', sev: 'critical' },
    { n: 'L. Park', id: 'AGX-J-0398', loc: 'Alpine Lakes · 1240m', core: '35.6', hr: '118', spo: '92', sev: 'warning' },
    { n: 'R. Ortiz', id: 'AGX-J-0371', loc: 'Enchantments · 2180m', core: '35.9', hr: '124', spo: '89', sev: 'warning' },
    { n: 'S. Okafor', id: 'AGX-J-0356', loc: 'Glacier Peak · 1980m', core: '36.4', hr: '108', spo: '94', sev: 'good' },
    { n: 'M. Tanaka', id: 'AGX-J-0344', loc: 'Mt Baker · 1420m', core: '36.5', hr: '94', spo: '96', sev: 'good' },
    { n: 'A. Vasquez', id: 'AGX-J-0321', loc: 'Pilchuck · 980m', core: '36.6', hr: '102', spo: '96', sev: 'good' },
    { n: 'K. Nguyen', id: 'AGX-J-0318', loc: 'Rainier · 2980m', core: '36.3', hr: '128', spo: '91', sev: 'good' },
    { n: 'D. Silva', id: 'AGX-J-0294', loc: 'Stuart Range · 2620m', core: '36.4', hr: '116', spo: '92', sev: 'good' },
  ];
  return (
    <MLShell active="patients" topbar={
      <div>
        <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.22em', color: ML.ink500 }}>ROSTER · 412 CONNECTED</div>
        <div style={{ fontFamily: mlDisp, fontWeight: 600, fontSize: 18, color: ML.ink, marginTop: 2 }}>Patients</div>
      </div>
    }>
      <div style={{ padding: 32 }}>
        {/* filter bar */}
        <div style={{ display: 'flex', gap: 10, marginBottom: 20, alignItems: 'center' }}>
          <div style={{ flex: 1, padding: '10px 14px', background: ML.surface,
            border: `1px solid ${ML.line}`, borderRadius: 8, display: 'flex',
            alignItems: 'center', gap: 10 }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={ML.ink500} strokeWidth="1.5">
              <circle cx="6" cy="6" r="4.5"/><path d="M9.5 9.5l3 3"/></svg>
            <span style={{ color: ML.ink500, fontSize: 13 }}>Search device ID, name, or location…</span>
          </div>
          {['ALL · 412', 'CRITICAL · 1', 'MILD · 2', 'NORMAL · 407', 'OFFLINE · 2'].map((f, i) => (
            <div key={i} style={{ padding: '8px 14px', fontFamily: mlMono, fontSize: 10,
              letterSpacing: '0.18em', borderRadius: 6, background: i === 0 ? ML.ink : ML.surface,
              color: i === 0 ? ML.glacier : ML.ink700, border: `1px solid ${i === 0 ? ML.ink : ML.line}` }}>{f}</div>
          ))}
        </div>

        {/* table */}
        <div style={{ background: ML.surface, border: `1px solid ${ML.line}`,
          borderRadius: 10, overflow: 'hidden' }}>
          <div style={{ display: 'grid',
            gridTemplateColumns: '2fr 1.4fr 2fr 1fr 1fr 1fr 1fr 120px',
            gap: 12, padding: '12px 20px', borderBottom: `1px solid ${ML.line}`,
            background: ML.bg, fontFamily: mlMono, fontSize: 10, letterSpacing: '0.18em',
            color: ML.ink500, textTransform: 'uppercase' }}>
            <div>Patient</div><div>Device ID</div><div>Location</div>
            <div>Core °C</div><div>HR</div><div>SpO₂</div><div>Status</div><div></div>
          </div>
          {rows.map((r, i) => (
            <div key={i} style={{ display: 'grid',
              gridTemplateColumns: '2fr 1.4fr 2fr 1fr 1fr 1fr 1fr 120px',
              gap: 12, padding: '14px 20px', borderBottom: `1px solid ${ML.line}`,
              fontSize: 13, alignItems: 'center',
              background: r.sev === 'critical' ? ML.redSoft : (r.sev === 'warning' ? ML.amberSoft : 'transparent') }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 26, height: 26, borderRadius: '50%', background: ML.bg,
                  border: `1px solid ${ML.line}`, fontFamily: mlDisp, fontWeight: 600, fontSize: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: ML.ink700 }}>
                  {r.n.split(' ').map(p => p[0]).join('')}</div>
                <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 14 }}>{r.n}</div>
              </div>
              <div style={{ fontFamily: mlMono, fontSize: 11, color: ML.ink700 }}>{r.id}</div>
              <div style={{ color: ML.ink700 }}>{r.loc}</div>
              <div style={{ fontFamily: mlDisp, fontWeight: 500,
                color: r.sev === 'critical' ? ML.red : (r.sev === 'warning' ? '#8E5A0E' : ML.ink) }}>{r.core}</div>
              <div style={{ fontFamily: mlDisp, fontWeight: 500, color: ML.ink }}>{r.hr}</div>
              <div style={{ fontFamily: mlDisp, fontWeight: 500, color: ML.ink }}>{r.spo}%</div>
              <div><MLChip tone={r.sev}>{r.sev === 'critical' ? 'CRITICAL' : r.sev === 'warning' ? 'MILD' : 'NORMAL'}</MLChip></div>
              <div style={{ textAlign: 'right', fontFamily: mlMono, fontSize: 10,
                letterSpacing: '0.18em', color: ML.ink500 }}>OPEN →</div>
            </div>
          ))}
        </div>
      </div>
    </MLShell>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. PATIENT DETAIL — critical case
// ─────────────────────────────────────────────────────────────
function MLScreen3Detail() {
  return (
    <MLShell active="patients" topbar={
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ fontFamily: mlMono, fontSize: 11, color: ML.ink500 }}>Patients /</div>
        <div style={{ fontFamily: mlDisp, fontWeight: 600, fontSize: 18, color: ML.ink }}>J. Chen</div>
        <MLChip tone="critical">CRITICAL · AUTO-DISPATCH</MLChip>
      </div>
    }>
      <div style={{ padding: 24, display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 16 }}>
        {/* left: bio + timeseries */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* header card */}
          <div style={{ background: ML.abyss, color: ML.glacier, borderRadius: 10, padding: 24,
            border: `1px solid ${ML.line}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.22em',
                  color: ML.glacier, opacity: 0.6 }}>AGX-J-0412 · FIRMWARE 2.1.4</div>
                <div style={{ fontFamily: mlDisp, fontWeight: 600, fontSize: 28, marginTop: 4,
                  letterSpacing: '-0.01em' }}>Jordan Chen</div>
                <div style={{ fontSize: 13, color: ML.ink300, marginTop: 4 }}>
                  42yo · Cascade Loop · solo · started 06:12 PDT
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.22em',
                  color: ML.amber }}>◆ CORE TEMP</div>
                <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 54, color: ML.amber,
                  lineHeight: 1, marginTop: 6, letterSpacing: '-0.03em' }}>32.4°</div>
                <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.18em',
                  color: ML.amber, opacity: 0.85 }}>↓ 0.8°C · 4 MIN</div>
              </div>
            </div>
          </div>

          {/* biometric chart */}
          <div style={{ background: ML.surface, border: `1px solid ${ML.line}`, borderRadius: 10, padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
              <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.22em',
                color: ML.ink500 }}>§ CORE TEMP · LAST 60 MIN</div>
              <div style={{ display: 'flex', gap: 10, fontFamily: mlMono, fontSize: 10,
                letterSpacing: '0.14em', color: ML.ink500 }}>
                <span>· 1H</span><span>· 6H</span><span>· 24H</span>
              </div>
            </div>
            <svg viewBox="0 0 700 200" style={{ width: '100%', height: 220 }}>
              {/* grid */}
              <g stroke={ML.line} strokeWidth="0.5">
                <line x1="0" y1="40" x2="700" y2="40"/><line x1="0" y1="90" x2="700" y2="90"/>
                <line x1="0" y1="140" x2="700" y2="140"/><line x1="0" y1="190" x2="700" y2="190"/>
              </g>
              {/* zones */}
              <rect x="0" y="40" width="700" height="50" fill={ML.greenSoft} opacity="0.5"/>
              <rect x="0" y="90" width="700" height="50" fill={ML.amberSoft} opacity="0.5"/>
              <rect x="0" y="140" width="700" height="50" fill={ML.redSoft} opacity="0.5"/>
              {/* axis labels */}
              <g fontFamily={mlMono} fontSize="9" fill={ML.ink500} letterSpacing="1.2">
                <text x="4" y="36">37°</text>
                <text x="4" y="86">36°</text>
                <text x="4" y="136">34°</text>
                <text x="4" y="186">32°</text>
              </g>
              {/* line */}
              <polyline fill="none" stroke={ML.ink} strokeWidth="1.8"
                points="0,60 80,62 140,58 210,70 280,72 340,90 400,94 440,110 480,130 520,150 560,170 600,178 660,185 700,188"/>
              {/* dispatch marker */}
              <line x1="440" y1="0" x2="440" y2="200" stroke={ML.amber} strokeWidth="1" strokeDasharray="3 3"/>
              <g transform="translate(440 10)">
                <rect x="-60" y="0" width="120" height="18" rx="2" fill={ML.amber}/>
                <text x="0" y="12" textAnchor="middle" fontFamily={mlMono} fontSize="9"
                  fill={ML.ink} letterSpacing="1.5">DRONE DISPATCHED</text>
              </g>
              <circle cx="700" cy="188" r="5" fill={ML.amber}/>
            </svg>
          </div>

          {/* hr + spo2 mini */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {[
              { lab: 'HEART RATE · 60 MIN', v: '142', u: 'BPM', col: ML.ink,
                poly: "0,30 30,28 60,25 90,22 120,25 150,22 180,20 210,18 240,15 270,14 300,12 330,10 360,8" },
              { lab: 'SpO₂ · 60 MIN', v: '88', u: '%', col: ML.amber,
                poly: "0,8 40,10 80,12 120,15 160,18 200,22 240,25 280,28 320,32 360,35" },
            ].map((c, i) => (
              <div key={i} style={{ background: ML.surface, border: `1px solid ${ML.line}`,
                borderRadius: 10, padding: 18 }}>
                <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.2em',
                  color: ML.ink500 }}>{c.lab}</div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 6 }}>
                  <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 32, color: c.col }}>{c.v}</div>
                  <div style={{ fontFamily: mlMono, fontSize: 11, letterSpacing: '0.15em',
                    color: ML.ink500 }}>{c.u}</div>
                </div>
                <svg viewBox="0 0 360 40" style={{ width: '100%', height: 36, marginTop: 8 }}>
                  <polyline fill="none" stroke={c.col} strokeWidth="1.4" points={c.poly}/>
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* right: dispatch + audit */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: ML.surface, border: `1px solid ${ML.amber}`, borderRadius: 10, padding: 20 }}>
            <MLChip tone="warning">DRONE DISPATCH</MLChip>
            <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 18,
              color: ML.ink, marginTop: 10 }}>AGX-DR-0412</div>
            <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div><div style={{ fontFamily: mlMono, fontSize: 9, letterSpacing: '0.2em',
                color: ML.ink500 }}>ETA</div>
                <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 24,
                  color: ML.ink, marginTop: 4 }}>3:42</div></div>
              <div><div style={{ fontFamily: mlMono, fontSize: 9, letterSpacing: '0.2em',
                color: ML.ink500 }}>DISTANCE</div>
                <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 24,
                  color: ML.ink, marginTop: 4 }}>2.1 km</div></div>
            </div>
            <div style={{ marginTop: 16, height: 6, borderRadius: 3, background: ML.bg, overflow: 'hidden' }}>
              <div style={{ width: '28%', height: '100%', background: ML.amber }}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6,
              fontFamily: mlMono, fontSize: 9, letterSpacing: '0.18em', color: ML.ink500 }}>
              <span>◆ EN-ROUTE</span><span>28%</span>
            </div>
            <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              <div style={{ padding: '9px 0', textAlign: 'center', borderRadius: 6, border: `1px solid ${ML.line}`,
                fontFamily: mlDisp, fontWeight: 500, fontSize: 12, letterSpacing: '0.14em',
                color: ML.ink }}>ABORT</div>
              <div style={{ padding: '9px 0', textAlign: 'center', borderRadius: 6, background: ML.ink,
                color: ML.glacier, fontFamily: mlDisp, fontWeight: 500, fontSize: 12, letterSpacing: '0.14em' }}>
                CALL 911</div>
            </div>
          </div>

          <div style={{ background: ML.surface, border: `1px solid ${ML.line}`, borderRadius: 10, padding: 20 }}>
            <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.22em',
              color: ML.ink500 }}>§ EVENT AUDIT</div>
            {[
              { t: '11:48', lab: 'CRITICAL', d: 'Core crossed 33°C · auto-dispatch', col: ML.red },
              { t: '11:48', lab: 'DISPATCH', d: 'AGX-DR-0412 armed · hypothermia wrap', col: ML.amber },
              { t: '11:46', lab: 'WARNING', d: 'Core falling · escalation queued', col: ML.amber },
              { t: '11:44', lab: 'CONTACT', d: 'SMS sent to next-of-kin', col: ML.ink500 },
              { t: '11:42', lab: 'MILD', d: 'Core 35.2°C · haptic nudge sent', col: ML.amber },
            ].map((e, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '46px 1fr', gap: 12,
                padding: '10px 0', borderTop: `1px solid ${ML.line}`, fontSize: 12 }}>
                <div style={{ fontFamily: mlMono, fontSize: 11, color: ML.ink700 }}>{e.t}</div>
                <div>
                  <div style={{ fontFamily: mlMono, fontSize: 9, letterSpacing: '0.22em',
                    color: e.col }}>{e.lab}</div>
                  <div style={{ color: ML.ink, marginTop: 2 }}>{e.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MLShell>
  );
}

// ─────────────────────────────────────────────────────────────
// 4. DRONE FLEET
// ─────────────────────────────────────────────────────────────
function MLScreen4Fleet() {
  const fleet = [
    { id: 'AGX-DR-0412', sta: 'en-route', bat: 87, loc: 'Cascade · approach', eta: '3:42', tone: 'warning' },
    { id: 'AGX-DR-0198', sta: 'en-route', bat: 62, loc: 'Alpine Lakes · returning', eta: '8:16', tone: 'warning' },
    { id: 'AGX-DR-0344', sta: 'ready', bat: 98, loc: 'Cache #12 · Stevens Pass', eta: '—', tone: 'good' },
    { id: 'AGX-DR-0289', sta: 'ready', bat: 94, loc: 'Cache #08 · Snoqualmie', eta: '—', tone: 'good' },
    { id: 'AGX-DR-0156', sta: 'charging', bat: 42, loc: 'Cache #04 · Mount Baker', eta: '—', tone: 'default' },
    { id: 'AGX-DR-0121', sta: 'ready', bat: 96, loc: 'Cache #16 · Glacier Peak', eta: '—', tone: 'good' },
    { id: 'AGX-DR-0098', sta: 'maintenance', bat: 0, loc: 'Ops · Seattle', eta: '—', tone: 'default' },
    { id: 'AGX-DR-0067', sta: 'ready', bat: 88, loc: 'Cache #02 · Rainier', eta: '—', tone: 'good' },
  ];
  return (
    <MLShell active="drones" topbar={
      <div>
        <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.22em', color: ML.ink500 }}>FLEET · 18 TOTAL · 12 ONLINE</div>
        <div style={{ fontFamily: mlDisp, fontWeight: 600, fontSize: 18, color: ML.ink, marginTop: 2 }}>Drone fleet</div>
      </div>
    }>
      <div style={{ padding: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {fleet.map((d, i) => (
          <div key={i} style={{ background: ML.surface, border: `1px solid ${ML.line}`,
            borderRadius: 10, padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.2em',
                  color: ML.ink500 }}>{d.id}</div>
                <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 18,
                  color: ML.ink, marginTop: 4, textTransform: 'capitalize' }}>{d.sta}</div>
              </div>
              <MLChip tone={d.tone}>{d.sta.toUpperCase()}</MLChip>
            </div>

            {/* drone hex icon */}
            <svg viewBox="0 0 200 120" style={{ width: '100%', height: 100, marginTop: 10 }}>
              <g transform="translate(100 60)">
                <polygon points="-30,0 -15,-26 15,-26 30,0 15,26 -15,26" fill={ML.abyss}/>
                <polygon points="-22,0 -11,-19 11,-19 22,0 11,19 -11,19" fill="none" stroke={ML.slate} strokeWidth="0.5"/>
                {/* arms */}
                {[[0,-50],[44,-26],[44,26],[0,50],[-44,26],[-44,-26]].map(([x,y],k) => (
                  <g key={k}>
                    <line x1="0" y1="0" x2={x} y2={y} stroke={ML.slate} strokeWidth="2"/>
                    <circle cx={x} cy={y} r="8" fill={ML.abyss} stroke={ML.slate} strokeWidth="1"/>
                  </g>
                ))}
                <circle r="4" fill={d.tone === 'warning' ? ML.amber : ML.green}/>
              </g>
            </svg>

            <div style={{ marginTop: 6, padding: 12, background: ML.bg, borderRadius: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between',
                fontFamily: mlMono, fontSize: 10, letterSpacing: '0.18em', color: ML.ink500 }}>
                <span>BATTERY</span><span>{d.bat}%</span>
              </div>
              <div style={{ marginTop: 6, height: 4, borderRadius: 2, background: '#E3E9EF', overflow: 'hidden' }}>
                <div style={{ width: `${d.bat}%`, height: '100%',
                  background: d.bat < 50 ? ML.amber : ML.green }}/>
              </div>
              <div style={{ marginTop: 12, fontSize: 12, color: ML.ink700 }}>{d.loc}</div>
              {d.eta !== '—' && <div style={{ marginTop: 4, fontFamily: mlMono, fontSize: 11,
                letterSpacing: '0.14em', color: ML.amber }}>ETA {d.eta}</div>}
            </div>
          </div>
        ))}
      </div>
    </MLShell>
  );
}

// ─────────────────────────────────────────────────────────────
// 5. INCIDENT REPORT — post-event
// ─────────────────────────────────────────────────────────────
function MLScreen5Report() {
  return (
    <MLShell active="alerts" topbar={
      <div>
        <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.22em',
          color: ML.ink500 }}>INCIDENT #2026-0918-0412 · RESOLVED</div>
        <div style={{ fontFamily: mlDisp, fontWeight: 600, fontSize: 18,
          color: ML.ink, marginTop: 2 }}>Incident report · J. Chen</div>
      </div>
    }>
      <div style={{ padding: 32, maxWidth: 1100, margin: '0 auto' }}>
        {/* hero */}
        <div style={{ background: ML.surface, border: `1px solid ${ML.line}`,
          borderRadius: 10, padding: 28, display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32 }}>
          <div>
            <MLChip tone="good">RESOLVED · 00:34:12 total</MLChip>
            <div style={{ fontFamily: mlDisp, fontWeight: 700, fontSize: 34, color: ML.ink,
              marginTop: 16, letterSpacing: '-0.01em' }}>Hypothermia intervention.</div>
            <div style={{ fontFamily: mlDisp, fontWeight: 300, fontStyle: 'italic', fontSize: 34,
              color: ML.ink500, letterSpacing: '-0.01em' }}>Patient recovered.</div>
            <div style={{ marginTop: 16, fontSize: 14, color: ML.ink700, lineHeight: 1.6, maxWidth: 560 }}>
              Core temperature fell to <b>32.4°C</b> at 1842m elevation. Automated drone dispatch
              delivered hypothermia wrap in <b>3m 42s</b>. Patient self-reported recovery at 12:22.
              Ground extraction not required.
            </div>
          </div>
          <div style={{ borderLeft: `1px solid ${ML.line}`, paddingLeft: 28 }}>
            <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.22em',
              color: ML.ink500 }}>KEY METRICS</div>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div><div style={{ fontFamily: mlMono, fontSize: 9, letterSpacing: '0.2em',
                color: ML.ink500 }}>TIME TO DISPATCH</div>
                <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 28,
                  color: ML.ink }}>00:04<span style={{ fontSize: 12, color: ML.ink500, marginLeft: 4 }}>MM:SS</span></div></div>
              <div><div style={{ fontFamily: mlMono, fontSize: 9, letterSpacing: '0.2em',
                color: ML.ink500 }}>TIME TO DELIVERY</div>
                <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 28,
                  color: ML.amber }}>03:42</div></div>
              <div><div style={{ fontFamily: mlMono, fontSize: 9, letterSpacing: '0.2em',
                color: ML.ink500 }}>TIME TO RECOVERY</div>
                <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 28,
                  color: ML.green }}>34:12</div></div>
            </div>
          </div>
        </div>

        {/* two-col body */}
        <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div style={{ background: ML.surface, border: `1px solid ${ML.line}`,
            borderRadius: 10, padding: 20 }}>
            <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.22em',
              color: ML.ink500 }}>§ TIMELINE</div>
            {[
              { t: '11:42', lab: 'MILD ALERT', d: 'Core 35.2°C · haptic nudge', col: ML.amber },
              { t: '11:44', lab: 'SMS SENT', d: 'Next-of-kin contacted', col: ML.ink500 },
              { t: '11:46', lab: 'WARNING', d: 'Core 33.8°C · escalation queued', col: ML.amber },
              { t: '11:48', lab: 'CRITICAL', d: 'Core 32.4°C · auto-dispatch', col: ML.red },
              { t: '11:48', lab: 'DRONE ARM', d: 'AGX-DR-0412 launched', col: ML.amber },
              { t: '11:52', lab: 'DELIVERED', d: 'Payload landed · beacon active', col: ML.green },
              { t: '12:22', lab: 'RECOVERY', d: 'Core ≥ 35.5°C · self-resolved', col: ML.green },
            ].map((e, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '50px 8px 1fr',
                gap: 12, padding: '12px 0', borderTop: `1px solid ${ML.line}` }}>
                <div style={{ fontFamily: mlMono, fontSize: 11, color: ML.ink700, paddingTop: 3 }}>{e.t}</div>
                <div style={{ width: 8, height: 8, borderRadius: '50%', marginTop: 7, background: e.col }}/>
                <div>
                  <div style={{ fontFamily: mlMono, fontSize: 9, letterSpacing: '0.22em',
                    color: e.col }}>{e.lab}</div>
                  <div style={{ fontSize: 13, color: ML.ink, marginTop: 2 }}>{e.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: ML.surface, border: `1px solid ${ML.line}`,
            borderRadius: 10, padding: 20, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.22em',
                color: ML.ink500 }}>§ PATIENT RECORD</div>
              <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '120px 1fr',
                rowGap: 10, fontSize: 13 }}>
                <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.2em',
                  color: ML.ink500, paddingTop: 2 }}>NAME</div><div>Jordan Chen · 42</div>
                <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.2em',
                  color: ML.ink500, paddingTop: 2 }}>DEVICE</div><div style={{ fontFamily: mlMono, fontSize: 12 }}>AGX-J-0412 · FW 2.1.4</div>
                <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.2em',
                  color: ML.ink500, paddingTop: 2 }}>LOCATION</div><div>Cascade Loop · 1842m</div>
                <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.2em',
                  color: ML.ink500, paddingTop: 2 }}>CONDITIONS</div><div>−4°C · wind 6.4 m/s · overcast</div>
                <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.2em',
                  color: ML.ink500, paddingTop: 2 }}>NOK</div><div>Sarah Chen (spouse) · contacted 11:44</div>
              </div>
            </div>
            <div style={{ borderTop: `1px solid ${ML.line}`, paddingTop: 16 }}>
              <div style={{ fontFamily: mlMono, fontSize: 10, letterSpacing: '0.22em',
                color: ML.ink500 }}>§ ATTENDING</div>
              <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: ML.purple,
                  color: ML.glacier, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: mlDisp, fontWeight: 600, fontSize: 13 }}>MK</div>
                <div>
                  <div style={{ fontFamily: mlDisp, fontWeight: 500, fontSize: 14 }}>Dr. Maya Kovač</div>
                  <div style={{ fontSize: 11, color: ML.ink500 }}>Telemed SAR · PNW region</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 'auto' }}>
              <div style={{ padding: '10px 0', textAlign: 'center', border: `1px solid ${ML.line}`,
                borderRadius: 6, fontFamily: mlDisp, fontWeight: 500, fontSize: 12,
                letterSpacing: '0.14em' }}>EXPORT PDF</div>
              <div style={{ padding: '10px 0', textAlign: 'center', background: ML.ink,
                color: ML.glacier, borderRadius: 6, fontFamily: mlDisp, fontWeight: 500, fontSize: 12,
                letterSpacing: '0.14em' }}>CLOSE INCIDENT</div>
            </div>
          </div>
        </div>
      </div>
    </MLShell>
  );
}

Object.assign(window, {
  MLScreen1Overview, MLScreen2Patients, MLScreen3Detail, MLScreen4Fleet, MLScreen5Report,
});

// Ghost Trail — 5 screen components
// Uses the AEGIS Trek palette on-device: Abyss Core (#0A0E1A), Void Purple (#2D1B4E),
// Glacier Signal (#C8E8F0), Rescue Amber (#F5A623), Biometric Green (#4CAF82)

const AT = {
  abyss: '#0A0E1A',
  abyssUp: '#141A2A',
  void: '#2D1B4E',
  voidSoft: '#3E266B',
  slate: '#2F3B49',
  slateUp: '#3A4A5C',
  slate100: '#8FA0B2',
  glacier: '#C8E8F0',
  glacier700: '#6B8A94',
  amber: '#F5A623',
  green: '#4CAF82',
  divider: 'rgba(200,232,240,0.08)',
  dividerStrong: 'rgba(200,232,240,0.14)',
};

const fontDisplay = '"Chakra Petch", -apple-system, system-ui, sans-serif';
const fontMono = '"JetBrains Mono", ui-monospace, monospace';
const fontText = '-apple-system, "SF Pro", system-ui, sans-serif';

// Shared chrome — custom nav bar replacing default title
function GTChrome({ title, eyebrow, right = null, dark = true }) {
  return (
    <div style={{
      paddingTop: 62, padding: '62px 20px 14px', display: 'flex',
      alignItems: 'flex-end', justifyContent: 'space-between',
      borderBottom: `1px solid ${AT.divider}`,
    }}>
      <div>
        {eyebrow && (
          <div style={{
            fontFamily: fontMono, fontSize: 10, letterSpacing: '0.22em',
            color: AT.slate100, textTransform: 'uppercase', marginBottom: 6,
          }}>{eyebrow}</div>
        )}
        <div style={{
          fontFamily: fontDisplay, fontWeight: 600, fontSize: 24,
          color: AT.glacier, letterSpacing: '-0.01em',
        }}>{title}</div>
      </div>
      {right}
    </div>
  );
}

function GTPulse({ size = 44, color = AT.amber, pulse = true }) {
  // concentric contour ring mark
  return (
    <div style={{ width: size, height: size, position: 'relative',
      display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {pulse && <div style={{
        position: 'absolute', inset: 0, borderRadius: '50%',
        border: `1px solid ${color}`, opacity: 0.35,
        animation: 'gtPulse 2s ease-out infinite',
      }} />}
      <svg width={size * 0.7} height={size * 0.7} viewBox="-20 -20 40 40">
        <g fill="none" stroke={color} strokeWidth="1" opacity="0.35"><circle r="18"/></g>
        <g fill="none" stroke={color} strokeWidth="1" opacity="0.6"><circle r="13"/></g>
        <g fill="none" stroke={color} strokeWidth="1" opacity="0.9"><circle r="8"/></g>
        <circle r="3" fill={color}/>
      </svg>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 1. COMPANION HOME — on-trail dashboard
// ─────────────────────────────────────────────────────────────
function GTScreen1Companion() {
  return (
    <div style={{
      background: AT.abyss, height: '100%', display: 'flex', flexDirection: 'column',
      color: AT.glacier, fontFamily: fontText, position: 'relative', overflow: 'hidden',
    }}>
      {/* topographic bg */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.18 }}
        viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke={AT.slateUp} strokeWidth="0.5">
          <path d="M-50 240 Q100 210 200 240 T450 220"/>
          <path d="M-50 290 Q100 260 200 290 T450 270"/>
          <path d="M-50 340 Q100 310 200 340 T450 320"/>
          <path d="M-50 390 Q100 360 200 390 T450 370"/>
          <path d="M-50 440 Q100 410 200 440 T450 420"/>
          <path d="M-50 490 Q100 460 200 490 T450 470"/>
        </g>
      </svg>

      <GTChrome
        eyebrow="AGX-J-0412 · CONNECTED"
        title="On Trail"
        right={<div style={{
          width: 32, height: 32, borderRadius: '50%', background: AT.slate,
          border: `1px solid ${AT.slateUp}`, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontFamily: fontDisplay, fontSize: 13, color: AT.glacier,
        }}>AR</div>}
      />

      <div style={{ flex: 1, padding: '18px 20px 100px', position: 'relative', zIndex: 1, overflow: 'auto' }}>
        {/* elapsed / distance hero */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: 16, alignItems: 'center',
          padding: '22px 4px', borderBottom: `1px solid ${AT.divider}`,
        }}>
          <div>
            <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.2em',
              color: AT.slate100, textTransform: 'uppercase' }}>ELAPSED</div>
            <div style={{ fontFamily: fontDisplay, fontWeight: 500, fontSize: 40,
              color: AT.glacier, letterSpacing: '-0.02em', lineHeight: 1, marginTop: 6 }}>
              04:22<span style={{ fontSize: 18, color: AT.slate100, marginLeft: 2 }}>:18</span>
            </div>
          </div>
          <div style={{ height: 44, width: 1, background: AT.divider }} />
          <div>
            <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.2em',
              color: AT.slate100, textTransform: 'uppercase' }}>DISTANCE</div>
            <div style={{ fontFamily: fontDisplay, fontWeight: 500, fontSize: 40,
              color: AT.glacier, letterSpacing: '-0.02em', lineHeight: 1, marginTop: 6 }}>
              8.4<span style={{ fontSize: 18, color: AT.slate100, marginLeft: 4 }}>KM</span>
            </div>
          </div>
        </div>

        {/* biometric card */}
        <div style={{
          marginTop: 20, padding: 18, borderRadius: 14,
          background: 'rgba(45,27,78,0.35)', border: `1px solid ${AT.dividerStrong}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.22em',
              color: AT.slate100, textTransform: 'uppercase' }}>BIOMETRIC · LIVE</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: AT.green,
              fontFamily: fontMono, fontSize: 10, letterSpacing: '0.18em' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: AT.green,
                boxShadow: `0 0 8px ${AT.green}` }} />NORMAL
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
            {[
              { lab: 'CORE °C', val: '36.4', col: AT.green },
              { lab: 'HR BPM', val: '128', col: AT.glacier },
              { lab: 'SPO₂', val: '94%', col: AT.glacier },
            ].map(s => (
              <div key={s.lab}>
                <div style={{ fontFamily: fontMono, fontSize: 9, letterSpacing: '0.2em',
                  color: AT.slate100 }}>{s.lab}</div>
                <div style={{ fontFamily: fontDisplay, fontWeight: 500, fontSize: 24,
                  color: s.col, marginTop: 4 }}>{s.val}</div>
              </div>
            ))}
          </div>
          {/* hr sparkline */}
          <svg viewBox="0 0 320 40" style={{ width: '100%', marginTop: 10, height: 34 }}>
            <polyline fill="none" stroke={AT.green} strokeWidth="1.3" strokeLinecap="round"
              points="0,22 20,20 38,22 48,8 56,32 64,22 82,20 100,22 120,18 140,22 160,21
                      178,22 188,6 196,34 204,22 222,20 240,22 260,19 280,22 300,21 320,22"/>
          </svg>
        </div>

        {/* drone link */}
        <div style={{
          marginTop: 14, padding: '14px 16px', borderRadius: 14, display: 'flex',
          alignItems: 'center', gap: 14, background: AT.abyssUp, border: `1px solid ${AT.divider}`,
        }}>
          <GTPulse size={36} color={AT.glacier} pulse={false}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: fontDisplay, fontWeight: 500, fontSize: 15, color: AT.glacier }}>
              Drone cache · 2.1 km NE
            </div>
            <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.15em',
              color: AT.slate100, marginTop: 2 }}>ETA 3M 42S · STANDBY</div>
          </div>
          <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.18em',
            color: AT.green }}>◆ READY</div>
        </div>

        {/* waypoint list */}
        <div style={{ marginTop: 22 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 12 }}>
            <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.22em',
              color: AT.slate100, textTransform: 'uppercase' }}>§ ROUTE · CASCADE LOOP</div>
            <div style={{ fontFamily: fontMono, fontSize: 10, color: AT.glacier700 }}>3 / 7</div>
          </div>
          {[
            { t: 'Ridge junction', d: '0.4 km', done: true },
            { t: 'Talus crossing', d: '1.8 km', done: false, active: true },
            { t: 'Alpine tarn', d: '4.2 km', done: false },
          ].map((w, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14,
              padding: '12px 4px', borderTop: i === 0 ? `1px solid ${AT.divider}` : 'none',
              borderBottom: `1px solid ${AT.divider}` }}>
              <div style={{
                width: 10, height: 10, borderRadius: '50%',
                background: w.done ? AT.green : w.active ? AT.amber : 'transparent',
                border: `1px solid ${w.done ? AT.green : w.active ? AT.amber : AT.slate100}`,
                boxShadow: w.active ? `0 0 8px ${AT.amber}` : 'none',
              }} />
              <div style={{ flex: 1, fontSize: 15, color: w.active ? AT.glacier : AT.glacier700 }}>{w.t}</div>
              <div style={{ fontFamily: fontMono, fontSize: 11, color: AT.slate100 }}>{w.d}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SOS pill */}
      <div style={{
        position: 'absolute', bottom: 56, left: 20, right: 20, height: 56, borderRadius: 28,
        background: AT.amber, display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 10, boxShadow: `0 8px 24px rgba(245,166,35,0.35)`,
      }}>
        <svg width="16" height="16" viewBox="0 0 16 16"><path d="M8 1L1 14h14z" fill="none" stroke="#0A0E1A" strokeWidth="1.5"/><circle cx="8" cy="11" r="1" fill="#0A0E1A"/><rect x="7.3" y="5" width="1.4" height="4" fill="#0A0E1A"/></svg>
        <div style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 16,
          letterSpacing: '0.18em', color: AT.abyss }}>HOLD · 3S FOR SOS</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 2. ALERT — CRITICAL THERMAL EVENT
// ─────────────────────────────────────────────────────────────
function GTScreen2Alert() {
  return (
    <div style={{
      background: AT.amber, height: '100%', display: 'flex', flexDirection: 'column',
      color: AT.abyss, fontFamily: fontText, position: 'relative', overflow: 'hidden',
    }}>
      {/* pulsing corner markers */}
      <svg style={{ position: 'absolute', top: 56, left: 16 }} width="24" height="24">
        <path d="M0 12 V0 H12" stroke={AT.abyss} strokeWidth="2" fill="none"/></svg>
      <svg style={{ position: 'absolute', top: 56, right: 16 }} width="24" height="24">
        <path d="M12 0 H24 V12" stroke={AT.abyss} strokeWidth="2" fill="none"/></svg>

      <div style={{ paddingTop: 80, padding: '80px 24px 0', flex: 1, display: 'flex',
        flexDirection: 'column' }}>
        <div style={{ fontFamily: fontMono, fontSize: 11, letterSpacing: '0.3em',
          color: AT.abyss, textAlign: 'center' }}>◆ CRITICAL · AUTO-DISPATCH ENGAGED</div>

        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <div style={{ fontFamily: fontDisplay, fontWeight: 700, fontSize: 52, lineHeight: 0.95,
            letterSpacing: '-0.02em', color: AT.abyss }}>Core temp</div>
          <div style={{ fontFamily: fontDisplay, fontWeight: 300, fontStyle: 'italic',
            fontSize: 52, lineHeight: 0.95, letterSpacing: '-0.02em', color: AT.abyss }}>falling.</div>
        </div>

        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <div style={{ fontFamily: fontDisplay, fontWeight: 500, fontSize: 120, lineHeight: 1,
            color: AT.abyss, letterSpacing: '-0.04em' }}>
            32.4<span style={{ fontSize: 42 }}>°C</span>
          </div>
          <div style={{ fontFamily: fontMono, fontSize: 11, letterSpacing: '0.22em',
            marginTop: 8, color: AT.abyss, opacity: 0.75 }}>
            ↓ 0.8°C IN LAST 4 MIN
          </div>
        </div>

        {/* drone dispatch card */}
        <div style={{ marginTop: 40, background: AT.abyss, color: AT.glacier,
          borderRadius: 14, padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <div className="gt-strobe" style={{
              width: 10, height: 10, borderRadius: '50%', background: AT.amber,
              boxShadow: `0 0 10px ${AT.amber}`,
            }} />
            <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.22em',
              color: AT.amber, textTransform: 'uppercase' }}>DRONE DISPATCH · AGX-DR-0412</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <div style={{ fontFamily: fontMono, fontSize: 9, letterSpacing: '0.2em',
                color: AT.slate100 }}>ETA</div>
              <div style={{ fontFamily: fontDisplay, fontWeight: 500, fontSize: 30,
                color: AT.glacier, marginTop: 4 }}>
                3:42<span style={{ fontSize: 14, color: AT.slate100, marginLeft: 4 }}>MIN</span>
              </div>
            </div>
            <div>
              <div style={{ fontFamily: fontMono, fontSize: 9, letterSpacing: '0.2em',
                color: AT.slate100 }}>PAYLOAD</div>
              <div style={{ fontFamily: fontDisplay, fontWeight: 500, fontSize: 18,
                color: AT.glacier, marginTop: 10 }}>Hypothermia wrap</div>
            </div>
          </div>
          <div style={{ marginTop: 14, height: 4, borderRadius: 2, background: AT.slate,
            position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, width: '28%', background: AT.amber,
              boxShadow: `0 0 8px ${AT.amber}` }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8,
            fontFamily: fontMono, fontSize: 9, letterSpacing: '0.2em', color: AT.slate100 }}>
            <span>DISPATCHED</span><span>EN-ROUTE</span><span>APPROACH</span><span>DELIVERED</span>
          </div>
        </div>

        {/* instructions */}
        <div style={{ marginTop: 22, fontSize: 14, color: AT.abyss, opacity: 0.82, lineHeight: 1.5 }}>
          Find shelter. Remove wet layers. The drone will deploy a beacon overhead on arrival.
          <b style={{ display: 'block', marginTop: 6 }}>Stay conscious. Stay put.</b>
        </div>
      </div>

      {/* cancel button — less prominent */}
      <div style={{
        position: 'absolute', bottom: 56, left: 24, right: 24, display: 'grid',
        gridTemplateColumns: '1fr 1fr', gap: 10,
      }}>
        <div style={{ height: 52, borderRadius: 26, border: `1.5px solid ${AT.abyss}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: fontDisplay, fontWeight: 600, fontSize: 14, letterSpacing: '0.14em',
          color: AT.abyss }}>I'M OK · CANCEL</div>
        <div style={{ height: 52, borderRadius: 26, background: AT.abyss,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: fontDisplay, fontWeight: 600, fontSize: 14, letterSpacing: '0.14em',
          color: AT.amber }}>CALL RESCUE</div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 3. MAP — TRAIL + DRONE APPROACH
// ─────────────────────────────────────────────────────────────
function GTScreen3Map() {
  return (
    <div style={{
      background: AT.abyss, height: '100%', display: 'flex', flexDirection: 'column',
      color: AT.glacier, fontFamily: fontText, position: 'relative', overflow: 'hidden',
    }}>
      {/* map area */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <svg viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice"
          style={{ width: '100%', height: '100%' }}>
          <defs>
            <radialGradient id="mapG" cx="50%" cy="55%">
              <stop offset="0%" stopColor="#1A2236"/>
              <stop offset="100%" stopColor="#0A0E1A"/>
            </radialGradient>
          </defs>
          <rect width="400" height="800" fill="url(#mapG)"/>
          {/* topo contours */}
          <g fill="none" stroke={AT.slateUp} strokeWidth="0.7" opacity="0.5">
            <path d="M-40 260 Q80 220 180 260 T420 230"/>
            <path d="M-40 300 Q80 260 180 300 T420 270"/>
            <path d="M-40 340 Q80 300 180 340 T420 310"/>
            <path d="M-40 380 Q80 340 180 380 T420 350"/>
            <path d="M-40 420 Q80 380 180 420 T420 390"/>
            <path d="M-40 460 Q80 420 180 460 T420 430"/>
            <path d="M-40 500 Q80 460 180 500 T420 470"/>
            <path d="M-40 540 Q80 500 180 540 T420 510"/>
            <path d="M-40 580 Q80 540 180 580 T420 550"/>
          </g>
          {/* ridgeline */}
          <path d="M20 600 Q80 520 140 540 T260 460 L330 380"
                fill="none" stroke={AT.slate100} strokeWidth="1" opacity="0.55" strokeDasharray="1 2"/>
          {/* trail path */}
          <path d="M40 650 Q120 580 180 560 Q240 540 280 460"
                fill="none" stroke={AT.glacier} strokeWidth="2" strokeDasharray="3 4" opacity="0.85"/>
          {/* waypoint markers */}
          <circle cx="40" cy="650" r="5" fill={AT.green}/>
          <circle cx="180" cy="560" r="6" fill={AT.amber}/>
          <circle cx="180" cy="560" r="12" fill="none" stroke={AT.amber} opacity="0.4"/>
          <circle cx="280" cy="460" r="4" fill="none" stroke={AT.glacier} strokeWidth="1"/>
          {/* drone approach line */}
          <path d="M340 220 Q290 320 230 480 L190 555" fill="none" stroke={AT.amber}
            strokeWidth="1.3" strokeDasharray="1 3" opacity="0.85"/>
          {/* drone icon */}
          <g transform="translate(340 220)">
            <circle r="16" fill={AT.abyss} stroke={AT.amber} strokeWidth="1.2"/>
            <polygon points="0,-8 7,-2 7,4 0,10 -7,4 -7,-2" fill={AT.amber}/>
            <circle r="2" fill={AT.abyss}/>
          </g>
          {/* user position pulse */}
          <g transform="translate(180 560)">
            <circle r="22" fill={AT.amber} opacity="0.15"/>
          </g>
        </svg>
      </div>

      {/* top overlay */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <GTChrome eyebrow="CASCADE LOOP · TALUS CROSSING" title="Map"
          right={<div style={{
            width: 32, height: 32, borderRadius: '50%', background: AT.abyssUp,
            border: `1px solid ${AT.dividerStrong}`, display: 'flex',
            alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke={AT.glacier} strokeWidth="1.5">
              <circle cx="7" cy="7" r="5"/><circle cx="7" cy="7" r="1.5" fill={AT.glacier}/>
            </svg></div>}/>
      </div>

      {/* scale ruler */}
      <div style={{ position: 'absolute', left: 20, bottom: 200, zIndex: 2,
        display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 60, height: 2, background: AT.glacier }}/>
        <div style={{ fontFamily: fontMono, fontSize: 9, letterSpacing: '0.2em',
          color: AT.glacier }}>500 M</div>
      </div>

      {/* drone approach card (bottom sheet) */}
      <div style={{ position: 'absolute', left: 12, right: 12, bottom: 48, zIndex: 3,
        background: 'rgba(10,14,26,0.9)', backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: `1px solid ${AT.dividerStrong}`, borderRadius: 18, padding: 18 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <GTPulse size={28} color={AT.amber}/>
            <div>
              <div style={{ fontFamily: fontDisplay, fontWeight: 500, fontSize: 15, color: AT.glacier }}>
                AGX-DR-0412 · approaching
              </div>
              <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.15em',
                color: AT.amber }}>◆ 340M · 48S</div>
            </div>
          </div>
          <div style={{ fontFamily: fontDisplay, fontWeight: 500, fontSize: 22,
            color: AT.glacier }}>N 47°36'</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, fontFamily: fontMono,
          fontSize: 10, letterSpacing: '0.18em', color: AT.slate100, paddingTop: 12,
          borderTop: `1px solid ${AT.divider}` }}>
          <div><div>ALT</div><div style={{ color: AT.glacier, fontFamily: fontDisplay,
            fontSize: 18, marginTop: 3 }}>1842 M</div></div>
          <div><div>BEARING</div><div style={{ color: AT.glacier, fontFamily: fontDisplay,
            fontSize: 18, marginTop: 3 }}>042°</div></div>
          <div><div>WIND</div><div style={{ color: AT.glacier, fontFamily: fontDisplay,
            fontSize: 18, marginTop: 3 }}>6.4 M/S</div></div>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 4. DEVICE PAIRING — BLE connection
// ─────────────────────────────────────────────────────────────
function GTScreen4Pair() {
  return (
    <div style={{
      background: AT.void, height: '100%', display: 'flex', flexDirection: 'column',
      color: AT.glacier, fontFamily: fontText, position: 'relative', overflow: 'hidden',
    }}>
      {/* ambient glow */}
      <div style={{ position: 'absolute', inset: 0, background:
        'radial-gradient(ellipse at 50% 42%, rgba(200,232,240,0.15), transparent 55%)' }}/>

      <GTChrome eyebrow="STEP 02 / 04" title="Pair your jacket"/>

      <div style={{ flex: 1, padding: '18px 24px 100px', position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <p style={{ color: AT.glacier700, fontSize: 15, lineHeight: 1.5,
          textAlign: 'center', maxWidth: 280, marginTop: 8 }}>
          Hold your phone near the BLE porthole on the jacket's inner chest.
        </p>

        {/* jacket silhouette with porthole */}
        <div style={{ width: 240, height: 280, marginTop: 32, position: 'relative' }}>
          <svg viewBox="0 0 240 280" width="100%" height="100%">
            <defs>
              <radialGradient id="jkt" cx="50%" cy="40%">
                <stop offset="0%" stopColor={AT.voidSoft}/>
                <stop offset="100%" stopColor={AT.void}/>
              </radialGradient>
            </defs>
            <path d="M50 80 Q70 40 120 30 Q170 40 190 80 L200 130 L180 140 L180 260 L60 260 L60 140 L40 130 Z"
              fill="url(#jkt)" stroke={AT.slateUp} strokeWidth="1"/>
            {/* zipper */}
            <line x1="120" y1="60" x2="120" y2="260" stroke={AT.abyss} strokeWidth="2"/>
            <line x1="120" y1="60" x2="120" y2="260" stroke={AT.slate100} strokeWidth="0.4" strokeDasharray="3 3"/>
            {/* porthole */}
            <g transform="translate(90 130)">
              <circle r="22" fill={AT.abyss} stroke={AT.glacier} strokeWidth="1.3"/>
              <circle r="18" fill="#141A2A"/>
              <circle r="3" fill={AT.green}/>
              <circle r="14" fill="none" stroke={AT.green} strokeWidth="0.5" opacity="0.5"/>
              <circle r="22" fill="none" stroke={AT.glacier} strokeWidth="0.6" opacity="0.6">
                <animate attributeName="r" values="22;36;22" dur="2s" repeatCount="indefinite"/>
                <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
              </circle>
            </g>
          </svg>
        </div>

        {/* signal strength */}
        <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 22 }}>
            <div style={{ width: 4, height: 8, background: AT.green }}/>
            <div style={{ width: 4, height: 12, background: AT.green }}/>
            <div style={{ width: 4, height: 16, background: AT.green }}/>
            <div style={{ width: 4, height: 20, background: AT.green }}/>
            <div style={{ width: 4, height: 22, background: AT.green, opacity: 0.4 }}/>
          </div>
          <div style={{ fontFamily: fontMono, fontSize: 11, letterSpacing: '0.22em',
            color: AT.green, textTransform: 'uppercase' }}>STRONG LINK · -42 dBm</div>
        </div>

        <div style={{ marginTop: 32, fontFamily: fontDisplay, fontWeight: 500, fontSize: 22,
          color: AT.glacier, textAlign: 'center' }}>AGX-J-0412</div>
        <div style={{ marginTop: 4, fontFamily: fontMono, fontSize: 10, letterSpacing: '0.2em',
          color: AT.slate100, textAlign: 'center' }}>FIRMWARE 2.1.4 · BATTERY 87%</div>
      </div>

      {/* CTA */}
      <div style={{
        position: 'absolute', bottom: 56, left: 24, right: 24, height: 52,
        borderRadius: 26, background: AT.glacier, color: AT.abyss,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: fontDisplay, fontWeight: 600, fontSize: 15, letterSpacing: '0.14em',
      }}>CONFIRM PAIRING</div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// 5. TRIP SUMMARY — post-hike
// ─────────────────────────────────────────────────────────────
function GTScreen5Summary() {
  return (
    <div style={{
      background: AT.abyss, height: '100%', display: 'flex', flexDirection: 'column',
      color: AT.glacier, fontFamily: fontText, position: 'relative', overflow: 'hidden',
    }}>
      <GTChrome eyebrow="TRIP · SEP 14 · 06:12 → 11:48" title="Cascade Loop"/>

      <div style={{ flex: 1, padding: '20px 20px 40px', overflow: 'auto' }}>
        {/* elevation profile */}
        <div style={{ borderRadius: 14, border: `1px solid ${AT.dividerStrong}`,
          padding: 16, background: AT.abyssUp }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginBottom: 10 }}>
            <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.22em',
              color: AT.slate100 }}>ELEVATION · M</div>
            <div style={{ fontFamily: fontDisplay, fontSize: 13, color: AT.glacier700 }}>+840 M · -812 M</div>
          </div>
          <svg viewBox="0 0 340 110" style={{ width: '100%', height: 120 }}>
            <defs>
              <linearGradient id="elevG" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={AT.glacier} stopOpacity="0.4"/>
                <stop offset="100%" stopColor={AT.glacier} stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0 90 L20 82 L45 74 L80 52 L110 40 L140 30 L170 20
                     L200 28 L230 44 L260 58 L290 72 L320 86 L340 88 L340 110 L0 110 Z"
                  fill="url(#elevG)"/>
            <path d="M0 90 L20 82 L45 74 L80 52 L110 40 L140 30 L170 20
                     L200 28 L230 44 L260 58 L290 72 L320 86 L340 88"
                  fill="none" stroke={AT.glacier} strokeWidth="1.3"/>
            {/* peak marker */}
            <circle cx="170" cy="20" r="3" fill={AT.amber}/>
            <line x1="170" y1="0" x2="170" y2="20" stroke={AT.amber} strokeWidth="0.7" strokeDasharray="2 2"/>
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4,
            fontFamily: fontMono, fontSize: 9, letterSpacing: '0.15em', color: AT.slate100 }}>
            <span>0 KM</span><span>PEAK · 1842M</span><span>12.6 KM</span>
          </div>
        </div>

        {/* stats grid */}
        <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { lab: 'DISTANCE', val: '12.6', unit: 'KM', col: AT.glacier },
            { lab: 'MOVING TIME', val: '5:36', unit: 'HR', col: AT.glacier },
            { lab: 'AVG CORE', val: '36.5', unit: '°C', col: AT.green },
            { lab: 'PEAK HR', val: '164', unit: 'BPM', col: AT.amber },
          ].map(s => (
            <div key={s.lab} style={{ padding: 14, borderRadius: 12, background: AT.abyssUp,
              border: `1px solid ${AT.divider}` }}>
              <div style={{ fontFamily: fontMono, fontSize: 9, letterSpacing: '0.2em',
                color: AT.slate100 }}>{s.lab}</div>
              <div style={{ marginTop: 6, display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <div style={{ fontFamily: fontDisplay, fontWeight: 500, fontSize: 30,
                  color: s.col }}>{s.val}</div>
                <div style={{ fontFamily: fontMono, fontSize: 11, letterSpacing: '0.15em',
                  color: AT.slate100 }}>{s.unit}</div>
              </div>
            </div>
          ))}
        </div>

        {/* event log */}
        <div style={{ marginTop: 22 }}>
          <div style={{ fontFamily: fontMono, fontSize: 10, letterSpacing: '0.22em',
            color: AT.slate100, textTransform: 'uppercase', marginBottom: 10 }}>§ EVENT LOG</div>
          {[
            { t: '06:12', c: AT.green, lab: 'TRIP STARTED', d: 'Trailhead · Cascade Loop'},
            { t: '08:04', c: AT.glacier, lab: 'WAYPOINT', d: 'Talus crossing reached'},
            { t: '09:22', c: AT.amber, lab: 'MILD ALERT', d: 'Core drop 35.8°C · resolved 3m'},
            { t: '09:47', c: AT.glacier, lab: 'WAYPOINT', d: 'Alpine tarn · peak 1842m'},
            { t: '11:48', c: AT.green, lab: 'TRIP ENDED', d: 'Safely returned'},
          ].map((e, i) => (
            <div key={i} style={{ display: 'grid',
              gridTemplateColumns: '50px 10px 1fr', gap: 12, padding: '10px 0',
              borderTop: i === 0 ? `1px solid ${AT.divider}` : 'none',
              borderBottom: `1px solid ${AT.divider}` }}>
              <div style={{ fontFamily: fontMono, fontSize: 11, color: AT.slate100, paddingTop: 2 }}>{e.t}</div>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: e.c,
                marginTop: 6, boxShadow: `0 0 6px ${e.c}` }}/>
              <div>
                <div style={{ fontFamily: fontMono, fontSize: 9, letterSpacing: '0.2em',
                  color: e.c }}>{e.lab}</div>
                <div style={{ fontSize: 14, color: AT.glacier, marginTop: 2 }}>{e.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 30, height: 44, borderRadius: 22, border: `1px solid ${AT.glacier}`,
          color: AT.glacier, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: fontDisplay, fontWeight: 500, fontSize: 13, letterSpacing: '0.18em' }}>
          EXPORT TO MEDLINK
        </div>
      </div>
    </div>
  );
}

Object.assign(window, {
  GTScreen1Companion, GTScreen2Alert, GTScreen3Map, GTScreen4Pair, GTScreen5Summary,
});

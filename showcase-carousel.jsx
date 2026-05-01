const { useState, useEffect } = React;

function ShowcaseCarousel({ title, subtitle, screens, isMobile }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, screens.length]);

  const next = () => setCurrentIndex(i => (i + 1) % screens.length);
  const prev = () => setCurrentIndex(i => (i - 1 + screens.length) % screens.length);

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0C10',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Inter, sans-serif',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Background Glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: '80vw', height: '80vh', background: 'radial-gradient(circle, rgba(255,94,26,0.08) 0%, rgba(10,12,16,0) 70%)',
        pointerEvents: 'none', zIndex: 0
      }}></div>

      {/* Header */}
      <div style={{ padding: '40px 60px', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ color: '#FF5E1A', fontSize: 13, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 12, fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>{subtitle}</div>
          <h1 style={{ margin: 0, fontSize: 36, fontWeight: 700, letterSpacing: '-0.02em', fontFamily: 'Rajdhani, sans-serif' }}>{title}</h1>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button onClick={prev} style={btnStyle} onMouseOver={e => e.currentTarget.style.borderColor = '#FF5E1A'} onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}>← Prev</button>
          <button onClick={next} style={btnStyle} onMouseOver={e => e.currentTarget.style.borderColor = '#FF5E1A'} onMouseOut={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}>Next →</button>
        </div>
      </div>

      {/* Carousel Track */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        perspective: '2500px',
        zIndex: 5
      }}>
        {screens.map((screen, i) => {
          let offset = i - currentIndex;
          // Wrap around logic for infinite feel
          if (offset < -Math.floor(screens.length/2)) offset += screens.length;
          if (offset > Math.floor(screens.length/2)) offset -= screens.length;
          
          const absOffset = Math.abs(offset);
          const isActive = offset === 0;
          
          let translateX = offset * (isMobile ? 380 : 1000);
          let translateZ = absOffset * -500;
          let rotateY = offset * -25;
          let opacity = absOffset > 2 ? 0 : 1 - (absOffset * 0.4);
          
          // Use smaller scale to make sure it fits on normal monitors
          const scale = isMobile ? 0.75 : 0.6; 

          return (
            <div key={i} onClick={() => setCurrentIndex(i)} style={{
              position: 'absolute',
              transition: 'all 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)',
              transform: `translate(-50%, -50%) translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
              left: '50%',
              top: '50%',
              opacity,
              zIndex: 10 - absOffset,
              cursor: isActive ? 'default' : 'pointer',
              filter: isActive ? 'none' : 'brightness(0.3) contrast(1.2)',
            }}>
              <div style={{ 
                boxShadow: isActive ? '0 30px 100px rgba(0,0,0,0.8), 0 0 80px rgba(255,94,26,0.15)' : '0 20px 50px rgba(0,0,0,0.5)',
                borderRadius: isMobile ? 50 : 16,
                overflow: 'hidden',
                background: '#05080F',
                border: isActive ? '2px solid rgba(255,255,255,0.1)' : '2px solid transparent',
              }}>
                {screen.component}
              </div>
              <div style={{
                textAlign: 'center',
                marginTop: 40,
                opacity: isActive ? 1 : 0,
                transition: 'opacity 0.6s',
                color: '#fff',
                fontSize: 24,
                fontWeight: 600,
                fontFamily: 'Rajdhani, sans-serif',
                letterSpacing: '0.05em'
              }}>
                {screen.label}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Dots */}
      <div style={{ padding: '40px', display: 'flex', justifyContent: 'center', gap: 16, zIndex: 10 }}>
        {screens.map((_, i) => (
          <button key={i} onClick={() => setCurrentIndex(i)} style={{
            width: i === currentIndex ? 32 : 12, height: 12, borderRadius: 12, border: 'none',
            background: i === currentIndex ? '#FF5E1A' : 'rgba(255,255,255,0.2)',
            cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)'
          }} />
        ))}
      </div>
    </div>
  );
}

const btnStyle = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff',
  padding: '14px 28px',
  borderRadius: 30,
  cursor: 'pointer',
  fontFamily: 'Inter, sans-serif',
  fontWeight: 600,
  transition: 'all 0.2s',
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  fontSize: 12
};

'use client';

const highlights = [
  { icon:'🎯', title:'Research-First Scripts', desc:'Every creative starts with audience intel — what they fear, desire, and believe. We script before we design.' },
  { icon:'📱', title:'UGC-Style + Polished Hybrid', desc:'Native-feeling content that blends authenticity with professional execution. Stops thumbs. Starts sales.' },
  { icon:'🧪', title:'Tested Variants — Never Single Bets', desc:'We run 5–10 variations per concept. Winners get scaled. Losers die fast. No wasted budget.' },
];

export default function Creative() {
  return (
    <section id="creative" className="section mesh-bg">
      <div className="ambient-orb" style={{ width:500, height:500, background:'rgba(0,255,157,0.06)', top:'5%', right:'-8%', animationDelay:'-4s' }} />
      <div className="ambient-orb" style={{ width:400, height:400, background:'rgba(45,140,255,0.08)', bottom:'-5%', left:'0', animationDelay:'-11s' }} />

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:80, alignItems:'center' }} className="creative-grid">

          {/* Left */}
          <div className="reveal-left">
            <div className="eyebrow">Creative Strategy</div>
            <h2 className="section-title" style={{ marginBottom:20 }}>
              Creatives That{' '}
              <span className="gradient-text">Stop the Scroll</span>
            </h2>
            <p style={{ color:'var(--color-text-muted)', fontSize:'1rem', lineHeight:1.75, marginBottom:36 }}>
              We don't guess what works. We research, script, design, and test — then scale only the winners.
              Most agencies make one "perfect" ad. We make data-driven creative <em>systems</em>.
            </p>
            <div style={{ display:'flex', flexDirection:'column', gap:22 }}>
              {highlights.map((h, i) => (
                <div key={i} style={{ display:'flex', gap:16, alignItems:'flex-start' }}>
                  <div style={{ width:46, height:46, background:'rgba(45,140,255,0.10)', border:'1px solid rgba(45,140,255,0.25)', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.3rem', flexShrink:0 }}>{h.icon}</div>
                  <div>
                    <div style={{ fontFamily:'var(--font-heading)', fontWeight:700, color:'white', marginBottom:4, fontSize:'0.95rem' }}>{h.title}</div>
                    <p style={{ color:'var(--color-text-muted)', fontSize:'0.88rem', lineHeight:1.65 }}>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="reveal-right" style={{ display:'flex', justifyContent:'center' }}>
            <div
              style={{ width:300, background:'rgba(13,27,56,0.6)', border:'1px solid rgba(45,140,255,0.2)', borderRadius:36, padding:10, boxShadow:'0 24px 80px rgba(45,140,255,0.2)', transition:'transform 0.35s ease, box-shadow 0.35s ease', position:'relative' }}
              onMouseEnter={e => { e.currentTarget.style.transform='scale(1.04) rotate(1deg)'; e.currentTarget.style.boxShadow='0 32px 100px rgba(45,140,255,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='scale(1) rotate(0)'; e.currentTarget.style.boxShadow='0 24px 80px rgba(45,140,255,0.2)'; }}
            >
              <div style={{ borderRadius:28, overflow:'hidden', background:'#000814', aspectRatio:'9/16', display:'flex', flexDirection:'column' }}>
                {/* Status bar */}
                <div style={{ height:28, background:'rgba(0,0,0,0.6)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                  <div style={{ width:60, height:8, background:'rgba(255,255,255,0.08)', borderRadius:8 }} />
                </div>
                {/* Ad content */}
                <div style={{ flex:1, background:'linear-gradient(160deg, #030d1e 0%, #080818 100%)', display:'flex', flexDirection:'column', justifyContent:'flex-end', padding:16, position:'relative' }}>
                  {/* Metric display */}
                  <div style={{ position:'absolute', top:16, left:16, right:16, height:'45%', background:'linear-gradient(135deg, rgba(45,140,255,0.25), rgba(0,255,157,0.12))', borderRadius:12, display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid rgba(45,140,255,0.2)' }}>
                    <span style={{ fontFamily:'var(--font-mono)', fontSize:'2rem', fontWeight:700, color:'var(--color-green)', textShadow:'0 0 24px rgba(0,255,157,0.5)' }}>3.8×</span>
                  </div>
                  {/* Bar chart */}
                  <div style={{ position:'absolute', top:'52%', left:16, right:16, display:'flex', alignItems:'flex-end', gap:4, height:44 }}>
                    {[30,48,38,62,55,74,90].map((h, i) => (
                      <div key={i} style={{ flex:1, height:`${h}%`, background:`rgba(45,140,255,${0.3+i*0.09})`, borderRadius:'3px 3px 0 0' }} />
                    ))}
                  </div>
                  {/* Ad block */}
                  <div style={{ background:'rgba(0,5,20,0.85)', borderRadius:14, padding:'12px 14px' }}>
                    <div style={{ fontSize:'0.65rem', color:'var(--color-accent)', fontFamily:'var(--font-mono)', marginBottom:5, letterSpacing:'0.1em' }}>SPONSORED · META ADS</div>
                    <div style={{ fontFamily:'var(--font-heading)', fontWeight:800, fontSize:'0.82rem', color:'white', marginBottom:10, lineHeight:1.3 }}>Stop wasting budget.<br/>Get 3× ROAS in 60 Days.</div>
                    <div style={{ display:'inline-block', padding:'5px 16px', background:'var(--gradient-cta)', borderRadius:8, fontSize:'0.72rem', fontWeight:700, color:'white', boxShadow:'var(--glow-blue)' }}>Learn More →</div>
                  </div>
                </div>
              </div>
              {/* Outer glow ring */}
              <div style={{ position:'absolute', inset:-20, borderRadius:60, background:'radial-gradient(circle, rgba(45,140,255,0.10) 0%, transparent 70%)', zIndex:-1 }} />
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.creative-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </section>
  );
}

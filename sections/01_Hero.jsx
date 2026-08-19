'use client';
import { useEffect, useState } from 'react';
import { MetaIcon, TikTokIcon, WhatsAppIcon } from '@/components/icons';
import AmbientOrb from '@/components/ui/AmbientOrb';
import WhatsAppLink from '@/components/ui/WhatsAppLink';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Word-by-word H1 animation
    const h1 = document.querySelector('.hero-h1');
    if (h1) {
      const words = h1.getAttribute('data-text').split(' ');
      h1.innerHTML = words.map((word, i) =>
        `<span class="hero-word" style="opacity:0;transform:translateY(24px) rotateX(-12deg);display:inline-block;margin-right:0.22em;transition:opacity 0.55s ease ${i*0.07+0.3}s,transform 0.55s ease ${i*0.07+0.3}s;transform-origin:bottom">${word}</span>`
      ).join('');
      // Double RAF: first frame paints opacity:0, second triggers the transition
      requestAnimationFrame(() => requestAnimationFrame(() => {
        h1.querySelectorAll('.hero-word').forEach(w => {
          w.style.opacity = '1';
          w.style.transform = 'translateY(0) rotateX(0)';
        });
      }));
    }
  }, []);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 100,
      paddingBottom: 80,
      background: 'radial-gradient(ellipse at 15% 50%, rgba(45,140,255,0.13) 0%, transparent 55%), radial-gradient(ellipse at 85% 15%, rgba(0,255,157,0.06) 0%, transparent 50%), radial-gradient(ellipse at 50% 90%, rgba(10,31,68,0.4) 0%, transparent 55%), #000000',
    }}>
      {/* Ambient orbs */}
      <AmbientOrb size={700} style={{ background:'rgba(45,140,255,0.10)', top:'-250px', left:'-200px', animationDuration:'18s' }} />
      <AmbientOrb size={550} style={{ background:'rgba(0,255,157,0.06)', top:'5%', right:'-150px', animationDelay:'-7s', animationDuration:'16s' }} />
      <AmbientOrb size={400} style={{ background:'rgba(10,31,68,0.5)', bottom:'5%', left:'25%', animationDelay:'-3s' }} />

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:64, alignItems:'center' }} className="hero-grid">

          {/* LEFT — Copy */}
          <div>
            <div style={{ opacity:0, animation:'fade-in 0.5s ease 0.1s forwards' }}>
              <div className="eyebrow">Meta Ads · TikTok Ads · Bangladesh</div>
            </div>

            {/* H1 — Playfair Display */}
            <h1
              className="hero-h1"
              data-text="Turn Clicks Into Customers."
              style={{
                fontSize: 'var(--text-hero)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                marginBottom: 24,
              }}
            >
              Turn Clicks Into Customers.
            </h1>

            {/* Subtitle — Inter */}
            <p style={{
              fontSize:'1.15rem',
              fontFamily:'var(--font-body)',
              fontWeight:400,
              color:'var(--color-text-muted)',
              lineHeight:1.75,
              maxWidth:480,
              marginBottom:36,
              opacity:0,
              animation:'slide-up 0.6s ease 0.6s forwards',
            }}>
              Data-backed Meta and TikTok ad campaigns that actually convert.{' '}
              <span style={{ color:'var(--color-accent)', fontWeight:600 }}>Stop guessing.</span>{' '}
              Start scaling.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group" style={{ display:'flex', gap:14, flexWrap:'wrap', opacity:0, animation:'slide-up 0.6s ease 0.8s forwards' }}>
              <WhatsAppLink className="btn-primary" id="hero-cta">
                <WhatsAppIcon size={18} /> Start Scaling on WhatsApp ↗
              </WhatsAppLink>
              <a href="#stats" className="btn-ghost">See Our Results ↓</a>
            </div>

            {/* Brand layers */}
            <div style={{ marginTop:48, display:'flex', gap:6, flexWrap:'wrap', opacity:0, animation:'fade-in 0.7s ease 1.3s forwards' }}>
              {[
                { name:'Noyon', sub:'Personal Brand' },
                { name:'Boostify', sub:'Ad Services', accent: true },
                { name:'Naviro', sub:'Data Systems', faint: true },
              ].map(l => (
                <div key={l.name} style={{
                  padding:'5px 14px',
                  borderRadius:20,
                  background: l.accent ? 'rgba(45,140,255,0.12)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${l.accent ? 'rgba(45,140,255,0.3)' : 'rgba(255,255,255,0.08)'}`,
                  fontSize:'0.72rem',
                  fontFamily:'var(--font-mono)',
                  color: l.faint ? 'var(--color-text-faint)' : l.accent ? 'var(--color-accent)' : 'var(--color-text-muted)',
                }}>
                  <span style={{ fontWeight:700 }}>{l.name}</span>
                  <span style={{ opacity:0.6, marginLeft:4 }}>·{l.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Premium DOM Brand Visual (Zero Lag, Easy to Understand) */}
          <div style={{ position:'relative', height:540, display:'flex', alignItems:'center', justifyContent:'center', perspective:'1200px' }} className="hero-visual">
            <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center' }}>
              <div style={{ width:400, height:400, borderRadius:'50%', background:'radial-gradient(circle, rgba(45,140,255,0.12) 0%, transparent 70%)', animation:'float-slow 7s ease-in-out infinite' }} />
            </div>

            {/* Central Main Dashboard Card */}
            <div 
              style={{ 
                width: 420, 
                backgroundColor: 'rgba(13,27,56,0.65)', 
                backdropFilter: 'blur(24px)', 
                border: '1px solid rgba(45,140,255,0.3)', 
                borderRadius: 24, 
                padding: '32px',
                boxShadow: '0 32px 80px rgba(10,31,68,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)',
                transform: 'rotateY(-12deg) rotateX(8deg)',
                animation: 'float 6s ease-in-out infinite',
                position: 'relative',
                zIndex: 10
              }}
            >
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom: 32 }}>
                <div>
                  <div style={{ fontSize:'0.75rem', fontFamily:'var(--font-mono)', color:'var(--color-text-muted)', letterSpacing:'0.05em', marginBottom:4 }}>CAMPAIGN PERFORMANCE</div>
                  <div style={{ fontSize:'2.8rem', fontFamily:'var(--font-heading)', fontWeight:800, color:'white', lineHeight:1 }}>3.8<span style={{ color:'var(--color-accent)', fontSize:'2rem' }}>x</span></div>
                  <div style={{ fontSize:'0.85rem', color:'var(--color-green)', fontWeight:600, display:'flex', alignItems:'center', gap:4, marginTop:4 }}>
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg>
                    Average ROAS
                  </div>
                </div>
                <div style={{ background:'rgba(45,140,255,0.1)', border:'1px solid rgba(45,140,255,0.2)', padding:'6px 12px', borderRadius:20, color:'var(--color-accent)', fontSize:'0.75rem', fontWeight:600 }}>Active</div>
              </div>

              {/* Minimalist Graph */}
              <div style={{ height: 120, position:'relative', display:'flex', alignItems:'flex-end', gap:8, borderBottom:'1px solid rgba(45,140,255,0.15)' }}>
                {[30, 42, 35, 55, 48, 70, 92].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 6 ? 'linear-gradient(to top, var(--color-accent), var(--color-green))' : 'rgba(45,140,255,0.2)', borderRadius:'4px 4px 0 0', position:'relative', transition:'height 1s ease' }}>
                    {i === 6 && <div style={{ position:'absolute', top:-8, left:'50%', transform:'translateX(-50%)', width:8, height:8, borderRadius:'50%', background:'var(--color-green)', boxShadow:'0 0 12px var(--color-green)' }} />}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Meta Ad Card */}
            <div 
              style={{ 
                position: 'absolute', 
                top: 40, 
                right: -20, 
                background: 'rgba(10,31,68,0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(45,140,255,0.25)',
                padding: '16px',
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                transform: 'rotateY(-10deg)',
                animation: 'float 5s ease-in-out infinite alternate',
                animationDelay: '1s',
                boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
                zIndex: 20
              }}
            >
              <div style={{ width:40, height:40, background:'#1877F2', borderRadius:10, display:'flex', alignItems:'center', justifyContent:'center', color:'white' }}>
                <MetaIcon size={24} />
              </div>
              <div>
                <div style={{ color:'white', fontWeight:700, fontSize:'0.9rem' }}>Meta Lead Gen</div>
                <div style={{ color:'var(--color-green)', fontSize:'0.8rem', fontWeight:600 }}>CPA Dropped 62%</div>
              </div>
            </div>

            {/* Floating TikTok Card */}
            <div 
              style={{ 
                position: 'absolute', 
                bottom: 80, 
                left: -30, 
                background: 'rgba(10,31,68,0.85)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0,255,157,0.25)',
                padding: '16px 20px',
                borderRadius: 16,
                transform: 'rotateY(-15deg)',
                animation: 'float 7s ease-in-out infinite alternate',
                animationDelay: '0.5s',
                boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
                zIndex: 20
              }}
            >
               <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8 }}>
                  <div style={{ width:28, height:28, background:'black', borderRadius:6, display:'flex', alignItems:'center', justifyContent:'center', color:'white' }}>
                    <TikTokIcon size={16} />
                  </div>
                  <div style={{ color:'white', fontWeight:700, fontSize:'0.85rem' }}>TikTok Conversions</div>
               </div>
               <div style={{ fontSize:'1.4rem', fontFamily:'var(--font-heading)', fontWeight:800, color:'white', lineHeight:1 }}>+240%</div>
               <div style={{ color:'var(--color-text-muted)', fontSize:'0.75rem', marginTop:2 }}>Revenue Growth</div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile stat strip — shows instead of visual on small screens */}
      <div className="hero-stat-strip" style={{
        display: 'none',
        gap: 0,
        margin: '28px 24px 0',
        border: '1px solid rgba(45,140,255,0.18)',
        borderRadius: 12,
        overflow: 'hidden',
        background: 'rgba(13,27,56,0.6)',
        backdropFilter: 'blur(12px)',
      }}>
        {[
          { n: '3.8×', l: 'Avg ROAS', c: 'var(--color-accent)' },
          { n: '62%', l: 'CPA Drop', c: 'var(--color-green)' },
          { n: '+240%', l: 'Revenue', c: 'var(--color-accent)' },
        ].map((s, i) => (
          <div key={s.l} style={{
            flex: 1, padding: '14px 10px', textAlign: 'center',
            borderRight: i < 2 ? '1px solid rgba(45,140,255,0.12)' : 'none',
          }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: '1.2rem', color: s.c, lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontSize: '0.65rem', color: 'var(--color-text-faint)', marginTop: 3 }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* Scroll cue */}
      <div style={{ position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:6, color:'var(--color-text-faint)', fontSize:'0.72rem', fontFamily:'var(--font-mono)', opacity:0, animation:'fade-in 1s ease 1.8s forwards' }}>
        <span style={{ letterSpacing:'0.1em' }}>SCROLL</span>
        <div style={{ width:1, height:36, background:'linear-gradient(to bottom, var(--color-accent), transparent)', animation:'float 2s ease-in-out infinite' }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .hero-visual { height: 340px !important; margin-top: 0; transform: scale(0.8); transform-origin: center top; overflow: hidden; }
        }
        @media (max-width: 640px) {
          .hero-visual { transform: scale(0.72); transform-origin: center top; }
        }
      `}</style>
    </section>
  );
}


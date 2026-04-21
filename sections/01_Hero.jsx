'use client';
import { useEffect, useState } from 'react';
import siteConfig from '@/config/site.config';

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
      requestAnimationFrame(() => {
        h1.querySelectorAll('.hero-word').forEach(w => {
          w.style.opacity = '1';
          w.style.transform = 'translateY(0) rotateX(0)';
        });
      });
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
      <div className="ambient-orb" style={{ width:700, height:700, background:'rgba(45,140,255,0.10)', top:'-250px', left:'-200px', animationDuration:'18s' }} />
      <div className="ambient-orb" style={{ width:550, height:550, background:'rgba(0,255,157,0.06)', top:'5%', right:'-150px', animationDelay:'-7s', animationDuration:'16s' }} />
      <div className="ambient-orb" style={{ width:400, height:400, background:'rgba(10,31,68,0.5)', bottom:'5%', left:'25%', animationDelay:'-3s' }} />

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
            <div style={{ display:'flex', gap:14, flexWrap:'wrap', opacity:0, animation:'slide-up 0.6s ease 0.8s forwards' }}>
              <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-primary" id="hero-cta">
                <WAIcon /> Start Scaling on WhatsApp ↗
              </a>
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
                <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
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
                    <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.44a8.19 8.19 0 004.77 1.52V6.5a4.85 4.85 0 01-1-.19z"/></svg>
                  </div>
                  <div style={{ color:'white', fontWeight:700, fontSize:'0.85rem' }}>TikTok Conversions</div>
               </div>
               <div style={{ fontSize:'1.4rem', fontFamily:'var(--font-heading)', fontWeight:800, color:'white', lineHeight:1 }}>+240%</div>
               <div style={{ color:'var(--color-text-muted)', fontSize:'0.75rem', marginTop:2 }}>Revenue Growth</div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position:'absolute', bottom:28, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:6, color:'var(--color-text-faint)', fontSize:'0.72rem', fontFamily:'var(--font-mono)', opacity:0, animation:'fade-in 1s ease 1.8s forwards' }}>
        <span style={{ letterSpacing:'0.1em' }}>SCROLL</span>
        <div style={{ width:1, height:36, background:'linear-gradient(to bottom, var(--color-accent), transparent)', animation:'float 2s ease-in-out infinite' }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hero-visual { height: 380px !important; margin-top: 24px; transform: scale(0.85); overflow: visible; }
        }
        @media (max-width: 480px) {
          .hero-visual { transform: scale(0.7); transform-origin: left center; }
        }
      `}</style>
    </section>
  );
}

function WAIcon() {
  return <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
}

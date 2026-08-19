'use client';
import { useEffect, useRef } from 'react';
import siteConfig from '@/config/site.config';
import AmbientOrb from '@/components/ui/AmbientOrb';
import SectionHeading from '@/components/ui/SectionHeading';
import { observeOnce } from '@/lib/scrollReveal';

export default function Process() {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = observeOnce(document.getElementById('process-section'), () => {
      if (lineRef.current) lineRef.current.style.width = '100%';
      document.querySelectorAll('.process-node').forEach((n, i) =>
        setTimeout(() => n.classList.add('visible'), i * 260 + 350)
      );
      document.querySelectorAll('.process-content').forEach((c, i) =>
        setTimeout(() => { c.style.opacity='1'; c.style.transform='translateY(0)'; }, i * 260 + 650)
      );
    }, { threshold: 0.2 });
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="process" className="section" style={{ background:'var(--color-bg-alt)' }}>
      <AmbientOrb size={500} style={{ background:'rgba(10,31,68,0.7)', top:'10%', left:'-8%', animationDuration:'22s' }} />
      <AmbientOrb size={350} style={{ background:'rgba(0,255,157,0.05)', bottom:'5%', right:'5%', animationDelay:'-8s' }} />

      <div className="container" style={{ position:'relative', zIndex:1 }} id="process-section">
        <SectionHeading
          eyebrow="Our Process"
          title="Most Agencies Run Ads."
          highlight="We Build Ad Systems."
          subtitle="A repeatable 5-step framework that turns ad budgets into predictable revenue."
          marginBottom={72}
        />

        {/* Desktop timeline */}
        <div className="process-desktop" style={{ overflowX:'auto' }}>
          <div style={{ display:'grid', gridTemplateColumns:`repeat(${siteConfig.process.length},1fr)`, gap:0, minWidth:640, position:'relative' }}>
            <div className="process-line" style={{ top:28, left:'10%', right:'10%' }}>
              <div ref={lineRef} className="process-line-fill" />
            </div>
            {siteConfig.process.map((step, i) => (
              <div key={step.step} style={{ display:'flex', flexDirection:'column', alignItems:'center', padding:'0 10px' }}>
                <div className="process-node" style={{ marginBottom:24 }}>{step.step}</div>
                <div className="process-content glass-card" style={{
                  width:'100%', textAlign:'center', padding:'20px 14px',
                  opacity:0, transform:'translateY(22px)',
                  transition:'opacity 0.5s ease, transform 0.5s ease',
                }}>
                  <div style={{ fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'0.95rem', color:'white', marginBottom:8 }}>{step.title}</div>
                  <p style={{ color:'var(--color-text-muted)', fontSize:'0.82rem', lineHeight:1.6 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="process-vertical" style={{ display:'none', flexDirection:'column', gap:14, marginTop:8 }}>
          {siteConfig.process.map((step) => (
            <div key={step.step} style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
              <div style={{ width:44, height:44, borderRadius:'50%', background:'var(--color-bg-deep)', border:'2px solid var(--color-accent)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-mono)', fontWeight:700, fontSize:'0.78rem', color:'white', flexShrink:0, boxShadow:'var(--glow-blue)' }}>{step.step}</div>
              <div className="glass-card" style={{ flex:1, padding:'14px 18px' }}>
                <div style={{ fontFamily:'var(--font-heading)', fontWeight:700, marginBottom:4, fontSize:'0.95rem' }}>{step.title}</div>
                <p style={{ color:'var(--color-text-muted)', fontSize:'0.82rem', lineHeight:1.6 }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile styles handled in globals.css via .process-desktop and .process-vertical */}
    </section>
  );
}

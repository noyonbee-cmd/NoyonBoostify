'use client';
import { useState, useEffect, useRef } from 'react';
import siteConfig from '@/config/site.config';
import AmbientOrb from '@/components/ui/AmbientOrb';
import Badge from '@/components/ui/Badge';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);
  const total = siteConfig.testimonials.length;

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setActive(prev => (prev + 1) % total);
    }, 4000);
  };

  const stopAuto = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  return (
    <section id="testimonials" className="section section-alt">
      <AmbientOrb size={500} style={{ background:'rgba(45,140,255,0.08)', top:'-20%', right:'-10%', animationDelay:'-6s', animationDuration:'20s' }} />
      <AmbientOrb size={350} style={{ background:'rgba(0,255,157,0.05)', bottom:'-10%', left:'-5%', animationDelay:'-3s' }} />

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        <SectionHeading
          eyebrow="Client Results"
          title="Real Brands."
          highlight="Real Numbers."
          underlineGap={12}
        />

        {/* Carousel */}
        <div
          className="testimonial-grid"
          style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:24, marginBottom:36 }}
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          {siteConfig.testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass-card testimonial-card ${i === active ? 'active' : 'inactive'}`}
              onClick={() => setActive(i)}
              style={{ cursor:'pointer', userSelect:'none', display:'flex', flexDirection:'column', position:'relative', overflow:'hidden' }}
            >
              {/* Top border active indicator */}
              <div style={{ position:'absolute', top:0, left:0, right:0, height: i===active ? 3 : 0, background:'var(--color-accent)', transition:'height 0.3s ease', boxShadow:'0 0 10px rgba(45,140,255,0.5)' }} />

              <div style={{ fontFamily:'Georgia, serif', fontSize:'4.5rem', lineHeight:0.8, color:'rgba(45,140,255,0.15)', marginBottom:16, fontWeight:700 }}>"</div>

              <p style={{ color:'var(--color-text-muted)', fontSize:'0.95rem', lineHeight:1.75, marginBottom:24, fontStyle:'italic', flexGrow:1 }}>
                {t.text}
              </p>

              <div style={{ height:1, background:'rgba(45,140,255,0.12)', marginBottom:20 }} />

              <div style={{ display:'flex', alignItems:'center', gap:12, justifyContent:'space-between' }}>
                <div style={{ display:'flex', alignItems:'center', gap:12 }}>
                  <div style={{ width:44, height:44, borderRadius:'50%', background:`linear-gradient(135deg, ${t.avatarColor}, ${t.avatarColor}80)`, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:'var(--font-heading)', fontWeight:800, fontSize:'0.85rem', color:'white', boxShadow:`0 0 12px ${t.avatarColor}40`, flexShrink:0 }}>
                    {t.initials}
                  </div>
                  <div>
                    <div style={{ fontFamily:'var(--font-heading)', fontWeight:700, color:'white', fontSize:'0.9rem' }}>{t.name}</div>
                    <div style={{ color:'var(--color-text-faint)', fontSize:'0.75rem', fontFamily:'var(--font-mono)' }}>{t.role}</div>
                  </div>
                </div>

                {/* Badge based on result color type */}
                <Badge type={t.resultType}>{t.result}</Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div style={{ display:'flex', gap:10, justifyContent:'center' }}>
          {siteConfig.testimonials.map((_, i) => (
            <button
              key={i}
              className={`dot-indicator ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Testimonial ${i + 1}`}
              style={{ border:'none', cursor:'pointer', padding:0, height:8 }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonial-grid { grid-template-columns: 1fr !important; }
          .testimonial-card.inactive { display: none !important; }
          .testimonial-card.active { opacity:1 !important; transform:none !important; filter:none !important; }
        }
      `}</style>
    </section>
  );
}

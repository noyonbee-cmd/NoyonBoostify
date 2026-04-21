'use client';
import { useEffect, useRef, useState } from 'react';
import siteConfig from '@/config/site.config';

function useCountUp(target, duration = 2000, decimals = 0) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started) {
        setStarted(true);
        const t0 = performance.now();
        const tick = (now) => {
          const p = Math.min((now - t0) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setCount(decimals ? parseFloat((eased * target).toFixed(decimals)) : Math.round(eased * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, decimals, started]);

  return [count, ref];
}

function StatCard({ value, suffix, label, color, delay }) {
  const [count, ref] = useCountUp(value, 2200, !Number.isInteger(value) ? 1 : 0);
  const isGreen = color === 'green';

  return (
    <div ref={ref} className="glass-card reveal" style={{
      textAlign: 'center',
      transitionDelay: `${delay}ms`,
      background: isGreen ? 'rgba(0,255,157,0.04)' : 'rgba(45,140,255,0.04)',
      border: `1px solid ${isGreen ? 'rgba(0,255,157,0.18)' : 'rgba(45,140,255,0.18)'}`,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle top accent bar */}
      <div style={{ position:'absolute', top:0, left:0, right:0, height:2, background: isGreen ? 'var(--color-green)' : 'var(--color-accent)', opacity:0.7 }} />

      <div style={{
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: 'var(--text-stat)',
        color: isGreen ? 'var(--color-green)' : 'var(--color-accent)',
        lineHeight: 1,
        marginBottom: 12,
        textShadow: isGreen ? '0 0 20px rgba(0,255,157,0.4)' : '0 0 20px rgba(45,140,255,0.4)',
      }}>
        {count}{suffix}
      </div>
      <div style={{ fontFamily:'var(--font-body)', fontWeight:500, color:'var(--color-text-muted)', fontSize:'0.9rem' }}>
        {label}
      </div>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section id="stats" className="section" style={{ paddingTop:80, paddingBottom:80, background:'var(--color-bg-alt)' }}>
      <div className="ambient-orb" style={{ width:500, height:500, background:'rgba(45,140,255,0.07)', top:'-40%', left:'20%', animationDuration:'20s' }} />

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        {/* Lock-up line */}
        <p className="reveal" style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          fontSize: '1rem',
          color: 'var(--color-text-muted)',
          textAlign: 'center',
          marginBottom: 48,
          maxWidth: 540,
          margin: '0 auto 48px',
        }}>
          <span style={{ color:'var(--color-accent)', fontFamily:'var(--font-mono)', fontWeight:700 }}>47 brands.</span>{' '}
          <span style={{ color:'var(--color-green)', fontFamily:'var(--font-mono)', fontWeight:700 }}>৳2.4 crore managed.</span>{' '}
          One mission: make your ads profitable.
        </p>

        <div style={{ textAlign:'center', marginBottom:56 }}>
          <div className="eyebrow reveal" style={{ justifyContent:'center' }}>Proven Results</div>
          <h2 className="section-title reveal" style={{ textAlign:'center' }}>
            Numbers Don't Lie.{' '}
            <span className="gradient-text">Ours Speak Loudly.</span>
          </h2>
          <span className="neon-underline" style={{ margin:'12px auto 0' }} />
        </div>

        <div className="grid-4">
          {siteConfig.stats.map((s, i) => (
            <StatCard key={s.label} value={s.value} suffix={s.suffix} label={s.label} color={s.color} delay={i * 110} />
          ))}
        </div>

        <p className="reveal" style={{ textAlign:'center', marginTop:32, color:'var(--color-text-faint)', fontSize:'0.82rem', fontFamily:'var(--font-mono)' }}>
          🔒 Real numbers from real client campaigns — not industry averages.
        </p>
      </div>
    </section>
  );
}

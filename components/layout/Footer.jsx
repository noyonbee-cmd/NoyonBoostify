'use client';
import siteConfig from '@/config/site.config';

export default function Footer() {
  return (
    <footer style={{ background:'#020611', padding:'64px 0 32px', borderTop:'1px solid rgba(45,140,255,0.1)' }}>
      <div className="container">
        
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center', marginBottom:48 }}>
          {/* Logo */}
          <div style={{ width: 44, height: 44, marginBottom: 16 }}>
            <svg viewBox="0 0 40 40" fill="none" style={{ width: '100%', height: '100%' }}>
              <path d="M10 30L20 10L24 18" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 10L30 30" stroke="#2D8CFF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h3 style={{ fontFamily:'var(--font-heading)', fontWeight:800, fontSize:'1.4rem', color:'white', marginBottom:8 }}>
            {siteConfig.brand.fullName}
          </h3>
          <p style={{ color:'var(--color-text-muted)', fontFamily:'var(--font-body)', fontSize:'1rem' }}>
            {siteConfig.brand.tagline}
          </p>
        </div>

        <div style={{ display:'flex', gap:24, justifyContent:'center', flexWrap:'wrap', marginBottom:48 }}>
          <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color:'var(--color-text-muted)', textDecoration:'none', fontSize:'0.9rem', display:'flex', alignItems:'center', gap:8, transition:'color 0.2s' }} onMouseEnter={e=>e.currentTarget.style.color='var(--color-accent)'} onMouseLeave={e=>e.currentTarget.style.color='var(--color-text-muted)'}>
            WhatsApp
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} style={{ color:'var(--color-text-muted)', textDecoration:'none', fontSize:'0.9rem', display:'flex', alignItems:'center', gap:8, transition:'color 0.2s' }} onMouseEnter={e=>e.currentTarget.style.color='var(--color-accent)'} onMouseLeave={e=>e.currentTarget.style.color='var(--color-text-muted)'}>
            Email Us
          </a>
        </div>

        {/* Brand layers text */}
        <div style={{ textAlign:'center', marginBottom:32, color:'var(--color-text-faint)', fontSize:'0.75rem', fontFamily:'var(--font-mono)' }}>
          {Object.entries(siteConfig.brand.layers).map(([key, val], i) => (
            <span key={key}>
              <span style={{ fontWeight:600, color:'var(--color-text-muted)' }}>{key.charAt(0).toUpperCase() + key.slice(1)}</span>: {val.split('—')[0].trim()}
              {i < 2 && <span style={{ margin:'0 12px', opacity:0.3 }}>|</span>}
            </span>
          ))}
        </div>

        <div style={{ height:1, background:'rgba(255,255,255,0.05)', marginBottom:32 }} />

        <div className="footer-bottom" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:16, color:'var(--color-text-faint)', fontSize:'0.82rem' }}>
          <div>© {new Date().getFullYear()} {siteConfig.brand.fullName}. All rights reserved.</div>
          <div style={{ display:'flex', alignItems:'center', gap:6 }}>Made with <span style={{ color:'#FF4A4A' }}>❤</span> in Bangladesh</div>
        </div>

        {/* ── Meta Business Verification ── Remove after verification is complete ── */}
        {siteConfig.verification?.showBusinessName && (
          <div style={{
            marginTop: 24,
            padding: '10px 18px',
            borderRadius: 8,
            border: '1px solid rgba(45,140,255,0.15)',
            background: 'rgba(45,140,255,0.04)',
            textAlign: 'center',
            color: 'var(--color-text-faint)',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.03em',
          }}>
            This website is operated by{' '}
            <span style={{ color: 'var(--color-text-muted)', fontWeight: 600 }}>
              {siteConfig.verification.legalBusinessName}
            </span>
          </div>
        )}

      </div>
    </footer>
  );
}

'use client';
import { useEffect } from 'react';
import siteConfig from '@/config/site.config';

export default function FinalCTA() {
  return (
    <section id="cta" className="section" style={{ position:'relative', overflow:'hidden', paddingBottom: 160 }}>
      {/* Intense ambient orbs */}
      <div className="ambient-orb" style={{ width:750, height:750, background:'rgba(45,140,255,0.15)', top:'50%', left:'-15%', transform:'translateY(-50%)', animationDuration:'18s' }} />
      <div className="ambient-orb" style={{ width:600, height:600, background:'rgba(0,255,157,0.08)', top:'50%', right:'-10%', transform:'translateY(-50%)', animationDelay:'-8s', animationDuration:'15s' }} />

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        <div style={{ maxWidth:720, margin:'0 auto', textAlign:'center' }}>
          <div
            className="glass-card"
            style={{
              padding:'72px 48px',
              borderColor:'rgba(45,140,255,0.4)',
              background:'linear-gradient(180deg, rgba(13,27,56,0.8) 0%, rgba(10,31,68,0.95) 100%)',
              boxShadow:'0 32px 100px rgba(45,140,255,0.25), 0 0 0 1px rgba(255,255,255,0.05)',
            }}
          >
            <div className="eyebrow reveal" style={{ justifyContent:'center' }}>Still Deciding?</div>

            {/* H2 */}
            <h2 className="reveal" style={{
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 900,
              letterSpacing: 'var(--ls-tight)',
              marginBottom: 24,
              lineHeight: 1.15,
            }}>
              Your competitors are scaling<br />
              <span className="gradient-text">while you're reading this.</span>
            </h2>

            <p className="reveal" style={{ color:'var(--color-text-muted)', fontSize:'1.05rem', lineHeight:1.75, marginBottom:20, maxWidth:500, margin:'0 auto 32px' }}>
              Let's talk for 15 minutes. No pitch decks. No pressure.
              Just an honest conversation about your ads — and what's possible.
            </p>

            <div className="reveal scarcity-badge" style={{ marginBottom:36 }}>
              <span style={{ color:'#FF4A4A', fontSize:10, animation:'badge-pulse 2s infinite' }}>●</span>
              Accepting 3 new clients this month
            </div>

            <div className="reveal" style={{ marginBottom:32 }}>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                id="final-cta"
                style={{ fontSize:'1.1rem', padding:'18px 44px', boxShadow:'var(--glow-blue-intense)' }}
              >
                <WAIcon /> Chat on WhatsApp — Free Consultation
              </a>
            </div>

            <div className="reveal" style={{ color:'var(--color-text-faint)', fontSize:'0.82rem', fontFamily:'var(--font-body)', fontWeight:500, display:'flex', alignItems:'center', justifyContent:'center', gap:16, flexWrap:'wrap' }}>
              <span style={{ display:'flex', alignItems:'center', gap:6 }}><span style={{ color:'var(--color-accent)' }}>⚡</span> Replies within 2 hours</span>
              <span>·</span>
              <span style={{ display:'flex', alignItems:'center', gap:6 }}><span style={{ color:'var(--color-green)' }}>✓</span> No commitment required</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) { #cta .glass-card { padding: 48px 24px !important; } }
      `}</style>
    </section>
  );
}

function WAIcon() {
  return <svg width={22} height={22} viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
}

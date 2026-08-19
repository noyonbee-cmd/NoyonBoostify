'use client';
import { WhatsAppIcon } from '@/components/icons';
import AmbientOrb from '@/components/ui/AmbientOrb';
import WhatsAppLink from '@/components/ui/WhatsAppLink';

export default function FinalCTA() {
  return (
    <section id="cta" className="section" style={{ position:'relative', overflow:'hidden', paddingBottom: 160 }}>
      {/* Intense ambient orbs */}
      <AmbientOrb size={750} style={{ background:'rgba(45,140,255,0.15)', top:'50%', left:'-15%', transform:'translateY(-50%)', animationDuration:'18s' }} />
      <AmbientOrb size={600} style={{ background:'rgba(0,255,157,0.08)', top:'50%', right:'-10%', transform:'translateY(-50%)', animationDelay:'-8s', animationDuration:'15s' }} />

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
              <WhatsAppLink
                className="btn-primary"
                id="final-cta"
                style={{ fontSize:'1.1rem', padding:'18px 44px', boxShadow:'var(--glow-blue-intense)' }}
              >
                <WhatsAppIcon size={22} /> Chat on WhatsApp — Free Consultation
              </WhatsAppLink>
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


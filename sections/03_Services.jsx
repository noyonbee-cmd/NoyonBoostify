'use client';
import siteConfig from '@/config/site.config';
import { MetaIcon, TikTokIcon, WhatsAppIcon } from '@/components/icons';
import AmbientOrb from '@/components/ui/AmbientOrb';
import Badge from '@/components/ui/Badge';
import SectionHeading from '@/components/ui/SectionHeading';
import WhatsAppLink from '@/components/ui/WhatsAppLink';

const icons = {
  meta: <MetaIcon size={26} />,
  tiktok: <TikTokIcon size={24} />,
  leadgen: <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  ecommerce: <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  retarget: <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  infrastructure: <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x={2} y={3} width={20} height={14} rx={2}/><path d="M8 21h8M12 17v4"/><path d="M7 8h10M7 11h10"/></svg>,
};

export default function Services() {
  const { services, packages } = siteConfig;

  return (
    <section id="services" className="section mesh-bg">
      <AmbientOrb size={600} style={{ background:'rgba(45,140,255,0.09)', bottom:'-15%', right:'-10%', animationDelay:'-5s' }} />
      <AmbientOrb size={400} style={{ background:'rgba(0,255,157,0.05)', top:'10%', left:'-5%', animationDelay:'-10s' }} />

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        {/* Header */}
        <SectionHeading
          eyebrow="What We Do"
          title="Everything Your Brand Needs"
          highlight="to Scale"
          subtitle="From campaign setup to daily optimization — we handle it all."
        />

        {/* 6-service grid: 3+3 */}
        <div className="grid-3" style={{ marginBottom:64 }}>
          {services.map((svc, i) => (
            <div key={svc.id} className="glass-card reveal" style={{ transitionDelay:`${i*100}ms`, display:'flex', flexDirection:'column' }}>
              {/* Icon + badge row */}
              <div style={{ display:'flex', alignItems:'flex-start', justifyContent:'space-between', marginBottom:4 }}>
                <div className="service-icon" style={{
                  background: 'rgba(45,140,255,0.10)',
                  color: 'var(--color-accent)',
                  border: '1px solid rgba(45,140,255,0.25)',
                  boxShadow: '0 0 16px rgba(45,140,255,0.15)',
                  animationDelay: `${i*0.4}s`,
                  marginBottom: 0,
                }}>
                  {icons[svc.icon] || icons.infrastructure}
                </div>
                {svc.badge && <Badge type={svc.badgeType}>{svc.badge}</Badge>}
              </div>

              <div style={{ marginTop:16, marginBottom:4, fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'1.15rem', color:'white' }}>
                {svc.title}
              </div>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:'0.7rem', color:'var(--color-accent)', letterSpacing:'0.1em', marginBottom:14 }}>
                {svc.subtitle}
              </div>
              <p style={{ fontSize:'0.9rem', lineHeight:1.7, marginBottom:18, flexGrow:1, color:'var(--color-text-muted)' }}>
                {svc.description}
              </p>
              <div style={{ height:1, background:'rgba(45,140,255,0.12)', marginBottom:14 }} />
              <ul className="highlight-list">
                {svc.highlights.map(h => <li key={h}>{h}</li>)}
              </ul>
            </div>
          ))}
        </div>

        {/* Packages */}
        <SectionHeading
          level={3}
          eyebrow="Our Packages"
          title="No Prices. No Guessing."
          highlight="Just a Conversation."
          underline={false}
          marginBottom={40}
        />

        <div className="grid-3" style={{ alignItems:'stretch' }}>
          {packages.map((pkg, i) => (
            <div key={pkg.name} className={`package-card reveal ${pkg.featured ? 'featured' : ''}`} style={{ transitionDelay:`${i*120}ms`, display:'flex', flexDirection:'column', position:'relative' }}>
              {pkg.badge && (
                <div style={{ position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)' }}>
                  <Badge type="green" style={{ whiteSpace:'nowrap' }}>{pkg.badge}</Badge>
                </div>
              )}
              <div style={{ fontFamily:'var(--font-heading)', fontWeight:800, fontSize:'1.3rem', color:'white', marginBottom:6, marginTop: pkg.badge ? 8 : 0 }}>
                {pkg.name}
              </div>
              <div style={{ fontFamily:'var(--font-body)', fontSize:'0.85rem', color: pkg.featured ? 'var(--color-accent)' : 'var(--color-text-faint)', marginBottom:20 }}>
                {pkg.tagline}
              </div>
              <ul className="highlight-list" style={{ flexGrow:1, marginBottom:24 }}>
                {pkg.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <WhatsAppLink
                className={pkg.featured ? 'btn-primary' : 'btn-ghost'}
                style={{ textAlign:'center', justifyContent:'center', fontSize:'0.9rem', padding:'12px 20px' }}>
                {pkg.featured ? <><WhatsAppIcon size={15} style={{ marginRight:2 }} /> Start on WhatsApp</> : 'Start on WhatsApp'}
              </WhatsAppLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


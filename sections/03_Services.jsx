'use client';
import siteConfig from '@/config/site.config';

const icons = {
  meta: <svg width={26} height={26} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  tiktok: <svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.44a8.19 8.19 0 004.77 1.52V6.5a4.85 4.85 0 01-1-.19z"/></svg>,
  leadgen: <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  ecommerce: <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
  retarget: <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  infrastructure: <svg width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x={2} y={3} width={20} height={14} rx={2}/><path d="M8 21h8M12 17v4"/><path d="M7 8h10M7 11h10"/></svg>,
};

export default function Services() {
  const { services, packages } = siteConfig;

  return (
    <section id="services" className="section mesh-bg">
      <div className="ambient-orb" style={{ width:600, height:600, background:'rgba(45,140,255,0.09)', bottom:'-15%', right:'-10%', animationDelay:'-5s' }} />
      <div className="ambient-orb" style={{ width:400, height:400, background:'rgba(0,255,157,0.05)', top:'10%', left:'-5%', animationDelay:'-10s' }} />

      <div className="container" style={{ position:'relative', zIndex:1 }}>
        {/* Header */}
        <div style={{ textAlign:'center', marginBottom:64 }}>
          <div className="eyebrow reveal" style={{ justifyContent:'center' }}>What We Do</div>
          <h2 className="section-title reveal" style={{ textAlign:'center' }}>
            Everything Your Brand Needs{' '}
            <span className="gradient-text">to Scale</span>
          </h2>
          <p className="section-subtitle reveal" style={{ margin:'16px auto 0', textAlign:'center' }}>
            From campaign setup to daily optimization — we handle it all.
          </p>
          <span className="neon-underline" style={{ margin:'16px auto 0' }} />
        </div>

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
                {svc.badge && (
                  <span className={svc.badgeType === 'green' ? 'green-badge' : 'blue-badge'}>
                    {svc.badge}
                  </span>
                )}
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
        <div style={{ textAlign:'center', marginBottom:40 }}>
          <div className="eyebrow reveal" style={{ justifyContent:'center' }}>Our Packages</div>
          <h3 className="reveal" style={{ fontFamily:'var(--font-heading)', fontWeight:800, fontSize:'var(--text-h3)', color:'white', letterSpacing:'var(--ls-tight)' }}>
            No Prices. No Guessing.{' '}
            <span className="gradient-text">Just a Conversation.</span>
          </h3>
        </div>

        <div className="grid-3" style={{ alignItems:'stretch' }}>
          {packages.map((pkg, i) => (
            <div key={pkg.name} className={`package-card reveal ${pkg.featured ? 'featured' : ''}`} style={{ transitionDelay:`${i*120}ms`, display:'flex', flexDirection:'column', position:'relative' }}>
              {pkg.badge && (
                <div style={{ position:'absolute', top:-12, left:'50%', transform:'translateX(-50%)' }}>
                  <span className="green-badge" style={{ whiteSpace:'nowrap' }}>{pkg.badge}</span>
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
              <a href={siteConfig.contact.whatsappUrl} target="_blank" rel="noopener noreferrer"
                className={pkg.featured ? 'btn-primary' : 'btn-ghost'}
                style={{ textAlign:'center', justifyContent:'center', fontSize:'0.9rem', padding:'12px 20px' }}>
                {pkg.featured ? <><WAIcon /> Start on WhatsApp</> : 'Start on WhatsApp'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WAIcon() {
  return <svg width={15} height={15} viewBox="0 0 24 24" fill="currentColor" style={{ marginRight:2 }}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>;
}

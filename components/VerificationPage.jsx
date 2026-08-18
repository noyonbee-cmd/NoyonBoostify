'use client';
import { useState } from 'react';

// ── Brand constants — M/S. Maruf Enterprise (trade licence) ────
const BIZ = {
  legalCaps: 'M/S. MARUF ENTERPRISE',
  legal:     'M/S. Maruf Enterprise',
  short:     'Maruf Enterprise',
  tagline:   'Precision Handling. Trusted Logistics. Secure Supply Chains.',
  niche:     'Fragile Goods Trading & Logistics',
  license:   'TRAD/DSCC/298395/2019',
  zone:      'Zone 05',
  authority: 'Dhaka South City Corporation',
  address:   '9, Ishwar Chandrashil Bahadur, East Jurain, Dhaka-1204, Bangladesh',
  phone:     '+8801342096544',
};

const C = {
  navy:      '#0B1F3D',
  navyDeep:  '#071527',
  slate:     '#475569',
  slateLite: '#8B98AC',
  orange:    '#FF5A1F',
  orangeSoft:'#FFF1EA',
  bg:        '#FFFFFF',
  bgAlt:     '#F6F8FB',
  border:    '#E4E9F1',
  white:     '#FFFFFF',
};

function Phone({ children, style }) {
  return <a href={`tel:${BIZ.phone}`} style={{ textDecoration: 'none', color: 'inherit', ...style }}>{children}</a>;
}

export default function VerificationPage() {
  const [mob, setMob] = useState(false);
  const nav = [
    { id: 'about',    label: 'About' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'contact',  label: 'Contact' },
  ];

  return (
    <div style={{ background: C.bg, color: C.navy, fontFamily: "'Inter', system-ui, sans-serif", minHeight: '100vh' }}>

      {/* ── Sticky Nav ─────────────────────────────────────────── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{
          maxWidth: 1180, margin: '0 auto', padding: '0 24px',
          height: 76, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{
              width: 40, height: 40, background: C.navy, color: C.white,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, fontSize: '1.1rem', flexShrink: 0,
              position: 'relative', overflow: 'hidden',
            }}>
              M
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 5, background: C.orange }} />
            </div>
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontWeight: 800, fontSize: '0.92rem', letterSpacing: '-0.01em' }}>MARUF ENTERPRISE</div>
              <div style={{ fontSize: '0.62rem', color: C.slateLite, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Trading &amp; Logistics</div>
            </div>
          </div>

          <div className="me-nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {nav.map(n => (
              <a key={n.id} href={`#${n.id}`} style={{
                padding: '8px 16px', color: C.slate, textDecoration: 'none',
                fontSize: '0.85rem', fontWeight: 600, borderRadius: 6,
              }}>{n.label}</a>
            ))}
            <Phone style={{
              marginLeft: 8, padding: '10px 20px', background: C.navy, color: C.white,
              fontSize: '0.82rem', fontWeight: 700, borderRadius: 4,
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.orange }} />
              {BIZ.phone}
            </Phone>
          </div>

          <button onClick={() => setMob(!mob)} className="me-nav-mob-btn" style={{
            display: 'none', background: 'none', border: `1px solid ${C.border}`,
            borderRadius: 6, width: 40, height: 40, cursor: 'pointer', fontSize: '1.1rem', color: C.navy,
          }}>☰</button>
        </div>

        {mob && (
          <div className="me-nav-mob-btn" style={{ borderTop: `1px solid ${C.border}`, padding: '8px 24px 16px' }}>
            {nav.map(n => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setMob(false)} style={{
                display: 'block', padding: '10px 0', color: C.navy, textDecoration: 'none',
                fontSize: '0.9rem', fontWeight: 600, borderBottom: `1px solid ${C.border}`,
              }}>{n.label}</a>
            ))}
            <Phone style={{ display: 'block', marginTop: 14, color: C.orange, fontWeight: 700, fontSize: '0.9rem' }}>
              📞 {BIZ.phone}
            </Phone>
          </div>
        )}
      </nav>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        padding: '96px 24px 80px',
        background: `linear-gradient(180deg, ${C.bgAlt} 0%, ${C.bg} 100%)`,
      }}>
        {/* abstract geometric lines */}
        <svg aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }} preserveAspectRatio="none">
          <line x1="0" y1="20%" x2="100%" y2="5%" stroke={C.border} strokeWidth="1" />
          <line x1="0" y1="55%" x2="100%" y2="75%" stroke={C.border} strokeWidth="1" />
          <line x1="60%" y1="0" x2="100%" y2="40%" stroke={C.orange} strokeWidth="2" strokeOpacity="0.25" />
          <circle cx="92%" cy="18%" r="3" fill={C.orange} fillOpacity="0.5" />
          <circle cx="8%" cy="70%" r="3" fill={C.navy} fillOpacity="0.2" />
        </svg>
        {/* diagonal hazard-style accent */}
        <div style={{
          position: 'absolute', top: 0, right: 0, width: 220, height: 10,
          background: `repeating-linear-gradient(135deg, ${C.orange} 0 14px, ${C.navy} 14px 28px)`,
          transform: 'rotate(90deg) translate(20px, 100px)',
          transformOrigin: 'top right',
        }} />

        <div style={{ position: 'relative', maxWidth: 980, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '7px 18px', borderRadius: 20, border: `1px solid ${C.orange}`,
            background: C.orangeSoft, color: C.orange,
            fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: 28,
          }}>
            Licensed Merchant · {BIZ.authority}
          </div>

          <h1 style={{
            fontFamily: "'Inter', Arial, sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2.6rem, 8vw, 5.6rem)',
            lineHeight: 1.02, letterSpacing: '-0.03em',
            color: C.navy, margin: '0 0 24px',
            textTransform: 'uppercase',
          }}>
            {BIZ.legalCaps}
          </h1>

          <p style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.35rem)', color: C.slate,
            fontWeight: 500, maxWidth: 640, margin: '0 auto 40px', lineHeight: 1.55,
          }}>
            {BIZ.tagline}
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Phone style={{
              padding: '15px 34px', background: C.navy, color: C.white,
              fontWeight: 700, fontSize: '0.95rem', borderRadius: 4,
            }}>Call {BIZ.phone}</Phone>
            <a href="#expertise" style={{
              padding: '15px 34px', border: `2px solid ${C.navy}`, color: C.navy,
              fontWeight: 700, fontSize: '0.95rem', borderRadius: 4, textDecoration: 'none',
            }}>View Our Expertise →</a>
          </div>
        </div>
      </section>

      {/* ── Trust badges strip ─────────────────────────────────── */}
      <section style={{ borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, background: C.navy }}>
        <div style={{
          maxWidth: 1180, margin: '0 auto', padding: '20px 24px',
          display: 'flex', flexWrap: 'wrap', gap: 32, justifyContent: 'center', alignItems: 'center',
        }}>
          {[
            ['Trade License No.', BIZ.license],
            ['Zone', BIZ.zone],
            ['Registered Under', BIZ.authority],
          ].map(([label, val]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 6, height: 6, background: C.orange, display: 'inline-block' }} />
              <span style={{ color: '#9FB0C9', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
              <span style={{ color: C.white, fontSize: '0.85rem', fontWeight: 700 }}>{val}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ──────────────────────────────────────────────── */}
      <section id="about" style={{ padding: '96px 24px' }}>
        <div style={{
          maxWidth: 1180, margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 56, alignItems: 'center',
        }}>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.orange, marginBottom: 14 }}>About Us</div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.01em', marginBottom: 20, lineHeight: 1.2 }}>
              A Legally Registered Merchant, Built On Trust
            </h2>
            <p style={{ fontSize: '1rem', color: C.slate, lineHeight: 1.8, marginBottom: 16 }}>
              <strong style={{ color: C.navy }}>{BIZ.legal}</strong> is a legally registered merchant operating
              under <strong style={{ color: C.navy }}>{BIZ.authority}</strong>, specializing in the trading
              and secure logistics of fragile goods — including premium glassware, ceramics, and delicate
              cargo — for clients across Bangladesh.
            </p>
            <p style={{ fontSize: '1rem', color: C.slate, lineHeight: 1.8 }}>
              Every shipment is handled with the same principle: precision in packaging, discipline in
              transit, and full accountability from pickup to delivery.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              ['Trade License No.', BIZ.license],
              ['Zone', BIZ.zone],
              ['Registered Authority', BIZ.authority],
            ].map(([label, val]) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 16,
                background: C.bgAlt, border: `1px solid ${C.border}`, borderLeft: `4px solid ${C.orange}`,
                padding: '18px 22px',
              }}>
                <div>
                  <div style={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.slateLite, marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: C.navy }}>{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Expertise ─────────────────────────────────────── */}
      <section id="expertise" style={{ padding: '20px 24px 100px', background: C.bgAlt }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.orange, marginBottom: 14 }}>Core Expertise</div>
            <h2 style={{ fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 800, letterSpacing: '-0.01em' }}>What We Handle</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              { n: '01', title: 'Fragile Cargo Specialists', desc: 'Dedicated handling protocols for glassware, ceramics, and delicate goods — engineered to survive the full journey intact.' },
              { n: '02', title: 'Bulk Trading & Distribution', desc: 'Reliable bulk sourcing and distribution networks built for consistency, volume, and on-time delivery.' },
              { n: '03', title: 'Secure Shock-Absorbent Packaging', desc: 'Purpose-built packaging systems designed to absorb impact and protect high-risk shipments in transit.' },
            ].map(s => (
              <div key={s.n} style={{
                background: C.white, border: `1px solid ${C.border}`,
                padding: '36px 28px', position: 'relative',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: 4, height: '100%', background: C.orange }} />
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: C.slateLite, marginBottom: 18 }}>{s.n}</div>
                <h3 style={{ fontSize: '1.08rem', fontWeight: 800, color: C.navy, marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: '0.9rem', color: C.slate, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section style={{ padding: '80px 24px', textAlign: 'center', background: C.navy }}>
        <div style={{ maxWidth: 620, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 800, color: C.white, marginBottom: 14 }}>
            Partner With A Name You Can Trust
          </h2>
          <p style={{ color: '#AEBBD1', fontSize: '0.95rem', marginBottom: 32 }}>
            Speak directly with {BIZ.legal} for your next shipment or bulk order.
          </p>
          <Phone style={{
            display: 'inline-block', padding: '15px 38px', background: C.orange, color: C.white,
            fontWeight: 700, fontSize: '0.95rem', borderRadius: 4,
          }}>📞 {BIZ.phone}</Phone>
        </div>
      </section>

      {/* ── Corporate Verification Footer ─────────────────────── */}
      <footer id="contact" style={{ background: C.navyDeep, padding: '56px 24px 28px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 40,
            marginBottom: 40, paddingBottom: 40, borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', color: C.white, marginBottom: 8 }}>{BIZ.legal}</div>
              <div style={{ fontSize: '0.78rem', color: '#8B98AC', lineHeight: 1.7 }}>{BIZ.niche}</div>
              <div style={{ fontSize: '0.75rem', color: '#8B98AC', marginTop: 12, lineHeight: 1.8 }}>
                Trade License: {BIZ.license}<br />
                Zone: {BIZ.zone}<br />
                Authority: {BIZ.authority}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.orange, marginBottom: 12, fontWeight: 700 }}>Registered Address</div>
              <div style={{ fontSize: '0.85rem', color: '#C2CCDC', lineHeight: 1.8 }}>{BIZ.address}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.orange, marginBottom: 12, fontWeight: 700 }}>Contact Helpline</div>
              <Phone style={{ fontSize: '0.9rem', color: '#C2CCDC', fontWeight: 700 }}>📞 {BIZ.phone}</Phone>
            </div>
          </div>
          <div style={{ fontSize: '0.75rem', color: '#5E6C82', textAlign: 'center' }}>
            © {new Date().getFullYear()} {BIZ.legal}. All rights reserved.
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 860px) {
          section > div[style*="1.1fr"] { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          .me-nav-desktop { display: none !important; }
          .me-nav-mob-btn { display: block !important; }
        }
      `}</style>
    </div>
  );
}

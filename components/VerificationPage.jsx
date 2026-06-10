'use client';
import { useState } from 'react';

// ── Brand constants pulled from trade licence ──────────────────
const BIZ = {
  legal:    'CAREER ASSOCIATES BANGLADESH-CAB',
  short:    'Career Associates Bangladesh',
  abbr:     'CAB',
  tagline:  'Your Gateway to Global Education',
  niche:    'Educational Consultancy',
  license:  'TRAD/DNCC/007457/2014',
  address:  '5/1, Flat A4, Lift-4, Block D, Lalmatia, Dhanmondi-1207, Dhaka, Bangladesh',
  phones:   ['01896192000', '01896192001'],
  email:    'shamsmanna@gmail.com',
  proprietor: 'Moh Samsuddin Manna',
  authority:  'Dhaka North City Corporation',
  validTill:  '30 June 2026'
};

const C = {
  bg:      '#0B1120',
  bgCard:  '#111827',
  bgAlt:   '#0F1929',
  border:  'rgba(99,179,237,0.15)',
  accent:  '#3B82F6',
  accentL: '#60A5FA',
  gold:    '#F59E0B',
  goldL:   '#FCD34D',
  text:    '#F1F5F9',
  muted:   '#94A3B8',
  faint:   '#475569',
  green:   '#10B981',
};

// ── Shared layout wrappers ─────────────────────────────────────
function Layout({ children, page, setPage }) {
  const [mob, setMob] = useState(false);
  const nav = [
    { id: 'home',    label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'privacy', label: 'Privacy Policy' },
    { id: 'terms',   label: 'Terms' },
  ];
  return (
    <div style={{ minHeight: '100vh', background: C.bg, color: C.text, fontFamily: "'Segoe UI', system-ui, sans-serif" }}>

      {/* ── Navbar ── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(11,17,32,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${C.border}`,
        padding: '0 24px',
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
          <button onClick={() => setPage('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: `linear-gradient(135deg, ${C.accent}, ${C.gold})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, fontSize: '1rem', color: '#fff',
            }}>{BIZ.abbr[0]}</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: C.text, lineHeight: 1.1 }}>{BIZ.abbr}</div>
              <div style={{ fontSize: '0.6rem', color: C.muted, lineHeight: 1.1 }}>{BIZ.niche}</div>
            </div>
          </button>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 4 }} className="nav-desktop">
            {nav.map(n => (
              <button key={n.id} onClick={() => setPage(n.id)} style={{
                background: page === n.id ? `rgba(59,130,246,0.12)` : 'none',
                border: page === n.id ? `1px solid rgba(59,130,246,0.3)` : '1px solid transparent',
                borderRadius: 6, padding: '6px 14px', cursor: 'pointer',
                color: page === n.id ? C.accentL : C.muted,
                fontSize: '0.82rem', fontWeight: 500,
                transition: 'all 0.15s',
              }}>{n.label}</button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMob(!mob)} style={{
            display: 'none', background: 'none', border: 'none', cursor: 'pointer',
            color: C.muted, fontSize: '1.3rem',
          }} className="nav-mob-btn">☰</button>
        </div>

        {/* Mobile menu */}
        {mob && (
          <div style={{ background: C.bgCard, borderTop: `1px solid ${C.border}`, padding: '8px 0 12px' }}>
            {nav.map(n => (
              <button key={n.id} onClick={() => { setPage(n.id); setMob(false); }} style={{
                display: 'block', width: '100%', textAlign: 'left',
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '10px 24px', color: page === n.id ? C.accentL : C.muted,
                fontSize: '0.9rem', fontWeight: page === n.id ? 600 : 400,
              }}>{n.label}</button>
            ))}
          </div>
        )}
      </nav>

      {/* ── Page content ── */}
      <main>{children}</main>

      {/* ── Footer ── */}
      <footer style={{
        background: '#070D1A',
        borderTop: `1px solid ${C.border}`,
        padding: '48px 24px 24px',
        marginTop: 80,
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 40 }}>

            {/* Col 1 — Brand */}
            <div>
              <div style={{ fontWeight: 800, fontSize: '1rem', color: C.text, marginBottom: 6 }}>{BIZ.legal}</div>
              <div style={{ fontSize: '0.78rem', color: C.muted, marginBottom: 12, lineHeight: 1.6 }}>{BIZ.niche} · Est. 2024</div>
              <div style={{ fontSize: '0.72rem', color: C.faint, lineHeight: 1.7 }}>
                Trade License: {BIZ.license}<br />
                Authority: {BIZ.authority}<br />
                Valid Till: {BIZ.validTill}
              </div>
            </div>

            {/* Col 2 — Address */}
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.accent, marginBottom: 10, fontWeight: 700 }}>Registered Address</div>
              <div style={{ fontSize: '0.82rem', color: C.muted, lineHeight: 1.75 }}>
                {BIZ.address}
              </div>
            </div>

            {/* Col 3 — Contact */}
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.accent, marginBottom: 10, fontWeight: 700 }}>Contact</div>
              <div style={{ fontSize: '0.82rem', color: C.muted, lineHeight: 2 }}>
                📞 {BIZ.phones[0]}<br />
                📞 {BIZ.phones[1]}<br />
                ✉️ {BIZ.email}
              </div>
            </div>

            {/* Col 4 — Links */}
            <div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: C.accent, marginBottom: 10, fontWeight: 700 }}>Legal</div>
              {['privacy', 'terms', 'contact'].map(p => (
                <button key={p} onClick={() => setPage(p)} style={{
                  display: 'block', background: 'none', border: 'none', cursor: 'pointer',
                  color: C.muted, fontSize: '0.82rem', padding: '4px 0', textAlign: 'left',
                  transition: 'color 0.15s',
                }}>
                  {p === 'privacy' ? 'Privacy Policy' : p === 'terms' ? 'Terms of Service' : 'Contact Us'}
                </button>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: `1px solid ${C.border}`,
            paddingTop: 20,
            display: 'flex', flexWrap: 'wrap', gap: 12,
            justifyContent: 'space-between', alignItems: 'center',
          }}>
            <div style={{ fontSize: '0.75rem', color: C.faint }}>
              © {new Date().getFullYear()} <strong style={{ color: C.muted }}>{BIZ.legal}</strong>. All rights reserved.
            </div>

          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mob-btn { display: block !important; }
        }
      `}</style>
    </div>
  );
}

// ── HOME PAGE ──────────────────────────────────────────────────
function HomePage({ setPage }) {
  const services = [
    { icon: '🌍', title: 'Study Abroad Consulting', desc: 'Expert guidance for university admissions in UK, USA, Canada, Australia, and Europe. We handle everything from shortlisting to visa.' },
    { icon: '🎓', title: 'University Admissions', desc: 'Personalized application support for undergraduate and postgraduate programs at top-ranked global institutions.' },
    { icon: '📝', title: 'Test Preparation', desc: 'Structured coaching for IELTS, TOEFL, GRE, GMAT, and SAT. Experienced tutors with proven score improvement.' },
    { icon: '💼', title: 'Career Counseling', desc: 'One-on-one career planning sessions to align your academic path with your professional goals.' },
    { icon: '📋', title: 'Visa & Documentation', desc: 'Complete support for student visa applications, SOP writing, financial documentation, and embassy preparation.' },
    { icon: '🔧', title: 'Skill Development', desc: 'Professional certification programs and soft-skills training to make you job-ready in a competitive global market.' },
  ];

  const stats = [
    { n: '500+', l: 'Students Placed' },
    { n: '30+', l: 'Partner Universities' },
    { n: '15+', l: 'Countries Covered' },
    { n: '98%', l: 'Visa Success Rate' },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{
        background: `radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(245,158,11,0.06) 0%, transparent 55%), ${C.bg}`,
        padding: '100px 24px 80px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '6px 16px', borderRadius: 20,
            border: `1px solid rgba(59,130,246,0.25)`,
            background: 'rgba(59,130,246,0.06)',
            fontSize: '0.72rem', color: C.accentL,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            marginBottom: 24, fontWeight: 600,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.green, boxShadow: `0 0 6px ${C.green}`, display: 'inline-block' }} />
            Registered Educational Consultancy · Dhaka, Bangladesh
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.4rem)',
            fontWeight: 900, color: C.text, lineHeight: 1.1,
            marginBottom: 20, letterSpacing: '-0.02em',
          }}>
            Your Trusted Partner for<br />
            <span style={{
              background: `linear-gradient(135deg, ${C.accentL}, ${C.goldL})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Global Education</span>
          </h1>

          <p style={{ fontSize: '1.05rem', color: C.muted, lineHeight: 1.75, marginBottom: 36, maxWidth: 580, margin: '0 auto 36px' }}>
            {BIZ.legal} is a licensed educational consultancy helping students from Bangladesh
            achieve their dreams of studying abroad and building global careers.
          </p>

          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} style={{
              padding: '13px 32px', borderRadius: 8, border: 'none', cursor: 'pointer',
              background: `linear-gradient(135deg, ${C.accent}, #2563EB)`,
              color: '#fff', fontWeight: 700, fontSize: '0.95rem',
              boxShadow: `0 0 20px rgba(59,130,246,0.3)`,
            }}>
              Book Free Consultation
            </button>
            <button onClick={() => setPage('services')} style={{
              padding: '13px 32px', borderRadius: 8, cursor: 'pointer',
              background: 'transparent',
              border: `1px solid rgba(99,179,237,0.3)`,
              color: C.muted, fontWeight: 600, fontSize: '0.95rem',
            }}>
              Our Services →
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '0 24px', marginTop: -20 }}>
        <div style={{
          maxWidth: 900, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          background: C.bgCard, border: `1px solid ${C.border}`,
          borderRadius: 12, overflow: 'hidden',
        }}>
          {stats.map((s, i) => (
            <div key={s.n} style={{
              padding: '24px 20px', textAlign: 'center',
              borderRight: i < 3 ? `1px solid ${C.border}` : 'none',
            }}>
              <div style={{ fontSize: '1.9rem', fontWeight: 900, color: C.text, lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: '0.72rem', color: C.muted, marginTop: 4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '80px 24px 0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent, marginBottom: 8, fontWeight: 700 }}>What We Offer</div>
            <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: C.text, marginBottom: 12 }}>Educational Consultancy Services</h2>
            <p style={{ fontSize: '0.95rem', color: C.muted, maxWidth: 500, margin: '0 auto' }}>
              Comprehensive guidance from {BIZ.legal} for every step of your education journey.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {services.map(s => (
              <div key={s.title} style={{
                background: C.bgCard, border: `1px solid ${C.border}`,
                borderRadius: 12, padding: '28px 24px',
                transition: 'border-color 0.2s',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: 14 }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: C.text, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: '0.85rem', color: C.muted, lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section style={{ padding: '80px 24px 0' }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          background: `linear-gradient(135deg, rgba(59,130,246,0.06), rgba(245,158,11,0.04))`,
          border: `1px solid ${C.border}`,
          borderRadius: 16, padding: '40px 48px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center',
        }}>
          <div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.gold, marginBottom: 10, fontWeight: 700 }}>About Us</div>
            <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', fontWeight: 800, color: C.text, marginBottom: 16, lineHeight: 1.2 }}>
              Officially Licensed &amp; Trusted Since 2024
            </h2>
            <p style={{ fontSize: '0.88rem', color: C.muted, lineHeight: 1.75, marginBottom: 16 }}>
              <strong style={{ color: C.text }}>{BIZ.legal}</strong> is a government-registered educational
              consultancy operating under Trade License <strong style={{ color: C.accentL }}>{BIZ.license}</strong> issued
              by {BIZ.authority}.
            </p>
            <p style={{ fontSize: '0.88rem', color: C.muted, lineHeight: 1.75 }}>
              Founded by <strong style={{ color: C.text }}>{BIZ.proprietor}</strong>, we specialize in guiding
              Bangladeshi students through every step of their international education journey — from
              choosing the right university to landing safely in their destination country.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              ['🏛', 'Govt. Registered', `License: ${BIZ.license}`],
              ['📍', 'Registered Office', BIZ.address],
              ['📞', 'Phone', BIZ.phones.join(' · ')],
              ['✉️', 'Email', BIZ.email],
            ].map(([icon, label, val]) => (
              <div key={label} style={{
                display: 'flex', gap: 12, alignItems: 'flex-start',
                background: 'rgba(255,255,255,0.03)', border: `1px solid ${C.border}`,
                borderRadius: 8, padding: '10px 14px',
              }}>
                <span style={{ fontSize: '1.1rem' }}>{icon}</span>
                <div>
                  <div style={{ fontSize: '0.6rem', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>{label}</div>
                  <div style={{ fontSize: '0.8rem', color: C.muted, marginTop: 1 }}>{val}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: C.text, marginBottom: 12 }}>
            Ready to Study Abroad?
          </h2>
          <p style={{ fontSize: '0.95rem', color: C.muted, marginBottom: 28 }}>
            Get a free consultation from our expert advisors at {BIZ.legal}.
          </p>
          <button onClick={() => setPage('contact')} style={{
            padding: '14px 40px', borderRadius: 8, border: 'none', cursor: 'pointer',
            background: `linear-gradient(135deg, ${C.accent}, #2563EB)`,
            color: '#fff', fontWeight: 700, fontSize: '1rem',
          }}>
            Contact Us Today
          </button>
        </div>
      </section>
    </>
  );
}

// ── CONTACT PAGE ───────────────────────────────────────────────
function ContactPage() {
  return (
    <section style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.accent, marginBottom: 8, fontWeight: 700 }}>Get In Touch</div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 900, color: C.text, marginBottom: 12 }}>Contact Us</h1>
          <p style={{ color: C.muted, fontSize: '0.95rem', maxWidth: 500, margin: '0 auto' }}>
            Reach out to <strong style={{ color: C.text }}>{BIZ.legal}</strong> for a free consultation.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { icon: '🏢', label: 'Legal Business Name', val: BIZ.legal },
              { icon: '📍', label: 'Registered Address', val: BIZ.address },
              { icon: '📞', label: 'Phone (Primary)', val: BIZ.phones[0] },
              { icon: '📞', label: 'Phone (Secondary)', val: BIZ.phones[1] },
              { icon: '✉️', label: 'Email Address', val: BIZ.email },
              { icon: '🕐', label: 'Office Hours', val: 'Sunday – Thursday, 9 AM – 6 PM' },
              { icon: '📄', label: 'Trade License', val: BIZ.license },
            ].map(({ icon, label, val }) => (
              <div key={label} style={{
                background: C.bgCard, border: `1px solid ${C.border}`,
                borderRadius: 10, padding: '14px 18px',
                display: 'flex', gap: 14, alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: '1.3rem' }}>{icon}</span>
                <div>
                  <div style={{ fontSize: '0.6rem', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: '0.88rem', color: C.text, fontWeight: 500 }}>{val}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Map + note */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* Embedded map placeholder */}
            <div style={{
              background: C.bgCard, border: `1px solid ${C.border}`,
              borderRadius: 10, overflow: 'hidden', height: 260,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexDirection: 'column', gap: 8,
            }}>
              <div style={{ fontSize: '2.5rem' }}>🗺️</div>
              <div style={{ fontSize: '0.8rem', color: C.muted, textAlign: 'center', padding: '0 24px' }}>
                Lalmatia, Dhanmondi<br />Dhaka-1207, Bangladesh
              </div>
              <a
                href={`https://maps.google.com/?q=Lalmatia+Dhanmondi+Dhaka+Bangladesh`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  fontSize: '0.75rem', color: C.accentL,
                  padding: '6px 14px', border: `1px solid rgba(59,130,246,0.3)`,
                  borderRadius: 6, textDecoration: 'none',
                }}
              >
                Open in Google Maps →
              </a>
            </div>

            <div style={{
              background: `rgba(59,130,246,0.06)`,
              border: `1px solid rgba(59,130,246,0.2)`,
              borderRadius: 10, padding: '20px',
            }}>
              <div style={{ fontWeight: 700, color: C.text, marginBottom: 8, fontSize: '0.9rem' }}>📋 Quick Note</div>
              <p style={{ fontSize: '0.82rem', color: C.muted, lineHeight: 1.7 }}>
                We respond to all enquiries within <strong style={{ color: C.text }}>24 business hours</strong>.
                For urgent matters, call us directly on <strong style={{ color: C.accentL }}>{BIZ.phones[0]}</strong>.
              </p>
              <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${C.border}` }}>
                <div style={{ fontSize: '0.72rem', color: C.faint, lineHeight: 1.6 }}>
                  <strong style={{ color: C.muted }}>{BIZ.legal}</strong><br />
                  Proprietor: {BIZ.proprietor}<br />
                  License Authority: {BIZ.authority}
                </div>
              </div>
            </div>

            <a href={`mailto:${BIZ.email}`} style={{
              display: 'block', textAlign: 'center',
              padding: '14px', borderRadius: 10, textDecoration: 'none',
              background: `linear-gradient(135deg, ${C.accent}, #2563EB)`,
              color: '#fff', fontWeight: 700, fontSize: '0.95rem',
            }}>
              ✉️ &nbsp; Email: {BIZ.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── PRIVACY POLICY ─────────────────────────────────────────────
function PrivacyPage() {
  return (
    <section style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, color: C.text, marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ fontSize: '0.8rem', color: C.faint, marginBottom: 40 }}>Last updated: June 2025 · {BIZ.legal}</p>
        {[
          ['1. About Us', `This Privacy Policy applies to ${BIZ.legal} (also referred to as "CAB", "we", "our", or "us"), a registered educational consultancy operating under Trade License ${BIZ.license} issued by ${BIZ.authority}, Dhaka, Bangladesh. Our registered address is: ${BIZ.address}.`],
          ['2. Information We Collect', 'We may collect personal information including your name, email address, phone number, academic qualifications, passport details (for visa applications), and enquiry details. We collect this information when you contact us, fill out a consultation form, or use our services.'],
          ['3. How We Use Your Information', `${BIZ.legal} uses your information to: provide educational consultancy services; respond to enquiries; process university and visa applications on your behalf; send relevant updates about study abroad opportunities; and comply with legal obligations.`],
          ['4. Data Sharing', 'We do not sell or rent your personal data to third parties. We may share your data with partner universities, embassies, or visa processing authorities solely for the purpose of delivering our educational consultancy services, with your consent.'],
          ['5. Data Security', 'We take reasonable steps to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure.'],
          ['6. Your Rights', 'You have the right to access, correct, or request deletion of your personal data held by us. To exercise these rights, contact us at: ' + BIZ.email],
          ['7. Cookies', 'Our website may use cookies to improve your browsing experience. You can disable cookies in your browser settings at any time.'],
          ['8. Contact', `For any privacy-related questions, contact ${BIZ.legal} at: ${BIZ.email} or call ${BIZ.phones[0]}.`],
        ].map(([title, body]) => (
          <div key={title} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: C.text, marginBottom: 8 }}>{title}</h2>
            <p style={{ fontSize: '0.88rem', color: C.muted, lineHeight: 1.8 }}>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── TERMS OF SERVICE ───────────────────────────────────────────
function TermsPage() {
  return (
    <section style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, color: C.text, marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ fontSize: '0.8rem', color: C.faint, marginBottom: 40 }}>Last updated: June 2025 · {BIZ.legal}</p>
        {[
          ['1. Acceptance of Terms', `By using the services of ${BIZ.legal} ("CAREER ASSOCIATES BANGLADESH-CAB"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.`],
          ['2. Services Provided', `${BIZ.legal} provides educational consultancy services including study abroad counseling, university application assistance, test preparation guidance (IELTS, TOEFL, GRE), visa documentation support, and career counseling. We are a registered entity under Trade License ${BIZ.license} issued by ${BIZ.authority}.`],
          ['3. No Guarantee of Admission', 'While we provide our best professional guidance, CAREER ASSOCIATES BANGLADESH-CAB cannot guarantee admission to any university or approval of any visa application. Decisions rest solely with the respective institutions and government authorities.'],
          ['4. Client Responsibilities', 'Clients must provide accurate and complete information. Any misinformation that results in application rejection or visa denial is the sole responsibility of the client. CAREER ASSOCIATES BANGLADESH-CAB shall not be liable for consequences arising from false information.'],
          ['5. Fees & Payments', 'Our service fees will be communicated clearly before engagement. Fees once paid for services rendered are non-refundable. Refund terms for specific packages, if applicable, will be stated in your service agreement.'],
          ['6. Confidentiality', 'We treat all client information with strict confidentiality in accordance with our Privacy Policy.'],
          ['7. Limitation of Liability', 'CAREER ASSOCIATES BANGLADESH-CAB shall not be liable for indirect, incidental, or consequential damages arising from the use of our services or reliance on our advice.'],
          ['8. Governing Law', 'These terms are governed by the laws of the People\'s Republic of Bangladesh. Any disputes shall be subject to the jurisdiction of courts in Dhaka, Bangladesh.'],
          ['9. Contact', `For questions about these terms, contact us at: ${BIZ.email} or ${BIZ.phones[0]}. Registered Address: ${BIZ.address}`],
        ].map(([title, body]) => (
          <div key={title} style={{ marginBottom: 32 }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 700, color: C.text, marginBottom: 8 }}>{title}</h2>
            <p style={{ fontSize: '0.88rem', color: C.muted, lineHeight: 1.8 }}>{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── ROOT COMPONENT ─────────────────────────────────────────────
export default function VerificationPage() {
  const [page, setPage] = useState('home');

  const content = {
    home:     <HomePage setPage={setPage} />,
    services: <HomePage setPage={setPage} />,
    contact:  <ContactPage />,
    privacy:  <PrivacyPage />,
    terms:    <TermsPage />,
  };

  return (
    <Layout page={page} setPage={setPage}>
      {content[page] || content.home}
    </Layout>
  );
}

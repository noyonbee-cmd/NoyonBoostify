'use client';
import { useState } from 'react';
import siteConfig from '@/config/site.config';
import useScrollPast from '@/hooks/useScrollPast';
import { hoverColor } from '@/lib/hover';
import { BrandMark, WhatsAppIcon } from '@/components/icons';
import WhatsAppLink from '@/components/ui/WhatsAppLink';

export default function Navbar() {
  const scrolled = useScrollPast(80);
  const [menuOpen, setMenuOpen]   = useState(false);

  // Close menu on route-style scroll-to
  const scrollTo = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Results',  id: 'stats' },
    { label: 'Services', id: 'services' },
    { label: 'Process',  id: 'process' },
    { label: 'Creative', id: 'creative' },
    { label: 'Reviews',  id: 'testimonials' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 999,
      transition: 'all 0.3s ease',
      background: scrolled || menuOpen ? 'rgba(10,31,68,0.92)' : 'transparent',
      backdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
      WebkitBackdropFilter: scrolled || menuOpen ? 'blur(20px)' : 'none',
      borderBottom: scrolled || menuOpen ? '1px solid rgba(45,140,255,0.15)' : '1px solid transparent',
    }}>
      {/* ── Main bar ── */}
      <div className="container" style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        height: scrolled ? 60 : 72,
        transition: 'height 0.3s ease',
      }}>

        {/* Logo */}
        <div
          style={{ display:'flex', alignItems:'center', gap:10, cursor:'pointer' }}
          onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
        >
          <BrandMark size={34} />
          <div style={{
            fontFamily:'var(--font-heading)', fontWeight:800,
            fontSize:'1.15rem', color:'white', letterSpacing:'var(--ls-tight)',
          }}>
            {siteConfig.brand.navName}
          </div>
        </div>

        {/* Desktop nav links */}
        <div style={{ display:'flex', alignItems:'center', gap:4 }} className="nav-links-desktop">
          {navLinks.map(n => (
            <button key={n.id} onClick={() => scrollTo(n.id)} style={{
              background:'none', border:'none', cursor:'pointer',
              color:'var(--color-text-muted)', fontFamily:'var(--font-body)',
              fontWeight:500, fontSize:'0.85rem', padding:'6px 12px',
              borderRadius:6, transition:'color 0.15s',
            }}
            {...hoverColor('var(--color-accent)', 'var(--color-text-muted)')}
            >
              {n.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <WhatsAppLink
          className="nav-desktop-cta"
          style={{
            display:'inline-flex', alignItems:'center', gap:8,
            padding:'9px 18px',
            background:'var(--color-bg-deep)',
            border:'1px solid var(--color-accent)',
            borderRadius:8, color:'white',
            fontFamily:'var(--font-heading)', fontWeight:700,
            fontSize:'0.85rem', textDecoration:'none',
            boxShadow:'var(--glow-blue)', transition:'all 0.25s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--gradient-cta)';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'var(--color-bg-deep)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <WhatsAppIcon size={16} /> WhatsApp Us
        </WhatsAppLink>

        {/* Hamburger — mobile only */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span style={{ transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ opacity: menuOpen ? 0 : 1 }} />
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      <div className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(n => (
          <button key={n.id} className="nav-mobile-link" onClick={() => scrollTo(n.id)}>
            {n.label}
          </button>
        ))}
        <div style={{ padding:'12px 24px 0' }}>
          <WhatsAppLink
            onClick={() => setMenuOpen(false)}
            style={{
              display:'flex', alignItems:'center', justifyContent:'center', gap:8,
              padding:'12px', borderRadius:8, textDecoration:'none',
              background:'var(--gradient-cta)', color:'white',
              fontFamily:'var(--font-heading)', fontWeight:700, fontSize:'0.95rem',
              boxShadow:'var(--glow-blue)',
            }}
          >
            <WhatsAppIcon size={16} /> Chat on WhatsApp
          </WhatsAppLink>
        </div>
      </div>

      <style>{`
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
          .nav-links-desktop { display: flex !important; }
        }
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

'use client';
import { useEffect } from 'react';
import siteConfig from '@/config/site.config';
import { revealOnScroll } from '@/lib/scrollReveal';
import VerificationPage from '@/components/VerificationPage';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/sections/01_Hero';
import TrustBar from '@/sections/02_TrustBar';
import Services from '@/sections/03_Services';
import Process from '@/sections/04_Process';
import Creative from '@/sections/05_Creative';
import Testimonials from '@/sections/06_Testimonials';
import FinalCTA from '@/sections/07_FinalCTA';
import StickyWABar from '@/components/layout/StickyWABar';

// ─────────────────────────────────────────────────────────────────
//  SITE MODE SWITCH  —  one line in config/site.config.js:
//    siteMode: "verification"  →  trade licence holding page (Meta)
//    siteMode: "live"          →  full Noyon Boostify website
// ─────────────────────────────────────────────────────────────────

export default function Home() {
  const isVerification = siteConfig.siteMode === 'verification';

  useEffect(() => {
    // Skip all observers when in verification mode
    if (isVerification) return;

    // Reveal on scroll
    const observer = revealOnScroll('.reveal, .reveal-left, .reveal-right', 'revealed', {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
    });

    // Neon underline trigger
    const ulObserver = revealOnScroll('.neon-underline', 'active', { threshold: 0.5 });

    return () => {
      observer.disconnect();
      ulObserver.disconnect();
    };
  }, [isVerification]);

  // ── Verification mode ─────────────────────────────────────────
  if (isVerification) return <VerificationPage />;

  // ── Live mode — full website ──────────────────────────────────
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Creative />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWABar />
    </>
  );
}

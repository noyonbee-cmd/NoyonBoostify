'use client';
import { useEffect, useRef, useState } from 'react';
import siteConfig from '@/config/site.config';
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

export default function Home() {
  const [heroScrolled, setHeroScrolled] = useState(false);

  useEffect(() => {
    // Intersection observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    revealEls.forEach((el) => observer.observe(el));

    // Neon underline trigger
    const ulObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('.neon-underline').forEach((el) => ulObserver.observe(el));

    // Process timeline
    const lineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Trigger nodes
            const nodes = document.querySelectorAll('.process-node');
            nodes.forEach((node, i) => {
              setTimeout(() => node.classList.add('visible'), i * 250 + 400);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    const processLine = document.querySelector('.process-line-fill');
    if (processLine) lineObserver.observe(processLine.parentElement);

    // Hero scroll
    const handleScroll = () => {
      setHeroScrolled(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      ulObserver.disconnect();
      lineObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      <StickyWABar visible={heroScrolled} />
    </>
  );
}

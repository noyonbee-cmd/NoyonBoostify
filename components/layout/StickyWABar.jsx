'use client';
import useScrollPast from '@/hooks/useScrollPast';
import { WhatsAppIcon } from '@/components/icons';
import WhatsAppLink from '@/components/ui/WhatsAppLink';

export default function StickyWABar() {
  // Show when scrolled past hero (approx 600px)
  const visible = useScrollPast(600);

  if (!visible) return null;

  return (
    <div className="sticky-wa-bar" style={{
      animation: 'slide-up 0.5s ease',
    }}>
      <WhatsAppLink
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          background: 'var(--gradient-cta)',
          color: 'white',
          padding: '14px 20px',
          borderRadius: 8,
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '0.95rem',
          textDecoration: 'none',
          boxShadow: 'var(--glow-blue)',
          animation: 'pulse-glow-blue 2.8s infinite',
        }}
      >
        <WhatsAppIcon size={18} /> Chat on WhatsApp — Free Consultation ↗
      </WhatsAppLink>
    </div>
  );
}

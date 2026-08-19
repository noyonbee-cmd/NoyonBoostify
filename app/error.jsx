'use client';
import { useEffect } from 'react';

export default function ErrorPage({ error, unstable_retry }) {
  useEffect(() => {
    // Surface the failure instead of letting the boundary swallow it silently.
    console.error('[boostify] route render failed', error);
  }, [error]);

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center', gap: 16,
      padding: '24px', textAlign: 'center',
      background: '#000000', color: '#FFFFFF',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0 }}>
        Something went wrong.
      </h2>
      <p style={{ color: '#8B98AC', fontSize: '0.95rem', maxWidth: 460, margin: 0 }}>
        This page failed to load. You can retry, or reach us directly on WhatsApp.
      </p>
      {error?.digest && (
        <code style={{ color: '#5E6C82', fontSize: '0.75rem' }}>
          Reference: {error.digest}
        </code>
      )}
      <button
        type="button"
        onClick={() => unstable_retry()}
        style={{
          marginTop: 8, padding: '12px 26px', borderRadius: 8, cursor: 'pointer',
          border: '1px solid #2D8CFF', background: '#0A1F44', color: '#FFFFFF',
          fontWeight: 700, fontSize: '0.9rem',
        }}
      >
        Try again
      </button>
    </div>
  );
}

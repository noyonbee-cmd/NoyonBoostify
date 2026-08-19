'use client';
import { useEffect } from 'react';

export default function GlobalError({ error, unstable_retry }) {
  useEffect(() => {
    console.error('[boostify] root layout render failed', error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{
        minHeight: '100vh', margin: 0, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 16,
        padding: '24px', textAlign: 'center',
        background: '#000000', color: '#FFFFFF',
        fontFamily: "system-ui, sans-serif",
      }}>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, margin: 0 }}>
          Something went wrong.
        </h2>
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
      </body>
    </html>
  );
}

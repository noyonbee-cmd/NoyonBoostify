'use client';
import siteConfig from '@/config/site.config';

export default function VerificationPage() {
  const v = siteConfig.verification;

  return (
    <div style={{
      minHeight: '100vh',
      background: '#eae6dc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '32px 16px 48px',
      fontFamily: "'Times New Roman', Times, serif",
    }}>

      {/* ── Document Card ─────────────────────────────────── */}
      <div style={{
        width: '100%',
        maxWidth: 780,
        background: '#fdfaf3',
        border: '3px double #8B6914',
        boxShadow: '0 6px 40px rgba(80,50,10,0.22)',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Corner ornaments */}
        {['top:0;left:0', 'top:0;right:0', 'bottom:0;left:0', 'bottom:0;right:0'].map((pos, i) => (
          <div key={i} style={{
            position: 'absolute',
            ...(Object.fromEntries(pos.split(';').map(p => p.split(':')))),
            width: 32, height: 32,
            borderTop: i < 2 ? '3px solid #C9A84C' : 'none',
            borderBottom: i >= 2 ? '3px solid #C9A84C' : 'none',
            borderLeft: (i === 0 || i === 2) ? '3px solid #C9A84C' : 'none',
            borderRight: (i === 1 || i === 3) ? '3px solid #C9A84C' : 'none',
            zIndex: 2,
          }} />
        ))}

        {/* Diagonal watermark */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%) rotate(-35deg)',
          fontSize: '6rem', fontWeight: 900, letterSpacing: '0.12em',
          color: 'rgba(139,105,20,0.035)', whiteSpace: 'nowrap',
          pointerEvents: 'none', userSelect: 'none', zIndex: 0,
        }}>
          OFFICIAL DOCUMENT
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>

          {/* ── Header band ──────────────────────────────── */}
          <div style={{
            background: 'linear-gradient(180deg, #7a5c10 0%, #9e7a1e 50%, #7a5c10 100%)',
            padding: '6px 0',
            textAlign: 'center',
            letterSpacing: '0.3em',
            fontSize: '0.6rem',
            color: '#fde9a0',
            textTransform: 'uppercase',
          }}>
            ✦ &nbsp; Dhaka North City Corporation &nbsp; ✦ &nbsp; Bangladesh &nbsp; ✦
          </div>

          {/* ── Title block ──────────────────────────────── */}
          <div style={{
            textAlign: 'center',
            padding: '28px 48px 20px',
            borderBottom: '2px solid #c9a84c',
          }}>
            <div style={{
              fontSize: '0.62rem', letterSpacing: '0.3em',
              textTransform: 'uppercase', color: '#8B6914',
              marginBottom: 6,
            }}>
              Government of the People's Republic of Bangladesh
            </div>
            <h1 style={{
              fontSize: 'clamp(1.4rem, 3.5vw, 2rem)',
              fontWeight: 700, color: '#2c1a00',
              margin: '0 0 4px', letterSpacing: '0.05em',
            }}>
              E-TRADE LICENCE
            </h1>
            <div style={{
              fontSize: '0.72rem', color: '#7a6040',
              letterSpacing: '0.15em', textTransform: 'uppercase',
            }}>
              License No: TRAD/DNCC/007457/2014
            </div>
            <div style={{
              width: 120, height: 1,
              background: 'linear-gradient(90deg, transparent, #8B6914, transparent)',
              margin: '14px auto 0',
            }} />
          </div>

          {/* ── Preamble ─────────────────────────────────── */}
          <div style={{
            padding: '16px 48px',
            borderBottom: '1px solid rgba(139,105,20,0.2)',
            fontSize: '0.8rem', color: '#4a3510', lineHeight: 1.65,
            textAlign: 'justify',
          }}>
            This Trade License is issued in favor of the following Individual/Firm with a view to
            collecting the Tax as imposed in accordance with the provisions of the Dhaka City
            Corporation Ordinance, 2016, and model tax schedule prescribed by the local government.
          </div>

          {/* ── Fields ───────────────────────────────────── */}
          <div style={{ padding: '20px 48px 0' }}>
            {[
              ['1.', 'Name of Business', 'CAREER ASSOCIATES BANGLADESH-CAB'],
              ['2.', 'Name of Proprietor', 'MOH SAMSUDDIN MANNA'],
              ['3.', "Father's Name", 'MAKSUDUR RAHMAN'],
              ['4.', "Mother's Name", 'MONOARA BEGUM'],
              ['5.', 'Nature of Business', 'INDIVIDUAL'],
              ['6.', 'Types of Business', 'EDUCATIONAL CONSULTANCY'],
              ['7.', 'Address of Business', '5/1, Flat A4, Lift-4, Block D, Lalmatia, Dhanmondi-1207, Dhaka'],
              ['8.', 'Area / Bazaar Branch', '5 Kawran Bazar'],
              ['9.', 'NID / Passport / Birth', '8707827963'],
              ['10.', 'Phone', '01896192000  /  01896192001'],
              ['11.', 'E-Mail', 'shamsmanna@gmail.com'],
            ].map(([num, label, value]) => (
              <div key={num} style={{
                display: 'grid',
                gridTemplateColumns: '28px 200px 1fr',
                gap: '0 12px',
                padding: '5px 0',
                borderBottom: '1px dotted rgba(139,105,20,0.18)',
                alignItems: 'baseline',
              }}>
                <span style={{ fontSize: '0.78rem', color: '#8B6914', fontWeight: 700 }}>{num}</span>
                <span style={{ fontSize: '0.8rem', color: '#5c3d00' }}>{label}</span>
                <span style={{ fontSize: '0.82rem', color: '#1a0f00', fontWeight: 600 }}>: &nbsp;{value}</span>
              </div>
            ))}
          </div>

          {/* ── Legal Business Name highlight ─────────────── */}
          <div style={{
            margin: '20px 48px',
            background: 'linear-gradient(135deg, #fffbe8, #fef3c7)',
            border: '1.5px solid #c9a84c',
            borderRadius: 4,
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 14,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'linear-gradient(135deg, #8B6914, #c9a84c)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1rem', color: '#fff', flexShrink: 0,
            }}>⚜</div>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8B6914', marginBottom: 2 }}>
                Legal Business Name (as registered)
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#2c1a00', letterSpacing: '0.02em' }}>
                {v.legalBusinessName}
              </div>
            </div>
          </div>

          {/* ── Validity & Dates ──────────────────────────── */}
          <div style={{
            margin: '0 48px 20px',
            background: 'rgba(139,105,20,0.04)',
            border: '1px solid rgba(139,105,20,0.2)',
            borderRadius: 4,
            padding: '12px 20px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 12,
          }}>
            {[
              ['Business Start Date', '22 / 08 / 2024'],
              ['Date of Issue', '07 / 08 / 2025'],
              ['Valid Until', '30th June 2026'],
            ].map(([l, v]) => (
              <div key={l}>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9a7c4a', marginBottom: 2 }}>{l}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#2c1a00' }}>{v}</div>
              </div>
            ))}
          </div>

          {/* ── Fee table ────────────────────────────────── */}
          <div style={{ margin: '0 48px 24px' }}>
            <div style={{
              fontSize: '0.6rem', letterSpacing: '0.2em',
              textTransform: 'uppercase', color: '#8B6914',
              fontWeight: 700, marginBottom: 8,
              paddingBottom: 4, borderBottom: '1px solid rgba(139,105,20,0.2)',
            }}>
              Fee Details (BDT)
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '6px 16px' }}>
              {[
                ['Trade License Fee', '3,000'],
                ['Signboard Tax', '960'],
                ['VAT', '594'],
                ['Income / Source Tax', '3,000'],
                ['Book Fee', '270'],
                ['Others', '500'],
              ].map(([l, a]) => (
                <div key={l} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dotted rgba(139,105,20,0.15)', paddingBottom: 3 }}>
                  <span style={{ fontSize: '0.72rem', color: '#5c3d00' }}>{l}</span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2c1a00', fontFamily: 'monospace' }}>{a}</span>
                </div>
              ))}
            </div>
            <div style={{
              display: 'flex', justifyContent: 'flex-end',
              borderTop: '2px solid #8B6914', marginTop: 6, paddingTop: 6,
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2c1a00', letterSpacing: '0.05em' }}>
                TOTAL &nbsp;&nbsp; 8,324 BDT
              </span>
            </div>
          </div>

          {/* ── Validity stamp ───────────────────────────── */}
          <div style={{
            margin: '0 48px 28px',
            textAlign: 'center',
            padding: '10px 20px',
            border: '2px solid #8B6914',
            borderRadius: 2,
            background: 'linear-gradient(135deg, #fffbe8, #fdf4d0)',
            fontSize: '0.78rem',
            fontWeight: 700,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#5c3d00',
          }}>
            ✦ &nbsp; This Trade License Is Valid Till 30th June 2026 &nbsp; ✦
          </div>

          {/* ── Signature block ───────────────────────────── */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 24,
            padding: '0 48px 28px',
            textAlign: 'center',
          }}>
            {['Tax Officer\nDhaka North City Corporation', 'License & Ad Supervisor\nDhaka North City Corporation'].map((sig, i) => (
              <div key={i}>
                <div style={{
                  height: 36, borderBottom: '1px solid #8B6914',
                  marginBottom: 6, display: 'flex', alignItems: 'flex-end',
                  justifyContent: 'center', color: '#c9a84c', fontSize: '1rem',
                  fontStyle: 'italic',
                }}>
                  Sd./- Illegible
                </div>
                {sig.split('\n').map((line, j) => (
                  <div key={j} style={{ fontSize: '0.68rem', color: '#5c3d00', lineHeight: 1.5 }}>{line}</div>
                ))}
              </div>
            ))}
          </div>

          {/* ── Footer band ──────────────────────────────── */}
          <div style={{
            background: 'linear-gradient(180deg, #7a5c10 0%, #9e7a1e 50%, #7a5c10 100%)',
            padding: '10px 48px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 8,
          }}>
            <div style={{ fontSize: '0.65rem', color: '#fde9a0', letterSpacing: '0.08em' }}>
              www.dncc.gov.bd
            </div>
            <div style={{ fontSize: '0.65rem', color: '#fde9a0', letterSpacing: '0.08em', textAlign: 'center' }}>
              This website is operated by &nbsp;<strong style={{ color: '#fff' }}>{v.legalBusinessName}</strong>
            </div>
            <div style={{ fontSize: '0.65rem', color: '#fde9a0', letterSpacing: '0.08em' }}>
              naviro.online
            </div>
          </div>

        </div>
      </div>

      {/* Below card note */}
      <p style={{ marginTop: 16, fontSize: '0.68rem', color: '#8B6914', letterSpacing: '0.08em', textAlign: 'center' }}>
        Issued: 07/08/2025 &nbsp;·&nbsp; {v.legalBusinessName} &nbsp;·&nbsp; naviro.online
      </p>
    </div>
  );
}

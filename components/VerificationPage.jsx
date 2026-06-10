'use client';
import siteConfig from '@/config/site.config';

const GOLD = '#8B6A00';
const GOLD_LIGHT = '#C9A84C';
const GOLD_PALE = '#F5E9C0';
const INK = '#1a1000';
const INK_MED = '#3d2800';
const INK_LIGHT = '#6b4f1a';
const PAPER = '#FBF7EE';
const PAPER_DARK = '#F0E8D0';

export default function VerificationPage() {
  const v = siteConfig.verification;

  return (
    <div style={{
      minHeight: '100vh',
      background: `repeating-linear-gradient(45deg, #ddd5bb 0px, #ddd5bb 1px, #e8e0cc 1px, #e8e0cc 8px)`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      padding: '40px 16px 60px',
      fontFamily: "'Times New Roman', Times, Georgia, serif",
    }}>

      {/* ── Outer envelope shadow ── */}
      <div style={{
        width: '100%',
        maxWidth: 820,
        boxShadow: '0 2px 4px rgba(0,0,0,0.15), 0 8px 32px rgba(80,50,0,0.25), 0 20px 60px rgba(0,0,0,0.12)',
        borderRadius: 2,
      }}>

        {/* ── Document ── */}
        <div style={{
          background: PAPER,
          border: `1px solid ${GOLD}`,
          position: 'relative',
          overflow: 'hidden',
        }}>

          {/* Paper texture overlay */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
            opacity: 0.6,
          }} />

          {/* Diagonal watermark */}
          <div style={{
            position: 'absolute', top: '40%', left: '50%',
            transform: 'translate(-50%, -50%) rotate(-30deg)',
            fontSize: '7rem', fontWeight: 900, letterSpacing: '0.08em',
            color: 'rgba(139,106,0,0.04)', whiteSpace: 'nowrap',
            pointerEvents: 'none', userSelect: 'none', zIndex: 0,
          }}>
            OFFICIAL COPY
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>

            {/* ══ TOP BORDER BAND ══════════════════════════════════ */}
            <div style={{
              background: `linear-gradient(90deg, ${GOLD} 0%, ${GOLD_LIGHT} 30%, #e8c84a 50%, ${GOLD_LIGHT} 70%, ${GOLD} 100%)`,
              height: 10,
            }} />

            {/* ══ HEADER ══════════════════════════════════════════ */}
            <div style={{
              background: `linear-gradient(180deg, #fdf5dc 0%, ${PAPER} 100%)`,
              borderBottom: `2px solid ${GOLD}`,
              padding: '20px 40px 16px',
              display: 'grid',
              gridTemplateColumns: '80px 1fr 80px',
              alignItems: 'center',
              gap: 12,
            }}>
              {/* Left — Barcode placeholder */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  display: 'inline-flex', flexDirection: 'column', gap: 1.5,
                  padding: '6px 4px',
                  border: `1px solid ${GOLD_LIGHT}`,
                  background: '#fff',
                }}>
                  {Array.from({ length: 18 }).map((_, i) => (
                    <div key={i} style={{
                      height: 1.5,
                      width: i % 3 === 0 ? 48 : i % 2 === 0 ? 36 : 42,
                      background: INK,
                    }} />
                  ))}
                </div>
                <div style={{ fontSize: '0.45rem', color: INK_LIGHT, marginTop: 3, letterSpacing: '0.08em' }}>BARCODE</div>
              </div>

              {/* Center — Title */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: '0.58rem', letterSpacing: '0.25em',
                  textTransform: 'uppercase', color: INK_LIGHT, marginBottom: 4,
                }}>
                  Government of the People's Republic of Bangladesh
                </div>
                <div style={{
                  fontSize: '0.58rem', letterSpacing: '0.2em',
                  textTransform: 'uppercase', color: INK_LIGHT, marginBottom: 8,
                }}>
                  Dhaka North City Corporation
                </div>
                <div style={{
                  fontSize: 'clamp(1.3rem, 3vw, 1.9rem)',
                  fontWeight: 900, color: INK,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  lineHeight: 1.1, marginBottom: 4,
                }}>
                  E-TRADE LICENCE
                </div>
                <div style={{
                  fontSize: '0.7rem', color: INK_MED,
                  letterSpacing: '0.1em',
                }}>
                  License No : <strong>TRAD/DNCC/007457/2014</strong>
                </div>
              </div>

              {/* Right — Monogram */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: 64, height: 64, borderRadius: '50%',
                  border: `2px solid ${GOLD}`,
                  background: `radial-gradient(circle at 35% 35%, #fff8dc, ${GOLD_PALE})`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto',
                  boxShadow: `0 2px 8px rgba(139,106,0,0.2)`,
                  fontSize: '1.6rem',
                }}>
                  🏛
                </div>
                <div style={{ fontSize: '0.45rem', color: INK_LIGHT, marginTop: 3, letterSpacing: '0.05em' }}>MONOGRAM</div>
              </div>
            </div>

            {/* ══ PREAMBLE ════════════════════════════════════════ */}
            <div style={{
              padding: '12px 40px',
              borderBottom: `1px solid ${GOLD_PALE}`,
              fontSize: '0.78rem', color: INK_MED,
              lineHeight: 1.7, textAlign: 'justify',
              background: `linear-gradient(180deg, rgba(245,233,192,0.3) 0%, transparent 100%)`,
            }}>
              This Trade license is issued in favor of the following Individual/Firm with a view to collecting
              the Tax whatever imposed on calling, Trade or livelihood in accordance with article No. 84/2009
              of model tax Schedule prescribed by the local government by the right conferred in section
              No. 10/2016 of Dhaka City Corporation Ordinance, 2016.
            </div>

            {/* ══ NUMBERED FIELDS ════════════════════════════════ */}
            <div style={{ padding: '12px 40px 0' }}>
              {[
                ['1.', 'Name of Business', 'CAREER ASSOCIATES BANGLADESH-CAB'],
                ['2.', 'Name of proprietor', 'MOH SAMSUDDIN MANNA'],
                ['3.', "Father's Name", 'MAKSUDUR RAHMAN'],
                ['4.', "Mother's Name", 'MONOARA BEGUM'],
                ['5.', '', ''],
                ['6.', 'Nature of Business', 'INDIVIDUAL'],
                ['7.', 'Types of Business', 'EDUCATIONAL CONSULTANCY'],
                ['8.', 'Address of Business', '5/1, FLAT A4, LIFT-4, BLOCK D, LALMATIA, DHANMONDI-1207, DHAKA'],
                ['9.', 'Area/Bazaar Branch', '5 KAWRAN BAZAR'],
              ].map(([num, label, value]) => (
                <div key={num} style={{
                  display: 'grid',
                  gridTemplateColumns: '26px 185px auto 1fr',
                  alignItems: 'baseline',
                  gap: '0 8px',
                  padding: '4px 0',
                  borderBottom: `1px solid rgba(139,106,0,0.12)`,
                  minHeight: 24,
                }}>
                  <span style={{ fontSize: '0.78rem', color: GOLD, fontWeight: 700 }}>{num}</span>
                  <span style={{ fontSize: '0.78rem', color: INK_MED }}>{label}</span>
                  <span style={{ fontSize: '0.78rem', color: INK_MED }}>:</span>
                  <span style={{ fontSize: '0.8rem', color: INK, fontWeight: label ? 600 : 400 }}>{value}</span>
                </div>
              ))}

              {/* NID + Phone row */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '26px 185px auto 1fr',
                alignItems: 'baseline',
                gap: '0 8px',
                padding: '4px 0',
                borderBottom: `1px solid rgba(139,106,0,0.12)`,
              }}>
                <span style={{ fontSize: '0.78rem', color: GOLD, fontWeight: 700 }}>10.</span>
                <span style={{ fontSize: '0.78rem', color: INK_MED }}>NID/Passport/Birth</span>
                <span style={{ fontSize: '0.78rem', color: INK_MED }}>:</span>
                <span style={{ fontSize: '0.8rem', color: INK, fontWeight: 600 }}>
                  8707827963 &nbsp;&nbsp;
                  <span style={{ fontWeight: 400, color: INK_MED }}>BIN No :</span>
                  &nbsp; —
                </span>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '26px 185px auto 1fr',
                alignItems: 'baseline',
                gap: '0 8px',
                padding: '4px 0',
                borderBottom: `1px solid rgba(139,106,0,0.12)`,
              }}>
                <span style={{ fontSize: '0.78rem', color: GOLD, fontWeight: 700 }}></span>
                <span style={{ fontSize: '0.78rem', color: INK_MED }}>Phone</span>
                <span style={{ fontSize: '0.78rem', color: INK_MED }}>:</span>
                <span style={{ fontSize: '0.8rem', color: INK, fontWeight: 600 }}>
                  01896192000 &nbsp; 01896192001 &nbsp;&nbsp;
                  <span style={{ fontWeight: 400, color: INK_MED }}>E-Mail :</span>
                  &nbsp; shamsmanna@gmail.com
                </span>
              </div>
            </div>

            {/* ══ LEGAL BUSINESS NAME HIGHLIGHT ══════════════════ */}
            <div style={{
              margin: '16px 40px',
              border: `2px solid ${GOLD}`,
              background: `linear-gradient(135deg, #fffdf0, ${GOLD_PALE})`,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              padding: '12px 20px',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: `linear-gradient(135deg, ${GOLD}, ${GOLD_LIGHT})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, fontSize: '1.2rem', color: '#fff',
                boxShadow: `0 2px 8px rgba(139,106,0,0.35)`,
              }}>⚜</div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: GOLD, marginBottom: 3,
                }}>
                  Legal Business Name — Registered with Meta Business Suite
                </div>
                <div style={{
                  fontSize: '1.35rem', fontWeight: 900, color: INK,
                  letterSpacing: '0.03em', lineHeight: 1.1,
                }}>
                  {v.legalBusinessName}
                </div>
              </div>
              <div style={{
                textAlign: 'center',
                padding: '6px 14px',
                border: `1px solid ${GOLD}`,
                background: '#fff',
              }}>
                <div style={{ fontSize: '0.5rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 2 }}>Verified</div>
                <div style={{ fontSize: '1.1rem' }}>✓</div>
                <div style={{ fontSize: '0.48rem', color: INK_LIGHT }}>naviro.online</div>
              </div>
            </div>

            {/* ══ DATES ROW ══════════════════════════════════════ */}
            <div style={{
              margin: '0 40px 16px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              border: `1px solid rgba(139,106,0,0.25)`,
              background: `rgba(245,233,192,0.2)`,
            }}>
              {[
                ['Arrear Year', '2025–2026 (RENEW)'],
                ['Business Start Date', '22/08/2024'],
                ['Date of Issue', '07/08/2025 · 16:34'],
              ].map(([label, val], i) => (
                <div key={label} style={{
                  padding: '8px 14px',
                  borderRight: i < 2 ? `1px solid rgba(139,106,0,0.2)` : 'none',
                }}>
                  <div style={{ fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: INK }}>{val}</div>
                </div>
              ))}
            </div>

            {/* ══ ADDRESS BLOCK ════════════════════════════════ */}
            <div style={{
              margin: '0 40px 16px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              border: `1px solid rgba(139,106,0,0.25)`,
              background: `rgba(245,233,192,0.15)`,
            }}>
              <div style={{ padding: '10px 14px', borderRight: `1px solid rgba(139,106,0,0.2)` }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD, marginBottom: 6, borderBottom: `1px solid rgba(139,106,0,0.15)`, paddingBottom: 4 }}>
                  Present Address of Owner
                </div>
                {[['Holding No', 'H#168'], ['Road No', 'ROAD-4'], ['Vill./Area', 'MOHAMMADIA HOUSING'], ['Post', '1207'], ['Police Station', 'MOHAMMADPUR'], ['District', 'DHAKA'], ['Division', 'DHAKA']].map(([l, v]) => (
                  <div key={l} style={{ display: 'flex', gap: 6, fontSize: '0.72rem', lineHeight: 1.6 }}>
                    <span style={{ color: INK_LIGHT, minWidth: 90 }}>{l}</span>
                    <span style={{ color: INK_MED }}>:</span>
                    <span style={{ color: INK, fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ padding: '10px 14px' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD, marginBottom: 6, borderBottom: `1px solid rgba(139,106,0,0.15)`, paddingBottom: 4 }}>
                  Permanent Address of Owner
                </div>
                {[['Holding No', 'SOFI ULLAH MASTER BARI'], ['Road No', '—'], ['Vill./Area', 'GOVINDOPUR'], ['Post', 'RUPCHARA-3705'], ['Police Station', 'LAKSHNIPUR SADAR'], ['District', 'LAKSHNIPUR'], ['Division', 'CHATTOGRAM']].map(([l, v]) => (
                  <div key={l} style={{ display: 'flex', gap: 6, fontSize: '0.72rem', lineHeight: 1.6 }}>
                    <span style={{ color: INK_LIGHT, minWidth: 90 }}>{l}</span>
                    <span style={{ color: INK_MED }}>:</span>
                    <span style={{ color: INK, fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ══ FEE TABLE ═══════════════════════════════════ */}
            <div style={{ margin: '0 40px 16px' }}>
              <table style={{
                width: '100%', borderCollapse: 'collapse',
                fontSize: '0.76rem', color: INK_MED,
                border: `1px solid rgba(139,106,0,0.3)`,
              }}>
                <thead>
                  <tr style={{ background: `linear-gradient(90deg, ${GOLD_PALE}, rgba(245,233,192,0.5))` }}>
                    {['Fee Type', 'Amount (BDT)', 'Fee Type', 'Amount (BDT)'].map((h, i) => (
                      <th key={i} style={{
                        padding: '6px 10px', textAlign: i % 2 === 0 ? 'left' : 'right',
                        fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: GOLD, fontWeight: 700,
                        borderBottom: `1px solid rgba(139,106,0,0.3)`,
                        borderRight: i < 3 ? `1px solid rgba(139,106,0,0.15)` : 'none',
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Trade License/Renewal Fee', '3,000', 'Signboard Tax', '960'],
                    ['Surcharge', '0', 'VAT', '594'],
                    ['Income Tax/Source Tax', '3,000', 'Book fee', '270'],
                    ['Due', '0', 'Others', '500'],
                    ['Amendment Fee', '0.00', 'Form fee', '—'],
                  ].map((row, ri) => (
                    <tr key={ri} style={{ background: ri % 2 === 0 ? 'transparent' : 'rgba(245,233,192,0.12)' }}>
                      {row.map((cell, ci) => (
                        <td key={ci} style={{
                          padding: '5px 10px',
                          textAlign: ci % 2 === 0 ? 'left' : 'right',
                          borderBottom: `1px solid rgba(139,106,0,0.08)`,
                          borderRight: ci < 3 ? `1px solid rgba(139,106,0,0.12)` : 'none',
                          fontWeight: ci % 2 === 1 ? 700 : 400,
                          color: ci % 2 === 1 ? INK : INK_MED,
                          fontFamily: ci % 2 === 1 ? 'monospace' : 'inherit',
                        }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                  <tr style={{ background: GOLD_PALE }}>
                    <td colSpan={3} style={{
                      padding: '7px 10px', fontWeight: 700, color: INK,
                      fontSize: '0.8rem', borderTop: `2px solid ${GOLD}`,
                      letterSpacing: '0.06em',
                    }}>TOTAL</td>
                    <td style={{
                      padding: '7px 10px', textAlign: 'right',
                      fontWeight: 900, color: INK, fontSize: '0.88rem',
                      fontFamily: 'monospace', borderTop: `2px solid ${GOLD}`,
                    }}>8,324</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* ══ VALIDITY STAMP ══════════════════════════════ */}
            <div style={{
              margin: '0 40px 20px',
              border: `2px solid ${GOLD}`,
              background: `linear-gradient(135deg, #fffdf0, ${GOLD_PALE})`,
              textAlign: 'center',
              padding: '10px 20px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)',
                fontSize: '1.2rem', opacity: 0.4,
              }}>❋</div>
              <div style={{
                position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                fontSize: '1.2rem', opacity: 0.4,
              }}>❋</div>
              <div style={{
                fontSize: '0.82rem', fontWeight: 700, color: INK,
                letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>
                THIS TRADE LICENSE IS VALID TILL 30TH JUNE 2026
              </div>
            </div>

            {/* ══ SIGNATURE + PHOTO BLOCK ═════════════════════ */}
            <div style={{
              margin: '0 40px 0',
              display: 'grid',
              gridTemplateColumns: '1fr 110px 1fr',
              gap: 20,
              alignItems: 'end',
              paddingBottom: 20,
            }}>
              {/* Left sig */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  height: 50, borderBottom: `1px solid ${GOLD}`,
                  display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                  paddingBottom: 4, fontSize: '0.85rem', fontStyle: 'italic',
                  color: INK_LIGHT, fontFamily: 'cursive',
                }}>
                  Sd./- Illegible
                </div>
                <div style={{ fontSize: '0.65rem', color: INK_MED, marginTop: 4, lineHeight: 1.5 }}>
                  Tax Officer<br />Dhaka North City Corporation
                </div>
              </div>

              {/* Photo placeholder */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: 90, height: 110, margin: '0 auto',
                  border: `1px solid ${GOLD}`,
                  background: `linear-gradient(135deg, #f5edd8, #ede0c0)`,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: 4,
                }}>
                  <div style={{ fontSize: '1.8rem', opacity: 0.3 }}>👤</div>
                  <div style={{ fontSize: '0.42rem', letterSpacing: '0.06em', textTransform: 'uppercase', color: INK_LIGHT, textAlign: 'center', lineHeight: 1.4 }}>
                    Photograph<br />of the Holder
                  </div>
                </div>
              </div>

              {/* Right sig */}
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  height: 50, borderBottom: `1px solid ${GOLD}`,
                  display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
                  paddingBottom: 4, fontSize: '0.85rem', fontStyle: 'italic',
                  color: INK_LIGHT, fontFamily: 'cursive',
                }}>
                  Sd./- Illegible
                </div>
                <div style={{ fontSize: '0.65rem', color: INK_MED, marginTop: 4, lineHeight: 1.5 }}>
                  License &amp; Ad Supervisor<br />Dhaka North City Corporation
                </div>
              </div>
            </div>

            {/* ══ BOTTOM BAND ══════════════════════════════════ */}
            <div style={{
              background: `linear-gradient(90deg, ${GOLD} 0%, ${GOLD_LIGHT} 30%, #e8c84a 50%, ${GOLD_LIGHT} 70%, ${GOLD} 100%)`,
              padding: '8px 40px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 6,
            }}>
              <div style={{ fontSize: '0.6rem', color: '#3a2200', letterSpacing: '0.1em' }}>
                www.dncc.gov.bd
              </div>
              <div style={{ fontSize: '0.65rem', color: '#2a1500', fontWeight: 700, letterSpacing: '0.08em', textAlign: 'center' }}>
                This website is operated by &nbsp;<span style={{ fontWeight: 900 }}>{v.legalBusinessName}</span>
              </div>
              <div style={{ fontSize: '0.6rem', color: '#3a2200', letterSpacing: '0.1em' }}>
                naviro.online
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Below note */}
      <p style={{
        marginTop: 16, fontSize: '0.68rem', color: '#7a6040',
        letterSpacing: '0.08em', textAlign: 'center', lineHeight: 1.7,
      }}>
        Issued: 07/08/2025 &nbsp;·&nbsp; <strong>{v.legalBusinessName}</strong> &nbsp;·&nbsp; naviro.online
        <br />
        <span style={{ fontSize: '0.6rem', opacity: 0.7 }}>
          To switch back to the main website: set <code style={{ background: 'rgba(0,0,0,0.08)', padding: '1px 5px', borderRadius: 3 }}>siteMode: "live"</code> in config/site.config.js
        </span>
      </p>

    </div>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  level = 2,
  underline = true,
  underlineGap = 16,
  marginBottom = 64,
}) {
  const Title = level === 3 ? 'h3' : 'h2';
  const titleProps = level === 3
    ? {
        className: 'reveal',
        style: {
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: 'var(--text-h3)',
          color: 'white',
          letterSpacing: 'var(--ls-tight)',
        },
      }
    : { className: 'section-title reveal', style: { textAlign: 'center' } };

  return (
    <div style={{ textAlign: 'center', marginBottom }}>
      <div className="eyebrow reveal" style={{ justifyContent: 'center' }}>{eyebrow}</div>
      <Title {...titleProps}>
        {title}
        {highlight && <>{' '}<span className="gradient-text">{highlight}</span></>}
      </Title>
      {subtitle && (
        <p className="section-subtitle reveal" style={{ margin: '16px auto 0', textAlign: 'center' }}>
          {subtitle}
        </p>
      )}
      {underline && <span className="neon-underline" style={{ margin: `${underlineGap}px auto 0` }} />}
    </div>
  );
}

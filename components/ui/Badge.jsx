export default function Badge({ type, children, ...props }) {
  return (
    <span className={type === 'green' ? 'green-badge' : 'blue-badge'} {...props}>
      {children}
    </span>
  );
}

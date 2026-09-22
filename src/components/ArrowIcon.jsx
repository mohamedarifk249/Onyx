export default function ArrowIcon({ className = 'h-7 w-7', bare = false }) {
  const arrow = (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={bare ? className : 'h-3.5 w-3.5'}
      aria-hidden="true"
    >
      <path d="M4.5 12h13" />
      <path d="M12.5 6.5 18.5 12l-6 5.5" />
    </svg>
  );

  if (bare) return arrow;

  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-full bg-current/15 ${className}`}>
      {arrow}
    </span>
  );
}

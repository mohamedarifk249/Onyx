const shared = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: '1.75',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
};

export function GaugeIcon({ className = '' }) {
  return (
    <svg {...shared} className={className}>
      <path d="M4 16a8 8 0 1 1 16 0" />
      <path d="M12 16 15.5 10.5" />
      <circle cx="12" cy="16" r="1.15" fill="currentColor" stroke="none" />
      <path d="M4 16h1.5M18.5 16H20M6.2 9.8l1.1 1.1M17.8 9.8l-1.1 1.1" />
    </svg>
  );
}

export function WrenchIcon({ className = '' }) {
  return (
    <svg {...shared} className={className}>
      <path d="M14.7 6.3a3.5 3.5 0 0 0-4.6 4.2L4 16.6V20h3.4l6.1-6.1a3.5 3.5 0 0 0 4.2-4.6l-2.55 2.55-1.9-.6-.6-1.9Z" />
    </svg>
  );
}

export function SlidersIcon({ className = '' }) {
  return (
    <svg {...shared} className={className}>
      <path d="M4 7h9M17 7h3M4 17h3M11 17h9" />
      <circle cx="13" cy="7" r="2" />
      <circle cx="9" cy="17" r="2" />
    </svg>
  );
}

export function NetworkIcon({ className = '' }) {
  return (
    <svg {...shared} className={className}>
      <circle cx="6" cy="6.5" r="2.1" />
      <circle cx="18" cy="6.5" r="2.1" />
      <circle cx="12" cy="17.5" r="2.1" />
      <path d="M7.7 7.7 10.4 15.9M16.3 7.7 13.6 15.9M8.1 6.5h7.8" />
    </svg>
  );
}

export function CalendarIcon({ className = '' }) {
  return (
    <svg {...shared} className={className}>
      <rect x="4" y="5.3" width="16" height="14.2" rx="1.8" />
      <path d="M4 9.5h16M8 3.3v3.4M16 3.3v3.4" />
      <path d="M8.2 13h1.4M8.2 16h1.4M12.3 13h1.4M12.3 16h1.4M16.4 13h1.4" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = '' }) {
  return (
    <svg {...shared} className={className}>
      <path d="M12 3.4 5.3 5.9v5.3c0 4.3 2.9 7.8 6.7 9.1 3.8-1.3 6.7-4.8 6.7-9.1V5.9L12 3.4Z" />
      <path d="m8.9 11.9 2.1 2.1 4.1-4.3" />
    </svg>
  );
}

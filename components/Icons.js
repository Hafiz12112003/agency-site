const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function DesignIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...base}>
      <rect x="6" y="8" width="26" height="26" rx="7" />
      <circle cx="19" cy="21" r="5" />
      <path d="M28 28l14 4-6 3-3 6z" fill="currentColor" />
    </svg>
  );
}

export function CodeIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...base}>
      <rect x="4" y="9" width="40" height="30" rx="7" />
      <path d="M18 19l-5 5 5 5M30 19l5 5-5 5M26 17l-4 14" />
    </svg>
  );
}

export function BrandIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...base}>
      <path d="M24 5l5.5 12.5L42 23l-12.5 5.5L24 41l-5.5-12.5L6 23l12.5-5.5z" />
      <circle cx="38" cy="9" r="2.5" fill="currentColor" />
    </svg>
  );
}

export function GrowthIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className} {...base}>
      <path d="M6 38h36" />
      <path d="M9 30l10-10 8 6 13-15" />
      <path d="M31 11h9v9" />
    </svg>
  );
}

export function ArrowIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MailIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="M3 8l9 6 9-6" />
    </svg>
  );
}

export function PinIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.5C5 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function ClockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function SparkIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
    </svg>
  );
}

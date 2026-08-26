export function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 4.5 6 8l3.5-3.5" />
    </svg>
  );
}

// TODO: swap for the real menu-icon.png asset once supplied by the business.
export function ForkKnifeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 3v7a2 2 0 0 0 2 2v9M6 3v7M9 3v7M6 10a2 2 0 0 1-2-2V3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 3c-1.7 0-3 2-3 5s1.3 5 3 5v8M17 3v18" />
    </svg>
  );
}

// TODO: swap for the real order-icon.png asset once supplied by the business.
export function ClocheIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18M4 18a8 8 0 0 1 16 0M12 6V3" />
      <path strokeLinecap="round" d="M10.5 3h3" />
    </svg>
  );
}

export function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} className={className}>
      <path strokeLinecap="round" d="M3 3l10 10M13 3 3 13" />
    </svg>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path d="M10 1.5l2.47 5.63 6.1.62-4.6 4.13 1.32 6-5.29-3.16-5.29 3.16 1.32-6-4.6-4.13 6.1-.62L10 1.5Z" />
    </svg>
  );
}

export function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        fill="#4285F4"
        d="M23.52 12.27c0-.85-.08-1.67-.22-2.45H12v4.64h6.47a5.53 5.53 0 0 1-2.4 3.63v3h3.89c2.28-2.1 3.56-5.2 3.56-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.95-2.91l-3.89-3c-1.08.73-2.46 1.16-4.06 1.16-3.12 0-5.77-2.11-6.72-4.94H1.27v3.1A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.31A7.2 7.2 0 0 1 4.9 12c0-.8.14-1.58.38-2.31v-3.1H1.27A12 12 0 0 0 0 12c0 1.94.46 3.77 1.27 5.4l4.01-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.76 0 3.34.6 4.59 1.79l3.44-3.44C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.27 6.6l4.01 3.1c.95-2.84 3.6-4.95 6.72-4.95Z"
      />
    </svg>
  );
}

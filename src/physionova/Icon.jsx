// Tiny inline-SVG icon set so PhysioNova stays dependency-free.
// Every icon inherits `currentColor` and a 1.75 stroke for a consistent look.

const PATHS = {
  clipboard: (
    <>
      <rect x="8" y="4" width="8" height="4" rx="1" />
      <path d="M9 4H7a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2" />
      <path d="M9 12h6M9 16h4" />
    </>
  ),
  hands: (
    <>
      <path d="M11 11V5.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M14 10.5V4.5a1.5 1.5 0 0 1 3 0V12" />
      <path d="M8 11V7.5a1.5 1.5 0 0 1 3 0V11" />
      <path d="M8 11v-.5a1.5 1.5 0 0 0-3 0V14c0 3.5 2.5 6 6 6h1a6 6 0 0 0 6-6v-2" />
    </>
  ),
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  needle: (
    <>
      <path d="M19 5 9 15l-2 4 4-2L21 7" />
      <path d="m14 10 1.5 1.5M5 19l2-2" />
    </>
  ),
  chair: (
    <>
      <path d="M6 5v6a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V5" />
      <path d="M16 13v3a2 2 0 0 1-2 2H8M8 21v-3M16 21v-3M6 18h10" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19c0-7 5-13 14-13 0 9-6 14-13 14-1 0-1-1-1-1z" />
      <path d="M5 19c3-4 6-6 10-7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 5 5L19 13l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: <path d="m5 13 4 4L19 7" />,
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  star: (
    <path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z" />
  ),
};

export default function Icon({ name, className = "w-6 h-6", strokeWidth = 1.75 }) {
  const path = PATHS[name];
  if (!path) return null;
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}

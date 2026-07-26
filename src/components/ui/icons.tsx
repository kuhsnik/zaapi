import type { SVGProps } from "react";

/* One icon system: 24px grid, 1.7 stroke, round caps and joins.
   Drawn in-house rather than reproducing third-party brand logos. */
function Svg(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  );
}

export function IconBag(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M4.5 8h15l-1.1 11.1a2 2 0 0 1-2 1.8H7.6a2 2 0 0 1-2-1.8L4.5 8Z" />
      <path d="M8.8 10.4V6.9a3.2 3.2 0 0 1 6.4 0v3.5" />
    </Svg>
  );
}

export function IconParcel(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M12 3.2 20.3 7.6v8.8L12 20.8 3.7 16.4V7.6L12 3.2Z" />
      <path d="M3.9 7.7 12 12.1l8.1-4.4M12 12.1v8.6" />
    </Svg>
  );
}

export function IconPlayBag(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M4.6 8h14.8l-1.1 11.1a2 2 0 0 1-2 1.8H7.7a2 2 0 0 1-2-1.8L4.6 8Z" />
      <path d="M8.8 8V6.9a3.2 3.2 0 0 1 6.4 0V8" />
      <path d="M10.8 12.7v4l3.4-2-3.4-2Z" />
    </Svg>
  );
}

export function IconBubble(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M20.5 11.4c0 4-3.8 7.2-8.5 7.2a10 10 0 0 1-2.2-.24L4.8 20.6l1.1-3.4a6.9 6.9 0 0 1-2.4-5.1c0-4 3.8-7.2 8.5-7.2s8.5 3.2 8.5 7.2Z" />
    </Svg>
  );
}

export function IconBubbleDots(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M20.6 11.6a8.4 8.4 0 0 1-11.9 7.7L4 20.8l1.6-4.5a8.4 8.4 0 1 1 15-4.7Z" />
      <path d="M9 12h.01M12.2 12h.01M15.4 12h.01" strokeWidth={2.3} />
    </Svg>
  );
}

export function IconBubbleBolt(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M12 3.4c-4.8 0-8.6 3.5-8.6 7.9 0 2.4 1.2 4.6 3 6v3.3l3.1-1.7c.8.2 1.6.3 2.5.3 4.8 0 8.6-3.5 8.6-7.9S16.8 3.4 12 3.4Z" />
      <path d="m8.6 13.4 2.6-3.2 2 1.8 2.3-2.6" />
    </Svg>
  );
}

export function IconCamera(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="5.2" />
      <circle cx="12" cy="12" r="3.9" />
      <path d="M16.9 7.1h.01" strokeWidth={2.3} />
    </Svg>
  );
}

export function IconWindow(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <rect x="3" y="4.4" width="18" height="15.2" rx="2.6" />
      <path d="M3 8.9h18" />
      <path d="M7.6 13.2h6.4M7.6 16.1h4" />
    </Svg>
  );
}

export function IconMail(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.6" />
      <path d="m3.6 7.3 7.2 5a2 2 0 0 0 2.4 0l7.2-5" />
    </Svg>
  );
}

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="m4.8 12.6 4.6 4.6L19.2 7" />
    </Svg>
  );
}

export function IconArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M4.8 12h14.4M13.4 6.2 19.2 12l-5.8 5.8" />
    </Svg>
  );
}

export function IconArrowDown(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M12 4.8v14.4M6.2 13.4 12 19.2l5.8-5.8" />
    </Svg>
  );
}

export function IconPerson(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="8.2" r="3.7" />
      <path d="M4.9 20.2a7.4 7.4 0 0 1 14.2 0" />
    </Svg>
  );
}

export function IconBolt(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <path d="M13.4 3 5.6 13.4h5.2L10.6 21l7.8-10.4h-5.2L13.4 3Z" />
    </Svg>
  );
}

export function IconClock(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7.2V12l3.2 1.9" />
    </Svg>
  );
}

export function IconCalendar(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <rect x="3.4" y="5.2" width="17.2" height="15.4" rx="2.8" />
      <path d="M3.4 10h17.2M8.4 3.4v3.4M15.6 3.4v3.4" />
    </Svg>
  );
}

export function IconLock(props: SVGProps<SVGSVGElement>) {
  return (
    <Svg {...props}>
      <rect x="4.4" y="10.4" width="15.2" height="10.2" rx="2.6" />
      <path d="M8.2 10.4V7.8a3.8 3.8 0 0 1 7.6 0v2.6" />
    </Svg>
  );
}

export function IconGoogle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47a5.54 5.54 0 0 1-2.4 3.63v3h3.88c2.27-2.09 3.55-5.17 3.55-8.87Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.08 7.95-2.91l-3.88-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.28v3.09A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.28a7.2 7.2 0 0 1 0-4.56V6.63H1.28a12 12 0 0 0 0 10.74l3.99-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.44-3.44C17.95 1.17 15.23 0 12 0A12 12 0 0 0 1.28 6.63l3.99 3.09C6.22 6.87 8.87 4.75 12 4.75Z"
      />
    </svg>
  );
}

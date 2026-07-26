import Image from "next/image";
import Link from "next/link";

export function Logo({
  className = "",
  href = "/",
}: {
  className?: string;
  href?: string;
}) {
  return (
    /* py-2 gives the link a 44px tap height without changing how it looks —
       the header centres it, so nothing moves. */
    <Link
      href={href}
      className={`inline-flex items-center py-2 ${className}`}
      aria-label="Zaapi — home"
    >
      <Image
        src="/zaapi-logo.png"
        alt="Zaapi"
        width={1080}
        height={464}
        priority
        className="h-7 w-auto sm:h-[30px]"
      />
    </Link>
  );
}

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/zaapi-mark.png"
      alt=""
      width={512}
      height={681}
      className={className}
    />
  );
}

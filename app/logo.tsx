import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <span className="text-md md:text-lg whitespace-nowrap font-bold">
        <span className="pr-2">DION</span>
      </span>
    </Link>
  );
}

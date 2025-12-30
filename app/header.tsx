"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./logo";

const LINKS = {
  posts: { href: "/", label: "Posts" },
  about: { href: "/about", label: "About" },
};

export function Header() {
  const pathname = usePathname();
  const link = pathname === "/" ? LINKS.about : LINKS.posts;

  return (
    <header className="flex mb-5 md:mb-10 items-center">
      <Logo />

      <nav className="flex grow justify-end items-center text-xs">
        <Link href={link.href} className="group">
          <span className="inline-flex py-1.5 px-2 rounded-sm group-hover:bg-neutral-200 dark:group-hover:bg-neutral-700 transition-colors">
            {link.label}
          </span>
        </Link>
      </nav>
    </header>
  );
}

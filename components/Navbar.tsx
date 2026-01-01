"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    `relative pb-1 ${
      pathname === href
        ? "after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-black"
        : "hover:after:absolute hover:after:left-0 hover:after:-bottom-0.5 hover:after:h-[2px] hover:after:w-full hover:after:bg-black/40"
    }`;

  return (
    <nav
      className="
        sticky top-0 z-50
        bg-white/90 backdrop-blur
        flex flex-col md:flex-row
        items-center justify-between
        px-6 md:px-10
        py-4 md:py-6
        gap-4
      "
    >
      <Link href="/" className="font-heading text-xl tracking-wide">
        MEMO SOME
      </Link>

      <ul className="flex gap-6 text-sm">
        <li>
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={linkClass("/about")}>
            About
          </Link>
        </li>
        <li>
          <Link href="/blog" className={linkClass("/blog")}>
            Blog
          </Link>
        </li>
        <li>
          <Link href="/projects" className={linkClass("/projects")}>
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

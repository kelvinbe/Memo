import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-[#FBF6EE]">
      <Link href="/" className="font-serif text-xl tracking-wide">
        MEMO SOME
      </Link>

      <ul className="flex gap-8 text-sm">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/featured">Featured Posts</Link>
        </li>
      </ul>
    </nav>
  );
}

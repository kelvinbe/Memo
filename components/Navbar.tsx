import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex text-black flex-col md:flex-row items-center justify-between px-6 md:px-10 py-4 md:py-6  gap-4">
      
      <div className="flex items-center">
      
      <Link href="/" className="font-heading text-xl tracking-wide">
        MEMO SOME
      </Link>
      </div>

      <ul className="flex gap-6 text-sm">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
  );
}

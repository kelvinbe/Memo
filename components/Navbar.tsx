import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex text-black flex-col md:flex-row items-center justify-between px-6 md:px-10 py-4 md:py-6 bg-[#FBF6EE] gap-4">
      
      <Link href="/" className="font-serif text-xl tracking-wide">
        MEMO SOME
      </Link>

      <ul className="flex gap-6 text-sm">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/portfolio">Portfolio</Link></li>
      </ul>
    </nav>
  );
}

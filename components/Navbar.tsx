import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex text-black flex-col md:flex-row items-center justify-between px-6 md:px-10 py-4 md:py-6 bg-[#FBF6EE] gap-4">
      
      <div className="flex items-center">
      <Image src="/some.png" alt="Logo" width={60} height={60} className="inline-block mr-2 mb-1"/>
      
      <Link href="/" className="font-serif text-xl tracking-wide">
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

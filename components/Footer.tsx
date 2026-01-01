export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-16 py-16 md:py-20">
      
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3 items-start">
        
        {/* Brand / Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading">
            Stay Connected
          </h2>
          <p className="text-sm text-white/80 leading-relaxed">
            Stories, policy insights, and conservation work from the field
            bridging people, wildlife, and purpose.
          </p>
        </div>

        {/* Contact */}
        <div className="space-y-2 text-sm text-white/80">
          <p className="font-semibold text-white">Contact</p>
          <p>Kenya</p>
          <a
            href="mailto:memosomeh@gmail.com"
            className="hover:text-sky-400 transition-colors"
          >
            memosomeh@gmail.com
          </a>
        </div>

        {/* Social / Links */}
        <div className="space-y-2 text-sm text-white/80">
          <p className="font-semibold text-white">Connect</p>
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Instagram</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto mt-16 flex flex-col md:flex-row gap-4 md:gap-0 justify-between text-xs text-white/60">
        <p>© {new Date().getFullYear()} Memo Some. All rights reserved.</p>
        <p>
          Made with <span className="text-red-400">♥</span> by Beno
        </p>
      </div>
    </footer>
  );
}

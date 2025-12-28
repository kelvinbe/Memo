export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-10 py-16 md:py-20">
      
      <div className="grid gap-10 md:grid-cols-3 items-start">
        
        <h2 className="text-3xl md:text-4xl">
          Stay Connected with Memo
        </h2>

        <div className="text-sm space-y-2">
          <p>Privacy Policy</p>
          <p>Accessibility Statement</p>
        </div>

        <div className="text-sm space-y-2">
          <p>Kenya</p>
          <p>info@mysite.com</p>
          <p>123-456-7890</p>
        </div>
      </div>

      <div className="mt-12 flex text-white flex-col md:flex-row gap-4 md:gap-0 justify-between text-xs opacity-70">
        <p>© 2026 by MEMO SOME.</p>
        <p>Made with ❤️ by Beno</p>
      </div>
    </footer>
  );
}

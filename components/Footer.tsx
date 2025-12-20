export default function Footer() {
  return (
    <footer className="bg-[#F8E7D5] px-10 py-20">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        
        <h2 className="font-serif text-4xl">
          Stay Connected with Us
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

      <div className="mt-16 flex justify-between text-xs opacity-70">
        <p>© 2035 by MEMO SOME.</p>
        <p>Powered and secured by Wix</p>
      </div>
    </footer>
  );
}

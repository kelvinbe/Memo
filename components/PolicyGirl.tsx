import Image from "next/image";

export default function PolicyGirl() {
  return (
    <section className="relative min-h-[85vh] flex flex-col md:flex-row bg-[#404241] overflow-hidden">
      
      {/* Image (Top on mobile, Left on desktop) */}
      <div className="relative w-full md:w-1/2 h-[60vh] md:h-auto">
        <Image
          src="/vb.jpg"
          alt="Portrait"
          fill
          priority
          className="object-cover object-top"
        />
      </div>

      {/* Text Content (Bottom on mobile, Right on desktop) */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 py-12 md:py-0">
        <div className="max-w-lg text-white text-center md:text-left">
          
          <span className="font-heading text-xs md:text-sm tracking-widest mb-4 block uppercase">
            Wildlife Policy & Conservation
          </span>

          <h1 className="font-heading text-4xl md:text-6xl tracking-wide mb-6">
            POLICY MAKER
          </h1>

          <p className="text-sm md:text-base leading-7 text-white/90">
            “You cannot protect the environment unless you empower people, 
            you inform them, and you help them understand that these resources 
            are their own, that they must
            protect them.”
          </p>
        </div>
      </div>
    </section>
  );
}
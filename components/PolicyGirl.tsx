import Image from "next/image";
import Link from "next/link";

export default function PolicyGirl() {
  return (
    <section className="relative min-h-[85vh]  flex items-center justify-center bg-[#EFE6DA] px-4">
      
      {/* Background image */}
      <Image
        src="/green.jpg"
        alt="Lifestyle background"
        fill
        priority
        className="object-cover opacity-60"
      />

      

      {/* Content Band */}
      <div className="relative rounded-md z-10 bg-[lab(30_-12.31_-5.07_/_0.95)] max-w-6xl w-full 
                      flex flex-col md:flex-row 
                      items-center gap-8 md:gap-12 
                      px-6 py-10 md:px-12 md:py-14">
        
        {/* Oval Portrait */}
        <div className="relative w-48 h-64 md:w-64 md:h-80 shrink-0">
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <Image
              src="/for.jpg"
              alt="Portrait"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col text-center md:text-left max-w-md">
          
          <span className="font-heading text-xs md:text-sm tracking-widest text-white mb-2">
            Wildlife Policy & Conservation
          </span>

          <h1 className="font-heading text-4xl md:text-6xl text-white tracking-wide mb-4">
            POLICY MAKER
          </h1>

          <div className="bg-[#a9b4ab] text-white text-[10px] md:text-xs uppercase tracking-widest px-4 py-2 mb-6">
           “You cannot protect the environment unless you empower people, you inform them, and you help them understand that these resources are their own, that they must protect them.” — Wangari Maathai
          </div>

        </div>  
      </div>
    </section>
  );
}

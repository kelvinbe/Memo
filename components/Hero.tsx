import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center px-4">
      
      {/* Background image */}
      <Image
        src="/hero.PNG"
        alt="Wildlife conservation"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 bg-[#FBF6EE]/95 backdrop-blur-sm px-6 md:px-12 py-10 md:py-14 text-center max-w-lg md:max-w-xl border border-[#D6C7B8]">
        
        <h1 className="font-serif text-3xl md:text-5xl mb-4 md:mb-6 tracking-wide">
          WELCOME
        </h1>

        <p className="text-xs md:text-sm leading-6 md:leading-7 mb-6 md:mb-8">
          I’m Memo Some, a conservationist, policy advocate,
          and an occasional pet hoarder (it’s under control, I promise).
          <br /><br />
          I’m so glad you’re here — welcome to my wild little corner of the internet!
        </p>

        <button className="bg-[#4B2E2E] text-white px-5 md:px-6 py-3 text-xs md:text-sm hover:opacity-90 transition">
          Learn more
        </button>
      </div>
    </section>
  );
}

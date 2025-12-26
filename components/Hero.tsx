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
      <div className="relative z-10 bg-[#FBF6EE]/95 backdrop-blur-sm px-6 md:px-12 py-10 md:py-14 max-w-lg md:max-w-xl border border-[#D6C7B8]">
        
        {/* Welcome + Video */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6">
          
          <h1 className="font-serif text-black text-3xl md:text-5xl tracking-wide">
            WELCOME
          </h1>

          {/* Small looping video */}
          <video
            className="w-22 h-22 md:w-28 md:h-28 object-cover rounded-full border border-[#D6C7B8]"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text */}
        <p className="text-xs text-black md:text-sm leading-6 md:leading-7 mb-6 md:mb-8 text-center">
          I’m Memo Some, a conservationist, policy advocate,
          and an occasional pet hoarder (it’s under control, I promise).
          <br /><br />
          I’m so glad you’re here — welcome to my wild little corner of the internet!
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <button className="bg-[#4B2E2E] text-white px-5 md:px-6 py-3 text-xs md:text-sm hover:opacity-90 transition">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}

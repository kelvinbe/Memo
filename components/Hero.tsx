import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 bg-[#EFE6DA]">
      
      {/* Background image */}
      <Image
        src="/hero.PNG"
        alt="Branding background"
        fill
        priority
        className="object-cover opacity-60"
      />

      {/* Content Card */}
      <div className="relative z-10 bg-[#E9DED2] shadow-xl rounded-md border border-[#CBB8A5] max-w-5xl w-full p-10 md:p-16 grid md:grid-cols-2 gap-12">
        
        {/* Left Content */}
        <div className="flex flex-col  justify-center">
          
          {/* Welcome + Video */}
          <div className="flex items-center gap-4 mb-6">
            <h1 className="font-heading text-4xl md:text-6xl text-[#3F2A1D] tracking-wide">
              WELCOME
            </h1>

            <video
              className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-full border border-[#CBB8A5]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/vid.mp4" type="video/mp4" />
            </video>
          </div>


          <p className="text-md leading-7 text-[#4B3A2E] max-w-md mb-8">
            I’m Memo Some, a conservationist, policy advocate,
            and an occasional pet hoarder (it’s under control, I promise).
            <br /><br />
            I’m so glad you’re here — welcome to my wild little corner of the internet!
          </p>

         <Link
  href="/about"
  className="self-start inline-block bg-[#6B4B3A] text-white px-6 py-3 text-xs tracking-widest uppercase hover:opacity-90 transition"
>
  Learn more
</Link>
        </div>

        {/* Right Images */}
        <div className="relative flex items-center justify-center">
          
          <div className="relative w-64 h-80 border-8 border-[#F7F2EC] shadow-lg">
            <Image
              src="/gir.jpg"
              alt="Portrait"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-10 -right-6 w-40 h-52 border-8 border-[#F7F2EC] shadow-md rotate-6">
            <Image
              src="/bir.jpeg"
              alt="Detail shot"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

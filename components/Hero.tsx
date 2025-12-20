import Image from "next/image"
import Card from "./Atoms/Card";

export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      

      {/* Right image */}
      <div className="absolute cover top-0 h-full w-full">
        <Image
          src="/hero.PNG"
          alt="Woman in wildlife"
          fill
          className="object-cover"
        />
      </div>

      {/* Center card */}

      <Card />
    
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = [
  { src: "/hero.PNG", center: false },
  { src: "/port1.jpg", center: true },
  { src: "/ha.JPG", center: false },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      
      {/* Background carousel */}
      {images.map((img, index) => (
        <Image
          key={img.src}
          src={img.src}
          alt="Background"
          fill
          priority={index === 0}
          className={`absolute transition-opacity duration-1000 ease-in-out
            ${index === current ? "opacity-100" : "opacity-0"}
            ${img.center ? "object-cover object-center object-top" : "object-cover"}
          `}
        />
      ))}

      {/* Overlay */}
      <div className="absolute  bg-black/50 z-10" />

      {/* Text */}
      <div className="relative z-20 max-w-3xl text-center text-white">
        <h1 className="font-heading text-4xl md:text-6xl mb-6">
          WELCOME
        </h1>

        <p className="text-md md:text-lg leading-7 mb-8">
          I’m Memo Some, a conservationist, policy advocate,
          and an occasional pet hoarder (it’s under control, I promise).
          <br /><br />
          I’m so glad you’re here — welcome to my wild little corner of the internet!
        </p>

        <Link
          href="/about"
          className="inline-block bg-white text-black px-6 py-3 text-xs tracking-widest uppercase hover:opacity-90 transition"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
}

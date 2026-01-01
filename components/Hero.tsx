"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/* Desktop images */
const desktopImages = [
  {
    src: "/hero.PNG",
    objectClass: "object-cover object-center",
  },
  {
    src: "/binocu.jpeg",
    objectClass: "object-cover object-center",
  },
  {
    src: "/ha.JPG",
    objectClass: "object-cover object-center",
  },
];

/* Mobile images */
const mobileImages = [
  {
    src: "/hero.PNG",
    objectClass: "object-cover object-[57%_75%]",
  },
  {
    src: "/gir.jpg",
    objectClass: "object-cover object-[87%_80%]",
  },
  {
    src: "/dog.JPG",
    objectClass: "object-cover object-center",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev + 1) % desktopImages.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="relative min-h-[100vh] md:min-h-[110vh] flex items-center justify-center px-6 overflow-hidden">

      {/* ================= MOBILE BACKGROUND ================= */}
      <div className="absolute inset-0 md:hidden">
        {mobileImages.map((img, index) => (
          <Image
            key={img.src}
            src={img.src}
            alt="Mobile background"
            fill
            priority={index === 0}
            className={`
              absolute transition-opacity duration-1000 ease-in-out
              ${index === current ? "opacity-100" : "opacity-0"}
              ${img.objectClass}
            `}
          />
        ))}
      </div>

      {/* ================= DESKTOP BACKGROUND ================= */}
      <div className="absolute inset-0 hidden md:block">
        {desktopImages.map((img, index) => (
          <Image
            key={img.src}
            src={img.src}
            alt="Desktop background"
            fill
            priority={index === 0}
            className={`
              absolute transition-opacity duration-1000 ease-in-out
              ${index === current ? "opacity-100" : "opacity-0"}
              ${img.objectClass}
            `}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Text */}
      <div className="relative z-20 max-w-3xl text-center text-white">
        <h1 className="font-heading text-4xl md:text-6xl mb-6">
          Hey there!
        </h1>

        <p className="text-md md:text-lg leading-7 mb-8">
          I’m Memo Some, a Wildlife & Environmental Policy Specialist from Kenya.
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

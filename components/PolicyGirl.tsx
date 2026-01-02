"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/* ================= DESKTOP IMAGES ================= */
const desktopImages = [
  "/vb.jpg",
  "/for.jpg",
  "/parlia.jpg",
];

/* ================= MOBILE IMAGES ================= */
const mobileImages = [
  "/vb.jpg",
  "/hero.PNG",
  "/parlia.jpg",
];

export default function PolicyGirl() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="relative flex flex-col md:flex-row bg-[#404241] overflow-hidden">

      {/* ================= SLIDER SECTION ================= */}
      <div className="relative w-full md:w-1/2 h-[500px] md:h-[100vh]">

        {/* -------- MOBILE SLIDER -------- */}
        <div className="md:hidden h-full">
          <Slider {...settings} className="h-full">
            {mobileImages.map((src, idx) => (
              <div key={idx} className="relative h-[500px] md:h-[100vh]">
                <Image
                  src={src}
                  alt={`Mobile Policy Image ${idx + 1}`}
                  fill
                  priority={idx === 0}
                     className={`
                    object-cover
                    ${idx === 0 ? "object-top" : "object-center"}
                  `}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* -------- DESKTOP SLIDER -------- */}
        <div className="hidden md:block h-full">
          <Slider {...settings} className="h-full">
            {desktopImages.map((src, idx) => (
              <div key={idx} className="relative h-[500px] md:h-[100vh]">
                <Image
                  src={src}
                  alt={`Desktop Policy Image ${idx + 1}`}
                  fill
                  priority={idx === 0}
                  className={`
                    object-cover
                    ${idx === 0 ? "object-top" : "object-center"}
                  `}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </Slider>
        </div>

      </div>

      {/* ================= TEXT SECTION ================= */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 py-6 md:py-0 h-[400px] md:h-auto">
        <div className="max-w-lg text-white text-center md:text-left">
          <p className="font-heading text-4xl md:text-3xl text-white/90 leading-tight">
            “Today’s environmental challenges begin where education and policy fall short.”
            <br />
            <span className="text-lg mt-4 block">— Memo Some</span>
          </p>
        </div>
      </div>

    </section>
  );
}

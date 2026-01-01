"use client";

import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PolicyGirl() {
  const images = ["/vb.jpg", "/for.jpg", "/parlia.jpg"]; // slider images

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
    <section className="relative min-h-[85vh] flex flex-col md:flex-row bg-[#404241] overflow-hidden">
      
      <div className="relative w-full md:w-1/2 h-[100vh] md:h-auto">
        <Slider {...settings} className="h-full">
          {images.map((src, idx) => (
            <div key={idx} className="relative h-[100vh] md:h-[100vh]">
              <Image
                src={src}
                alt={`Policy Image ${idx + 1}`}
                fill
                priority={idx === 0}
                className={`object-cover ${
                  idx === 0 ? "object-top" : "object-center"
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center px-6 md:px-12 py-12 md:py-0">
        <div className="max-w-lg text-white text-center md:text-left">
          
          <span className="font-heading text-xs md:text-sm tracking-widest mb-4 block uppercase">
            Wildlife Policy & Conservation
          </span>

          <h1 className="font-heading text-4xl md:text-6xl tracking-wide mb-6">
            POLICY MAKER
          </h1>

          <p className="text-sm md:text-base leading-7 text-white/90">
            “Today’s environmental challenges begin where education and policy fall short.” -- Memo Some
          </p>
        </div>
      </div>
    </section>
  );
}

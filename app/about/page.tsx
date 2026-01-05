"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function AboutPage() {
  const images = ["/photo.jpeg"];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* Carousel Section */}
        <section className="py-16 px-4 md:py-20 md:px-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            
            {/* Left: Image Carousel */}
            <div className="w-full">
              <Slider {...settings}>
                {images.map((src, idx) => (
                  <div key={idx}>
                    <div className="relative w-full h-[400px] md:h-[75vh]">
                      <Image
                        src={src}
                        alt={`About Image ${idx + 1}`}
                        fill
                        className="object-cover rounded-lg"
                        priority={idx === 0}
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {/* Right Content */}
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-heading text-[#2C1F2B]">
                About Me
              </h1>

              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                I firmly believe conservation is beyond wildlife protection. It’s about people, justice, and reimagining how we live with the wild.

                This space holds my thoughts, field notes, and big dreams for Kenya and beyond.
              </p>

              <div className="flex justify-center md:justify-start space-x-4 text-xl">
               <a href="http://" className="hover:text-sky-400"> <FaTwitter /></a>
               <a href="http://" className="hover:text-sky-400"> <FaLinkedinIn /></a>
               <a href="http://" className="hover:text-sky-400"> <FaInstagram /></a>

                
              </div>
            </div>
          </div>
        </section>

        {/* My Story Section */}
<section className="py-16 px-4 md:px-16 mb-20">
  <div className="max-w-6xl mx-auto">
    
    <h2 className="text-4xl md:text-5xl text-center font-heading text-[#2C1F2B] mb-12">
      My Story
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
      
      {/* Image */}
      <div className="relative w-full h-[400px] md:h-full rounded-xl overflow-hidden">
        <Image
          src="/baby.jpg"
          alt="My journey in conservation"
          fill
          className="object-cover md:object-center"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-center space-y-6">
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          I grew up in Laikipia County, Kenya, surrounded by wildlife and by far too many pets.
          When I was 17, I adopted a cheetah from the Nairobi Animal Orphanage and began volunteering there,
          helping care for him and other rescued animals. Looking back, it feels inevitable that I found my
          way into conservation. In many ways, I’d been learning how to care for a small ecosystem long before
          I knew what conservation even meant.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          That wild start led me here. I founded the WildNow Foundation, successfully petitioned Parliament on
          behalf of Nairobi National Park, and was named the Face of African Women in Conservation 2022.
          I work closely with local communities, bringing their knowledge into wildlife policy and demonstrating
          how indigenous conservation practices can support home-grown economies.
        </p>

        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Now, as I pursue a Master’s in Public Policy at the Blavatnik School of Government at the University of Oxford,
          this space is where I share stories from the field and policy tables in hopes of improving our conservation
          systems. I hope you pick up a thing or two and leave with a deeper appreciation for wildlife and the places
          it calls home.
        </p>
      </div>

    </div>
  </div>
</section>


      </main>
      <Footer />
    </>
  );
}

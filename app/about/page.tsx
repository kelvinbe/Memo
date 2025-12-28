"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Image from "next/image";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Dynamically import Slider (client-side only)

export default function AboutPage() {
  const images = ["/memo.JPG", "/photo.jpeg", "/gir.jpg"]; // carousel images

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
};


  return (
    <>
      <Navbar />
      <main className="bg-white">

        {/* Carousel Section */}
 {/* Carousel Section */}
<section className="py-16 px-4 md:py-20 md:px-16">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left: Image Carousel */}
    <div className="w-full">
      <Slider
        {...settings}
        arrows={false}              // better mobile UX
        dots={true}
      >
        {images.map((src, idx) => (
          <div key={idx}>
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <Image
                src={src}
                alt={`About Image ${idx + 1}`}
                fill
                className="object-cover rounded-lg"
                priority={idx === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
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

      {/* Social Icons */}
      <div className="flex justify-center md:justify-start space-x-4 text-gray-800 text-xl">
        <a href="#" aria-label="Facebook" className="hover:text-[#4267B2]"><FaFacebookF /></a>
        <a href="#" aria-label="Twitter" className="hover:text-[#1DA1F2]"><FaTwitter /></a>
        <a href="#" aria-label="LinkedIn" className="hover:text-[#0077B5]"><FaLinkedinIn /></a>
        <a href="#" aria-label="Instagram" className="hover:text-[#C13584]"><FaInstagram /></a>
      </div>
    </div>

  </div>
</section>


        {/* My Story Section (Below Carousel) */}
        <section className="py-20 px-4 md:px-16">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading text-[#2C1F2B]">My Story</h2>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              I grew up surrounded by wildlife, the lush landscapes of Laikipia County, Kenya, and had far too many pets. 
              To me, that wasn’t unusual; it was just how a household was supposed to be. At 17, I adopted a cheetah from the Nairobi Orphanage and volunteered there, caring for him and other animals. Looking back, it’s no surprise I ended up in conservation, I’ve basically been managing a miniature ecosystem since I was two.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              That wild start led me here. Over the years, I founded the WildNow Foundation, became the youngest Kenyan to successfully petition Parliament on a wildlife issue, and was named the Face of African Women in Conservation 2022 by African Wildlife Foundation. 
              I’ve restored forests, worked with communities, and carried stories from forgotten parks to policy tables that too often forget who’s living next to the wild.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
              Now, as I pursue a Master’s in Public Policy at the Blavatnik School of Government, University of Oxford, this space is where I share stories and lessons from the field and policy brief tables. 
              I hope you learn a thing or two and, more importantly, walk away with a deeper appreciation for wildlife and the places it calls home.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 md:py-20 md:px-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#2C1F2B]">Contact</h2>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                I'm always looking for new and exciting opportunities. <br />
                Let's connect.
              </p>
            </div>

            <div className="space-y-4 text-center md:text-left">
              <p className="text-gray-700 text-base sm:text-lg md:text-xl">Email: <a href="mailto:info@mysite.com" className="underline hover:text-[#2C1F2B]">info@mysite.com</a></p>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl">Phone: <a href="tel:1234567890" className="underline hover:text-[#2C1F2B]">123-456-7890</a></p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

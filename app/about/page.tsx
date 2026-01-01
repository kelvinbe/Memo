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
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Left: Image Carousel */}
    <div className="w-full order-1 md:order-1">
      <Slider {...settings} arrows={false} dots={true}>
        {images.map((src, idx) => (
          <div key={idx}>
            <div className="relative w-full h-[400px] sm:h-[400px] md:h-[100vh]">
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

    {/* Right Content: About Me */}
    <div className="space-y-6 text-center md:text-left order-2 md:order-2">
      <h1 className="text-4xl md:text-5xl font-heading text-[#2C1F2B]">
        About Me
      </h1>

      <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
        I firmly believe conservation is beyond wildlife protection. It’s about people, justice, and reimagining how we live with the wild. 
        This space holds my thoughts, field notes, and big dreams for Kenya and beyond.
      </p>

      {/* Social Icons */}
    
    </div>

  </div>
</section>



        {/* My Story Section (Below Carousel) */}
        <section className="py-10 px-4 md:px-16 flex">
          <div className="max-w-6xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl text-center font-heading text-[#2C1F2B]">My Story</h2>
            {/* Photo Section (Below My Story) */}
<section className="py-10 px-4 md:px-16">
  <div className="max-w-6xl mx-auto">
    <div className="relative w-full h-[400px] sm:h-[400px] md:h-[500px]">
      <Image
        src="/baby.jpg" // replace with your image
        alt="My journey in conservation"
        fill
        className="object-cover object-top md:object-center lg:object-[137%_40%] rounded-xl"
        sizes="(max-width: 768px) 100vw, 80vw"
      />
    </div>
  </div>
</section>
          <div>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
           I grew up in Laikipia County, Kenya, surrounded by wildlife and by far too many pets. When I was 17, I adopted a cheetah from the Nairobi Animal Orphanage and began volunteering there, helping care for him and other rescued animals. Looking back, it feels inevitable that I found my way into conservation. In many ways, I’d been learning how to care for a small ecosystem long before I knew what conservation even meant.
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
        That wild start led me here. I founded the WildNow Foundation, successfully petitioned Parliament on behalf of Nairobi National Park, and was named the Face of African Women in Conservation 2022. I work with local communities, bringing their knowledge into wildlife policy, demonstrating how indigenous conservation can support home-grown economies.
             
            </p>
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed">

        Now, as I pursue a Master’s in Public Policy at the Blavatnik School of Government at the University of Oxford, this space is where I share stories from the field and policy tables to improve our conservation systems. I hope you pick up a thing or two and leave with a deeper appreciation for wildlife and the places it calls home.
            </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-6 md:py-20 md:px-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-[#2C1F2B]">Collaborate</h2>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
               Let’s Collaborate! 
                If you’re interested in working together, drop me an email here, and I’ll  be sure to get back to you. 
              </p>

                  <div className="space-y-4 text-center md:text-left">
              <p className="text-gray-700 text-base sm:text-lg md:text-xl">Email: <a href="mailto:info@mysite.com" className="underline hover:text-[#2C1F2B]">Memosomeh@gmail.com </a></p>
              {/* <p className="text-gray-700 text-base sm:text-lg md:text-xl">Phone: <a href="tel:1234567890" className="underline hover:text-[#2C1F2B]">123-456-7890</a></p> */}
               <div className="flex justify-center md:justify-start space-x-4 text-gray-800 text-xl">
               <p> Socials:</p> 
        <a href="#" aria-label="Twitter" className="hover:text-[#1DA1F2]"><FaTwitter /></a>
        <a href="#" aria-label="LinkedIn" className="hover:text-[#0077B5]"><FaLinkedinIn /></a>
        <a href="#" aria-label="Instagram" className="hover:text-[#C13584]"><FaInstagram /></a>
      </div>
            </div>
            </div>

         
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

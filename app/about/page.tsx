import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import Image from "next/image";

export default function AboutPage() {
  console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)
  console.log('Dataset:', process.env.NEXT_PUBLIC_SANITY_DATASET)
  return (
    <>
      <Navbar />
     <main className="bg-[#FDF8F0]">
    <section className="py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
          <Image
            src="/memo.JPG" // replace with your image path
            alt="About Me"
            width={300}
            height={300}
            className="w-full h-auto rounded-lg object-cover"
          />

        {/* Right Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-serif text-[#2C1F2B]">About Me</h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            I firmly believe conservation is beyond wildlife protection. It’s about people, justice, and reimagining how we live with the wild. 
            This space holds my thoughts, field notes, and big dreams for Kenya and beyond.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-800 text-xl">
            <a href="#" aria-label="Facebook" className="hover:text-[#4267B2]"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#1DA1F2]"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-[#0077B5]"><FaLinkedinIn /></a>
            <a href="#" aria-label="Instagram" className="hover:text-[#C13584]"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </section>

      <section className="py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-serif text-[#2C1F2B]">My Story</h2>
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

      <section className="py-16 px-6 md:py-20 md:px-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#2C1F2B]">Contact</h2>
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

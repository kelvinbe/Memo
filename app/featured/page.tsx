import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const stories = [
  { title: "Youth Leadership in Conservation", image: "/topic1.jpg" },
  { title: "Wildlife Policy and Community Impact", image: "/topic3.jpg" },
  { title: "Building the Next Generation of Conservationists", image: "/topic2.jpg" },
];

export default function FeaturedPage() {
  return (
    <>
      <Navbar />

      <main className="px-6 md:px-10 py-20 md:py-24">
        <h1 className="font-serif text-4xl md:text-5xl mb-12 md:mb-16">
          Featured Stories
        </h1>

        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((story, index) => (
            <div key={index} className="border p-5 bg-white/30">
              <Image
                src={story.image}
                alt={story.title}
                width={400}
                height={260}
                className="object-cover mb-4"
              />
              <h2 className="font-serif text-lg md:text-xl">
                {story.title}
              </h2>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

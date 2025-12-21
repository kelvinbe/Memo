import Image from "next/image";

const topics = [
  {
    title: "Empowering the Next Generation: Key Leadership Skills in Conservation",
    image: "/topic1.jpg",
  },
  {
    title: "Youth Engagement in Wildlife Conservation: A Guide for Leaders",
    image: "/topic2.jpg",
  },
  {
    title: "Exploring Kenya's Wildlife Policy: Current Challenges and Solutions",
    image: "/topic3.jpg",
  },
];

export default function TrendingTopics() {
  return (
    <section className="px-6 md:px-10 py-16 md:py-20 bg-[#EFE9ED]">
      
      <h2 className="font-serif text-3xl md:text-4xl mb-10 md:mb-12">
        Trending Topics
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="border p-5 md:p-6 flex flex-col justify-between bg-white/30"
          >
            <p className="text-xs md:text-sm mb-5">
              {topic.title}
            </p>

            <Image
              src={topic.image}
              alt={topic.title}
              width={400}
              height={260}
              className="object-cover"
            />

            <div className="flex gap-4 mt-4 text-xs md:text-sm opacity-70">
              <span>👁 0</span>
              <span>♡</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

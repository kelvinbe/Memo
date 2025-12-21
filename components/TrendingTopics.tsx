import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client'; // Adjust path if needed (usually generated)
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';  // ← Add this import

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

const query = groq`*[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  "mainImageUrl": mainImage.asset->url,
  "alt": mainImage.alt,
  body
}`;

export default async function TrendingTopics() {
  const posts = await client.fetch(query);

  console.log('Fetched posts for TrendingTopics:', posts);
  return (
    <section className="px-6 md:px-10 py-16 md:py-20 bg-[#EFE9ED]">
      
      <h2 className="font-serif text-3xl md:text-4xl mb-10 md:mb-12">
        Trending Topics
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((topic: any, index: number) => (
          <div
            key={index}
            className="border p-5 md:p-6 flex flex-col justify-between bg-white/30"
          >
            <p className="text-xs md:text-sm mb-5">
              {topic.title}
            </p>

            <Image
              src={topic.mainImageUrl || '/fallback.jpg'}
              alt={topic.alt || topic.title}
              width={400}
              height={260}
              className="object-cover"
            />
           <div className="prose prose-sm max-w-none text-gray-700">
              <PortableText value={topic.body || []} />
            </div>
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

import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client'; // Adjust path if needed (usually generated)
import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';  // ← Add this import
import { PortableTextBlock } from '@portabletext/types'; // optional, for better body typing

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
interface Post {
  _id: string;
  title: string;
  slug: { current: string };      // ← now required
  publishedAt: string;
  mainImageUrl: string | null;
  alt: string | null;
  body: PortableTextBlock[]; // or any[] if you don't want to import the type
  // slug?: { current: string }; // uncomment if you add slug to query
}

const query = groq`
  *[
    _type == "post" &&
    defined(slug.current) &&
    !(_id in path("drafts.**"))
  ] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    "mainImageUrl": mainImage.asset->url,
    "alt": mainImage.alt,
    body
  }
`;

export default async function TrendingTopics() {
  const posts = await client.fetch(query);

  
  console.log('Fetched posts for TrendingTopics:', posts);
  return (
    <section className="px-6 md:px-10 py-16 md:py-20 bg-[#EFE9ED]">
      
      <h2 className="font-serif text-3xl md:text-4xl mb-10 md:mb-12">
        Trending Topics
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((topic: Post, index: number) => {

        console.log('Rendering topic:', topic.slug.current);
            
     return   <Link
      key={topic._id}                       // ← better than index
      href={`/posts/${topic.slug.current}`} // ← dynamic route
      className="block hover:opacity-90 transition"
    >
      <div className="border border-gray-300 p-5 md:p-6 flex flex-col justify-between bg-white/30 h-full rounded-lg">
        <p className="text-xs md:text-sm mb-5 font-medium">
          {topic.title}
        </p>

        <Image
          src={topic.mainImageUrl || '/fallback.jpg'}
          alt={topic.alt || topic.title}
          width={300}
          height={260}
          className="object-cover w-full rounded-md mb-4"
        />

        <p className="text-sm text-gray-600">
          Read more →
        </p>

        <div className="flex gap-4 mt-4 text-xs md:text-sm opacity-70">
          <span>👁 0</span>
          <span>♡ 0</span>
        </div>
      </div>
    </Link>
        })}
      </div>
    </section>
  );
}

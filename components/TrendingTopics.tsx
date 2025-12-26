import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import { PortableTextBlock } from '@portabletext/types';
import { urlFor } from '@/sanity/lib/image';

interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: any;
  body: PortableTextBlock[];
  categories?: Category[];
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
    mainImage,
    categories[]->{
      _id,
      title,
      slug
    },
    body
  }
`;

export default async function TrendingTopics() {
  const posts: Post[] = await client.fetch(query);

  // Filter posts with category title "Trending"
  const trendingPosts = posts.filter((post) =>
    post.categories?.some((cat) => cat.title === 'Trending')
  );

  return (
    <section className="px-6 md:px-10 py-16 md:py-20 bg-[#EFE9ED]">
      <h2 className="font-serif text-3xl md:text-4xl mb-10 md:mb-12">
        Trending Topics
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {trendingPosts.map((topic) => (
          <Link
            key={topic._id}
            href={`/posts/${topic.slug.current}`}
            className="block hover:opacity-90 transition"
          >
            <div className="border border-gray-300 p-5 md:p-6 flex flex-col justify-between bg-white/30 h-full rounded-lg">
              
              {/* Title */}
              <p className="text-xs md:text-sm mb-5 font-medium">
                {topic.title}
              </p>

              {/* Image */}
              <div className="relative w-full h-[260px] mb-4 overflow-hidden rounded-md">
                {topic.mainImage?.asset && (
                  <Image
                    src={urlFor(topic.mainImage)
                      .width(600)
                      .height(450)
                      .url()}
                    alt={topic.title}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                )}
              </div>

              {/* CTA */}
              <p className="text-sm text-gray-600">
                Read more →
              </p>

              {/* Meta */}
              <div className="flex gap-4 mt-4 text-xs md:text-sm opacity-70">
                <span>👁 0</span>
                <span>♡ 0</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

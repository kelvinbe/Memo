import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Link from 'next/link';
import { PortableTextBlock } from '@portabletext/types';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { urlFor } from '@/sanity/lib/image';

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: any;
  body: PortableTextBlock[];
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
    body
  }
`;

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(query);

  return (
    <>
      <Navbar />

      <section className="bg-white px-6 md:px-12 py-20">
        <h1 className="font-heading text-4xl md:text-5xl mb-16 text-[#3B2F2F]">
          All Posts
        </h1>

        <div className="space-y-12">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/posts/${post.slug.current}`}
              className="group block border border-[#E5DED5] bg-white hover:bg-[#F6F0E7] transition"
            >
              <article className="grid md:grid-cols-[420px_1fr] gap-8 p-6 md:p-8">
                
                {/* Image */}
                <div className="relative w-full h-[260px] md:h-[280px] overflow-hidden">
                  {post.mainImage?.asset && (
                    <Image
                      src={urlFor(post.mainImage)
                        .width(800)
                        .height(500)
                        .url()}
                      alt={post.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">
                      {new Date(post.publishedAt).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                      })}{' '}
                      · 5 min read
                    </p>

                    <h2 className="font-serif text-2xl md:text-3xl text-[#3B2F2F] mb-4 leading-snug group-hover:underline">
                      {post.title}
                    </h2>

                    <p className="text-gray-700 max-w-xl">
                      In a world where environmental challenges are becoming more
                      pressing, the need for effective leadership in conservation
                      is greater than…
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
                    <span>Read more →</span>
                    <span className="tracking-widest">•••</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

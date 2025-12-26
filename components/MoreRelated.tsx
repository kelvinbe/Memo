import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "@/sanity/lib/image";

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

export default async function MoreRelatedTopics() {
  const posts: Post[] = await client.fetch(query);

  const relatedPosts = posts.filter((post) =>
    post.categories?.some((cat) => cat.title === "Related")
  );

  return (
    <section className="relative overflow-hidden px-6 md:px-10 py-16 md:py-20 bg-[#f5f1ea]">
      {/* ✨ Background texture (stars) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30
        [background-image:radial-gradient(#cbb9a5_1px,transparent_1px)]
        [background-size:140px_140px]"
      />

      {/* ✨ Soft paper gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0
        bg-gradient-to-b from-[#f6f2eb] to-[#efe9df]"
      />

      {/* ✨ Sunburst (top-right) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full opacity-30
        [background:repeating-conic-gradient(rgba(200,160,120,.35)_0deg_2deg,transparent_2deg_12deg)]"
      />

      {/* Content */}
      <div className="relative z-10">
        <h2 className="font-text-3xl md:text-4xl mb-10 md:mb-12">
          Must Read Articles
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {relatedPosts.map((topic) => (
            <Link
              key={topic._id}
              href={`/posts/${topic.slug.current}`}
              className="block rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition relative group"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                {topic.mainImage?.asset && (
                  <Image
                    src={urlFor(topic.mainImage).url()}
                    alt={topic.title}
                    width={600}
                    height={400}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <p className="font-semibold text-lg md:text-xl drop-shadow-lg">
                  {topic.title}
                </p>
              </div>

              {/* CTA */}
              <div className="absolute bottom-4 right-4 z-10 text-white opacity-80 text-sm">
                Read →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

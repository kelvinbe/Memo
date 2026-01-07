import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "@/sanity/lib/image";
import PageLoader from "../components/Molecules/Loader/Loader";

export const revalidate = 60;

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

  const hasRelatedPosts = relatedPosts.length > 0;

  return (
    <section className="relative overflow-hidden px-6 md:px-10 py-16 md:py-20 bg-white">
      
      {/* Loader + Empty state */}
      {!hasRelatedPosts && (
        <div className="relative min-h-[320px] flex flex-col items-center justify-center text-center">
           <h2 className="font-heading text-3xl md:text-4xl mb-10 md:mb-12">
            Must Read Articles
          </h2>
          <PageLoader />

          <h2 className="font-heading text-2xl md:text-2xl text-[#3B2F2F] mt-40">
            Coming Soon...
          </h2>
        </div>
      )}

      {/* Content */}
      {hasRelatedPosts && (
        <div className="relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl mb-10 md:mb-12">
            Must Read Articles
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts?.map((topic) => (
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
                      fill
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
      )}
    </section>
  );
}

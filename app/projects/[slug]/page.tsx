// app/posts/[slug]/page.tsx
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const revalidate = 60; 



type Props = {
  params: Promise<{
    slug: string;
  }>;
};

interface Category {
  _id: string;
  title: string;
}

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: any;
  body: any[];
  categories?: Category[];
}

/**
 * Fetch all posts
 */
const allPostsQuery = groq`
  *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]{
    _id,
    title,
    slug,
    mainImage,
    body,
    categories[]->{_id, title}
  }
`;

export async function generateStaticParams() {
  const posts: Post[] = await client.fetch(allPostsQuery);

  // Filter only posts in "Projects" category
  const projectPosts = posts.filter((post) =>
    post.categories?.some((cat) => cat.title === "Projects")
  );

  return projectPosts.map((post) => ({
    slug: post.slug.current,
  }));
}

/**
 * Fetch a single post by slug
 */
export default async function ProjectPostPage({ params }: Props) {
  const { slug } = await params;

  const posts: Post[] = await client.fetch(allPostsQuery);

  // Filter only posts in "Projects" category
  const projectPosts = posts.filter((post) =>
    post.categories?.some((cat) => cat.title === "Projects")
  );

  // Find the project with the matching slug
  const post = projectPosts.find((p) => p.slug.current === slug);

  if (!post) notFound();

  return (
    <>
      <Navbar />

      <article className="bg-white max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-heading text-4xl md:text-5xl mb-8">{post.title}</h1>

        {post.mainImage?.asset && (
          <Image
            src={urlFor(post.mainImage).width(1200).height(600).url()}
            alt={post.title}
            width={1200}
            height={600}
            unoptimized
            className="w-full object-cover rounded-lg mb-10"
            priority
          />
        )}

        <div className="prose prose-lg max-w-none mb-20 text-gray-800
  text-center
  text-lg md:text-xl
  leading-[34px]
  prose-p:mb-6
  prose-li:mb-2
  break-words
  overflow-wrap-anywhere
  ">
          <PortableText value={post.body ?? []} />
        </div>
      </article>

      <Footer />
    </>
  );
}

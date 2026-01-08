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
  )

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

        <div  className="
    prose prose-neutral prose-lg
    mx-auto max-w-5xl mb-24

    text-justify
    [text-justify:inter-character]
    [word-spacing:-0.08em]
    [hyphens:auto]
    break-words
    [overflow-wrap:anywhere]

    prose-p:text-gray-700
    prose-p:mb-5
    prose-p:leading-relaxed
    leading-[32px]
    font-heading
    prose-headings:font-heading
    prose-headings:text-[#3B2F2F]

    [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-6
    [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-6
    [&_li]:pl-1 [&_li]:my-2
    [&_li>p]:m-0
    [&_li::marker]:text-gray-400

    text-gray-700
  "
>
          <PortableText value={post.body ?? []} />
        </div>
      </article>

      <Footer />
    </>
  );
}

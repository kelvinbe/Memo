// app/posts/[slug]/page.tsx
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portableTextComponents } from "@/components/Organisms/PortableTextComponent";


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
        )
      }
 <div   className="
    prose prose-2xl
    max-w-full
    mx-auto
    mt-8
    text-gray-700
    leading-[1.84]
    prose-p:text-[1.125rem] 
    text-[1.1rem]

    prose-p:my-4
    prose-p:leading-[1.65]

    prose-headings:mt-10
    prose-headings:mb-4
    prose-headings:font-heading
    prose-headings:text-gray-800

    prose-ul:my-4
    prose-ol:my-4
    prose-li:my-1
    text-md
    prose-ul:pl-6
    prose-ol:pl-6
    md:text-md
    prose-a:text-blue-700
    prose-a:no-underline
    hover:prose-a:underline
    prose-p:leading-relaxed

    prose-blockquote:my-6
    prose-blockquote:border-l-2
    prose-blockquote:border-gray-300
    prose-blockquote:pl-5
    prose-blockquote:text-gray-600
    prose-blockquote:not-italic
    [overflow-wrap:anywhere]
  "
>
<PortableText
  value={post.body ?? []}
  components={portableTextComponents}
/>
</div>
      </article>

      <Footer />
    </>
  );
}

// app/posts/[slug]/page.tsx
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { urlFor } from '@/sanity/lib/image';
import Navbar from '@/components/Navbar';

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

/**
 * Generate static routes for all posts
 * IMPORTANT: slug must be a STRING, not an object
 */
const slugsQuery = groq`
  *[
    _type == "post" &&
    defined(slug.current) &&
    !(_id in path("drafts.**"))
  ] {
    "slug": slug.current
  }
`;



export async function generateStaticParams() {
  const posts: { slug: string }[] = await client.fetch(slugsQuery);


  console.log('Generating static params for posts:', posts);

  return posts.map((post) => ({
    slug: post.slug,
  }));


}

/**
 * Fetch a single post by slug
 */
const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    publishedAt,
    mainImage,
    body
  }
`;


export default async function PostPage({ params }: Props) {
  const { slug } = await params; // 🔥 THIS IS THE KEY FIX


  if (!slug) {
    notFound();
  }

  const post = await client.fetch(postQuery, {
    slug,
    mainImage: true,
  });


  if (!post) {
    notFound();
  }



  return (
    <>
    <Navbar />
    <article className="bg-white max-w-4xl mx-auto px-6 py-16">
      <h1 className="font-serif text-4xl md:text-5xl mb-8">
        {post.title}
      </h1>

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

      <div className="prose prose-lg max-w-none text-gray-800">
        <PortableText value={post.body ?? []} />
      </div>
    </article>
    </>
  );
}

// app/projects/page.tsx
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { PortableTextBlock } from "@portabletext/types";
import { urlFor } from "@/sanity/lib/image";
import PageLoader from "@/components/Molecules/Loader/Loader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

// Fetch all posts
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

export default async function ProjectsPage() {
  const posts: Post[] = await client.fetch(query);

  // Filter only posts in the "Projects" category
  const projectPosts = posts.filter((post) =>
    post.categories?.some((cat) => cat.title === "Projects")
  );

  const hasProjects = projectPosts.length > 0;

  return (
    <>
      <Navbar />

      <section className="bg-white px-6 md:px-12 py-10 mb-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h1 className="font-heading text-4xl md:text-5xl text-[#3B2F2F] mb-6">
            Recent Projects
          </h1>
          <p className="text-base md:text-lg text-[#5A4A42] leading-relaxed">
            Here’s a glimpse of my current work
          </p>
        </div>

        {/* Loader / Empty state */}
        {!hasProjects && (
          <div className="relative min-h-[320px] flex flex-col items-center justify-center text-center">
            <PageLoader />
            <h2 className="font-heading text-2xl md:text-2xl text-[#3B2F2F] mt-10">
              Coming Soon...
            </h2>
          </div>
        )}

        {/* Portfolio Grid */}
        {hasProjects && (
          <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
            {projectPosts.map((project) => (
              <Link
                key={project._id}
                href={`/projects/${project.slug.current}`}
                className="group block"
              >
                <div className="relative w-full rounded-md shadow-lg h-[420px] overflow-hidden bg-[#EDE6DC]">
                  {project.mainImage?.asset && (
                    <Image
                      src={urlFor(project.mainImage).url()}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />
                  )}
                </div>

                <h3 className="mt-4 font-serif text-lg text-[#3B2F2F]">
                  {project.title}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

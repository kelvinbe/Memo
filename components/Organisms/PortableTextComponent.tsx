import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

export const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlFor(value).width(1200).url()}
        alt={value.alt || ""}
        width={1200}
        height={800}
        unoptimized
        className="my-10 rounded-lg"
      />
    ),
  },

  block: {
    h2: ({ children }: any) => (
      <h2 className="mt-14 mb-6 text-3xl font-heading text-[#3B2F2F]">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="mt-10 mb-4 text-2xl font-heading text-[#3B2F2F]">
        {children}
      </h3>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-8 border-l-4 text-lg text-md border-gray-300 pl-6 italic text-gray-600">
        {children}
      </blockquote>
    ),
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className="my-6 list-disc pl-6">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="my-6 list-decimal pl-6">{children}</ol>
    ),
  },

  marks: {
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="underline underline-offset-4 text-[#3B2F2F]"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

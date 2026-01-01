import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioItem {
  id: string;
  title: string;
  image: string;
  href?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Nairobi National Park Policy Roundtable',
    image: '/rihn.jpeg',
  },
  {
    id: '2',
    title: 'Wildlife Corridors Report',
    image: '/elep.jpg',
  },
  {
    id: '3',
    title: 'Conservation Foresight Discussions',
    image: '/buffa.jpeg',
  },
];

export default function PortfolioPage() {
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

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto  grid gap-10 md:grid-cols-3">
        {portfolioItems.map((item) => (
          <Link
            key={item.id}
            href={item.href || '#'}
            className="group block"
          >
            <div className="relative w-full rounded-md shadow-lg h-[420px] overflow-hidden bg-[#EDE6DC]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="mt-4 font-serif text-lg text-[#3B2F2F]">
              {item.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>

              <Footer />
    

    </>
  );
}

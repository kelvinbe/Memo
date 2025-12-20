import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="px-10 py-24 max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl mb-10">
          About Memo Some
        </h1>

        <p className="text-sm leading-8 mb-6">
          Memo Some is a conservationist and policy advocate dedicated
          to protecting wildlife and empowering communities across Africa.
          Her work focuses on youth engagement, sustainable conservation,
          and progressive wildlife policy.
        </p>

        <p className="text-sm leading-8">
          Through storytelling, research, and advocacy, Memo shares insights
          on leadership, conservation challenges, and solutions shaping the
          future of wildlife protection in Kenya and beyond.
        </p>
      </main>

      <Footer />
    </>
  );
}

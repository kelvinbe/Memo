import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendingTopics from "@/components/TrendingTopics";
import Footer from "@/components/Footer";
import MoreRelatedTopics from "@/components/MoreRelated";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingTopics />
      <MoreRelatedTopics />
      <Footer />
    </>
  );
}

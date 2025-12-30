import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrendingTopics from "@/components/TrendingTopics";
import Footer from "@/components/Footer";
import MoreRelatedTopics from "@/components/MoreRelated";
import PolicyGirl from "@/components/PolicyGirl";

export const revalidate = 60;


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <PolicyGirl />
      <MoreRelatedTopics />
      <Footer />
    </>
  );
}

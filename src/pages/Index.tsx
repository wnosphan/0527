import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";
import CharacterInfo from "@/components/CharacterInfo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <BlogSection />
        <CharacterInfo />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

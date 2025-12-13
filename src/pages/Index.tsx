import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionAbout from "@/components/SectionAbout";
import SectionAlavancas from "@/components/SectionAlavancas";
import SectionCases from "@/components/SectionCases";
import LogoWall from "@/components/LogoWall";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <LogoWall />
        <SectionAbout />
        <SectionAlavancas />
        <SectionCases />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

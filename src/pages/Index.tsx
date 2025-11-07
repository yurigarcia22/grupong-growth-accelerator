import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SectionAbout from "@/components/SectionAbout";
import SectionAlavancas from "@/components/SectionAlavancas";
import SectionCases from "@/components/SectionCases";
import SectionSolucoes from "@/components/SectionSolucoes";
import LogoWall from "@/components/LogoWall";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <SectionAbout />
        <SectionAlavancas />
        <SectionCases />
        <SectionSolucoes />
        <LogoWall />
        <CTABanner />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

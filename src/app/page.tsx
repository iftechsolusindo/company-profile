import NavbarMain from "./components/global/NavbarMain";
import CTA from "./components/main/CTA";
import Footer from "./components/global/Footer";
import OurStrengthSection from "./components/main/Solution";
import ServicesSection from "./components/main/ServiceSection";
import BlogSection from "./components/main/BlogSection";
import HeroSection from "./components/main/HeroSection";
import TechSlider from "./components/main/TechSlider";
import { LanguageProvider } from "./components/global/LanguageProvider";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-white">
        {/* Navbar */}
        <NavbarMain />

        {/* Hero */}
        <HeroSection />

        {/* Technology */}
        <TechSlider />

        {/* Services */}
        <ServicesSection />

        {/* Our Strength */}
        <OurStrengthSection />

        {/* Blog */}
        <BlogSection />

        {/* CTA */}
        <CTA />

        {/* Footer */}
        <Footer />
      </main>
    </LanguageProvider>
  );
}
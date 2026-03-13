import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ServicesSection } from "./components/ServicesSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { HashRouter } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#0a0a0f] text-[#e4e4e7] font-['Inter'] overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </HashRouter>
  );
}
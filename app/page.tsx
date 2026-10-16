import Navbar from "@/components/ui/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import BackgroundSection from "@/components/sections/BackgroundSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-4 py-2 text-sm font-bold text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <BackgroundSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

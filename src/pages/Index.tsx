import { Suspense, lazy } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

// Lazy load heavy 3D and media-rich sections
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const LogicPulse = lazy(() => import("@/components/LogicPulse"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const CertificationsSection = lazy(() => import("@/components/CertificationsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const SectionFallback = () => (
  <div className="h-96 flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />

      <Suspense fallback={<SectionFallback />}>
        <SkillsSection />
        <ExperienceSection />
        <LogicPulse />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default Index;

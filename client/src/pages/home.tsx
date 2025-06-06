import { Navigation } from "@/components/navigation";
import { CustomCursor } from "@/components/ui/cursor";
import { LoadingBar } from "@/components/ui/loading-bar";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Certifications } from "@/components/sections/certifications";
import { useCustomCursor } from "@/hooks/use-custom-cursor";

export default function Home() {
  useCustomCursor();

  return (
    <div className="custom-cursor">
      <LoadingBar />
      <CustomCursor />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <Certifications />
      <ContactSection />
      <Footer />
    </div>
  );
}

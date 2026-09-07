import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { ImpactSection } from "@/components/home/impact-section";
import { CTASection } from "@/components/home/cta-section";
import { FloatingButtons } from "@/components/floating-buttons";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ProgramsSection />
        <ImpactSection />
        <CTASection />
      </main>
      <FloatingButtons />
      <Footer />
    </div>
  );
}

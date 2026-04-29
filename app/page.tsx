import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { ImpactSection } from "@/components/home/impact-section";
import { CTASection } from "@/components/home/cta-section";
import { NewsSection } from "@/components/home/news-section";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <ProgramsSection />
        <ImpactSection />
        <NewsSection />
        {/* <CTASection /> */}
      </main>
      <Footer />
    </div>
  );
}

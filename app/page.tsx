import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FormationsSection from "@/components/formations-section";
import ExperiencesSection from "@/components/experiences-section";
import PortfolioSection from "@/components/portfolio/portfolio-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PortfolioSection />
      <ExperiencesSection />
      <FormationsSection />
    </main>
  );
}

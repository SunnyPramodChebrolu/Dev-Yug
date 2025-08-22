import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import StorySection from "@/components/story-section";
import DifferentiatorSection from "@/components/differentiator-section";
import ProcessSection from "@/components/process-section";
import CommunitySection from "@/components/community-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <HeroSection />
      <StorySection />
      <DifferentiatorSection />
      <ProcessSection />
      <CommunitySection />
      <CTASection />
      <Footer />
    </div>
  );
}

import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-hero-gradient flex items-center">
      {/* Floating geometric shapes for tech aesthetic */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-light-cyan/10 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-white/5 rounded-full animate-float-delayed-2"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-tech-teal/10 rounded-full animate-float-delayed-4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 text-center">
        <div className="animate-fade-in-up">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 border border-white/20">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">DY</span>
              </div>
              <span className="text-4xl font-bold text-white tracking-wide">DEV YUG</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            A New Era for <br />
            <span className="bg-gradient-to-r from-light-cyan to-white bg-clip-text text-transparent">
              Developers
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Where skills and values create tomorrow's leaders
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              className="bg-white text-primary-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[200px]"
              data-testid="hero-join-dev-yug"
            >
              Join Dev Yug
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection("story")}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 min-w-[200px] bg-transparent"
              data-testid="hero-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/50" 
          : "bg-white/80 backdrop-blur-md border-b border-slate-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DY</span>
            </div>
            <span className="text-xl font-bold text-slate-900">Dev Yug</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("story")}
              className="text-slate-600 hover:text-primary-blue transition-colors duration-200"
              data-testid="nav-story"
            >
              Our Story
            </button>
            <button 
              onClick={() => scrollToSection("different")}
              className="text-slate-600 hover:text-primary-blue transition-colors duration-200"
              data-testid="nav-different"
            >
              What Makes Us Different
            </button>
            <button 
              onClick={() => scrollToSection("works")}
              className="text-slate-600 hover:text-primary-blue transition-colors duration-200"
              data-testid="nav-works"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection("community")}
              className="text-slate-600 hover:text-primary-blue transition-colors duration-200"
              data-testid="nav-community"
            >
              Community
            </button>
            <Button 
              className="bg-tech-gradient text-white px-6 py-2 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
              data-testid="nav-join-now"
            >
              Join Now
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200/50 py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection("story")}
                className="text-slate-600 hover:text-primary-blue transition-colors duration-200 text-left"
                data-testid="mobile-nav-story"
              >
                Our Story
              </button>
              <button 
                onClick={() => scrollToSection("different")}
                className="text-slate-600 hover:text-primary-blue transition-colors duration-200 text-left"
                data-testid="mobile-nav-different"
              >
                What Makes Us Different
              </button>
              <button 
                onClick={() => scrollToSection("works")}
                className="text-slate-600 hover:text-primary-blue transition-colors duration-200 text-left"
                data-testid="mobile-nav-works"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection("community")}
                className="text-slate-600 hover:text-primary-blue transition-colors duration-200 text-left"
                data-testid="mobile-nav-community"
              >
                Community
              </button>
              <Button 
                className="bg-tech-gradient text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200 w-fit"
                data-testid="mobile-nav-join-now"
              >
                Join Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

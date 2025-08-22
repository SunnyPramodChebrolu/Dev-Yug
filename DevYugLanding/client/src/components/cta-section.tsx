import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary-blue via-electric-cyan to-tech-teal relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
          Are you ready for a new era in your coding journey?
        </h2>
        <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
          Join a community that values who you are, celebrates what you can build, and supports where you're going.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            className="bg-white text-primary-blue px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 hover:shadow-xl hover:scale-105 transition-all duration-300 min-w-[200px]"
            data-testid="cta-sign-up"
          >
            Sign Up Now
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 min-w-[200px] bg-transparent"
            data-testid="cta-contact"
          >
            Contact Us
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
        <div className="w-96 h-96 bg-white/5 rounded-full"></div>
      </div>
      <div className="absolute top-1/4 right-0 transform translate-x-1/2">
        <div className="w-64 h-64 bg-white/5 rounded-full"></div>
      </div>
    </section>
  );
}

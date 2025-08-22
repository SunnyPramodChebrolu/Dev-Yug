import { Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-tech-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DY</span>
              </div>
              <span className="text-xl font-bold">Dev Yug</span>
            </div>
            <p className="text-slate-400 mb-6">
              A new era for developers where skills and values create tomorrow's leaders.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-blue transition-colors"
                data-testid="social-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-blue transition-colors"
                data-testid="social-linkedin"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-primary-blue transition-colors"
                data-testid="social-github"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Platform</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-how-it-works">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-community-guidelines">Community Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-skills-assessment">Skills Assessment</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-mentorship">Mentorship</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-about">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-mission">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-careers">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-blog">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-contact">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-help">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-privacy">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors" data-testid="footer-terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Dev Yug. All rights reserved. Built with ❤️ in Hyderabad.
            </p>
            <p className="text-slate-400 text-sm mt-4 md:mt-0">
              Let's connect: Empowering developers through faith and technology.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

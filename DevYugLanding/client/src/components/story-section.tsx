import { Zap, Heart, Users } from "lucide-react";

export default function StorySection() {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center bg-electric-cyan/10 text-electric-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-electric-cyan rounded-full mr-2"></span>
              Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Our <span className="text-electric-cyan">Story</span>
            </h2>
            <div className="prose prose-lg text-slate-600 leading-relaxed">
              <p className="mb-6">
                Dev Yug began with a vision: to create a platform where pure talent and ethical values matter more than degrees or background. Founded in Hyderabad, we are committed to nurturing a community of developers empowered by skills and inspired by biblical principles of integrity, growth, and mutual support.
              </p>
            </div>
          </div>
          <div className="relative">
            {/* Modern illustration with geometric shapes */}
            <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-12 shadow-xl">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-primary-blue/10 rounded-xl p-6 flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary-blue rounded-lg mb-4 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-600">Skills</span>
                </div>
                <div className="bg-electric-cyan/10 rounded-xl p-6 flex flex-col items-center">
                  <div className="w-12 h-12 bg-electric-cyan rounded-lg mb-4 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-600">Values</span>
                </div>
                <div className="bg-tech-teal/10 rounded-xl p-6 flex flex-col items-center">
                  <div className="w-12 h-12 bg-tech-teal rounded-lg mb-4 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-600">Community</span>
                </div>
              </div>
              {/* Connecting lines */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                <div className="flex-1 h-px bg-gradient-to-r from-primary-blue via-electric-cyan to-tech-teal mx-8"></div>
                <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

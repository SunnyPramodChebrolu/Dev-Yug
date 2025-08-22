import { BookOpen, MessageSquare, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-electric-cyan/10 text-electric-cyan px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-electric-cyan rounded-full mr-2"></span>
            Stronger Together
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            Our <span className="text-electric-cyan">Community</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our network is built on encouragement, learning, and collaboration. Here, developers connect, share, and grow together—supported by shared values and a passion for innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Community visualization with overlapping circles */}
            <div className="relative bg-white rounded-2xl p-12 shadow-xl">
              <div className="flex items-center justify-center relative">
                {/* Central hub */}
                <div className="w-32 h-32 bg-tech-gradient rounded-full flex items-center justify-center z-10">
                  <span className="text-white font-bold text-lg">Dev Yug</span>
                </div>
                
                {/* Surrounding community circles */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
                  <div className="w-20 h-20 bg-primary-blue/20 rounded-full flex items-center justify-center border-4 border-white">
                    <BookOpen className="w-8 h-8 text-primary-blue" />
                  </div>
                </div>
                
                <div className="absolute bottom-0 left-4 transform translate-y-4">
                  <div className="w-20 h-20 bg-electric-cyan/20 rounded-full flex items-center justify-center border-4 border-white">
                    <MessageSquare className="w-8 h-8 text-electric-cyan" />
                  </div>
                </div>
                
                <div className="absolute bottom-0 right-4 transform translate-y-4">
                  <div className="w-20 h-20 bg-tech-teal/20 rounded-full flex items-center justify-center border-4 border-white">
                    <Zap className="w-8 h-8 text-tech-teal" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-primary-blue rounded-full mr-3"></span>
                  Encouragement First
                </h3>
                <p className="text-slate-600">
                  Every interaction is rooted in uplifting one another, celebrating achievements, and providing support during challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-electric-cyan rounded-full mr-3"></span>
                  Continuous Learning
                </h3>
                <p className="text-slate-600">
                  Knowledge sharing is at our core. From code reviews to theological discussions, we grow together intellectually and spiritually.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-xl p-6 shadow-lg border border-slate-100">
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center">
                  <span className="w-2 h-2 bg-tech-teal rounded-full mr-3"></span>
                  Meaningful Collaboration
                </h3>
                <p className="text-slate-600">
                  Projects emerge from genuine partnerships, shared visions, and the desire to create technology that serves a greater purpose.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Lightbulb, Heart, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function DifferentiatorSection() {
  return (
    <section id="different" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary-blue/10 text-primary-blue px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-primary-blue rounded-full mr-2"></span>
            Our Difference
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            What Makes Us <span className="text-primary-blue">Different</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            At Dev Yug, every individual's skill is valued and character is celebrated. Our approach puts real talent at the center, welcoming all who strive for excellence and community, regardless of formal educational background.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Skill-Based */}
          <Card className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-electric-cyan rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Skill-First Approach</h3>
              <p className="text-slate-600 leading-relaxed">
                We believe in the power of demonstrated abilities over paper qualifications. Show us what you can build, not where you studied.
              </p>
            </CardContent>
          </Card>

          {/* Values-Driven */}
          <Card className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-electric-cyan to-tech-teal rounded-xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Values-Driven Culture</h3>
              <p className="text-slate-600 leading-relaxed">
                Built on biblical principles of integrity, we foster an environment where character matters as much as code quality.
              </p>
            </CardContent>
          </Card>

          {/* Community Focus */}
          <Card className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-tech-teal to-primary-blue rounded-xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">True Community</h3>
              <p className="text-slate-600 leading-relaxed">
                More than networking – we build genuine relationships based on mutual growth, support, and shared purpose.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

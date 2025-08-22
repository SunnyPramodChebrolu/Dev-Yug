import { Card, CardContent } from "@/components/ui/card";

export default function ProcessSection() {
  return (
    <section id="works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-tech-teal/10 text-tech-teal px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-tech-teal rounded-full mr-2"></span>
            Join The Movement
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
            How It <span className="text-tech-teal">Works</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Become part of Dev Yug by joining the platform, showcasing your skills, and engaging with like-minded developers. Benefit from connections, mentorship, and a faith-based environment fostering genuine growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-blue rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Join the Platform</h3>
                <p className="text-slate-600">
                  Create your profile and become part of our growing community of values-driven developers.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-electric-cyan rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Showcase Your Skills</h3>
                <p className="text-slate-600">
                  Demonstrate your abilities through projects, contributions, and meaningful interactions with the community.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-tech-teal rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Engage & Grow</h3>
                <p className="text-slate-600">
                  Connect with like-minded developers, access mentorship opportunities, and grow in a faith-based environment.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Interactive process visualization */}
            <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <Card className="bg-white rounded-xl p-6 border-l-4 border-primary-blue shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900">Community Engagement</span>
                      <div className="w-3 h-3 bg-primary-blue rounded-full"></div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white rounded-xl p-6 border-l-4 border-electric-cyan shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900">Skill Development</span>
                      <div className="w-3 h-3 bg-electric-cyan rounded-full"></div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white rounded-xl p-6 border-l-4 border-tech-teal shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-900">Mentorship & Growth</span>
                      <div className="w-3 h-3 bg-tech-teal rounded-full"></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

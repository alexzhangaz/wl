import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Award, Users, Zap, Code2, Shield, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="/logo.png" alt="White Lotus Software" className="h-8 w-auto" />
              <span className="font-bold text-lg text-gray-900">White Lotus Software</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#services" className="text-gray-600 hover:text-gray-900 transition">Services</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition font-semibold">About</Link>
            <Link href="/#cases" className="text-gray-600 hover:text-gray-900 transition">Case Studies</Link>
            <Link href="/#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</Link>
          </div>
          <Link href="/#contact">
            <Button className="bg-blue-700 hover:bg-blue-800">Get Consultation</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="container">
          <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            About White Lotus Software
          </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're a team of experienced software engineers and project managers dedicated to delivering premium technology solutions for Australian businesses. With 15 years of combined expertise, we transform complex challenges into elegant, scalable solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Precision Tech was founded on a simple belief: Australian businesses deserve world-class software solutions without the complexity, delays, and hidden costs that plague the industry.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Our founder spent 10 years as a full-stack developer, then 5 years managing large-scale projects across finance, healthcare, and e-commerce. Through this journey, we identified a critical gap: businesses need partners who combine deep technical expertise with disciplined project management.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we partner with SMEs, startups, and enterprises to solve their toughest technology challenges—from AI automation to legacy modernization—with certainty, transparency, and measurable results.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="bg-blue-700 hover:bg-blue-800 text-white">
                  Let's Talk <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
              <div className="space-y-8">
                <div>
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <p className="text-blue-100">Years Combined Experience</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <p className="text-blue-100">Projects Delivered</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <p className="text-blue-100">Client Satisfaction</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">$50M+</div>
                  <p className="text-blue-100">Client Value Created</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">What drives every decision we make</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-blue-700" />
                  <CardTitle>Certainty</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We commit to timelines, budgets, and quality standards. No surprises, no scope creep, no hidden costs. Our track record speaks for itself: 100% on-time delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-emerald-500" />
                  <CardTitle>Transparency</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Real-time project dashboards, weekly updates, and open communication. You're never left guessing about progress or blockers. We're your partners, not just vendors.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-amber-500" />
                  <CardTitle>Excellence</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We don't cut corners. Every line of code is reviewed, tested, and documented. We build for scale, security, and maintainability from day one.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We're Different */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Why We're Different</h2>

          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Deep Australia Expertise</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We understand Privacy Act compliance, data sovereignty, and local market dynamics. We're not just developers—we're consultants who help you navigate Australia's unique regulatory landscape.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-8">
                <Award className="w-12 h-12 text-blue-700 mb-4" />
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-700 font-bold">✓</span>
                    <span className="text-gray-700">Privacy Act 2026 compliance expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-700 font-bold">✓</span>
                    <span className="text-gray-700">Data residency & sovereignty solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-700 font-bold">✓</span>
                    <span className="text-gray-700">Local market insights & best practices</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-emerald-50 rounded-lg p-8 order-2 md:order-1">
                <TrendingUp className="w-12 h-12 text-emerald-600 mb-4" />
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-gray-700">Hybrid low-code + custom development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-gray-700">50% faster delivery cycles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span className="text-gray-700">Scalable from MVP to enterprise</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Delivery Model</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We combine low-code platforms with advanced custom development to deliver faster, cheaper, and more reliably. This hybrid approach lets us scale from quick MVPs to complex enterprise systems.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Management Excellence</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our founder's 5 years in project management means we bring discipline, risk management, and stakeholder communication to every engagement. We don't just write code—we deliver results.
                </p>
              </div>
              <div className="bg-amber-50 rounded-lg p-8">
                <Zap className="w-12 h-12 text-amber-600 mb-4" />
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span className="text-gray-700">Agile + waterfall hybrid methodology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span className="text-gray-700">Weekly progress reports & dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-600 font-bold">✓</span>
                    <span className="text-gray-700">Risk mitigation & contingency planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how Precision Tech can solve your toughest technology challenges. No obligation, just honest conversation.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="White Lotus Software" className="h-8 w-auto" />
                <span className="font-bold text-white">White Lotus Software</span>
              </div>
              <p className="text-sm">Premium software solutions for Australian businesses</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#services" className="hover:text-white transition">AI Automation</Link></li>
                <li><Link href="/#services" className="hover:text-white transition">Low-Code Development</Link></li>
                <li><Link href="/#services" className="hover:text-white transition">System Modernization</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="/#cases" className="hover:text-white transition">Case Studies</Link></li>
                <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <p className="text-sm">info@whitelotus.space</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 White Lotus Software. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

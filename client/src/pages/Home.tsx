import { useAuth } from "@/_core/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Code2, Zap, Users, Shield, TrendingUp, Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { Link } from "wouter";

/**
 * Design Philosophy: Modern B2B SaaS with Premium Feel
 * - Deep blue primary (#1e3a8a) + clean white
 * - Typography: Bold display fonts + readable body
 * - Spacing: Generous whitespace for premium feel
 * - Animations: Subtle transitions and hover effects
 */

export default function Home() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // tRPC mutation for sending inquiry
  const sendInquiry = trpc.inquiries.submit.useMutation({
    onSuccess: () => {
      toast.success("Thank you for your inquiry! We will contact you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    },
    onError: (error) => {
      console.error("Inquiry submission error:", error);
      toast.error("Failed to submit. Please email info@whitelotus.space");
      setIsSubmitting(false);
    },
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    if (formData.message.length < 10) {
      toast.error("Message must be at least 10 characters");
      return;
    }
    setIsSubmitting(true);
    try {
      await sendInquiry.mutateAsync(formData);
    } catch (err) {
      console.error("Inquiry submission failed:", err);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="White Lotus Software" className="h-8 w-auto" />
            <span className="font-bold text-lg text-gray-900">White Lotus Software</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition">Services</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a>
            <a href="#cases" className="text-gray-600 hover:text-gray-900 transition">Case Studies</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a>
          </div>
          <Button className="bg-blue-700 hover:bg-blue-800">Get Consultation</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663376059377/TZXiKcYdvjCXtXgmdyBeez/hero-bg-A3KbeHknAdheFL2nePjKAk.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative container py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transform Your Business with <span className="text-pink-600">AI-Powered Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Premium software solutions for Australian SMEs and startups. 10 years of development expertise + 5 years of project management excellence. Every project delivered on time, on quality, on budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-block">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
                  Start Today <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              <Link href="/case-studies">
                <Button size="lg" variant="outline" className="border-gray-300 text-gray-900">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Core Services</h2>
            <p className="text-xl text-gray-600">Solving Australia's digital transformation challenges</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Automation */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663376059377/TZXiKcYdvjCXtXgmdyBeez/ai-automation-card-NjZF6y4PyH3ZUs9QiH4mRT.webp')`,
                }}
              />
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-6 h-6 text-pink-500" />
                  <CardTitle>AI Business Process Automation</CardTitle>
                </div>
                <CardDescription>2-8 weeks to production</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Agentic Workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">RPA + LLM Deep Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">2026 Privacy Act Compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Quantifiable ROI</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4">Learn More</Button>
              </CardContent>
            </Card>

            {/* Low-Code + Custom */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663376059377/TZXiKcYdvjCXtXgmdyBeez/low-code-card-4hJRVpciKiWgZgnH7seZ6a.webp')`,
                }}
              />
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Code2 className="w-6 h-6 text-pink-500" />
                  <CardTitle>Low-Code + Advanced Custom</CardTitle>
                </div>
                <CardDescription>50% cost reduction, 2x faster delivery</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Hybrid Development Model</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Rapid MVP Validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Complex System Integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Flexible Iteration & Scaling</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4">Learn More</Button>
              </CardContent>
            </Card>

            {/* Modernization */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div
                className="h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663376059377/TZXiKcYdvjCXtXgmdyBeez/modernization-card-DwuwhV2F3AJmhRuqL2cfy4.webp')`,
                }}
              />
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-pink-500" />
                  <CardTitle>Legacy System Modernization</CardTitle>
                </div>
                <CardDescription>Smooth transition, minimal risk</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Progressive Modernization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">API-First Architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Data Migration & Validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Business Continuity Assurance</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-4">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Us</h2>
              <p className="text-lg text-gray-600 mb-8">
                We're not just developers—we're your technology partners. We promise certainty in delivery and deep understanding of the Australian market's unique compliance landscape.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Shield className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">15 Years of Industry Experience</h3>
                    <p className="text-gray-600">10 years development + 5 years project management ensuring high-quality delivery</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Australian Local Team</h3>
                    <p className="text-gray-600">Deep understanding of privacy laws, data sovereignty and local compliance requirements</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <TrendingUp className="w-6 h-6 text-pink-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Transparent Collaboration</h3>
                    <p className="text-gray-600">Real-time project management, weekly updates, zero hidden costs</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-pink-600 mb-2">2-8 weeks</div>
                  <p className="text-gray-600">AI automation project delivery</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-pink-600 mb-2">50%</div>
                  <p className="text-gray-600">Cost reduction with low-code</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
                  <p className="text-gray-600">Privacy Act compliance guarantee</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Case Studies</h2>
            <p className="text-xl text-gray-600">Real results for Australian businesses</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "FinTech Company - Compliance Automation",
                description: "AI-driven compliance workflow reduced audit time from 2 days to 2 hours while ensuring 100% compliance with 2026 Privacy Act requirements.",
                metrics: ["Audit time -96%", "Annual savings $150k", "Zero compliance risk"],
              },
              {
                title: "Healthcare Provider - Patient Data Platform",
                description: "Low-code platform + custom integration delivered HIPAA-compliant patient management system in 3 weeks. Replaced legacy system seamlessly.",
                metrics: ["Delivery 3 weeks", "Savings $80k", "Patient satisfaction +45%"],
              },
              {
                title: "E-Commerce Startup - MVP Launch",
                description: "Hybrid low-code development delivered MVP in 4 weeks. First month: 500+ users. Custom optimization doubled daily orders within 6 months.",
                metrics: ["MVP delivery 4 weeks", "First month users 500+", "Order volume +200%"],
              },
              {
                title: "Manufacturing Enterprise - Supply Chain AI",
                description: "ERP integration + AI forecasting automated supply chain. Inventory costs down 35%, on-time delivery rate up to 98%, operational efficiency tripled.",
                metrics: ["Inventory cost -35%", "On-time delivery 98%", "Efficiency +3x"],
              },
            ].map((caseStudy, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{caseStudy.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.metrics.map((metric, i) => (
                      <span key={i} className="inline-block bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                        {metric}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Start Your Digital Transformation</h2>
              <p className="text-xl text-gray-600">
                Let's design a precision technology solution for your business. Fill out the form below and we'll contact you within 24 hours.
              </p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Inquiry Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1">Project Description</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                      rows={4}
                      placeholder="Tell us about your project needs..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-pink-600 hover:bg-pink-700 text-white"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo.png" alt="White Lotus Software" className="w-8 h-8" />
                <span className="font-bold text-white">White Lotus Software</span>
              </div>
              <p className="text-sm">Premium software solutions for Australian businesses</p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition">AI Automation</a></li>
                <li><a href="#services" className="hover:text-white transition">Low-Code Development</a></li>
                <li><a href="#services" className="hover:text-white transition">System Modernization</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#cases" className="hover:text-white transition">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Contact</h3>
              <div className="flex gap-4">
                <a href="mailto:info@whitelotus.space" className="hover:text-white transition"><Mail className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="hover:text-white transition"><Github className="w-5 h-5" /></a>
              </div>
              <p className="text-sm mt-4">info@whitelotus.space</p>
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

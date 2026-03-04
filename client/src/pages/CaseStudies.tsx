import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code2, TrendingUp } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "FinTech Company - Compliance Automation",
      industry: "Financial Services",
      challenge: "Manual compliance audits were taking 2 days per cycle, with high error rates and regulatory risk. The company needed to scale compliance checks without hiring more staff.",
      solution: "We built an AI-driven compliance workflow using intelligent document processing and automated rule validation. The system integrates with their existing ERP and generates audit trails automatically.",
      results: [
        "Audit time reduced from 2 days to 2 hours (-96%)",
        "Annual cost savings: $150,000",
        "Zero compliance violations in 18 months",
        "Regulatory confidence score: 99.8%",
      ],
      timeline: "6 weeks",
      technologies: ["Python", "LLM APIs", "RPA", "AWS"],
      testimonial: "Precision Tech didn't just automate our compliance—they transformed how we think about risk management. The transparency and certainty they provided was invaluable.",
      testimonialAuthor: "CFO, Sydney-based FinTech",
    },
    {
      id: 2,
      title: "Healthcare Provider - Patient Data Platform",
      industry: "Healthcare",
      challenge: "Legacy patient management system was outdated, slow, and didn't meet modern privacy requirements. Migration to a new system was risky with 20+ years of patient data at stake.",
      solution: "We designed a HIPAA/Privacy Act-compliant patient platform using low-code foundation + custom integrations. The system was built in parallel with the legacy system, allowing zero-downtime migration.",
      results: [
        "Delivered in 3 weeks (vs. 12-week industry average)",
        "Zero data loss during migration",
        "Patient satisfaction increased 45%",
        "Operational efficiency improved 60%",
      ],
      timeline: "3 weeks",
      technologies: ["Low-Code Platform", "Node.js", "PostgreSQL", "AWS"],
      testimonial: "The team's understanding of healthcare compliance was exceptional. They didn't just build software—they understood our business and regulatory constraints.",
      testimonialAuthor: "Operations Director, Melbourne Healthcare",
    },
    {
      id: 3,
      title: "E-Commerce Startup - MVP to Scale",
      industry: "E-Commerce",
      challenge: "Startup needed to validate product-market fit quickly with limited budget. Traditional development would take 4 months and $200k. They had 6 weeks and $50k.",
      solution: "We used hybrid low-code development to build MVP in 4 weeks, then custom optimization for high-traffic features. The platform was designed to scale from 100 to 100,000 daily orders.",
      results: [
        "MVP delivered in 4 weeks (vs. 16-week traditional estimate)",
        "First month: 500+ users",
        "Daily order volume increased 200% within 6 months",
        "Conversion rate: 8.5% (industry avg: 2-3%)",
      ],
      timeline: "4 weeks MVP + ongoing optimization",
      technologies: ["React", "Next.js", "Stripe", "AWS"],
      testimonial: "Precision Tech understood startup constraints. They delivered fast, kept costs low, and built a platform that actually scales. Best decision we made.",
      testimonialAuthor: "Founder & CEO, Brisbane E-Commerce Startup",
    },
    {
      id: 4,
      title: "Manufacturing Enterprise - Supply Chain AI",
      industry: "Manufacturing",
      challenge: "Supply chain was fragmented across 5 legacy systems. Inventory costs were 40% higher than competitors. Forecasting was manual and inaccurate.",
      solution: "We integrated all 5 systems via APIs, built predictive inventory models using ML, and automated procurement workflows. The system learns from historical data and market signals.",
      results: [
        "Inventory carrying costs reduced 35%",
        "On-time delivery rate improved to 98% (from 78%)",
        "Operational efficiency increased 3x",
        "Annual savings: $2.1 million",
      ],
      timeline: "12 weeks",
      technologies: ["Python", "Machine Learning", "Apache Kafka", "AWS"],
      testimonial: "The AI-driven forecasting alone paid for the entire project in 3 months. The team's expertise in manufacturing processes was remarkable.",
      testimonialAuthor: "Chief Operations Officer, Sydney Manufacturing",
    },
    {
      id: 5,
      title: "Insurance Broker - Digital Transformation",
      industry: "Insurance",
      challenge: "50-year-old insurance broker was losing market share to digital competitors. Customer onboarding took 10 days. Quote generation was manual and error-prone.",
      solution: "We built a modern digital platform with automated quote generation, instant policy issuance, and customer self-service portal. Integrated with 12 insurance providers' APIs.",
      results: [
        "Customer onboarding reduced from 10 days to 10 minutes",
        "Quote accuracy improved to 99.9%",
        "New customer acquisition increased 250%",
        "Customer retention improved 35%",
      ],
      timeline: "8 weeks",
      technologies: ["React", "Node.js", "MongoDB", "Third-party APIs"],
      testimonial: "They didn't just modernize our platform—they saved our business. We went from losing customers to gaining market share.",
      testimonialAuthor: "Managing Director, Perth Insurance Broker",
    },
    {
      id: 6,
      title: "Government Agency - Legacy System Modernization",
      industry: "Government",
      challenge: "20-year-old COBOL system handling citizen services. Difficult to maintain, security vulnerabilities, and couldn't handle modern payment methods or APIs.",
      solution: "Progressive modernization: we built a new microservices architecture in parallel, migrated services one at a time, and maintained 100% uptime throughout.",
      results: [
        "100% uptime during 18-month migration",
        "System maintenance costs reduced 60%",
        "Citizen satisfaction scores increased 40%",
        "Security vulnerabilities: 0 post-migration",
      ],
      timeline: "18 weeks",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Kubernetes"],
      testimonial: "Government projects are notoriously complex. Precision Tech's disciplined approach and risk management gave us confidence every step of the way.",
      testimonialAuthor: "IT Director, Australian Government Agency",
    },
  ];

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
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">About</Link>
            <Link href="/case-studies" className="text-gray-600 hover:text-gray-900 transition font-semibold">Case Studies</Link>
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
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Real projects. Real results. Real businesses transformed. See how we've helped Australian companies solve their toughest technology challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="space-y-12">
            {caseStudies.map((study, idx) => (
              <Card key={study.id} className="border-0 shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 md:p-12 flex flex-col justify-between">
                    <div>
                      <div className="text-sm font-semibold text-blue-200 mb-2">{study.industry}</div>
                      <h3 className="text-2xl font-bold mb-6">{study.title}</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm text-blue-200 mb-1">Challenge</div>
                          <p className="text-blue-50 text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <div className="text-sm text-blue-200 mb-1">Timeline</div>
                          <p className="text-blue-50 font-semibold">{study.timeline}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-blue-200 mb-2">Technologies</div>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, i) => (
                          <span key={i} className="inline-block bg-blue-500/30 text-blue-50 px-2 py-1 rounded text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-2 p-8 md:p-12">
                    <div className="space-y-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Solution</h4>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-emerald-500" />
                          Results
                        </h4>
                        <ul className="grid md:grid-cols-2 gap-3">
                          {study.results.map((result, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-emerald-500 font-bold text-lg">✓</span>
                              <span className="text-gray-700">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-700">
                        <p className="text-gray-700 italic mb-3">"{study.testimonial}"</p>
                        <p className="text-sm font-semibold text-gray-900">— {study.testimonialAuthor}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">50+</div>
              <p className="text-gray-600">Projects Delivered</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">$50M+</div>
              <p className="text-gray-600">Client Value Created</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">100%</div>
              <p className="text-gray-600">On-Time Delivery</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-blue-700 mb-2">98%</div>
              <p className="text-gray-600">Client Retention</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Your Project Could Be Next</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you need AI automation, low-code development, or legacy modernization, we have the expertise to deliver results.
          </p>
          <Link href="/#contact">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
              Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
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
                <li><Link href="/case-studies" className="hover:text-white transition">Case Studies</Link></li>
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

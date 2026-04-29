import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { GraduationCap, HeartPulse, Users, Sprout, Baby, Utensils, CheckCircle } from "lucide-react"

const programs = [
  {
    id: "education",
    icon: GraduationCap,
    title: "Education Support",
    description: "Providing scholarships, school supplies, and educational resources to underprivileged children.",
    color: "primary",
    features: [
      "Full scholarships for primary and secondary students",
      "School supplies and uniforms distribution",
      "After-school tutoring programs",
      "Computer literacy training",
      "Teacher training and support",
    ],
    impact: "500+ students supported annually",
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare Outreach",
    description: "Free medical camps, health education, and access to essential medicines for rural communities.",
    color: "secondary",
    features: [
      "Mobile medical clinics in rural areas",
      "Free health screenings and checkups",
      "Distribution of essential medicines",
      "Maternal and child health programs",
      "Health education workshops",
    ],
    impact: "10,000+ patients served annually",
  },
  {
    id: "community",
    icon: Users,
    title: "Community Development",
    description: "Building infrastructure, clean water projects, and sustainable livelihood programs.",
    color: "primary",
    features: [
      "Clean water well construction",
      "Sanitation facilities building",
      "Community center construction",
      "Road and bridge improvements",
      "Solar power installations",
    ],
    impact: "20+ communities transformed",
  },
  {
    id: "youth",
    icon: Sprout,
    title: "Youth Empowerment",
    description: "Skills training, mentorship, and entrepreneurship programs for young people.",
    color: "secondary",
    features: [
      "Vocational skills training",
      "Entrepreneurship workshops",
      "Career mentorship programs",
      "Youth leadership training",
      "Startup funding support",
    ],
    impact: "200+ youth trained annually",
  },
  {
    id: "child",
    icon: Baby,
    title: "Child Welfare",
    description: "Supporting orphans and vulnerable children with nutrition, shelter, and care programs.",
    color: "primary",
    features: [
      "Orphan sponsorship programs",
      "Child nutrition programs",
      "Foster care support",
      "Child protection initiatives",
      "Psychosocial support services",
    ],
    impact: "300+ children under care",
  },
  {
    id: "food",
    icon: Utensils,
    title: "Food Security",
    description: "Fighting hunger through food distribution and sustainable farming initiatives.",
    color: "secondary",
    features: [
      "Emergency food distribution",
      "Sustainable farming training",
      "Seed and tool distribution",
      "Community gardens support",
      "Food storage solutions",
    ],
    impact: "5,000+ families fed annually",
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold mb-2">Our Programs</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Creating Lasting Impact Through Comprehensive Programs
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our diverse range of programs addresses the multifaceted challenges faced by 
                communities, from education and healthcare to sustainable development and 
                youth empowerment.
              </p>
            </div>
          </div>
        </section>

        {/* Programs List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-16">
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  id={program.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className={`w-16 h-16 rounded-xl bg-${program.color}/10 flex items-center justify-center mb-6`}>
                      <program.icon className={`h-8 w-8 text-${program.color}`} />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-4">{program.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{program.description}</p>
                    <ul className="flex flex-col gap-3 mb-6">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className={`h-5 w-5 text-${program.color} shrink-0 mt-0.5`} />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full bg-${program.color}/10 text-${program.color} font-medium text-sm mb-6`}>
                      {program.impact}
                    </div>
                    <div className="flex gap-4">
                      <Button asChild className={`bg-${program.color} hover:bg-${program.color}/90 text-${program.color}-foreground`}>
                        <Link href="/donate">Support This Program</Link>
                      </Button>
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card className="overflow-hidden">
                      <div className={`h-80 bg-gradient-to-br from-${program.color}/20 to-${program.color}/5 flex items-center justify-center`}>
                        <program.icon className={`h-32 w-32 text-${program.color}/30`} />
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Support Our Programs</h2>
            <p className="text-background/70 max-w-2xl mx-auto mb-8">
              Your donation helps us continue and expand these vital programs that are 
              transforming lives and communities across Kenya.
            </p>
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="/donate">Make a Donation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

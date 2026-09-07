import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  GraduationCap,
  Dumbbell,
  Users,
  Trophy,
  Sprout,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    id: "athlete-support",
    icon: Activity,
    title: "Athlete Support",
    description:
      "We provide young athletes with essential running kits, shoes, and training gear that help them train with confidence and consistency.",
    image: "/images/gallery/11.jpg",
    features: [
      "Running shoes and kits distribution",
      "Training apparel support",
      "Access to basic sports equipment",
      "Support for upcoming athletes",
    ],
    impact: "200+ athletes supported",
  },
  {
    id: "education-support",
    icon: GraduationCap,
    title: "Education Support",
    description:
      "We help student-athletes stay focused in school by supporting educational needs that directly affect their progress.",
    image: "/images/gallery/12.jpg",
    features: [
      "School fees assistance",
      "School uniforms and supplies",
      "Support for student-athletes",
      "Reducing barriers to learning",
    ],
    impact: "100+ students supported",
  },
  {
    id: "training-development",
    icon: Dumbbell,
    title: "Training & Development",
    description:
      "We encourage structured training, discipline, and continuous improvement for young athletes working toward their goals.",
    image: "/images/gallery/15.jpg",
    features: [
      "Structured training support",
      "Athlete development opportunities",
      "Encouraging consistency and discipline",
      "Supporting long-term growth",
    ],
    impact: "Active youth training programs",
  },
  {
    id: "mentorship",
    icon: Users,
    title: "Mentorship & Guidance",
    description:
      "We connect young athletes with mentorship that encourages focus, discipline, confidence, and personal growth.",
    image: "/images/gallery/16.jpg",
    features: [
      "Athlete mentorship sessions",
      "Guidance on discipline and mindset",
      "Balancing sports and education",
      "Personal growth support",
    ],
    impact: "Growing mentorship network",
  },
  {
    id: "talent-development",
    icon: Trophy,
    title: "Talent Development",
    description:
      "We help identify and nurture young athletes with potential by creating opportunities for growth and exposure.",
    image: "/images/gallery/14.jpg",
    features: [
      "Supporting emerging talent",
      "Encouraging competitive growth",
      "Building confidence through opportunities",
      "Creating pathways for progression",
    ],
    impact: "Future-focused athlete growth",
  },
  {
    id: "youth-empowerment",
    icon: Sprout,
    title: "Youth Empowerment",
    description:
      "Beyond athletics, we focus on helping young people build discipline, confidence, and a positive mindset for life.",
    image: "/images/gallery/52.jpg",
    features: [
      "Confidence-building initiatives",
      "Encouraging discipline and responsibility",
      "Positive youth engagement",
      "Developing self-driven individuals",
    ],
    impact: "Empowering the next generation",
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <PageHero
          eyebrow="Our Programs"
          title="Supporting Athletes Beyond the Track"
          description="Our programs are focused on giving young athletes the support, structure, and opportunities they need to grow through sports and education."
          image="/images/gallery/1.jpg"
        />

        {/* Programs Grid */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 gap-6">
              {programs.map((program) => (
                <Card
                  key={program.id}
                  id={program.id}
                  className="overflow-hidden rounded-2xl border border-border/60 shadow-none hover:shadow-lg hover:border-primary/40 transition-all scroll-mt-28 py-0"
                >
                  <div className="relative h-48">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg">
                      <program.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h2 className="text-lg font-bold text-foreground mb-2">
                      {program.title}
                    </h2>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {program.description}
                    </p>

                    <ul className="flex flex-col gap-2 mb-4">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                          <span className="text-foreground text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full font-medium text-xs bg-primary/10 text-primary">
                        {program.impact}
                      </span>

                      <Link
                        href="/contact"
                        className="inline-flex items-center text-sm font-semibold text-primary hover:gap-2 transition-all shrink-0"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 lg:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="max-w-xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Support the Journey
              </h2>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8">
                Your support helps young athletes access the resources,
                opportunities, and guidance they need to grow in sports and
                education.
              </p>

              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8"
              >
                <Link href="/donate">
                  Support an Athlete
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

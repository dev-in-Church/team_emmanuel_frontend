import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
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
} from "lucide-react";

const programs = [
  {
    id: "athlete-support",
    icon: Activity,
    title: "Athlete Support",
    description:
      "We provide young athletes with essential running kits, shoes, and training gear that help them train with confidence and consistency.",
    color: "primary",
    image: "/images/support.jpeg",
    features: [
      "Running shoes and kits distribution",
      "Training apparel support",
      "Access to basic sports equipment",
      "Support for upcoming athletes",
      "Encouraging confidence through proper gear",
    ],
    impact: "200+ athletes supported",
  },
  {
    id: "education-support",
    icon: GraduationCap,
    title: "Education Support",
    description:
      "We help student-athletes stay focused in school by supporting educational needs that directly affect their progress.",
    color: "secondary",
    image: "/images/education.jpeg",
    features: [
      "School fees assistance",
      "School uniforms and supplies",
      "Support for student-athletes",
      "Encouraging education alongside sports",
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
    color: "primary",
    image: "/images/training.jpeg",
    features: [
      "Structured training support",
      "Athlete development opportunities",
      "Encouraging consistency and discipline",
      "Building strong training habits",
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
    color: "secondary",
    image: "/images/mentorship.jpeg",
    features: [
      "Athlete mentorship sessions",
      "Guidance on discipline and mindset",
      "Balancing sports and education",
      "Encouraging leadership and responsibility",
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
    color: "primary",
    image: "/images/talent.jpeg",
    features: [
      "Supporting emerging talent",
      "Encouraging competitive growth",
      "Building confidence through opportunities",
      "Promoting long-term athlete development",
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
    color: "secondary",
    image: "/images/youth.jpeg",
    features: [
      "Confidence-building initiatives",
      "Encouraging discipline and responsibility",
      "Positive youth engagement",
      "Creating supportive environments",
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
        <section className="pt-34 bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                Our Programs
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Supporting Athletes Beyond the Track
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our programs are focused on giving young athletes the support,
                structure, and opportunities they need to grow through sports
                and education.
              </p>
            </div>
          </div>
        </section>

        {/* Programs List */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col gap-20">
              {programs.map((program, index) => (
                <div
                  key={program.id}
                  id={program.id}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div
                      className={`w-16 h-16 rounded-xl ${
                        program.color === "primary"
                          ? "bg-primary/10"
                          : "bg-secondary/10"
                      } flex items-center justify-center mb-6`}
                    >
                      <program.icon
                        className={`h-8 w-8 ${
                          program.color === "primary"
                            ? "text-primary"
                            : "text-secondary"
                        }`}
                      />
                    </div>

                    <h2 className="text-3xl font-bold text-foreground mb-4">
                      {program.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {program.description}
                    </p>

                    {/* Features */}
                    <ul className="flex flex-col gap-3 mb-6">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle
                            className={`h-5 w-5 shrink-0 mt-0.5 ${
                              program.color === "primary"
                                ? "text-primary"
                                : "text-secondary"
                            }`}
                          />

                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Impact */}
                    <div
                      className={`inline-flex items-center px-4 py-2 rounded-full font-medium text-sm mb-6 ${
                        program.color === "primary"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      {program.impact}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        asChild
                        className={
                          program.color === "primary"
                            ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                            : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                        }
                      >
                        <Link href="/contact">Learn More</Link>
                      </Button>
                    </div>
                  </div>

                  {/* Visual Card */}
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <Card className="overflow-hidden rounded-sm border-0 shadow-md">
                      <div className="relative h-80">
                        <Image
                          src={program.image}
                          alt={program.title}
                          fill
                          className="object-cover"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Support the Journey
            </h2>

            <p className="text-background/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              Your support helps young athletes access the resources,
              opportunities, and guidance they need to grow in sports and
              education.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <Link href="/donate">Support an Athlete</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

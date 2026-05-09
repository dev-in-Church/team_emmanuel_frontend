import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  HeartPulse,
  Users,
  Sprout,
  Baby,
  Utensils,
  ArrowRight,
  Activity,
  Dumbbell,
  Trophy,
} from "lucide-react";

const programs = [
  {
    icon: Activity,
    title: "Athlete Support",
    description:
      "Providing running kits, shoes, and essential gear to young athletes who lack access to proper equipment.",
    color: "from-primary to-primary/80",
    bgColor: "bg-primary/5",
    image: "/images/support.jpeg",
  },
  {
    icon: GraduationCap,
    title: "Education Support",
    description:
      "Supporting student-athletes with school fees, uniforms, and learning materials to keep them in school.",
    color: "from-secondary to-secondary/80",
    bgColor: "bg-secondary/5",
    image: "/images/education.jpeg",
  },
  {
    icon: Dumbbell,
    title: "Training & Development",
    description:
      "Creating access to structured training, coaching guidance, and development opportunities for young runners.",
    color: "from-primary to-primary/80",
    bgColor: "bg-primary/5",
    image: "/images/training.jpeg",
  },
  {
    icon: Users,
    title: "Mentorship",
    description:
      "Connecting young athletes with mentors who guide them in discipline, mindset, and life beyond sports.",
    color: "from-secondary to-secondary/80",
    bgColor: "bg-secondary/5",
    image: "/images/mentorship.jpeg",
  },
  {
    icon: Trophy,
    title: "Talent Development",
    description:
      "Identifying and nurturing promising athletes, helping them grow their potential and pursue competitive opportunities.",
    color: "from-primary to-primary/80",
    bgColor: "bg-primary/5",
    image: "/images/talent.jpeg",
  },
  {
    icon: Sprout,
    title: "Youth Empowerment",
    description:
      "Building confidence, discipline, and life skills through sports and education support programs.",
    color: "from-secondary to-secondary/80",
    bgColor: "bg-secondary/5",
    image: "/images/youth.jpeg",
  },
];

export function ProgramsSection() {
  return (
    <section className="py-10 bg-muted/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-3 text-sm uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Programs & Initiatives
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We run various programs aimed at uplifting communities and creating
            sustainable change for generations to come. Each initiative is
            designed to address specific needs and create lasting impact.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className={`group relative bg-background rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 ${program.bgColor}`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* <div
                  className={`absolute inset-0 bg-gradient-to-t ${program.color} opacity-60`}
                /> */}
                <div
                  className={`absolute top-4 left-4 w-14 h-14 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center shadow-lg`}
                >
                  <program.icon className="h-7 w-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {program.description}
                </p>
                <Link
                  href="/programs"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Hover Border Effect */}
              <div
                className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${program.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
          >
            <Link href="/programs">
              Explore All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

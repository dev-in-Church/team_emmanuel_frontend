import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Users,
  Sprout,
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
    image: "/images/gallery/11.jpg",
    featured: true,
  },
  {
    icon: GraduationCap,
    title: "Education Support",
    description:
      "Supporting student-athletes with school fees, uniforms, and learning materials to keep them in school.",
    image: "/images/gallery/12.jpg",
  },
  {
    icon: Dumbbell,
    title: "Training & Development",
    description:
      "Creating access to structured training, coaching guidance, and development opportunities for young runners.",
    image: "/images/gallery/15.jpg",
  },
  {
    icon: Users,
    title: "Mentorship",
    description:
      "Connecting young athletes with mentors who guide them in discipline, mindset, and life beyond sports.",
    image: "/images/gallery/16.jpg",
  },
  {
    icon: Trophy,
    title: "Talent Development",
    description:
      "Identifying and nurturing promising athletes, helping them grow their potential and pursue competitive opportunities.",
    image: "/images/gallery/14.jpg",
  },
  // {
  //   icon: Sprout,
  //   title: "Empowerment",
  //   description:
  //     "Building confidence, discipline, and life skills through sports and education support programs.",
  //   image: "/images/gallery/12.jpg",
  // },
];

export function ProgramsSection() {
  const [featured, ...rest] = programs;

  return (
    <section className="py-10 lg:py-14 bg-muted/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-block text-primary font-semibold mb-2 text-xs uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
            Our Programs & Initiatives
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We run various programs aimed at uplifting communities and creating
            sustainable change for generations to come.
          </p>
        </div>

        {/* Programs Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-6">
          {/* Featured card — spans 2 cols / 2 rows on large screens */}
          <div className="group relative lg:col-span-2 lg:row-span-2 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 min-h-[320px]">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent" />

            <div className="relative h-full flex flex-col justify-end p-8">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg mb-4">
                <featured.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <span className="text-primary text-xs font-bold uppercase tracking-wider mb-2">
                Flagship Program
              </span>
              <h3 className="text-2xl font-bold text-white mb-3">
                {featured.title}
              </h3>
              <p className="text-white/80 leading-relaxed mb-5 max-w-md">
                {featured.description}
              </p>
              <Link
                href="/programs"
                aria-label={`Learn more about ${featured.title}`}
                className="inline-flex items-center w-fit text-sm font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full px-5 py-2.5 transition-all group/link"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Remaining program cards */}
          {rest.map((program) => (
            <div
              key={program.title}
              className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-border/40"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <program.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-3">
                  {program.description}
                </p>
                <Link
                  href="/programs"
                  aria-label={`Learn more about ${program.title}`}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
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

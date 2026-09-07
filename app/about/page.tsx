import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { PatternBackground } from "@/components/pattern-background";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  GraduationCap,
  Users,
  Trophy,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    icon: Activity,
    title: "Running Kits & Gear",
    description:
      "Providing shoes, kits, and essential training equipment for young athletes.",
  },
  {
    icon: GraduationCap,
    title: "Education Support",
    description:
      "Helping student-athletes stay in school through fees, uniforms, and learning materials.",
  },
  {
    icon: Users,
    title: "Mentorship & Guidance",
    description:
      "Encouraging discipline, focus, confidence, and personal growth.",
  },
  {
    icon: Trophy,
    title: "Athlete Development",
    description:
      "Creating opportunities for training, development, and long-term progress.",
  },
];

const stats = [
  { value: "200+", label: "Athletes supported" },
  { value: "100+", label: "Students in school" },
  { value: "6", label: "Years of impact" },
];

const collageImages = [
  { src: "/images/training.jpeg", alt: "Athletes training" },
  { src: "/images/gallery/11.jpg", alt: "Team Emmanuel athlete" },
  { src: "/images/gallery/14.jpg", alt: "Talent development" },
  { src: "/images/gallery/16.jpg", alt: "Mentorship session" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <PageHero
          eyebrow="About Us"
          title="Supporting the Next Generation of Athletes"
          description="Team Emmanuel Foundation is a community-based initiative focused on supporting young athletes through sports and education. We provide practical support such as running kits, school fees, mentorship, and opportunities for growth both on and off the track."
          image="/images/hero.jpg"
        >
          <div className="grid grid-cols-3 gap-4 max-w-lg mt-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-extrabold text-primary">
                  {stat.value}
                </p>
                <p className="text-xs text-white/60 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </PageHero>

        {/* Mission & Vision — compact strip, no cards/icons */}
        <section className="py-8 lg:py-10 border-b border-border/60">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/60 max-w-3xl mx-auto">
              <div className="pb-6 sm:pb-0 sm:pr-8">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Our Mission
                </p>
                <p className="text-foreground text-sm leading-relaxed">
                  To support and develop young athletes by providing access to
                  essential resources, education, and mentorship.
                </p>
              </div>
              <div className="pt-6 sm:pt-0 sm:pl-8">
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  Our Vision
                </p>
                <p className="text-foreground text-sm leading-relaxed">
                  To build a generation of disciplined, confident, and
                  self-driven individuals through sports and education.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Support — image collage instead of single image */}
        <section className="py-10 lg:py-14 bg-muted/30 relative overflow-hidden">
          <PatternBackground />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Content */}
              <div>
                <span className="inline-block text-primary font-semibold mb-2 text-xs uppercase tracking-wider">
                  Who We Support
                </span>

                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Focused on Young Athletes with Potential
                </h2>

                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Many young athletes have the talent and determination to
                    succeed, but lack access to the basic support they need to
                    continue training and stay in school.
                  </p>
                  <p>
                    Team Emmanuel Foundation exists to support these athletes by
                    helping remove some of the barriers that slow their
                    progress.
                  </p>
                  <p>
                    From running gear to educational support, our goal is to
                    create an environment where young people can stay focused,
                    disciplined, and motivated to grow.
                  </p>
                </div>
              </div>

              {/* Image Collage */}
              <div className="grid grid-cols-2 gap-3 h-[380px] sm:h-[420px]">
                <div className="relative rounded-2xl overflow-hidden shadow-lg row-span-2">
                  <Image
                    src={collageImages[0].src}
                    alt={collageImages[0].alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src={collageImages[1].src}
                    alt={collageImages[1].alt}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-lg grid grid-cols-2 gap-3">
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src={collageImages[2].src}
                      alt={collageImages[2].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden">
                    <Image
                      src={collageImages[3].src}
                      alt={collageImages[3].alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="inline-block text-primary font-semibold mb-2 text-xs uppercase tracking-wider">
                What We Do
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                Supporting Growth Through Sports and Education
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our support is focused on practical needs that directly impact
                the growth and development of young athletes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {programs.map((program) => (
                <Card
                  key={program.title}
                  className="rounded-2xl border border-border/60 shadow-none hover:shadow-lg hover:border-primary/40 transition-all"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <program.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-base font-bold text-foreground mb-2">
                      {program.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {program.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-10 lg:py-14 bg-muted/30 relative overflow-hidden">
          <PatternBackground />
          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block text-primary font-semibold mb-2 text-xs uppercase tracking-wider">
                Why It Matters
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Opportunity Can Change Direction
              </h2>
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                <p className="font-semibold text-foreground">
                  Talent alone is not always enough.
                </p>
                <p>
                  Many young athletes are forced to stop training or leave
                  school because of limited resources and lack of support.
                </p>
                <p>
                  By stepping in at the right time, we help create stability,
                  confidence, and opportunity for young people working toward a
                  better future.
                </p>
                <p>
                  Our focus is not only on performance, but also on discipline,
                  education, and long-term personal growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 lg:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <div className="max-w-xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Be Part of the Journey
              </h2>
              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-8">
                Support young athletes by contributing resources, opportunities,
                or mentorship that can help shape their future both in sports
                and education.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/30 bg-white/10 text-primary-foreground hover:bg-white/20 rounded-full px-8"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

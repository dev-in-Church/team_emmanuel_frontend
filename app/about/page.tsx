import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {
  Target,
  Eye,
  Activity,
  GraduationCap,
  Users,
  Trophy,
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

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-34 bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                About Us
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Supporting the Next Generation of Athletes
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Team Emmanuel Foundation is a community-based initiative focused
                on supporting young athletes through sports and education. We
                provide practical support such as running kits, school fees,
                mentorship, and opportunities for growth both on and off the
                track.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <Card className="border-l-4 border-l-primary rounded-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Target className="h-6 w-6 text-primary" />
                    </div>

                    <h2 className="text-2xl font-bold text-foreground">
                      Our Mission
                    </h2>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    To support and develop young athletes by providing access to
                    essential resources, education, and mentorship.
                  </p>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="border-l-4 border-l-secondary rounded-sm">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                      <Eye className="h-6 w-6 text-secondary" />
                    </div>

                    <h2 className="text-2xl font-bold text-foreground">
                      Our Vision
                    </h2>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    To build a generation of disciplined, confident, and
                    self-driven individuals through sports and education.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who We Support */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                  Who We Support
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Focused on Young Athletes with Potential
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
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

              {/* Image */}
              <div className="relative">
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm">
                  <Image
                    src="/images/training.jpeg"
                    alt="Young athletes training"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                What We Do
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Supporting Growth Through Sports and Education
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Our support is focused on practical needs that directly impact
                the growth and development of young athletes.
              </p>
            </div>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {programs.map((program) => (
                <Card
                  key={program.title}
                  className="rounded-sm hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                      <program.icon className="h-7 w-7 text-primary" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">
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
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                Why It Matters
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Opportunity Can Change Direction
              </h2>

              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
                <p>Talent alone is not always enough.</p>

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
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Be Part of the Journey
            </h2>

            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
              Support young athletes by contributing resources, opportunities,
              or mentorship that can help shape their future both in sports and
              education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 rounded-full"
              >
                <Link href="/donate">Support an Athlete</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground bg-primary rounded-full hover:bg-primary-foreground/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

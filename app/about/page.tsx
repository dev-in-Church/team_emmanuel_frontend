import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Target, Eye, Heart, Users, Award, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description:
      "We approach every situation with empathy and genuine care for those we serve.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We believe in the power of community and work together to achieve common goals.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for excellence in all our programs and maintain high standards of service.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We operate with transparency and accountability in all our dealings.",
  },
];

const team = [
  {
    name: "Emmanuel Kiprop",
    role: "Founder & Director",
    image: "/images/team-1.jpg",
  },
  {
    name: "Grace Mwangi",
    role: "Programs Manager",
    image: "/images/team-2.jpg",
  },
  {
    name: "David Ouma",
    role: "Community Outreach",
    image: "/images/team-3.jpg",
  },
  { name: "Faith Njeri", role: "Finance & Admin", image: "/images/team-4.jpg" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold mb-2">About Us</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Our Story of Hope and Service
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Team Emmanuel Foundation was born from a simple belief: that
                every person deserves the opportunity to live a dignified life
                with access to education, healthcare, and basic necessities.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 rounded-sm border-l-primary">
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
                    To empower underprivileged communities through sustainable
                    education, healthcare, and development programs that create
                    lasting positive change in the lives of individuals and
                    families across Kenya and East Africa.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-l-4 rounded-sm border-l-secondary">
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
                    A world where every child has access to quality education,
                    every family has access to healthcare, and every community
                    has the resources to thrive and build a sustainable future
                    for generations to come.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Story */}
        {/* <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-primary font-semibold mb-2">Our Journey</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Decade of Service
                </h2>
                <div className="flex flex-col gap-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2016 by Emmanuel Kiprop, Team Emmanuel Foundation
                    started as a small community initiative in rural Kenya. What
                    began as weekend visits to orphanages and schools has grown
                    into a comprehensive organization serving thousands.
                  </p>
                  <p>
                    Over the years, we have expanded our reach to cover
                    education, healthcare, community development, and youth
                    empowerment programs. Our growth has been made possible by
                    the generous support of donors, volunteers, and partners who
                    share our vision.
                  </p>
                  <p>
                    Today, Team Emmanuel Foundation operates in multiple
                    counties across Kenya, with plans to expand into neighboring
                    countries. We remain committed to our founding principles of
                    compassion, integrity, and community service.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-sm bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Team Emmanuel Foundation"
                    width={300}
                    height={300}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Values */}
        {/* <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-semibold mb-2">Our Values</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Drives Us
              </h2>
              <p className="text-muted-foreground">
                Our core values guide everything we do and shape how we serve
                our communities.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <Card
                  key={value.title}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Team */}
        {/* <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-primary font-semibold mb-2">Our Team</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet the People Behind Our Work
              </h2>
              <p className="text-muted-foreground">
                Our dedicated team works tirelessly to ensure our programs reach
                those who need them most.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <Card
                  key={member.name}
                  className="overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Mission
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Whether you donate, volunteer, or simply spread the word, you can
              be part of the change we are creating in communities across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 rounded-full"
              >
                <Link href="/donate">Donate Now</Link>
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

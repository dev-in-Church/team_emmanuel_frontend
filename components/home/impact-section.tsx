import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Quote, Star, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "Before joining Team Emmanuel, I didn't have proper running shoes. Now I train with confidence and I'm chasing my goals both in school and on the track.",
    name: "Daniel Kiptoo",
    role: "Student Athlete",
    image: "/user.png",
    rating: 5,
  },
  {
    quote:
      "The support I received helped me stay in school while continuing my training. It gave me discipline and a clear path forward.",
    name: "Faith Cherono",
    role: "Beneficiary",
    image: "/user.png",
    rating: 5,
  },
  {
    quote:
      "Being part of this initiative has changed how I see my future. I now have guidance, support, and the motivation to push further.",
    name: "Brian Mutai",
    role: "Young Athlete",
    image: "/user.png",
    rating: 5,
  },
];

const stats = [
  { value: "200+", label: "Athletes supported with running kits" },
  { value: "100+", label: "Students assisted with fees & uniforms" },
  { value: "12", label: "Active training & mentorship programs" },
  { value: "6", label: "Years building this community" },
];

export function ImpactSection() {
  return (
    <section className="py-10 lg:py-14 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-primary blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="inline-block text-primary font-semibold mb-2 text-xs uppercase tracking-wider">
            Our Impact
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
            Real Progress. Real Stories.
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Every step forward matters — from a first pair of running shoes to
            staying in school and building discipline for life.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border/60 bg-muted/30 p-5 text-center hover:border-primary/40 hover:bg-primary/5 transition-colors"
            >
              <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-muted-foreground leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative flex flex-col p-6 rounded-2xl bg-muted/30 border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all"
            >
              <Quote className="absolute top-5 right-5 h-9 w-9 text-primary/10" />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6 relative z-10 flex-1">
                &quot;{testimonial.quote}&quot;
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-border/60">
                <div className="relative w-11 h-11 rounded-full overflow-hidden ring-2 ring-background shadow-md shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
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
            <Link href="/about">
              Learn More About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

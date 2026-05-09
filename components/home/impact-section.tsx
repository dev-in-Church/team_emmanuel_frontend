import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Quote, Star, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    quote:
      "Before joining Team Emmanuel, I didn’t have proper running shoes. Now I train with confidence and I’m chasing my goals both in school and on the track.",
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
const achievements = [
  "200+ young athletes supported with running kits",
  "100+ students assisted with school fees and uniforms",
  "Active training and mentorship programs for youth",
  "Growing community of disciplined and focused athletes",
];

export function ImpactSection() {
  return (
    <section className="py-10 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-primary font-semibold mb-3 text-sm uppercase tracking-wider">
              Our Impact
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Real Progress. Real Stories.
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every step forward matters. From athletes receiving their first
              pair of running shoes to staying in school and building
              discipline, our work is reflected in real progress. These are the
              stories of young people pushing forward with the right support
              behind them.
            </p>

            {/* Achievements List */}
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">
                    {achievement}
                  </span>
                </div>
              ))}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>

          {/* Testimonials */}
          <div className="flex flex-col gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`relative p-6 rounded-sm transition-all hover:shadow-lg ${
                  index % 2 === 0
                    ? "bg-gradient-to-br from-primary/5 to-primary/10 border-l-4 border-primary"
                    : "bg-gradient-to-br from-secondary/5 to-secondary/10 border-l-4 border-secondary"
                }`}
              >
                {/* Quote Icon */}
                <Quote
                  className={`absolute top-4 right-4 h-10 w-10 ${index % 2 === 0 ? "text-primary/10" : "text-secondary/10"}`}
                />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-6 relative z-10">
                  &quot;{testimonial.quote}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-background shadow-md">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

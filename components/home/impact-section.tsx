import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Quote, Star, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    quote:
      "Thanks to Team Emmanuel Foundation, my children can now attend school. They provided uniforms, books, and even pays their school fees. We are forever grateful.",
    name: "Emmanuel Ambundo",
    role: "Parent & Beneficiary",
    image: "/user.jpeg",
    rating: 5,
  },
  {
    quote:
      "The healthcare camp organized by the foundation saved my life. I was diagnosed early and received treatment that I could never have afforded.",
    name: "Leonard Bett",
    role: "Community Member",
    image: "/user.jpeg",
    rating: 5,
  },
  {
    quote:
      "As a volunteer, I have witnessed firsthand the incredible work this foundation does. Every donation truly makes a difference in people's lives.",
    name: "Mirian Jerotich",
    role: "Volunteer",
    image: "/user.jpeg",
    rating: 5,
  },
];

const achievements = [
  "5,000+ children enrolled in education programs",
  "50+ communities served with healthcare",
  "100+ clean water points established",
  "1,000+ youth trained in vocational skills",
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
              Stories of Hope and Transformation
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Every day, we see the impact of your generosity in the smiles of
              children going to school, families receiving healthcare, and
              communities building a better future. Here are some stories from
              the people whose lives have been touched by our work.
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

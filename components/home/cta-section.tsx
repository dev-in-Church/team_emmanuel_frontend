import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ctaCards = [
  {
    title: "Make a Donation",
    description:
      "Your contribution directly impacts lives and helps build a better future.",
    buttonText: "Donate Now",
    href: "/donate",
    primary: true,
  },
  {
    title: "Become a Volunteer",
    description:
      "Join our team of dedicated volunteers and be part of the change.",
    buttonText: "Join Us",
    href: "/contact",
    primary: false,
  },
  {
    title: "Partner With Us",
    description: "Organizations can partner with us to create greater impact.",
    buttonText: "Learn More",
    href: "/contact",
    primary: false,
  },
];

export function CTASection() {
  return (
    <section className="bg-primary py-14 lg:py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-3 text-balance">
            Join Us in Making a Difference
          </h2>
          <p className="text-primary-foreground/80 text-sm leading-relaxed">
            Choose how you would like to contribute and be part of something
            meaningful.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {ctaCards.map((card) => (
            <div
              key={card.title}
              className={`rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 ${
                card.primary
                  ? "bg-white shadow-xl"
                  : "bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15"
              }`}
            >
              <h3
                className={`text-lg font-bold mb-2 ${
                  card.primary ? "text-primary" : "text-primary-foreground"
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`text-sm mb-5 leading-relaxed ${
                  card.primary
                    ? "text-muted-foreground"
                    : "text-primary-foreground/75"
                }`}
              >
                {card.description}
              </p>

              <Button
                asChild
                size="sm"
                className={`rounded-full ${
                  card.primary
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-white text-primary hover:bg-white/90"
                }`}
              >
                <Link href={card.href}>
                  {card.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

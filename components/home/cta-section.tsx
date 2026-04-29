import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Users, HandHeart, ArrowRight, Sparkles } from "lucide-react"

const ctaCards = [
  {
    icon: Heart,
    title: "Make a Donation",
    description: "Your contribution directly impacts lives. Every amount counts towards building a better future.",
    buttonText: "Donate Now",
    href: "/donate",
    primary: true,
    stats: "KES 50M+ raised",
  },
  {
    icon: Users,
    title: "Become a Volunteer",
    description: "Join our team of dedicated volunteers and be part of the change you want to see in the world.",
    buttonText: "Join Us",
    href: "/contact",
    primary: false,
    stats: "100+ active volunteers",
  },
  {
    icon: HandHeart,
    title: "Partner With Us",
    description: "Organizations and businesses can partner with us to create greater impact in communities.",
    buttonText: "Learn More",
    href: "/contact",
    primary: false,
    stats: "20+ corporate partners",
  },
]

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/community.jpg"
          alt="Community"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/95 via-foreground/90 to-foreground/85" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 border border-primary/30">
            <Sparkles className="h-4 w-4" />
            <span>Get Involved</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-6 text-balance">
            Join Us in Making a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Difference
            </span>
          </h2>
          <p className="text-background/70 text-lg leading-relaxed">
            There are many ways you can support our mission and help transform lives. 
            Choose how you would like to contribute and be part of something meaningful.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {ctaCards.map((card, index) => (
            <div
              key={card.title}
              className={`group relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
                card.primary
                  ? "bg-gradient-to-br from-secondary to-secondary/90 text-secondary-foreground shadow-2xl shadow-secondary/30"
                  : "bg-background/10 backdrop-blur-md border border-background/20 hover:bg-background/15"
              }`}
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                  card.primary 
                    ? "bg-background/20" 
                    : "bg-gradient-to-br from-primary/20 to-secondary/20"
                }`}
              >
                <card.icon className={`h-8 w-8 ${card.primary ? "text-secondary-foreground" : "text-primary"}`} />
              </div>

              {/* Stats Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                card.primary 
                  ? "bg-background/20 text-secondary-foreground" 
                  : "bg-primary/20 text-primary"
              }`}>
                {card.stats}
              </div>

              <h3 className={`text-xl font-bold mb-4 ${card.primary ? "text-secondary-foreground" : "text-background"}`}>
                {card.title}
              </h3>
              <p className={`mb-6 leading-relaxed ${card.primary ? "text-secondary-foreground/80" : "text-background/70"}`}>
                {card.description}
              </p>
              
              <Button
                asChild
                className={`w-full group/btn ${
                  card.primary 
                    ? "bg-background text-foreground hover:bg-background/90" 
                    : "bg-background/10 border border-background/30 text-background hover:bg-background/20"
                }`}
              >
                <Link href={card.href}>
                  {card.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>

              {/* Decorative Corner */}
              {card.primary && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-background/5 rounded-bl-full" />
              )}
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-6 md:p-8 bg-background/10 backdrop-blur-md rounded-2xl border border-background/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-background mb-2">Ready to make an impact?</h3>
            <p className="text-background/70">Your support can change lives today. Every contribution matters.</p>
          </div>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shrink-0">
            <Link href="/donate">
              Start Donating
              <Heart className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

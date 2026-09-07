"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { DonationModal } from "@/components/donate/donation-modal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Heart,
  Shield,
  Clock,
  Trophy,
  GraduationCap,
  Shirt,
  Dumbbell,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const impactCards = [
  {
    amount: 1000,
    label: "KES 1,000",
    impact: "Provides training gear for a young athlete",
    icon: Shirt,
  },
  {
    amount: 3000,
    label: "KES 3,000",
    impact: "Supports school fees for one student athlete",
    icon: GraduationCap,
  },
  {
    amount: 7500,
    label: "KES 7,500",
    impact: "Funds transport and meals for a competition",
    icon: Trophy,
  },
  {
    amount: 20000,
    label: "KES 20,000",
    impact: "Sponsors an athlete's training essentials for a season",
    icon: Dumbbell,
  },
];

const trustIndicators = [
  {
    icon: Shield,
    title: "Secure Giving",
    description: "Your donations are processed safely and securely.",
  },
  {
    icon: Clock,
    title: "Direct Community Impact",
    description: "Support reaches athletes, students, and families directly.",
  },
  {
    icon: Heart,
    title: "Transparent Initiative",
    description: "We believe in accountability and measurable impact.",
  },
];

const donationMethods = [
  {
    title: "Bank Transfer",
    details: [
      "Account Number: 7770167698146",
      "Account Name: Emmanuel Kipruto Bundotich",
      "Bank Code: 68",
      "Branch: 153",
      "Swift Code: EQBLKENA",
    ],
  },
];

const supportAreas = [
  "Running kits and training equipment",
  "School fees and uniforms",
  "Athlete transport and competition support",
  "Mentorship and youth development programs",
];

const faqs = [
  {
    question: "How is my donation used?",
    answer:
      "Donations directly support young athletes through training kits, school support, mentorship programs, competition transport, and community outreach activities.",
  },
  {
    question: "Can I support a specific program?",
    answer:
      "Yes. You can choose the area you would like your donation to support during the donation process.",
  },
  {
    question: "Do you accept monthly support?",
    answer:
      "Absolutely. Monthly contributions help us consistently support athletes and sustain ongoing programs throughout the year.",
  },
  {
    question: "Can I volunteer instead of donating?",
    answer:
      "Yes. We welcome volunteers, mentors, coaches, and partners who want to contribute their skills and time to the initiative.",
  },
];

export default function DonatePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [presetAmount, setPresetAmount] = useState<number | undefined>();

  const openModal = (amount?: number) => {
    setPresetAmount(amount);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <PageHero
          eyebrow="Support The Mission"
          title="Help Young Athletes Chase Their Dreams"
          description="Your support helps provide running kits, school fees, uniforms, mentorship, and opportunities for talented young people determined to build a better future through sports and education."
          image="/images/hero2.jpg"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
            <Button
              size="lg"
              onClick={() => openModal()}
              className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Donate Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex items-center gap-2 text-xs text-white/60">
              <Shield className="h-4 w-4" />
              Secure checkout via Paystack &mdash; M-Pesa & card accepted
            </div>
          </div>

          {/* Quick-give presets */}
          <div className="flex flex-wrap gap-2 mt-6">
            {[500, 1000, 2500, 5000].map((amt) => (
              <button
                key={amt}
                onClick={() => openModal(amt)}
                className="px-4 py-2 rounded-full text-xs font-semibold bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors"
              >
                Give KES {amt.toLocaleString()}
              </button>
            ))}
          </div>
        </PageHero>

        {/* Sidebar Info */}
        <section className="py-10 lg:py-14 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-3 gap-5">
              <Card className="rounded-2xl border-border/60 shadow-none">
                <CardContent className="p-6">
                  <h3 className="text-base font-bold text-foreground mb-5">
                    Why Support Us
                  </h3>
                  <div className="flex flex-col gap-4">
                    {trustIndicators.map((item) => (
                      <div key={item.title} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                          <item.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">
                            {item.title}
                          </h4>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-border/60 shadow-none">
                <CardContent className="p-6">
                  <h3 className="text-base font-bold text-foreground mb-4">
                    Your Donation Supports
                  </h3>
                  <div className="flex flex-col gap-3">
                    {supportAreas.map((item) => (
                      <div key={item} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border-border/60 shadow-none">
                <CardContent className="p-6">
                  <h3 className="text-base font-bold text-foreground mb-4">
                    Other Ways to Donate
                  </h3>
                  {donationMethods.map((method) => (
                    <div key={method.title}>
                      <h4 className="font-semibold text-foreground text-sm mb-2">
                        {method.title}
                      </h4>
                      <div className="flex flex-col gap-1">
                        {method.details.map((detail) => (
                          <p
                            key={detail}
                            className="text-xs text-muted-foreground"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact — cards are now clickable, opening the modal preset to that amount */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="inline-block text-primary font-semibold mb-2 text-xs uppercase tracking-wider">
                Real Impact
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                What Your Support Can Do
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every contribution helps create opportunities for young people
                working hard to succeed in athletics and education. Tap an
                amount to give directly.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {impactCards.map((card) => (
                <button
                  key={card.label}
                  onClick={() => openModal(card.amount)}
                  className="text-left"
                >
                  <Card className="rounded-2xl border-border/60 shadow-none hover:shadow-lg hover:border-primary/40 transition-all h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <card.icon className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-lg font-bold text-primary mb-2">
                        {card.label}
                      </p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {card.impact}
                      </p>
                    </CardContent>
                  </Card>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 lg:py-14 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <span className="inline-block text-primary font-semibold mb-2 text-xs uppercase tracking-wider">
                  FAQ
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Common Questions
                </h2>
              </div>

              <Accordion type="single" collapsible>
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`item-${index}`}
                    className="border-border/60"
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 lg:py-16 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-6 lg:px-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to make a difference?
            </h2>
            <p className="text-primary-foreground/80 text-sm mb-8 max-w-lg mx-auto">
              It only takes a minute - choose an amount and complete your
              donation securely.
            </p>
            <Button
              size="lg"
              onClick={() => openModal()}
              className="rounded-full px-8 bg-white text-primary hover:bg-white/90"
            >
              Donate Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      <DonationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initialAmount={presetAmount}
      />
    </div>
  );
}

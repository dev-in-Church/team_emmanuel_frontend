import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { DonationForm } from "@/components/donate/donation-form";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Shield,
  Clock,
  Trophy,
  GraduationCap,
  Shirt,
  Dumbbell,
  CheckCircle2,
} from "lucide-react";

const impactCards = [
  {
    amount: "KES 1,000",
    impact: "Provides training gear for a young athlete",
    icon: Shirt,
  },
  {
    amount: "KES 3,000",
    impact: "Supports school fees for one student athlete",
    icon: GraduationCap,
  },
  {
    amount: "KES 7,500",
    impact: "Funds transport and meals for a competition",
    icon: Trophy,
  },
  {
    amount: "KES 20,000",
    impact: "Sponsors an athlete’s training essentials for a season",
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
  // {
  //   title: "M-Pesa Paybill",
  //   details: ["Paybill Number: 522522", "Account: TEAMEMMANUEL"],
  // },
  {
    title: "Bank Transfer",
    details: [
      // "Bank: Equity Bank Kenya",
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

export default function DonatePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="pt-34 py-20 border-b border-border bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="inline-block text-primary font-semibold mb-3 text-sm uppercase tracking-wider">
                Support The Mission
              </span>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance leading-tight">
                Help Young Athletes
                <br />
                Chase Their Dreams
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Your support helps provide running kits, school fees, uniforms,
                mentorship, and opportunities for talented young people who are
                determined to build a better future through sports and
                education.
              </p>
            </div>
          </div>
        </section>

        {/* Main Donation Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-10 items-start">
              {/* Donation Form */}
              <div className="lg:col-span-2">
                <DonationForm />
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-6">
                {/* Trust */}
                <Card className="rounded-sm border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-6">
                      Why Support Us
                    </h3>

                    <div className="flex flex-col gap-5">
                      {trustIndicators.map((item) => (
                        <div
                          key={item.title}
                          className="flex items-start gap-4"
                        >
                          <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground">
                              {item.title}
                            </h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Support Areas */}
                <Card className="rounded-sm border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-5">
                      Your Donation Supports
                    </h3>

                    <div className="flex flex-col gap-4">
                      {supportAreas.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />

                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Donation Methods */}
                <Card className="rounded-sm border-border">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-5">
                      Other Ways to Donate
                    </h3>

                    <div className="flex flex-col gap-6">
                      {donationMethods.map((method) => (
                        <div key={method.title}>
                          <h4 className="font-semibold text-foreground mb-2">
                            {method.title}
                          </h4>

                          <div className="flex flex-col gap-1">
                            {method.details.map((detail) => (
                              <p
                                key={detail}
                                className="text-sm text-muted-foreground"
                              >
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block text-primary font-semibold mb-3 text-sm uppercase tracking-wider">
                Real Impact
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                What Your Support Can Do
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Every contribution helps create opportunities for young people
                who are working hard to succeed both in athletics and education.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactCards.map((card) => (
                <Card
                  key={card.amount}
                  className="rounded-sm border-border hover:shadow-lg transition-all"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <card.icon className="h-7 w-7 text-primary" />
                    </div>

                    <p className="text-2xl font-bold text-primary mb-3">
                      {card.amount}
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.impact}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-14">
                <span className="inline-block text-primary font-semibold mb-3 text-sm uppercase tracking-wider">
                  Frequently Asked Questions
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Common Questions
                </h2>
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    How is my donation used?
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    Donations directly support young athletes through training
                    kits, school support, mentorship programs, competition
                    transport, and community outreach activities.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Can I support a specific program?
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    Yes. You can choose the area you would like your donation to
                    support during the donation process.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Do you accept monthly support?
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    Absolutely. Monthly contributions help us consistently
                    support athletes and sustain ongoing programs throughout the
                    year.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Can I volunteer instead of donating?
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    Yes. We welcome volunteers, mentors, coaches, and partners
                    who want to contribute their skills and time to the
                    initiative.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

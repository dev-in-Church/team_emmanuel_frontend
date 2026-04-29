import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DonationForm } from "@/components/donate/donation-form"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Shield, Clock, Users, GraduationCap, HeartPulse, Utensils } from "lucide-react"

const impactCards = [
  {
    amount: "KES 500",
    impact: "Provides school supplies for one child",
    icon: GraduationCap,
  },
  {
    amount: "KES 1,000",
    impact: "Feeds a family for one week",
    icon: Utensils,
  },
  {
    amount: "KES 5,000",
    impact: "Provides medical care for 10 patients",
    icon: HeartPulse,
  },
  {
    amount: "KES 25,000",
    impact: "Sponsors a child for one year",
    icon: Users,
  },
]

const trustIndicators = [
  {
    icon: Shield,
    title: "Secure Payments",
    description: "All transactions are encrypted and secure",
  },
  {
    icon: Clock,
    title: "100% Goes to Programs",
    description: "Administrative costs are covered separately",
  },
  {
    icon: Heart,
    title: "Tax Deductible",
    description: "Receive a tax receipt for your donation",
  },
]

export default function DonatePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-primary font-semibold mb-2">Support Our Mission</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                Your Donation Changes Lives
              </h1>
              <p className="text-muted-foreground">
                Every contribution, no matter the size, helps us continue our mission of 
                empowering communities and transforming lives across Kenya.
              </p>
            </div>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Form */}
              <div className="lg:col-span-2">
                <DonationForm />
              </div>

              {/* Sidebar */}
              <div className="flex flex-col gap-6">
                {/* Trust Indicators */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Why Donate With Us</h3>
                    <div className="flex flex-col gap-4">
                      {trustIndicators.map((item) => (
                        <div key={item.title} className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{item.title}</h4>
                            <p className="text-xs text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Other Ways to Give */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">Other Ways to Give</h3>
                    <div className="flex flex-col gap-4 text-sm">
                      <div>
                        <h4 className="font-medium">Bank Transfer</h4>
                        <p className="text-muted-foreground">
                          Account: Team Emmanuel Foundation<br />
                          Bank: Kenya Commercial Bank<br />
                          Account No: 1234567890
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">M-Pesa Paybill</h4>
                        <p className="text-muted-foreground">
                          Paybill: 123456<br />
                          Account: Your Name
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                See Your Impact
              </h2>
              <p className="text-muted-foreground">
                Here is how your donation directly helps those in need
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactCards.map((card) => (
                <Card key={card.amount} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <card.icon className="h-7 w-7 text-primary" />
                    </div>
                    <p className="text-2xl font-bold text-primary mb-2">{card.amount}</p>
                    <p className="text-muted-foreground text-sm">{card.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Is my donation tax-deductible?</h3>
                  <p className="text-background/70">
                    Yes, Team Emmanuel Foundation is a registered non-profit organization. 
                    You will receive a tax receipt for your donation.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">How is my donation used?</h3>
                  <p className="text-background/70">
                    100% of your donation goes directly to our programs. Our administrative 
                    costs are covered by a separate endowment fund.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Can I cancel my monthly donation?</h3>
                  <p className="text-background/70">
                    Yes, you can cancel or modify your monthly donation at any time by 
                    contacting us at donate@teamemmanuel.org.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Will I receive updates on how my donation is used?</h3>
                  <p className="text-background/70">
                    Yes, we send quarterly updates to all donors showing the impact of their 
                    contributions and stories from the field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

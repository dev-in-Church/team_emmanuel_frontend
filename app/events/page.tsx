import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react"

const upcomingEvents = [
  {
    title: "Annual Charity Gala 2026",
    date: "May 15, 2026",
    time: "6:00 PM - 10:00 PM",
    location: "Kempinski Hotel, Nairobi",
    description: "Join us for an evening of celebration, entertainment, and fundraising. All proceeds go towards our education programs.",
    type: "Fundraiser",
    attendees: 250,
  },
  {
    title: "Community Health Camp",
    date: "April 28, 2026",
    time: "8:00 AM - 4:00 PM",
    location: "Kibera Community Center",
    description: "Free medical checkups, vaccinations, and health education for community members of all ages.",
    type: "Outreach",
    attendees: 500,
  },
  {
    title: "Youth Skills Workshop",
    date: "May 5, 2026",
    time: "9:00 AM - 3:00 PM",
    location: "Team Emmanuel Training Center",
    description: "A hands-on workshop teaching practical skills including computer literacy, entrepreneurship, and communication.",
    type: "Training",
    attendees: 50,
  },
  {
    title: "Tree Planting Day",
    date: "May 20, 2026",
    time: "7:00 AM - 12:00 PM",
    location: "Karura Forest, Nairobi",
    description: "Join our environmental conservation efforts by planting trees. All materials provided. Great for families!",
    type: "Volunteer",
    attendees: 100,
  },
]

const pastEvents = [
  {
    title: "Back to School Drive",
    date: "January 15, 2026",
    location: "Multiple Schools",
    description: "Distributed school supplies to 1,000 students across 10 schools.",
  },
  {
    title: "Christmas Celebration",
    date: "December 25, 2025",
    location: "Various Communities",
    description: "Brought joy to over 500 children with gifts, food, and entertainment.",
  },
  {
    title: "Medical Camp - Turkana",
    date: "November 10, 2025",
    location: "Lodwar, Turkana County",
    description: "Served over 2,000 patients with free medical consultations and medicines.",
  },
]

function getEventTypeColor(type: string) {
  switch (type) {
    case "Fundraiser":
      return "bg-secondary text-secondary-foreground"
    case "Outreach":
      return "bg-primary text-primary-foreground"
    case "Training":
      return "bg-chart-4 text-foreground"
    case "Volunteer":
      return "bg-chart-2 text-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

export default function EventsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold mb-2">Events</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Join Us at Our Upcoming Events
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Be part of our community events, fundraisers, and outreach programs. 
                Your participation helps us make a bigger impact.
              </p>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <Card key={event.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-medium px-3 py-1 rounded-full ${getEventTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {event.attendees} expected
                      </span>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-3 mb-6">
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href="/contact">
                        Register Interest
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8">Past Events</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <Card key={event.title} className="bg-background">
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </div>
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                    <CardDescription>{event.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Host an Event With Us?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              If you would like to partner with us on an event or organize a fundraiser, 
              we would love to hear from you.
            </p>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

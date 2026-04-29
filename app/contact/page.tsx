"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react"
import { useState } from "react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 700 000 000", "+254 711 111 111"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@teamemmanuel.org", "donate@teamemmanuel.org"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Foundation Street", "Westlands, Nairobi, Kenya"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 8AM - 5PM", "Saturday: 9AM - 1PM"],
  },
]

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    alert("Thank you for your message! We will get back to you soon.")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold mb-2">Contact Us</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Get in Touch With Us
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Have questions, want to volunteer, or interested in partnering with us? 
                We would love to hear from you. Reach out to us through any of the channels below.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                <div className="flex flex-col gap-6 mb-8">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                        {info.details.map((detail) => (
                          <p key={detail} className="text-muted-foreground text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={link.label}
                    >
                      <link.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we will get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="+254 700 000 000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <Label htmlFor="subject">Subject</Label>
                          <Select
                            value={formData.subject}
                            onValueChange={(value) => setFormData({ ...formData, subject: value })}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="donation">Donation</SelectItem>
                              <SelectItem value="volunteer">Volunteer</SelectItem>
                              <SelectItem value="partnership">Partnership</SelectItem>
                              <SelectItem value="media">Media Inquiry</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us how we can help you..."
                          rows={6}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full sm:w-auto">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Office</h2>
              <p className="text-muted-foreground">
                You are welcome to visit our office during working hours. We would be happy to 
                show you around and discuss how you can get involved.
              </p>
            </div>
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground">Map placeholder - Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

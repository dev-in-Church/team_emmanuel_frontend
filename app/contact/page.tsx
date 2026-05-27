"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Send,
} from "lucide-react";

import { useState } from "react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 726 147 243"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@teamemmanuel.org"],
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Eldoret, Kenya"],
  },
  {
    icon: Clock,
    title: "Availability",
    details: ["Monday - Saturday", "8:00 AM - 6:00 PM"],
  },
];

const socialLinks = [
  {
    icon: Facebook,
    href: "#",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "#",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "#",
    label: "Youtube",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you for reaching out. We will get back to you soon.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                Contact Us
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Let&apos;s Connect
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you want to support an athlete, partner with us,
                volunteer, or simply learn more about Team Emmanuel Foundation,
                we would love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Contact Information
                  </h2>

                  <p className="text-muted-foreground leading-relaxed">
                    Reach out through any of the channels below and our team
                    will respond as soon as possible.
                  </p>
                </div>

                <div className="flex flex-col gap-8 mb-10">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>

                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {info.title}
                        </h3>

                        {info.details.map((detail) => (
                          <p
                            key={detail}
                            className="text-muted-foreground text-sm leading-relaxed"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Socials */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">
                    Follow Us
                  </h3>

                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        aria-label={link.label}
                        className="w-11 h-11 rounded-sm border border-border flex items-center justify-center hover:bg-muted transition-colors"
                      >
                        <link.icon className="h-5 w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="border border-border rounded-sm p-8 md:p-10">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      Send a Message
                    </h2>

                    <p className="text-muted-foreground">
                      Fill out the form below and we will get back to you as
                      soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="name">Full Name</Label>

                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          required
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Email Address</Label>

                        <Input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
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
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <Label htmlFor="subject">Subject</Label>

                        <Select
                          value={formData.subject}
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              subject: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>

                          <SelectContent>
                            <SelectItem value="general">
                              General Inquiry
                            </SelectItem>

                            <SelectItem value="support">
                              Athlete Support
                            </SelectItem>

                            <SelectItem value="volunteer">Volunteer</SelectItem>

                            <SelectItem value="partnership">
                              Partnership
                            </SelectItem>

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
                        rows={7}
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-fit bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 max-w-2xl">
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                Visit Us
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Find Us in Kenya
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed">
                We are committed to building opportunities for young athletes
                through sports, mentorship, and education support.
              </p>
            </div>

            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                src="https://www.google.com/maps?q=Eldoret,Kenya&output=embed"
                width="100%"
                height="500"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

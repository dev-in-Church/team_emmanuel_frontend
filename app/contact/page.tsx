"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import { useState } from "react";
import api from "@/lib/api";

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
    details: ["Iten, Kenya"],
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
    href: "https://www.facebook.com/profile.php?id=100005860590320",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/teamemmanuelfoundation/",
    label: "Instagram",
  },
];

const faqs = [
  {
    question: "How can I support an athlete?",
    answer:
      "You can donate directly through our Donate page, or reach out via this contact form if you'd like to sponsor a specific need such as running gear or school fees.",
  },
  {
    question: "Can I volunteer with Team Emmanuel Foundation?",
    answer:
      'Yes — we welcome volunteers for training support, mentorship sessions, and community events. Select "Volunteer" as your subject below and tell us a bit about yourself.',
  },
  {
    question: "Do you accept corporate or organizational partnerships?",
    answer:
      'Yes, we partner with businesses and organizations that want to create greater impact in the community. Reach out with "Partnership" as your subject and we\'ll follow up with details.',
  },
  {
    question: "Where are you based, and can I visit?",
    answer:
      "We're based in Iten, Kenya. Visits are welcome — just reach out beforehand so we can make sure someone's available to meet with you.",
  },
  {
    question: "How is my donation used?",
    answer:
      "Donations go directly toward running kits and gear, school fees and uniforms, and training and mentorship programs for young athletes.",
  },
  {
    question: "How quickly will I get a response?",
    answer:
      "We aim to respond to all inquiries within 2–3 business days during our regular availability hours.",
  },
];

const subjectLabels: Record<string, string> = {
  general: "General Inquiry",
  support: "Athlete Support",
  volunteer: "Volunteer",
  partnership: "Partnership",
  media: "Media Inquiry",
  other: "Other",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const result = await api.submitContactForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: subjectLabels[formData.subject] || "General Inquiry",
      message: formData.message,
    });

    setLoading(false);

    if (result.error) {
      setStatus({
        type: "error",
        text: result.error || "Something went wrong. Please try again.",
      });
      return;
    }

    setStatus({
      type: "success",
      text: "Thank you for reaching out. We will get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <PageHero
          eyebrow="Contact Us"
          title="Let's Connect"
          description="Whether you want to support an athlete, partner with us, volunteer, or simply learn more about Team Emmanuel Foundation, we would love to hear from you."
        />

        {/* Contact Content */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="mb-8">
                  <h2 className="text-lg font-bold text-foreground mb-2">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Reach out through any of the channels below and our team
                    will respond as soon as possible.
                  </p>
                </div>

                <div className="flex flex-col gap-6 mb-8">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">
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
                  <h3 className="font-semibold text-foreground text-sm mb-3">
                    Follow Us
                  </h3>
                  <div className="flex gap-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="w-10 h-10 rounded-xl border border-border/60 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                      >
                        <link.icon className="h-4.5 w-4.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <div className="border border-border/60 rounded-2xl p-6 md:p-8">
                  <div className="mb-6">
                    <h2 className="text-lg font-bold text-foreground mb-2">
                      Send a Message
                    </h2>
                    <p className="text-muted-foreground text-sm">
                      Fill out the form below and we will get back to you as
                      soon as possible.
                    </p>
                  </div>

                  {status && (
                    <div
                      className={`mb-6 flex items-center gap-2 rounded-xl p-4 text-sm ${
                        status.type === "success"
                          ? "bg-primary/10 text-primary"
                          : "bg-destructive/10 text-destructive"
                      }`}
                    >
                      {status.type === "success" ? (
                        <CheckCircle className="h-5 w-5 shrink-0" />
                      ) : (
                        <AlertCircle className="h-5 w-5 shrink-0" />
                      )}
                      <span>{status.text}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
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
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+254 700 000 000"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select
                          value={formData.subject}
                          onValueChange={(value) =>
                            setFormData({ ...formData, subject: value })
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
                        rows={6}
                        placeholder="Tell us how we can help..."
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={loading}
                      className="w-full sm:w-fit rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
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
                  Frequently Asked Questions
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.question}
                    value={`item-${index}`}
                    className="border-border/60"
                  >
                    <AccordionTrigger className="text-left text-sm font-semibold text-foreground hover:text-primary">
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

        {/* Visit Us / Map */}
        <section className="py-10 lg:py-14">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block text-primary font-semibold mb-2 text-xs uppercase tracking-wider">
                  Visit Us
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  Find Us in Iten, Kenya
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We're committed to building opportunities for young athletes
                  through sports, mentorship, and education support. Reach out
                  beforehand if you'd like to visit in person.
                </p>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border/60">
                <iframe
                  title="Team Emmanuel Foundation location map"
                  src="https://www.google.com/maps?q=Iten,Kenya&output=embed"
                  width="100%"
                  height="280"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

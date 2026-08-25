"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Heart,
  Send,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Programs", href: "/programs" },
  { text: "Gallery", href: "/gallery" },
  { text: "News", href: "/news" },
  { text: "Contact", href: "/contact" },
];

const programs = [
  { text: "Education Support", href: "/programs#education" },
  { text: "Healthcare Outreach", href: "/programs#healthcare" },
  { text: "Community Development", href: "/programs#community" },
  { text: "Youth Empowerment", href: "/programs#youth" },
  { text: "Food Security", href: "/programs#food" },
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/profile.php?id=100005860590320",
    label: "Facebook",
  },
  // { icon: Twitter, href: "#", label: "Twitter" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/emmanuelbundotich?igsh=MTkzNTFxajhiNDV5dA==",
    label: "Instagram",
  },
  // { icon: Youtube, href: "#", label: "Youtube" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative Elements */}
      {/* <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" /> */}

      {/* Newsletter Section */}
      {/* <div className="relative border-b border-background/10">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Stay Updated</h3>
              <p className="text-background/70">Subscribe to our newsletter for the latest news and impact stories.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex w-full lg:w-auto gap-3">
              <div className="relative flex-1 lg:w-80">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 pl-12 pr-4 rounded-xl bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <Button type="submit" className="h-12 px-6 bg-secondary hover:bg-secondary/90 text-secondary-foreground shrink-0">
                {subscribed ? "Subscribed!" : "Subscribe"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div> */}

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-background rounded-full p-2">
                <img
                  src="/images/logo.png"
                  alt=""
                  className="h-18 w-18 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">Team Emmanuel</h3>
                <p className="text-sm text-background/70">Foundation</p>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed mb-6">
              Supporting young athletes on and off the track.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full" />
              Our Programs
            </h4>
            <ul className="flex flex-col gap-3">
              {programs.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-background/80 hover:text-primary transition-colors text-sm"
                  >
                    <ArrowRight className="h-4 w-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full" />
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+254726147243"
                  className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors text-sm group"
                >
                  <div className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>+254 726 147 243</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@teamemmanuel.org"
                  className="flex items-center gap-3 text-background/80 hover:text-primary transition-colors text-sm group"
                >
                  <div className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>info@teamemmanuel.org</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-background/80 text-sm">
                  <div className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>
                    {/* 123 Foundation Street,
                    <br /> */}
                    Iten, Kenya
                  </span>
                </div>
              </li>
            </ul>

            {/* Donate Button */}
            <Button
              asChild
              className="mt-6 w-full bg-secondary hover:bg-secondary/90 shadow-sm shadow-primary/20 text-secondary-foreground rounded-full"
            >
              <Link href="/donate">
                Donate Now
                <Heart className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/60">
            <p>
              &copy; {new Date().getFullYear()} Team Emmanuel Foundation. All
              rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
            <p className="">
              {/* Made with{" "}
              <Heart className="h-4 w-4 text-primary fill-secondary animate-pulse" />{" "}
              for the community */}
              made by{" "}
              <Link
                href="https://sporttechies.com"
                target="_blank"
                className="text-primary"
              >
                SportTechies
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

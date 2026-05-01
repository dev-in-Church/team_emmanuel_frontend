"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const topBarLinks = [
  { icon: Phone, text: "+254 726 147 243", href: "tel:+254726147243" },
  {
    icon: Mail,
    text: "info@teamemmanuel.org",
    href: "mailto:info@teamemmanuel.org",
  },
  { icon: MapPin, text: "Iten, Kenya", href: "#" },
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

const mainNavLinks = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Programs", href: "/programs" },
  { text: "Gallery", href: "/gallery" },
  { text: "Events", href: "/events" },
  { text: "News", href: "/news" },
  { text: "Contact", href: "/contact" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${scrolled ? "shadow-lg" : ""}`}
      >
        {/* Top Bar */}
        <div className="bg-primary text-background">
          <div className="container mx-auto px-3">
            <div className="flex items-center justify-between py-2.5 text-sm">
              <div className="hidden md:flex items-center gap-6">
                {topBarLinks.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    className="flex items-center gap-2 hover:text-secondary transition-colors"
                  >
                    <link.icon className="h-4 w-4" />
                    <span>{link.text}</span>
                  </a>
                ))}
              </div>
              <div className="flex items-center gap-4 ml-auto">
                <span className="hidden sm:inline text-background/70 text-xs">
                  Follow Us:
                </span>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:text-secondary transition-colors p-1 hover:scale-110 transform"
                    aria-label={link.label}
                  >
                    <link.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="bg-background border-b border-border">
          <div className="mx-2 px-6">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                {/* <Image
                  src="/images/logo.png"
                  alt="Team Emmanuel Foundation"
                  width={60}
                  height={60}
                  className="h-20 group-hover:scale-105 transition-transform"
                /> */}
                <img src="/images/logo.webp" alt="" className="h-18" />
                <div className="hidden sm:block">
                  <h1 className="text-lg font-bold text-foreground leading-tight">
                    Team Emmanuel
                  </h1>
                  <p className="text-xs text-muted-foreground">Foundation</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {mainNavLinks.map((link) => (
                  <Link
                    key={link.text}
                    href={link.href}
                    className="relative text-sm font-medium text-foreground hover:text-primary transition-colors px-4 py-2 rounded-sm hover:bg-primary/5 group"
                  >
                    {link.text}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden md:flex items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-white border-2 border-secondary hover:bg-secondary text-secondary hover:text-secondary-foreground rounded-full transition-all"
                >
                  <Link href="/donate">Donate Now</Link>
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background z-50 transform transition-transform duration-300 ease-out lg:hidden shadow-2xl ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/images/logo.webp"
              alt="Team Emmanuel Foundation"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-foreground">Team Emmanuel</span>
          </Link>
          <button
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className="flex flex-col h-[calc(100%-80px)]">
          <nav className="flex-1 overflow-y-auto py-4">
            {mainNavLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="flex items-center justify-between px-6 py-4 text-foreground hover:bg-primary/5 hover:text-primary transition-colors group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="font-medium">{link.text}</span>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </nav>

          {/* Sidebar Footer */}
          <div className="p-6 border-t border-border space-y-4">
            <Button
              asChild
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
              size="lg"
            >
              <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
                Donate Now
              </Link>
            </Button>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <a
                href="tel:+254726147243"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                +254 726 147 243
              </a>
              <a
                href="mailto:info@teamemmanuel.org"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@teamemmanuel.org
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

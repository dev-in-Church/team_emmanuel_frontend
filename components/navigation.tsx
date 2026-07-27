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
  Instagram,
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
  {
    icon: Instagram,
    href: "https://www.instagram.com/emmanuelbundotich?igsh=MTkzNTFxajhiNDV5dA==",
    label: "Instagram",
  },
];

const mainNavLinks = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Programs", href: "/programs" },
  { text: "Gallery", href: "/gallery" },
  { text: "News", href: "/news" },
  { text: "Contact", href: "/contact" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
      {/* Absolute Utility Bar - Layered over top of background content */}
      <div className="absolute top-0 left-0 w-full h-10 hidden md:block z-50 bg-primary text-red-600 border-b border-white/5">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="flex items-center justify-between h-10 text-xs font-medium">
            <div className="flex items-center gap-6">
              {topBarLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200"
                >
                  <link.icon className="h-3.5 w-3.5 opacity-80" />
                  <span>{link.text}</span>
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/80 hover:text-white transition-all duration-200 hover:scale-110 p-1"
                  aria-label={link.label}
                >
                  <link.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Floating Header — Placed to overlap cleanly */}
      <header
        className={`fixed left-0 w-full z-50 transition-all duration-500 ease-out px-4 sm:px-6 pointer-events-none ${
          scrolled ? "top-3" : "top-3 md:top-13"
        }`}
      >
        <nav
          className={`mx-auto pointer-events-auto transition-all duration-500 ease-out border backdrop-blur-md rounded-full ${
            scrolled
              ? "max-w-5xl bg-background/85 shadow-[0_12px_40px_rgba(0,0,0,0.15)] border-border/40 px-5"
              : "max-w-7xl bg-secondary shadow-sm shadow-primary/40 border-0 px-5 h-[60px] flex justify-between items-center"
          }`}
        >
          <div
            className={`flex items-center justify-between w-full transition-all duration-500 ease-out ${scrolled ? "h-14" : "h-20"}`}
          >
            {/* Logo Group */}
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0 pl-1"
            >
              <img
                src="/images/logo.webp"
                alt="Team Emmanuel Foundation"
                className={`w-auto object-contain transition-all duration-500 ease-out ${
                  scrolled ? "h-9" : "h-9"
                } ${!scrolled && "brightness-0 invert" /* Keeps logo white on dark transparent background */}`}
              />
              <div className="hidden sm:block">
                <h1
                  className={`font-bold tracking-tight leading-tight transition-all duration-300 ${
                    scrolled ? "text-foreground text-xs" : "text-white text-sm"
                  }`}
                >
                  Team Emmanuel
                </h1>
                <p
                  className={`font-semibold tracking-widest uppercase transition-all duration-300 ${
                    scrolled
                      ? "text-muted-foreground text-[8px]"
                      : "text-white/60 text-[9px]"
                  }`}
                >
                  Foundation
                </p>
              </div>
            </Link>

            {/* Center Main Links */}
            <div
              className={`hidden lg:flex items-center gap-1 p-1 rounded-full border transition-colors duration-500 ${
                scrolled
                  ? "bg-muted/20 border-border/5"
                  : "bg-white/5 border-white/5"
              }`}
            >
              {mainNavLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className={`font-semibold transition-all duration-200 px-4 py-1.5 rounded-full ${
                    scrolled
                      ? "text-muted-foreground hover:text-foreground hover:bg-background hover:shadow-sm text-[11px]"
                      : "text-white/80 hover:text-white hover:bg-white/10 text-xs"
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>

            {/* Right Side Call to Action */}
            <div className="hidden md:flex items-center gap-4 pr-1">
              {scrolled && (
                <div className="flex items-center gap-2 mr-1 animate-fade-in">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-muted-foreground/70 hover:text-primary transition-colors p-1"
                      aria-label={link.label}
                    >
                      <link.icon className="h-3.5 w-3.5" />
                    </a>
                  ))}
                </div>
              )}
              <Button
                asChild
                size={scrolled ? "sm" : "default"}
                className={`rounded-full px-5 transition-all duration-500 shadow-sm ${
                  scrolled
                    ? "bg-white shadow-sm shadow-primary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground h-8.5 text-xs"
                    : "bg-secondary hover:bg-secondary/90 text-primary-foreground border border-transparent shadow-sm shadow-primary/20"
                }`}
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              className={`lg:hidden mr-1 p-2.5 rounded-full transition-colors focus:outline-none ${
                scrolled
                  ? "hover:bg-muted text-foreground/80"
                  : "hover:bg-white/10 text-white"
              }`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar (Keeps original content intact) */}
      <div
        className={`fixed inset-0 bg-foreground/20 backdrop-blur-md z-50 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-background z-50 transform transition-transform duration-400 ease-out lg:hidden shadow-2xl flex flex-col border-l border-border/40 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border/60">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/images/logo.webp"
              alt="Team Emmanuel Foundation"
              width={36}
              height={36}
              className="h-9 w-9 object-contain"
            />
            <span className="font-bold text-foreground text-md tracking-tight">
              Team Emmanuel
            </span>
          </Link>
          <button
            className="p-2 hover:bg-muted rounded-full transition-colors text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-3">
          <nav className="space-y-1 px-3">
            {mainNavLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="flex items-center justify-between px-4 py-3.5 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200 group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>{link.text}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground/40 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-5 border-t border-border/60 bg-muted/30 space-y-5">
          <Button
            asChild
            className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-xl shadow-sm py-6"
            size="lg"
          >
            <Link href="/donate" onClick={() => setMobileMenuOpen(false)}>
              Donate Now
            </Link>
          </Button>
          <div className="space-y-2.5 text-xs font-medium text-muted-foreground/90 px-1">
            <a
              href="tel:+254726147243"
              className="flex items-center gap-3 hover:text-primary transition-colors duration-200"
            >
              <Phone className="h-4 w-4 text-muted-foreground/50" />
              <span>+254 726 147 243</span>
            </a>
            <a
              href="mailto:info@teamemmanuel.org"
              className="flex items-center gap-3 hover:text-primary transition-colors duration-200"
            >
              <Mail className="h-4 w-4 text-muted-foreground/50" />
              <span className="truncate">info@teamemmanuel.org</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
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

const mainNavLinks = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Programs", href: "/programs" },
  { text: "Gallery", href: "/gallery" },
  { text: "Contact", href: "/contact" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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

  // Escape key closes the mobile sidebar
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Basic focus trap for the mobile sidebar
  useEffect(() => {
    if (!mobileMenuOpen || !sidebarRef.current) return;

    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const container = sidebarRef.current;
    const focusableEls =
      container.querySelectorAll<HTMLElement>(focusableSelector);
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    firstEl?.focus();

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (focusableEls.length === 0) return;

      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault();
        lastEl.focus();
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault();
        firstEl.focus();
      }
    };

    container.addEventListener("keydown", handleTab);
    return () => container.removeEventListener("keydown", handleTab);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed left-0 w-full z-50 transition-all duration-500 ease-out pointer-events-none">
        <nav
          className={`mx-0 pointer-events-auto transition-all duration-500 ease-out backdrop-blur-md h-[60px] flex justify-between items-center w-full ${
            scrolled
              ? "bg-background/85 shadow-[0_12px_40px_oklch(0.39_0.11_147_/_0.15)] border-border/40 px-5"
              : "bg-transparent px-5"
          }`}
        >
          <div className="flex items-center justify-between w-full transition-all duration-500 ease-out">
            {/* Logo Group */}
            <Link
              href="/"
              className="flex items-center gap-3 group shrink-0 pl-1"
            >
              <Image
                src="/images/logo.png"
                alt="Team Emmanuel Foundation"
                width={36}
                height={36}
                className={`h-9 w-auto object-contain transition-all duration-500 ease-out ${
                  !scrolled &&
                  "brightness-0 invert" /* Keeps logo white on dark transparent background */
                }`}
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
                  ? "bg-muted/20 border-border/5 shadow-xs shadow-primary"
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
              <div className="flex items-center gap-2 mr-1 animate-fade-in">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`transition-colors p-1 ${
                      scrolled
                        ? "text-muted-foreground/70 hover:text-primary"
                        : "text-white hover:text-primary"
                    }`}
                    aria-label={link.label}
                  >
                    <link.icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
              <Button
                asChild
                size={scrolled ? "sm" : "default"}
                className={`rounded-full px-5 transition-all duration-500 shadow-sm ${
                  scrolled
                    ? "bg-white shadow-sm shadow-primary/20 text-secondary hover:bg-secondary hover:text-secondary-foreground h-8.5 text-xs"
                    : "bg-primary hover:bg-secondary/90 text-primary-foreground border border-transparent shadow-sm shadow-primary/20"
                }`}
              >
                <Link href="/donate">Donate Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              ref={menuButtonRef}
              className={`lg:hidden mr-1 p-2.5 rounded-full transition-colors focus:outline-none ${
                scrolled
                  ? "hover:bg-muted text-foreground/80"
                  : "hover:bg-white/10 text-white"
              }`}
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-foreground/20 backdrop-blur-md z-50 transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        ref={sidebarRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-background z-50 transform transition-transform duration-400 ease-out lg:hidden shadow-2xl flex flex-col border-l border-border/40 ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-5 border-b border-border/60">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/images/logo.png"
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
            aria-label="Close menu"
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

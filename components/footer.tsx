import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Programs", href: "/programs" },
  { text: "Gallery", href: "/gallery" },
  { text: "Contact", href: "/contact" },
];

const programs = [
  { text: "Athlete Support", href: "/programs#athlete-support" },
  { text: "Education Support", href: "/programs#education-support" },
  { text: "Training & Development", href: "/programs#training" },
  { text: "Mentorship", href: "/programs#mentorship" },
  { text: "Talent Development", href: "/programs#talent-development" },
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

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-white relative overflow-hidden">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Team Emmanuel Foundation"
                width={160}
                height={72}
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Supporting young athletes on and off the track.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all"
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
                    className="group flex items-center gap-2 text-white/70 hover:text-primary transition-colors text-sm"
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
              <span className="w-8 h-1 bg-primary rounded-full" />
              Our Programs
            </h4>
            <ul className="flex flex-col gap-3">
              {programs.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-white/70 hover:text-primary transition-colors text-sm"
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
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-sm group"
                >
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>+254 726 147 243</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@teamemmanuel.org"
                  className="flex items-center gap-3 text-white/70 hover:text-primary transition-colors text-sm group"
                >
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>info@teamemmanuel.org</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-white/70 text-sm">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>Iten, Kenya</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
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
            <p>
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

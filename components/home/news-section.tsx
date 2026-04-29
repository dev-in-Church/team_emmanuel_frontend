import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, User, Clock } from "lucide-react";

const newsItems = [
  {
    title: "Annual Fundraising Gala Raises KES 5 Million",
    excerpt:
      "Our annual gala brought together donors and supporters, raising funds that will support education programs for over 500 children.",
    date: "March 15, 2026",
    category: "Events",
    author: "Emmanuel K.",
    readTime: "3 min read",
    image: "/images/education.jpg",
    featured: true,
  },
  {
    title: "New Healthcare Clinic Opens in Turkana",
    excerpt:
      "In partnership with local health authorities, we have opened a new clinic that will serve over 10,000 community members.",
    date: "March 10, 2026",
    category: "Healthcare",
    author: "Dr. James",
    readTime: "4 min read",
    image: "/images/education.jpg",
    featured: false,
  },
  {
    title: "Youth Skills Training Program Graduates 100 Students",
    excerpt:
      "Our vocational training program has successfully equipped 100 young people with skills in carpentry, tailoring, and agriculture.",
    date: "March 5, 2026",
    category: "Education",
    author: "Sarah K.",
    readTime: "5 min read",
    image: "/images/education.jpg",
    featured: false,
  },
];

export function NewsSection() {
  const featuredNews = newsItems.find((item) => item.featured);
  const otherNews = newsItems.filter((item) => !item.featured);

  return (
    <section className="py-10 bg-muted/30 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-primary font-semibold mb-3 text-sm uppercase tracking-wider">
              Latest Updates
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
              News & Stories
            </h2>
          </div>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="shrink-0 rounded-full"
          >
            <Link href="/news">
              View All News
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* News Grid - Featured + Others */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Article */}
          {featuredNews && (
            <Link href="/news" className="group block">
              <div className="relative h-full bg-background rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="relative h-64 lg:h-80 overflow-hidden">
                  <Image
                    src={featuredNews.image}
                    alt={featuredNews.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full shadow-lg">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block text-xs font-medium text-primary bg-primary/20 backdrop-blur-sm px-3 py-1 rounded-full mb-3">
                      {featuredNews.category}
                    </span>
                    <h3 className="text-xl lg:text-2xl font-bold text-background group-hover:text-primary transition-colors line-clamp-2">
                      {featuredNews.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground line-clamp-2 mb-4">
                    {featuredNews.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {featuredNews.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {featuredNews.readTime}
                      </span>
                    </div>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredNews.date}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Other Articles */}
          <div className="flex flex-col gap-6">
            {otherNews.map((item) => (
              <Link key={item.title} href="/news" className="group block">
                <div className="flex gap-5 bg-background rounded-sm overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="relative w-40 md:w-48 shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-foreground/10" />
                  </div>
                  <div className="flex flex-col justify-center py-4 pr-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                        {item.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {item.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 hidden md:block">
                      {item.excerpt}
                    </p>
                    <span className="inline-flex items-center text-sm text-primary font-medium mt-2">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

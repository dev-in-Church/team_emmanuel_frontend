import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Calendar, ArrowRight, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const newsArticles = [
  {
    id: 1,
    title: "Team Emmanuel Athletes Shine at Regional Championships",
    excerpt:
      "Young athletes supported by Team Emmanuel Foundation delivered impressive performances during the regional athletics championships.",
    date: "March 15, 2026",
    author: "Team Emmanuel",
    category: "Competitions",
    image: "/images/gallery/10.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "Running Kits Distributed to Upcoming Athletes",
    excerpt:
      "Athletes received running kits, shoes, and training essentials to support their preparation and development.",
    date: "March 10, 2026",
    author: "Emmanuel K.",
    category: "Support",
    image: "/images/gallery/11.jpeg",
    featured: true,
  },
  {
    id: 3,
    title: "Balancing Education and Athletics",
    excerpt:
      "Student-athletes continue receiving academic support as they pursue excellence both in school and sports.",
    date: "March 6, 2026",
    author: "Team Emmanuel",
    category: "Education",
    image: "/images/gallery/12.jpeg",
    featured: false,
  },
  {
    id: 4,
    title: "Weekend Training Camp Brings Together Young Talent",
    excerpt:
      "Athletes from different communities gathered for intensive endurance and mentorship sessions.",
    date: "February 28, 2026",
    author: "Coach Leonard",
    category: "Training",
    image: "/images/gallery/13.jpeg",
    featured: false,
  },
  {
    id: 5,
    title: "Community Support Driving Athlete Growth",
    excerpt:
      "Local supporters and volunteers continue playing an important role in empowering young athletes.",
    date: "February 21, 2026",
    author: "Team Emmanuel",
    category: "Community",
    image: "/images/gallery/14.jpeg",
    featured: false,
  },
  {
    id: 6,
    title: "Mentorship Sessions Focus on Discipline and Mindset",
    excerpt:
      "Athletes participated in mentorship discussions centered around consistency, confidence, and long-term growth.",
    date: "February 15, 2026",
    author: "Grace Bett",
    category: "Mentorship",
    image: "/images/gallery/15.jpeg",
    featured: false,
  },
];

const categories = [
  "All",
  "Competitions",
  "Training",
  "Education",
  "Mentorship",
  "Support",
  "Community",
];

export default function NewsPage() {
  const featuredArticles = newsArticles.filter((article) => article.featured);

  const regularArticles = newsArticles.filter((article) => !article.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                News & Updates
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Stories from the Journey
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Follow the latest updates from Team Emmanuel Foundation
                including competitions, training sessions, mentorship programs,
                athlete support initiatives, and community activities.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground">
                Featured Stories
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.id}`}
                  className="group"
                >
                  <article className="overflow-hidden border border-border rounded-sm bg-background hover:shadow-lg transition-all duration-300">
                    <div className="relative h-72 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="inline-flex text-xs font-medium text-white bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-4">
                          {article.category}
                        </span>

                        <h3 className="text-2xl font-bold text-white leading-tight">
                          {article.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            {article.author}
                          </span>

                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {article.date}
                          </span>
                        </div>

                        <span className="inline-flex items-center text-primary font-medium">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-16 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground">
                Latest Updates
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.id}`}
                  className="group"
                >
                  <article className="overflow-hidden border border-border rounded-sm bg-background hover:shadow-lg transition-all duration-300 h-full">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                          {article.category}
                        </span>

                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {article.date}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground flex items-center gap-2">
                          <User className="h-4 w-4" />
                          {article.author}
                        </span>

                        <span className="inline-flex items-center text-primary font-medium text-sm">
                          Read More
                          <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold mb-2 uppercase tracking-wider text-sm">
                Stay Connected
              </p>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Follow the Journey
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Stay updated with the latest stories, athlete achievements,
                training sessions, mentorship programs, and community
                initiatives from Team Emmanuel Foundation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Contact Us
                </Link>

                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-sm font-medium hover:bg-muted transition-colors"
                >
                  View Gallery
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ArrowRight, User } from "lucide-react"
import Link from "next/link"

const newsArticles = [
  {
    id: 1,
    title: "Annual Fundraising Gala Raises KES 5 Million",
    excerpt: "Our annual gala brought together donors and supporters, raising funds that will support education programs for over 500 children in the coming year.",
    content: "The event was attended by over 300 guests including corporate partners, individual donors, and community leaders.",
    date: "March 15, 2026",
    author: "Team Emmanuel",
    category: "Events",
    featured: true,
  },
  {
    id: 2,
    title: "New Healthcare Clinic Opens in Turkana",
    excerpt: "In partnership with local health authorities, we have opened a new clinic that will serve over 10,000 community members in the remote Turkana region.",
    content: "The clinic offers maternal and child health services, general consultations, and a pharmacy.",
    date: "March 10, 2026",
    author: "Grace Mwangi",
    category: "Healthcare",
    featured: true,
  },
  {
    id: 3,
    title: "Youth Skills Training Program Graduates 100 Students",
    excerpt: "Our vocational training program has successfully equipped 100 young people with skills in carpentry, tailoring, and agriculture.",
    content: "Graduates received certificates and startup kits to begin their own businesses.",
    date: "March 5, 2026",
    author: "David Ouma",
    category: "Education",
    featured: false,
  },
  {
    id: 4,
    title: "Clean Water Project Completed in Machakos",
    excerpt: "A new borehole serving 5,000 residents has been completed, providing clean and safe drinking water to the community.",
    content: "The project was completed in partnership with Water.org and local authorities.",
    date: "February 28, 2026",
    author: "Team Emmanuel",
    category: "Community",
    featured: false,
  },
  {
    id: 5,
    title: "Partnership Announcement: Tech for Good Initiative",
    excerpt: "We are excited to announce a new partnership with local tech companies to provide computer training to underprivileged youth.",
    content: "The initiative will set up computer labs in 10 schools and provide certified training programs.",
    date: "February 20, 2026",
    author: "Emmanuel Kiprop",
    category: "Partnerships",
    featured: false,
  },
  {
    id: 6,
    title: "Food Distribution Reaches 2,000 Families During Drought",
    excerpt: "Our emergency response team has distributed food supplies to 2,000 families affected by the ongoing drought in northern Kenya.",
    content: "Each family received a month's supply of maize, beans, and cooking oil.",
    date: "February 15, 2026",
    author: "Faith Njeri",
    category: "Emergency Response",
    featured: false,
  },
]

const categories = ["All", "Events", "Healthcare", "Education", "Community", "Partnerships", "Emergency Response"]

export default function NewsPage() {
  const featuredArticles = newsArticles.filter((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <p className="text-primary font-semibold mb-2">News & Stories</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Latest Updates from the Field
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Stay informed about our programs, events, and the impact we are making 
                in communities across Kenya.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto py-4 -mx-4 px-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
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
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-6">Featured Stories</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="h-56 bg-gradient-to-br from-primary/20 to-secondary/20" />
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4">{article.excerpt}</CardDescription>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {article.author}
                      </span>
                      <Link
                        href={`/news/${article.id}`}
                        className="text-sm text-primary font-medium flex items-center gap-1 hover:underline"
                      >
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-foreground mb-6">All News</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow group">
                  <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10" />
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-2 mb-4">{article.excerpt}</CardDescription>
                    <Link
                      href={`/news/${article.id}`}
                      className="text-sm text-primary font-medium flex items-center gap-1 hover:underline"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 bg-foreground text-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-background/70 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive the latest news, stories, and updates 
              from Team Emmanuel Foundation.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

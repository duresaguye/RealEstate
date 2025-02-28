import Image from "next/image"
import Link from "next/link"
import { Building2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import BlogCard from "@/components/blog-card"

// This would typically come from your database
const blogPosts = [
  {
    id: 1,
    title: "Top Luxury Real Estate Trends for 2024",
    excerpt:
      "Discover the latest trends shaping the luxury real estate market, from sustainable luxury homes to tech-integrated living spaces.",
    category: "Market Trends",
    author: {
      name: "Sarah Johnson",
      role: "Real Estate Analyst",
      image: "/agent.png",
    },
    date: "2024-02-15",
    readTime: "5 min read",
    imageSrc: "/hero.png",
    slug: "luxury-real-estate-trends-2024",
  },
  {
    id: 2,
    title: "How to Stage Your Luxury Home for Sale",
    excerpt:
      "Expert tips on presenting your luxury property in its best light to attract potential buyers and maximize value.",
    category: "Selling Tips",
    author: {
      name: "Michael Chen",
      role: "Interior Design Specialist",
      image: "/agent.png",
    },
    date: "2024-02-10",
    readTime: "7 min read",
    imageSrc: "/hero.png",
    slug: "staging-luxury-home-sale",
  },
  {
    id: 3,
    title: "Investment Opportunities in Emerging Luxury Markets",
    excerpt:
      "Exploring up-and-coming neighborhoods and cities that present promising investment opportunities in luxury real estate.",
    category: "Investment",
    author: {
      name: "Emily Zhang",
      role: "Investment Advisor",
      image: "/agent.png",
    },
    date: "2024-02-05",
    readTime: "6 min read",
    imageSrc: "/hero.png",
    slug: "emerging-luxury-markets",
  },
  {
    id: 4,
    title: "Sustainable Features in Modern Luxury Homes",
    excerpt:
      "How eco-friendly features are becoming a standard in luxury real estate and their impact on property value.",
    category: "Architecture",
    author: {
      name: "David Martinez",
      role: "Sustainable Design Expert",
      image: "/agent.png",
    },
    date: "2024-02-01",
    readTime: "4 min read",
    imageSrc: "/hero.png",
    slug: "sustainable-luxury-homes",
  },
]

const categories = [
  "All",
  "Market Trends",
  "Selling Tips",
  "Investment",
  "Architecture",
  "Lifestyle",
  "Interior Design",
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Building2 className="h-6 w-6" />
            <span className="hidden sm:inline-block">LuxuryEstate</span>
          </Link>
          <MainNav />
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:underline underline-offset-4">
              Login
            </Link>
            <Button>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=1920"
              className="object-cover w-full h-full brightness-[0.7]"
              width={1920}
              height={400}
              alt="Luxury real estate blog"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Luxury Real Estate Insights</h1>
              <p className="text-xl text-white/90 max-w-xl">
                Expert advice, market analysis, and luxury living inspiration.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="relative w-full md:w-[400px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search articles..." className="pl-8" />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category) => (
                <Badge key={category} variant={category === "All" ? "default" : "secondary"} className="cursor-pointer">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


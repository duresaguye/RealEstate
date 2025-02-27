import Image from "next/image"
import Link from "next/link"
import { Building2, Calendar, Clock, Facebook, Linkedin, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import BlogCard from "@/components/blog-card"

// This would typically come from your database
const getBlogPost = (slug: string) => {
  // Mock data for demonstration
  return {
    title: "Top Luxury Real Estate Trends for 2024",
    content: `
      The luxury real estate market is constantly evolving, with new trends emerging that cater to the changing preferences of high-net-worth individuals. In 2024, we're seeing several key trends that are reshaping the luxury property landscape.

      Sustainable Luxury
      Sustainability is no longer just a buzzword but a crucial factor in luxury real estate. High-end buyers are increasingly seeking properties that combine opulence with environmental responsibility. This includes:
      • Solar power systems and energy storage
      • Smart home technology for efficient resource management
      • Sustainable building materials
      • Water conservation systems
      • Electric vehicle charging stations

      Wellness-Focused Design
      The emphasis on health and wellness continues to grow, with luxury homes incorporating features that promote physical and mental well-being:
      • Home spa facilities
      • Meditation rooms
      • Indoor-outdoor fitness areas
      • Advanced air filtration systems
      • Circadian lighting systems

      Tech Integration
      Smart home technology has become more sophisticated and seamlessly integrated:
      • Whole-home automation systems
      • Advanced security systems with AI capabilities
      • Touchless technology throughout the home
      • Smart climate control
      • Integrated entertainment systems

      These trends reflect a broader shift in luxury real estate, where buyers are seeking homes that not only showcase their success but also contribute to their overall well-being and environmental consciousness.
    `,
    category: "Market Trends",
    author: {
      name: "Sarah Johnson",
      role: "Real Estate Analyst",
      bio: "Sarah Johnson is a leading real estate analyst with over 15 years of experience in the luxury market. She specializes in identifying emerging trends and providing strategic insights for high-net-worth clients.",
      image: "/placeholder.svg?height=100&width=100",
    },
    date: "2024-02-15",
    readTime: "5 min read",
    imageSrc: "/placeholder.svg?height=600&width=1200",
    relatedPosts: [
      {
        id: 2,
        title: "How to Stage Your Luxury Home for Sale",
        excerpt:
          "Expert tips on presenting your luxury property in its best light to attract potential buyers and maximize value.",
        category: "Selling Tips",
        author: {
          name: "Michael Chen",
          role: "Interior Design Specialist",
          image: "/placeholder.svg?height=100&width=100",
        },
        date: "2024-02-10",
        readTime: "7 min read",
        imageSrc: "/placeholder.svg?height=400&width=600",
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
          image: "/placeholder.svg?height=100&width=100",
        },
        date: "2024-02-05",
        readTime: "6 min read",
        imageSrc: "/placeholder.svg?height=400&width=600",
        slug: "emerging-luxury-markets",
      },
    ],
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

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
        <article className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 mb-8">
              <Badge>{post.category}</Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            <div className="relative aspect-[2/1] mb-8">
              <Image
                src={post.imageSrc || "/placeholder.svg"}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none mb-12">
              {post.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex items-center justify-between py-6 border-y">
              <div className="flex items-center gap-4">
                <Image
                  src={post.author.image || "/placeholder.svg"}
                  alt={post.author.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-semibold">{post.author.name}</p>
                  <p className="text-muted-foreground">{post.author.role}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </article>

        <section className="container mx-auto px-4 py-12 border-t">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} {...relatedPost} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


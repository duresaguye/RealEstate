import Image from "next/image"
import Link from "next/link"
import { Building2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import PropertyFilters from "@/components/property-filters"
import PropertyGrid from "@/components/property-grid"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

// This would typically come from your database
const properties = [
  {
    id: 1,
    title: "Modern Beachfront Villa",
    location: "Malibu, California",
    price: "$5,950,000",
    beds: 5,
    baths: 6,
    sqft: 4700,
    imageSrc: "/placeholder.svg?height=600&width=800",
    slug: "modern-beachfront-villa",
    type: "Villa",
    status: "For Sale",
    features: ["Ocean View", "Pool", "Wine Cellar", "Smart Home"],
  },
  {
    id: 2,
    title: "Luxury Downtown Penthouse",
    location: "New York, NY",
    price: "$8,250,000",
    beds: 3,
    baths: 3.5,
    sqft: 3200,
    imageSrc: "/placeholder.svg?height=600&width=800",
    slug: "luxury-downtown-penthouse",
    type: "Penthouse",
    status: "For Sale",
    features: ["City View", "Private Elevator", "Terrace", "Concierge"],
  },
  {
    id: 3,
    title: "Mediterranean-style Estate",
    location: "Beverly Hills, CA",
    price: "$12,500,000",
    beds: 7,
    baths: 8,
    sqft: 9500,
    imageSrc: "/placeholder.svg?height=600&width=800",
    slug: "mediterranean-style-estate",
    type: "Estate",
    status: "For Sale",
    features: ["Tennis Court", "Guest House", "Pool", "Theater"],
  },
  {
    id: 4,
    title: "Waterfront Contemporary",
    location: "Miami Beach, FL",
    price: "$7,995,000",
    beds: 5,
    baths: 5.5,
    sqft: 5200,
    imageSrc: "/placeholder.svg?height=600&width=800",
    slug: "waterfront-contemporary",
    type: "House",
    status: "For Sale",
    features: ["Waterfront", "Dock", "Infinity Pool", "Summer Kitchen"],
  },
  {
    id: 5,
    title: "Historic Brownstone",
    location: "Boston, MA",
    price: "$4,750,000",
    beds: 4,
    baths: 3.5,
    sqft: 4200,
    imageSrc: "/placeholder.svg?height=600&width=800",
    slug: "historic-brownstone",
    type: "Townhouse",
    status: "For Sale",
    features: ["Garden", "Original Details", "Wine Cellar", "Roof Deck"],
  },
  {
    id: 6,
    title: "Mountain View Estate",
    location: "Aspen, CO",
    price: "$15,900,000",
    beds: 6,
    baths: 7,
    sqft: 8500,
    imageSrc: "/placeholder.svg?height=600&width=800",
    slug: "mountain-view-estate",
    type: "Estate",
    status: "For Sale",
    features: ["Mountain View", "Ski Room", "Indoor Pool", "Theater"],
  },
]

export default function PropertiesPage() {
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
              src="/hero.png"
              className="object-cover w-full h-full brightness-[0.7]"
              width={1920}
              height={400}
              alt="Luxury properties"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Luxury Properties</h1>
              <p className="text-xl text-white/90 max-w-xl">
                Discover extraordinary properties in the world&apos;s most desirable locations.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <PropertyFilters />
          <PropertyGrid properties={properties} />
        </section>
      </main>

      <Footer />
    </div>
  )
}


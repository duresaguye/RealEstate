import Image from "next/image"
import Link from "next/link"
import { Building2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import NeighborhoodCard from "@/components/neighborhood-card"

// This would typically come from your database
const neighborhoods = [
  {
    id: 1,
    name: "Beverly Hills",
    location: "Los Angeles, California",
    description: "World-renowned for luxury shopping, stunning estates, and celebrity residents.",
    imageSrc: "/home.png",
    stats: {
      avgPrice: "$8.5M",
      pricePerSqFt: "$1,450",
      schools: "9/10",
    },
    features: ["Luxury Shopping", "Fine Dining", "Celebrity Homes", "High-end Boutiques"],
    slug: "beverly-hills",
  },
  {
    id: 2,
    name: "Upper East Side",
    location: "New York, NY",
    description: "Historic charm meets modern luxury in Manhattan's most prestigious neighborhood.",
    imageSrc: "/home.png",
    stats: {
      avgPrice: "$5.2M",
      pricePerSqFt: "$2,100",
      schools: "9/10",
    },
    features: ["Central Park", "Museums", "Private Schools", "Historic Architecture"],
    slug: "upper-east-side",
  },
  {
    id: 3,
    name: "South Beach",
    location: "Miami Beach, Florida",
    description: "Vibrant beachfront living with art deco charm and world-class nightlife.",
    imageSrc: "/home.png",
    stats: {
      avgPrice: "$3.8M",
      pricePerSqFt: "$1,850",
      schools: "8/10",
    },
    features: ["Beach Access", "Art Deco", "Nightlife", "Ocean Views"],
    slug: "south-beach",
  },
  {
    id: 4,
    name: "Pacific Heights",
    location: "San Francisco, California",
    description: "Prestigious neighborhood offering spectacular bay views and Victorian mansions.",
    imageSrc: "/home.png",
    stats: {
      avgPrice: "$6.9M",
      pricePerSqFt: "$1,750",
      schools: "9/10",
    },
    features: ["Bay Views", "Victorian Architecture", "Parks", "Upscale Dining"],
    slug: "pacific-heights",
  },
]

export default function NeighborhoodsPage() {
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
              alt="Luxury neighborhoods"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Explore Luxury Neighborhoods</h1>
              <p className="text-xl text-white/90 max-w-xl">
                Discover the most prestigious neighborhoods and communities in prime locations.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
            <div className="relative w-full md:w-[400px]">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search neighborhoods..." className="pl-8" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">Filter</Button>
              <Button variant="outline">Sort</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {neighborhoods.map((neighborhood) => (
              <NeighborhoodCard key={neighborhood.id} {...neighborhood} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


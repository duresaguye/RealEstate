import Image from "next/image"
import Link from "next/link"
import { Building2, Home, MapPin, School, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import PropertyCard from "@/components/property-card"

// This would typically come from your database
const getNeighborhoodBySlug = (slug: string) => {
  // Mock data for demonstration
  return {
    name: "Beverly Hills",
    location: "Los Angeles, California",
    description:
      "Beverly Hills is a city in California's Los Angeles County and home to many Hollywood stars. The city is known for the famous Rodeo Drive shopping district and its celebrity population. The area features some of the largest and most elegant houses in Los Angeles County and in the nation.",
    imageSrc: "/placeholder.svg?height=600&width=1920",
    stats: {
      avgPrice: "$8.5M",
      pricePerSqFt: "$1,450",
      schools: "9/10",
      population: "34,500",
      medianIncome: "$193,000",
      walkScore: "78",
    },
    features: [
      "Luxury Shopping",
      "Fine Dining",
      "Celebrity Homes",
      "High-end Boutiques",
      "World-class Hotels",
      "Private Schools",
    ],
    overview: {
      lifestyle:
        "Beverly Hills offers an unparalleled luxury lifestyle with world-class shopping, dining, and entertainment. The city is known for its high-end boutiques, celebrity-chef restaurants, and exclusive social scene.",
      architecture:
        "The area features a mix of architectural styles, from Mediterranean and Spanish Colonial Revival to Contemporary and Modern designs. Many homes are custom-built estates with extensive grounds and security features.",
      community:
        "The community is tight-knit despite its celebrity status, with regular cultural events, farmers markets, and community gatherings. The area is known for its safety, privacy, and exceptional city services.",
    },
    amenities: [
      {
        category: "Shopping",
        places: ["Rodeo Drive", "Beverly Center", "Brighton Way", "Beverly Drive"],
      },
      {
        category: "Dining",
        places: ["Spago", "Cut", "Mastro's", "The Ivy"],
      },
      {
        category: "Entertainment",
        places: ["Beverly Hills Hotel", "Academy of Motion Pictures", "Greystone Mansion", "Beverly Gardens Park"],
      },
      {
        category: "Education",
        places: ["Beverly Hills High School", "Hawthorne Elementary", "Beverly Vista School"],
      },
    ],
    marketTrends: {
      yearOverYear: "+5.8%",
      medianDaysOnMarket: 45,
      averagePriceHistory: [
        { year: "2020", price: "$7.2M" },
        { year: "2021", price: "$7.8M" },
        { year: "2022", price: "$8.1M" },
        { year: "2023", price: "$8.5M" },
      ],
    },
    featuredProperties: [
      {
        title: "Mediterranean Estate",
        location: "Beverly Hills, CA",
        price: "$12,500,000",
        beds: 7,
        baths: 8,
        sqft: 9500,
        imageSrc: "/placeholder.svg?height=600&width=800",
        slug: "mediterranean-estate",
      },
      {
        title: "Modern Architectural",
        location: "Beverly Hills, CA",
        price: "$15,750,000",
        beds: 6,
        baths: 7,
        sqft: 8200,
        imageSrc: "/placeholder.svg?height=600&width=800",
        slug: "modern-architectural",
      },
      {
        title: "Georgian Manor",
        location: "Beverly Hills, CA",
        price: "$18,900,000",
        beds: 8,
        baths: 10,
        sqft: 12000,
        imageSrc: "/placeholder.svg?height=600&width=800",
        slug: "georgian-manor",
      },
    ],
  }
}

export default function NeighborhoodPage({ params }: { params: { slug: string } }) {
  const neighborhood = getNeighborhoodBySlug(params.slug)

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
              src={neighborhood.imageSrc || "/placeholder.svg"}
              className="object-cover w-full h-full brightness-[0.7]"
              width={1920}
              height={600}
              alt={neighborhood.name}
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">{neighborhood.name}</h1>
              <p className="text-xl text-white/90">{neighborhood.location}</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="border rounded-lg p-4 text-center">
                  <Home className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="font-semibold">{neighborhood.stats.avgPrice}</p>
                  <p className="text-sm text-muted-foreground">Average Price</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <MapPin className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="font-semibold">{neighborhood.stats.walkScore}</p>
                  <p className="text-sm text-muted-foreground">Walk Score</p>
                </div>
                <div className="border rounded-lg p-4 text-center">
                  <School className="h-5 w-5 text-primary mx-auto mb-2" />
                  <p className="font-semibold">{neighborhood.stats.schools}</p>
                  <p className="text-sm text-muted-foreground">School Rating</p>
                </div>
              </div>

              <Tabs defaultValue="overview">
                <TabsList className="w-full">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="amenities">Amenities</TabsTrigger>
                  <TabsTrigger value="market">Market Trends</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">About {neighborhood.name}</h2>
                    <p className="text-muted-foreground whitespace-pre-line mb-6">{neighborhood.description}</p>
                    <div className="grid gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">Lifestyle</h3>
                        <p className="text-muted-foreground">{neighborhood.overview.lifestyle}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Architecture</h3>
                        <p className="text-muted-foreground">{neighborhood.overview.architecture}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Community</h3>
                        <p className="text-muted-foreground">{neighborhood.overview.community}</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="amenities">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {neighborhood.amenities.map((category) => (
                      <div key={category.category} className="space-y-2">
                        <h3 className="font-semibold">{category.category}</h3>
                        <ul className="space-y-1">
                          {category.places.map((place) => (
                            <li key={place} className="text-muted-foreground">
                              • {place}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="market">
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="border rounded-lg p-4">
                        <TrendingUp className="h-5 w-5 text-primary mb-2" />
                        <p className="font-semibold">{neighborhood.marketTrends.yearOverYear}</p>
                        <p className="text-sm text-muted-foreground">Year Over Year</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <p className="font-semibold">{neighborhood.marketTrends.medianDaysOnMarket} days</p>
                        <p className="text-sm text-muted-foreground">Median Days on Market</p>
                      </div>
                      <div className="border rounded-lg p-4">
                        <p className="font-semibold">{neighborhood.stats.pricePerSqFt}</p>
                        <p className="text-sm text-muted-foreground">Price per Sq Ft</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-4">Price History</h3>
                      <div className="space-y-2">
                        {neighborhood.marketTrends.averagePriceHistory.map((item) => (
                          <div key={item.year} className="flex justify-between items-center">
                            <span>{item.year}</span>
                            <span className="font-semibold">{item.price}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Button className="w-full">View Available Properties</Button>
                <div className="border rounded-lg p-6">
                  <h3 className="font-semibold mb-4">Neighborhood Stats</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Population</span>
                      <span className="font-semibold">{neighborhood.stats.population}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Median Income</span>
                      <span className="font-semibold">{neighborhood.stats.medianIncome}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Average Price</span>
                      <span className="font-semibold">{neighborhood.stats.avgPrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price per Sq Ft</span>
                      <span className="font-semibold">{neighborhood.stats.pricePerSqFt}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Featured Properties in {neighborhood.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {neighborhood.featuredProperties.map((property, index) => (
              <PropertyCard
                key={index}
                title={property.title}
                location={property.location}
                price={property.price}
                beds={property.beds}
                baths={property.baths}
                sqft={property.sqft}
                imageSrc={property.imageSrc}
                slug={`/properties/${property.slug}`}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}


import Image from "next/image"
import Link from "next/link"
import { Bath, BedDouble, Building2, Calendar, Car, Globe2, Maximize2, MoveHorizontal, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"
import PropertyCard from "@/components/property-card"
import ContactForm from "@/components/contact-form"

// This would typically come from your database
const getPropertyBySlug = (slug: string) => {
  // Mock data for demonstration
  return {
    title: "Modern Beachfront Villa",
    location: "Malibu, California",
    price: "$5,950,000",
    description:
      "This stunning modern beachfront villa offers the perfect blend of luxury living and coastal charm. With breathtaking ocean views from nearly every room, this architectural masterpiece features open-concept living spaces, floor-to-ceiling windows, and premium finishes throughout.",
    beds: 5,
    baths: 6,
    sqft: 4700,
    lotSize: "0.5 acres",
    yearBuilt: "2020",
    propertyType: "Villa",
    status: "For Sale",
    garage: "3 Cars",
    features: [
      "Ocean View",
      "Private Beach Access",
      "Infinity Pool",
      "Wine Cellar",
      "Smart Home Technology",
      "Home Theater",
      "Gourmet Kitchen",
      "Outdoor Kitchen",
      "Spa/Hot Tub",
      "Security System",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    agent: {
      name: "Sarah Johnson",
      title: "Luxury Property Specialist",
      phone: "(310) 555-1234",
      email: "sarah.johnson@luxuryestate.com",
      image: "/placeholder.svg?height=400&width=300",
    },
    similarProperties: [
      {
        title: "Luxury Downtown Penthouse",
        location: "New York, NY",
        price: "$8,250,000",
        beds: 3,
        baths: 3.5,
        sqft: 3200,
        imageSrc: "/placeholder.svg?height=600&width=800",
        slug: "luxury-downtown-penthouse",
      },
      {
        title: "Mediterranean-style Estate",
        location: "Beverly Hills, CA",
        price: "$12,500,000",
        beds: 7,
        baths: 8,
        sqft: 9500,
        imageSrc: "/placeholder.svg?height=600&width=800",
        slug: "mediterranean-style-estate",
      },
      {
        title: "Waterfront Contemporary",
        location: "Miami Beach, FL",
        price: "$7,995,000",
        beds: 5,
        baths: 5.5,
        sqft: 5200,
        imageSrc: "/placeholder.svg?height=600&width=800",
        slug: "waterfront-contemporary",
      },
    ],
  }
}

export default function PropertyPage({ params }: { params: { slug: string } }) {
  const property = getPropertyBySlug(params.slug)

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
        <section className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[600px] mb-8">
            {property.images.slice(0, 5).map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg ${index === 0 ? "col-span-2 row-span-2" : ""}`}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${property.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-bold">{property.title}</h1>
                    <p className="text-muted-foreground text-lg">{property.location}</p>
                  </div>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <BedDouble className="h-5 w-5 text-primary" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bath className="h-5 w-5 text-primary" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MoveHorizontal className="h-5 w-5 text-primary" />
                    <span>{property.sqft.toLocaleString()} Sq Ft</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Maximize2 className="h-5 w-5 text-primary" />
                    <span>{property.lotSize} Lot</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="h-5 w-5 text-primary" />
                    <span>{property.garage}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Built {property.yearBuilt}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge>{property.status}</Badge>
                  <Badge variant="outline">{property.propertyType}</Badge>
                </div>
              </div>

              <Tabs defaultValue="details">
                <TabsList>
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="map">Map</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Property Description</h2>
                    <p className="text-muted-foreground whitespace-pre-line">{property.description}</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h3 className="font-semibold">Property Details</h3>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Price: {property.price}</li>
                        <li>Bedrooms: {property.beds}</li>
                        <li>Bathrooms: {property.baths}</li>
                        <li>Square Feet: {property.sqft.toLocaleString()}</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Additional Information</h3>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>Property Type: {property.propertyType}</li>
                        <li>Year Built: {property.yearBuilt}</li>
                        <li>Lot Size: {property.lotSize}</li>
                        <li>Garage: {property.garage}</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="features">
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="map">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Globe2 className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-muted-foreground">Interactive map would be displayed here</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <div className="sticky top-24">
                <div className="border rounded-lg p-6 mb-6">
                  <div className="text-center mb-4">
                    <p className="text-3xl font-bold">{property.price}</p>
                    <p className="text-muted-foreground">
                      {property.sqft.toLocaleString()} sq ft • $
                      {Math.round(Number.parseInt(property.price.replace(/\D/g, "")) / property.sqft).toLocaleString()}
                      /sq ft
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Button className="w-full">Schedule a Tour</Button>
                    <Button variant="outline" className="w-full">
                      Request Info
                    </Button>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={property.agent.image || "/placeholder.svg"}
                      alt={property.agent.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{property.agent.name}</h3>
                      <p className="text-sm text-muted-foreground">{property.agent.title}</p>
                    </div>
                  </div>
                  <ContactForm agentName={property.agent.name} />
                </div>
              </div>
            </div>
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Similar Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {property.similarProperties.map((prop, index) => (
                <PropertyCard
                  key={index}
                  title={prop.title}
                  location={prop.location}
                  price={prop.price}
                  beds={prop.beds}
                  baths={prop.baths}
                  sqft={prop.sqft}
                  imageSrc={prop.imageSrc}
                  slug={`/properties/${prop.slug}`}
                />
              ))}
            </div>
          </section>
        </section>
      </main>

      <Footer />
    </div>
  )
}


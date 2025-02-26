import Image from "next/image"
import Link from "next/link"
import { Building2, Calendar, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Footer from "@/components/footer"
import MainNav from "@/components/main-nav"
import PropertyCard from "@/components/property-card"
import ContactForm from "@/components/contact-form"

// This would typically come from a database
const getAgentBySlug = (slug: string) => {
  // Mock data for demonstration
  return {
    name: "Sarah Johnson",
    title: "Luxury Property Specialist",
    location: "Beverly Hills",
    phone: "(310) 555-1234",
    email: "sarah.johnson@luxuryestate.com",
    bio: "With over 15 years of experience in the Beverly Hills luxury market, Sarah specializes in high-end residential properties and estates. Her deep knowledge of the local market, combined with her exceptional negotiation skills, has made her one of the top-producing agents in the area. Sarah is known for her personalized approach to real estate, ensuring that each client receives the attention and expertise they deserve.",
    imageSrc: "/placeholder.svg?height=600&width=400",
    specialties: ["Luxury Estates", "Celebrity Homes", "Investment Properties"],
    languages: ["English", "Spanish", "French"],
    experience: "15+ years",
    education: "Bachelor's in Business Administration, UCLA",
    certifications: ["Certified Luxury Home Marketing Specialist", "Certified International Property Specialist"],
    awards: ["Top Producer 2022", "Diamond Circle Award 2021", "Luxury Agent of the Year 2020"],
    socialMedia: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
    },
    listings: [
      {
        title: "Modern Beachfront Villa",
        location: "Malibu, California",
        price: "$5,950,000",
        beds: 5,
        baths: 6,
        sqft: 4700,
        imageSrc: "/placeholder.svg?height=600&width=800",
        slug: "/properties/modern-beachfront-villa",
      },
      {
        title: "Mediterranean-style Estate",
        location: "Beverly Hills, California",
        price: "$7,495,000",
        beds: 6,
        baths: 7,
        sqft: 6300,
        imageSrc: "/placeholder.svg?height=600&width=800",
        slug: "/properties/mediterranean-style-estate",
      },
      {
        title: "Contemporary Hollywood Hills Home",
        location: "Los Angeles, California",
        price: "$4,250,000",
        beds: 4,
        baths: 4.5,
        sqft: 3800,
        imageSrc: "/placeholder.svg?height=600&width=800",
        slug: "/properties/contemporary-hollywood-hills",
      },
    ],
    recentSales: [
      {
        title: "Luxury Penthouse",
        location: "Century City, California",
        price: "$8,750,000",
        beds: 3,
        baths: 3.5,
        sqft: 3200,
        imageSrc: "/placeholder.svg?height=600&width=800",
        slug: "/properties/luxury-penthouse",
      },
      {
        title: "Spanish Colonial Revival",
        location: "Bel Air, California",
        price: "$12,500,000",
        beds: 7,
        baths: 8,
        sqft: 9500,
        imageSrc: "/placeholder.svg?height=600&width=800",
        slug: "/properties/spanish-colonial-revival",
      },
    ],
  }
}

export default function AgentProfilePage({ params }: { params: { slug: string } }) {
  const agent = getAgentBySlug(params.slug)

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
        <section className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="rounded-lg overflow-hidden mb-6">
                  <Image
                    src={agent.imageSrc || "/placeholder.svg"}
                    alt={agent.name}
                    width={400}
                    height={600}
                    className="w-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h1 className="text-2xl font-bold">{agent.name}</h1>
                    <p className="text-muted-foreground">{agent.title}</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>LuxuryEstate {agent.location} Office</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-5 w-5 text-primary" />
                      <span>{agent.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      <span>{agent.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span>{agent.experience} Experience</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link href={agent.socialMedia.facebook} className="text-muted-foreground hover:text-primary">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link href={agent.socialMedia.twitter} className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href={agent.socialMedia.instagram} className="text-muted-foreground hover:text-primary">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link href={agent.socialMedia.linkedin} className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-2">Specialties</h3>
                    <div className="flex flex-wrap gap-1">
                      {agent.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="font-normal">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-1">
                      {agent.languages.map((language) => (
                        <Badge key={language} variant="secondary" className="font-normal">
                          {language}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full">
                    <Link href={`#contact-form`} className="w-full">
                      Contact {agent.name.split(" ")[0]}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About {agent.name}</h2>
                  <p className="text-muted-foreground whitespace-pre-line">{agent.bio}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-6">
                    <h3 className="font-semibold mb-3">Education & Certifications</h3>
                    <div className="space-y-2">
                      <p className="text-sm">{agent.education}</p>
                      {agent.certifications.map((cert, index) => (
                        <p key={index} className="text-sm">
                          {cert}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div className="border rounded-lg p-6">
                    <h3 className="font-semibold mb-3">Awards & Recognition</h3>
                    <div className="space-y-2">
                      {agent.awards.map((award, index) => (
                        <p key={index} className="text-sm">
                          {award}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <Tabs defaultValue="listings">
                    <TabsList className="w-full grid grid-cols-2">
                      <TabsTrigger value="listings">Current Listings</TabsTrigger>
                      <TabsTrigger value="sales">Recent Sales</TabsTrigger>
                    </TabsList>
                    <TabsContent value="listings" className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {agent.listings.map((property, index) => (
                          <PropertyCard
                            key={index}
                            title={property.title}
                            location={property.location}
                            price={property.price}
                            beds={property.beds}
                            baths={property.baths}
                            sqft={property.sqft}
                            imageSrc={property.imageSrc}
                            slug={property.slug}
                          />
                        ))}
                      </div>
                    </TabsContent>
                    <TabsContent value="sales" className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {agent.recentSales.map((property, index) => (
                          <PropertyCard
                            key={index}
                            title={property.title}
                            location={property.location}
                            price={property.price}
                            beds={property.beds}
                            baths={property.baths}
                            sqft={property.sqft}
                            imageSrc={property.imageSrc}
                            slug={property.slug}
                          />
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>

                <div id="contact-form" className="border rounded-lg p-6">
                  <h2 className="text-2xl font-bold mb-4">Contact {agent.name}</h2>
                  <ContactForm agentName={agent.name} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


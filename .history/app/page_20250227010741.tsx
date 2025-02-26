import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Building2, Hash, Home, MapPin, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import PropertyCard from "@/components/property-card"
import TestimonialCard from "@/components/testimonial-card"
import FeatureCard from "@/components/feature-card"
import HeroSearch from "@/components/hero-search"
import MainNav from "@/components/main-nav"
import Footer from "@/components/footer"

export default function HomePage() {
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
              className="object-cover w-full h-full brightness-[0.6]"
              width={1920}
              height={800}
              alt="Modern luxury home exterior"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32 lg:py-40">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Find Your Dream Home
              </h1>
              <p className="text-xl text-white/90 max-w-xl">
                Discover exclusive properties in the most desirable locations with our curated selection of luxury
                homes.
              </p>
              <HeroSearch />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Featured Properties</h2>
              <p className="text-muted-foreground max-w-2xl">
                Our hand-picked selection of premium properties from around the world.
              </p>
            </div>
            <Link href="/properties" className="mt-4 md:mt-0 group flex items-center text-primary font-medium">
              View all properties
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <PropertyCard
              title="Modern Beachfront Villa"
              location="Malibu, California"
              price="$5,950,000"
              beds={5}
              baths={6}
              sqft={4700}
              imageSrc="/hero.png"
              slug="/properties/modern-beachfront-villa"
            />
            <PropertyCard
              title="Luxury Downtown Penthouse"
              location="New York, NY"
              price="$8,250,000"
              beds={3}
              baths={3.5}
              sqft={3200}
              imageSrc="/hero.png"
              slug="/properties/luxury-downtown-penthouse"
            />
            <PropertyCard
              title="Mediterranean-style Estate"
              location="Miami, Florida"
              price="$7,495,000"
              beds={6}
              baths={7}
              sqft={6300}
              imageSrc="/hero.png"
              slug="/properties/mediterranean-style-estate"
            />
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Why Choose Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We provide an exceptional real estate experience with personalized service and unmatched expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={Home}
                title="Exclusive Listings"
                description="Access to off-market properties and luxury homes not available elsewhere."
              />
              <FeatureCard
                icon={Star}
                title="Premium Service"
                description="White-glove concierge service with dedicated agents for each client."
              />
              <FeatureCard
                icon={MapPin}
                title="Local Expertise"
                description="In-depth knowledge of neighborhoods, schools, and community insights."
              />
              <FeatureCard
                icon={Hash}
                title="Global Network"
                description="Connections with international buyers, sellers, and property investors."
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-24">
            <div className="md:w-1/2">
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  width={800}
                  height={600}
                  alt="Real estate agent with clients"
                  className="rounded-lg shadow-lg object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-lg shadow-lg hidden md:block">
                  <div className="flex items-center gap-2 font-bold text-2xl text-primary">
                    <span>98%</span>
                    <span className="text-sm font-normal text-muted-foreground">
                      Client
                      <br />
                      Satisfaction
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Personalized Service for Discerning Clients
              </h2>
              <p className="text-muted-foreground">
                Our team of experienced real estate professionals is dedicated to finding the perfect property for your
                unique needs. From initial consultation to closing, we ensure a seamless experience with attention to
                every detail.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Tailored property recommendations based on your preferences</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Virtual tours and private viewings at your convenience</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Comprehensive market analysis and investment guidance</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Negotiation expertise to secure the best possible terms</span>
                </li>
              </ul>
              <Button size="lg" className="mt-4">
                <Link href="/about">Learn more about our services</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">What Our Clients Say</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Hear from our satisfied clients about their experience working with our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Michael Thompson"
                role="Home Buyer"
                quote="Working with LuxuryEstate was an absolute pleasure. They found us our dream home in just two weeks of searching!"
                imageSrc="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                name="Jennifer Davis"
                role="Property Seller"
                quote="The team's marketing strategy and negotiation skills helped me sell my property above asking price. Couldn't be happier!"
                imageSrc="/placeholder.svg?height=100&width=100"
              />
              <TestimonialCard
                name="Robert Wilson"
                role="Investor"
                quote="Their market insights and investment recommendations have consistently yielded exceptional returns on my property portfolio."
                imageSrc="/placeholder.svg?height=100&width=100"
              />
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">Explore Neighborhoods</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the most desirable neighborhoods with our curated guides and local insights.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              href="/neighborhoods/beverly-hills"
              className="group relative overflow-hidden rounded-lg shadow-md h-80"
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                width={800}
                height={600}
                alt="Beverly Hills"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Beverly Hills</h3>
                <p className="text-white/90">Luxury homes with exclusive amenities</p>
              </div>
            </Link>
            <Link href="/neighborhoods/manhattan" className="group relative overflow-hidden rounded-lg shadow-md h-80">
              <Image
                src="/placeholder.svg?height=600&width=800"
                width={800}
                height={600}
                alt="Manhattan"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Manhattan</h3>
                <p className="text-white/90">Urban luxury in the heart of New York</p>
              </div>
            </Link>
            <Link
              href="/neighborhoods/miami-beach"
              className="group relative overflow-hidden rounded-lg shadow-md h-80"
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                width={800}
                height={600}
                alt="Miami Beach"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2">Miami Beach</h3>
                <p className="text-white/90">Oceanfront properties with stunning views</p>
              </div>
            </Link>
          </div>
        </section>

        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=1920"
              className="object-cover w-full h-full brightness-[0.3]"
              width={1920}
              height={600}
              alt="Luxury home interior"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to Find Your Perfect Property?
              </h2>
              <p className="text-xl text-white/90">
                Connect with our team of luxury real estate experts today to start your journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="default">
                  <Link href="/contact">Contact an Agent</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/20 backdrop-blur-sm text-white border-white/30 hover:bg-background/30"
                >
                  <Link href="/properties">Browse Properties</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


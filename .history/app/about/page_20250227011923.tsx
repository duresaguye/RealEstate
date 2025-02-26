import Image from "next/image"
import Link from "next/link"
import { Award, Building2, CheckCircle, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import MainNav from "@/components/main-nav"

export default function AboutPage() {
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
              height={600}
              alt="Luxury real estate office"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                About LuxuryEstate
              </h1>
              <p className="text-xl text-white/90 max-w-xl">
                The premier luxury real estate agency with a global presence and unparalleled expertise.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Story</h2>
              <p className="text-muted-foreground">
                Founded in 2005, LuxuryEstate began with a simple vision: to provide an exceptional real estate
                experience for discerning clients seeking premium properties. What started as a boutique agency in
                Beverly Hills has grown into a global network of luxury real estate professionals serving the most
                prestigious markets worldwide.
              </p>
              <p className="text-muted-foreground">
                Our founder, Elizabeth Montgomery, recognized a gap in the market for truly personalized service in the
                luxury segment. Drawing from her background in architecture and interior design, she assembled a team of
                experts who shared her passion for exceptional properties and client service.
              </p>
              <p className="text-muted-foreground">
                Today, LuxuryEstate represents some of the most extraordinary properties around the world and has
                facilitated billions in transactions for celebrities, executives, and discerning homebuyers who value
                privacy, expertise, and white-glove service.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/hero.png"
                width={800}
                height={600}
                alt="LuxuryEstate founder"
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-lg shadow-lg hidden md:block">
                <p className="font-bold text-xl">Est. 2005</p>
                <p className="text-muted-foreground">Beverly Hills, CA</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                At LuxuryEstate, our core values guide everything we do, from client interactions to property selection.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background rounded-lg p-8 shadow-sm">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We are committed to excellence in every aspect of our business, from the properties we represent to
                  the service we provide.
                </p>
              </div>
              <div className="bg-background rounded-lg p-8 shadow-sm">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Relationships</h3>
                <p className="text-muted-foreground">
                  We build lasting relationships based on trust, integrity, and a deep understanding of our clients'
                  needs.
                </p>
              </div>
              <div className="bg-background rounded-lg p-8 shadow-sm">
                <div className="bg-primary/10 rounded-full p-3 w-fit mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expertise</h3>
                <p className="text-muted-foreground">
                  Our team brings specialized knowledge and expertise in luxury markets, architecture, and investment
                  strategy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Global Presence</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              With offices in key luxury markets around the world, we provide local expertise with global reach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                width={500}
                height={300}
                alt="Beverly Hills Office"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Beverly Hills</h3>
                <div className="flex items-start gap-2 text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  <p>9876 Wilshire Boulevard, Beverly Hills, CA 90210</p>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our flagship office in the heart of Beverly Hills specializes in luxury estates throughout Los
                  Angeles.
                </p>
                <Button variant="outline" className="w-full">
                  <Link href="/contact?office=beverly-hills">Contact Office</Link>
                </Button>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                width={500}
                height={300}
                alt="New York Office"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">New York</h3>
                <div className="flex items-start gap-2 text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  <p>721 Fifth Avenue, New York, NY 10022</p>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our Manhattan office serves clients seeking luxury condos, penthouses, and townhomes in New York City.
                </p>
                <Button variant="outline" className="w-full">
                  <Link href="/contact?office=new-york">Contact Office</Link>
                </Button>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                width={500}
                height={300}
                alt="Miami Office"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Miami</h3>
                <div className="flex items-start gap-2 text-muted-foreground mb-4">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  <p>1000 South Miami Avenue, Miami, FL 33130</p>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our Miami office specializes in waterfront properties, luxury condos, and exclusive island estates.
                </p>
                <Button variant="outline" className="w-full">
                  <Link href="/contact?office=miami">Contact Office</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 md:order-1">
                <Image
                  src="/hero.png"
                  width={800}
                  height={600}
                  alt="LuxuryEstate team"
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
                <p className="text-muted-foreground">
                  Our team of experienced agents combines local expertise with global connections to provide
                  unparalleled service to our clients. Each agent is carefully selected for their market knowledge,
                  negotiation skills, and commitment to client satisfaction.
                </p>
                <p className="text-muted-foreground">
                  With backgrounds in real estate, architecture, interior design, and finance, our diverse team brings a
                  wealth of expertise to every transaction. We pride ourselves on building lasting relationships with
                  our clients, many of whom return to us for all their real estate needs.
                </p>
                <Button size="lg">
                  <Link href="/agents">Meet Our Agents</Link>
                </Button>
              </div>
            </div>
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
                Join Our Network of Satisfied Clients
              </h2>
              <p className="text-xl text-white/90">
                Experience the LuxuryEstate difference with our personalized approach to luxury real estate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" variant="default">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-background/20 backdrop-blur-sm text-white border-white/30 hover:bg-background/30"
                >
                  <Link href="/properties">View Our Listings</Link>
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


import Image from "next/image"
import Link from "next/link"
import { Building2, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import MainNav from "@/components/main-nav"
import AgentFilters from "@/components/agent-filters"
import AgentCard from "@/components/agent-card"

export default function AgentsPage() {
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
              alt="Real estate agents team"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our Expert Agents</h1>
              <p className="text-xl text-white/90 max-w-xl">
                Meet our team of experienced luxury real estate professionals dedicated to finding your perfect
                property.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <AgentFilters />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <AgentCard
              name="Sarah Johnson"
              title="Luxury Property Specialist"
              location="Beverly Hills"
              phone="(310) 555-1234"
              email="sarah.johnson@luxuryestate.com"
              bio="With over 15 years of experience in the Beverly Hills luxury market, Sarah specializes in high-end residential properties and estates."
              imageSrc="/agent.png"
              specialties={["Luxury Estates", "Celebrity Homes", "Investment Properties"]}
              languages={["English", "Spanish", "French"]}
            />
            <AgentCard
              name="Michael Chen"
              title="International Sales Director"
              location="New York"
              phone="(212) 555-6789"
              email="michael.chen@luxuryestate.com"
              bio="Michael brings a global perspective to real estate with expertise in helping international clients find their perfect New York property."
              imageSrc="/agent.png"
              specialties={["Penthouses", "Townhouses", "International Buyers"]}
              languages={["English", "Mandarin", "Cantonese"]}
            />
            <AgentCard
              name="Olivia Rodriguez"
              title="Waterfront Property Expert"
              location="Miami"
              phone="(305) 555-4321"
              email="olivia.rodriguez@luxuryestate.com"
              bio="Olivia specializes in Miami's exclusive waterfront properties and has closed over $500 million in luxury real estate transactions."
              imageSrc="/agent.png"
              specialties={["Waterfront Estates", "Luxury Condos", "Private Islands"]}
              languages={["English", "Spanish", "Portuguese"]}
            />
            <AgentCard
              name="James Wilson"
              title="Architectural Specialist"
              location="Beverly Hills"
              phone="(310) 555-8765"
              email="james.wilson@luxuryestate.com"
              bio="With a background in architecture, James helps clients find properties with exceptional design and structural integrity."
              imageSrc="/agent.png"
              specialties={["Modern Estates", "Historic Properties", "Architectural Gems"]}
              languages={["English", "Italian"]}
            />
            <AgentCard
              name="Emily Zhang"
              title="Investment Property Advisor"
              location="New York"
              phone="(212) 555-2345"
              email="emily.zhang@luxuryestate.com"
              bio="Emily's background in finance gives her clients an edge when looking for investment properties with strong appreciation potential."
              imageSrc="/agent.png"
              specialties={["Investment Properties", "Commercial Real Estate", "Portfolio Development"]}
              languages={["English", "Mandarin"]}
            />
            <AgentCard
              name="David Martinez"
              title="Luxury Condo Specialist"
              location="Miami"
              phone="(305) 555-7890"
              email="david.martinez@luxuryestate.com"
              bio="David has unparalleled knowledge of Miami's luxury condo market and exclusive building amenities."
              imageSrc="/agnet.png"
              specialties={["Luxury Condos", "Pre-Construction", "Resort Properties"]}
              languages={["English", "Spanish"]}
            />
          </div>
        </section>

        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Join Our Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're always looking for talented real estate professionals to join our growing team of luxury property
                experts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Why Work With Us</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <p className="font-medium">Global Network</p>
                      <p className="text-muted-foreground">
                        Access to an international network of clients and properties
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <p className="font-medium">Advanced Marketing</p>
                      <p className="text-muted-foreground">
                        Cutting-edge marketing tools and strategies for your listings
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <p className="font-medium">Ongoing Training</p>
                      <p className="text-muted-foreground">Continuous professional development and mentorship</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="bg-primary/10 rounded-full p-1 h-6 w-6 flex items-center justify-center shrink-0 mt-1">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                    </div>
                    <div>
                      <p className="font-medium">Competitive Compensation</p>
                      <p className="text-muted-foreground">Industry-leading commission structure and benefits</p>
                    </div>
                  </li>
                </ul>
                <Button size="lg" className="mt-4">
                  <Link href="/careers">View Open Positions</Link>
                </Button>
              </div>
              <div className="relative">
                <Image
                  src="/hero.png"
                  width={800}
                  height={600}
                  alt="Real estate team meeting"
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Offices</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Visit one of our luxury offices to meet our agents in person.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/hero.png"
                width={500}
                height={300}
                alt="Beverly Hills Office"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Beverly Hills</h3>
                <div className="flex items-start gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  <p>9876 Wilshire Boulevard, Beverly Hills, CA 90210</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Phone className="h-5 w-5 shrink-0" />
                  <p>(310) 555-0123</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Mail className="h-5 w-5 shrink-0" />
                  <p>beverlyhills@luxuryestate.com</p>
                </div>
                <Button variant="outline" className="w-full">
                  <Link href="/contact?office=beverly-hills">Contact Office</Link>
                </Button>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/hero.png"
                width={500}
                height={300}
                alt="New York Office"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">New York</h3>
                <div className="flex items-start gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  <p>721 Fifth Avenue, New York, NY 10022</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Phone className="h-5 w-5 shrink-0" />
                  <p>(212) 555-0123</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Mail className="h-5 w-5 shrink-0" />
                  <p>newyork@luxuryestate.com</p>
                </div>
                <Button variant="outline" className="w-full">
                  <Link href="/contact?office=new-york">Contact Office</Link>
                </Button>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden">
              <Image
                src="/hero.png"
                width={500}
                height={300}
                alt="Miami Office"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Miami</h3>
                <div className="flex items-start gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                  <p>1000 South Miami Avenue, Miami, FL 33130</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <Phone className="h-5 w-5 shrink-0" />
                  <p>(305) 555-0123</p>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Mail className="h-5 w-5 shrink-0" />
                  <p>miami@luxuryestate.com</p>
                </div>
                <Button variant="outline" className="w-full">
                  <Link href="/contact?office=miami">Contact Office</Link>
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


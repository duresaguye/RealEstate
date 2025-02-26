import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AgentCardProps {
  name: string
  title: string
  location: string
  phone: string
  email: string
  bio: string
  imageSrc: string
  specialties: string[]
  languages: string[]
}

export default function AgentCard({
  name,
  title,
  location,
  phone,
  email,
  bio,
  imageSrc,
  specialties,
  languages,
}: AgentCardProps) {
  // Create a URL-friendly version of the name for the agent's profile page
  const slug = name.toLowerCase().replace(/\s+/g, "-")

  return (
    <Card className="overflow-hidden h-full">
      <div className="relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={400}
          height={500}
          className="w-full h-80 object-cover object-top"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <Badge className="bg-primary hover:bg-primary">{location}</Badge>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-xl mb-1">{name}</h3>
        <p className="text-muted-foreground mb-4">{title}</p>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4 text-primary" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4 text-primary" />
            <span>{email}</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
            <span>LuxuryEstate {location} Office</span>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-4">{bio}</p>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold mb-1">Specialties</h4>
            <div className="flex flex-wrap gap-1">
              {specialties.map((specialty) => (
                <Badge key={specialty} variant="outline" className="font-normal">
                  {specialty}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-1">Languages</h4>
            <div className="flex flex-wrap gap-1">
              {languages.map((language) => (
                <Badge key={language} variant="secondary" className="font-normal">
                  {language}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Button variant="outline" className="flex-1">
            <Link href={`/agents/${slug}`} className="w-full">
              View Profile
            </Link>
          </Button>
          <Button className="flex-1">
            <Link href={`/contact?agent=${encodeURIComponent(name)}`} className="w-full">
              Contact
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}


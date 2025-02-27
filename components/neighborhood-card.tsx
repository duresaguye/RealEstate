import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Home, Ruler, School } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface NeighborhoodCardProps {
  name: string
  location: string
  description: string
  imageSrc: string
  stats: {
    avgPrice: string
    pricePerSqFt: string
    schools: string
  }
  features: string[]
  slug: string
}

export default function NeighborhoodCard({
  name,
  location,
  description,
  imageSrc,
  stats,
  features,
  slug,
}: NeighborhoodCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          width={600}
          height={400}
          className="w-full h-[300px] object-cover"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold mb-1">{name}</h3>
        <p className="text-muted-foreground mb-4">{location}</p>
        <p className="text-muted-foreground mb-6">{description}</p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-primary mb-1">
              <Home className="h-4 w-4" />
            </div>
            <p className="font-semibold">{stats.avgPrice}</p>
            <p className="text-xs text-muted-foreground">Avg. Price</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-primary mb-1">
              <Ruler className="h-4 w-4" />
            </div>
            <p className="font-semibold">{stats.pricePerSqFt}</p>
            <p className="text-xs text-muted-foreground">Per Sq Ft</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-primary mb-1">
              <School className="h-4 w-4" />
            </div>
            <p className="font-semibold">{stats.schools}</p>
            <p className="text-xs text-muted-foreground">Schools</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {features.map((feature, index) => (
            <Badge key={index} variant="secondary">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button className="w-full" variant="outline">
          <Link href={`/neighborhoods/${slug}`} className="flex items-center justify-center gap-2 w-full">
            Explore {name}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}


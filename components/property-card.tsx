import Link from "next/link"
import Image from "next/image"
import { Bath, BedDouble, HeartIcon, MoveHorizontal } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PropertyCardProps {
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: number
  imageSrc: string
  slug: string
}

export default function PropertyCard({ title, location, price, beds, baths, sqft, imageSrc, slug }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden group">
      <div className="relative">
        <Link href={slug} className="block aspect-[4/3] overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={800}
            height={600}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 h-9 w-9 rounded-full bg-white/90 hover:bg-white shadow-sm"
        >
          <HeartIcon className="h-5 w-5 text-muted-foreground" />
          <span className="sr-only">Add to favorites</span>
        </Button>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <p className="text-white font-bold text-xl">{price}</p>
        </div>
      </div>
      <CardContent className="p-4">
        <Link href={slug}>
          <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{title}</h3>
        </Link>
        <p className="text-muted-foreground mb-3 flex items-center">
          <span className="mr-1">📍</span> {location}
        </p>
        <div className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <BedDouble className="mr-1 h-4 w-4" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="mr-1 h-4 w-4" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center">
            <MoveHorizontal className="mr-1 h-4 w-4" />
            <span>{sqft.toLocaleString()} Sq Ft</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={slug} className="w-full">
          <Button variant="outline" className="w-full">
            View Property
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}


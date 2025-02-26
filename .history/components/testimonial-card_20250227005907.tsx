import Image from "next/image"
import { Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  imageSrc: string
}

export default function TestimonialCard({ name, role, quote, imageSrc }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="mb-4 text-primary">
          <Quote className="h-8 w-8" />
        </div>
        <p className="text-muted-foreground mb-6 flex-grow">{quote}</p>
        <div className="flex items-center">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={name}
            width={50}
            height={50}
            className="rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}


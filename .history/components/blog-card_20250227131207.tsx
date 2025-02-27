import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface BlogCardProps {
  title: string
  excerpt: string
  category: string
  author: {
    name: string
    role: string
    image: string
  }
  date: string
  readTime: string
  imageSrc: string
  slug: string
}

export default function BlogCard({ title, excerpt, category, author, date, readTime, imageSrc, slug }: BlogCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col">
      <Link href={`/blog/${slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>
      <CardContent className="flex-1 p-6">
        <div className="space-y-4">
          <Badge>{category}</Badge>
          <Link href={`/blog/${slug}`}>
            <h3 className="text-xl font-bold hover:text-primary transition-colors line-clamp-2">{title}</h3>
          </Link>
          <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Image
              src={author.image || "/placeholder.svg"}
              alt={author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="text-sm">
              <p className="font-medium">{author.name}</p>
              <p className="text-muted-foreground">{author.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={date}>
                {new Date(date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}


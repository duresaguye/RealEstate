"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/properties",
    label: "Properties",
  },
  {
    href: "/neighborhoods",
    label: "Neighborhoods",
  },
  {
    href: "/agents",
    label: "Our Agents",
  },
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/blog",
    label: "Blog",
  },
]

export default function MainNav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="flex items-center">
      <div className="hidden md:flex items-center gap-6">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === route.href ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon" aria-label="Toggle Menu">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] sm:w-[400px]">
          <div className="flex flex-col gap-6 mt-12">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  pathname === route.href ? "text-foreground" : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {route.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-4">
              <Link
                href="/login"
                className="text-base font-medium hover:underline underline-offset-4"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Button className="mt-2" onClick={() => setIsOpen(false)}>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}


import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import { Toaster } from "@/components/ui/sonner"


export const metadata: Metadata = {
  title: "LuxuryEstate | Premium Real Estate",
  description: "Find your dream luxury property with LuxuryEstate",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}
      <Toaster />
      </body>
      
    </html>
  )
}


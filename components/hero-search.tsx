"use client"

import * as React from "react"
import { Building, ChevronDown, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HeroSearch() {
  const [propertyType, setPropertyType] = React.useState("All Types")
  const [priceRange, setPriceRange] = React.useState("Any Price")
  const [searchType, setSearchType] = React.useState("buy")

  return (
    <Card className="border-none shadow-lg">
      <Tabs defaultValue="buy" className="w-full" onValueChange={setSearchType}>
        <TabsList className="grid grid-cols-2 w-full rounded-b-none bg-muted/50">
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="rent">Rent</TabsTrigger>
        </TabsList>
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input placeholder="Enter location, ZIP or neighborhood" className="h-11" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-11 px-4 justify-between w-full sm:w-auto min-w-[150px]">
                    <Building className="mr-2 h-4 w-4" />
                    {propertyType}
                    <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem onClick={() => setPropertyType("All Types")}>All Types</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setPropertyType("Houses")}>Houses</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setPropertyType("Apartments")}>Apartments</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setPropertyType("Condos")}>Condos</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setPropertyType("Villas")}>Villas</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setPropertyType("Land")}>Land</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="h-11 px-4 justify-between w-full sm:w-auto min-w-[150px]">
                    {priceRange}
                    <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuItem onClick={() => setPriceRange("Any Price")}>Any Price</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setPriceRange("$500k - $1M")}>$500k - $1M</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setPriceRange("$1M - $2M")}>$1M - $2M</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setPriceRange("$2M - $5M")}>$2M - $5M</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setPriceRange("$5M - $10M")}>$5M - $10M</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setPriceRange("$10M+")}>$10M+</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button className="h-11 px-6" type="submit">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
        </CardContent>
      </Tabs>
    </Card>
  )
}


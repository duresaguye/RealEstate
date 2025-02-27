"use client"

import * as React from "react"
import { Check, ChevronDown, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const locations = [
  { value: "all", label: "All Locations" },
  { value: "beverly-hills", label: "Beverly Hills" },
  { value: "malibu", label: "Malibu" },
  { value: "new-york", label: "New York" },
  { value: "miami", label: "Miami" },
  { value: "aspen", label: "Aspen" },
]

const propertyTypes = [
  { value: "all", label: "All Types" },
  { value: "house", label: "House" },
  { value: "condo", label: "Condo" },
  { value: "townhouse", label: "Townhouse" },
  { value: "estate", label: "Estate" },
  { value: "penthouse", label: "Penthouse" },
  { value: "land", label: "Land" },
]

const features = [
  "Pool",
  "Ocean View",
  "Mountain View",
  "Waterfront",
  "Tennis Court",
  "Wine Cellar",
  "Home Theater",
  "Guest House",
  "Smart Home",
  "Private Elevator",
]

export default function PropertyFilters() {
  const [location, setLocation] = React.useState("all")
  const [priceRange, setPriceRange] = React.useState([0, 20])
  const [beds, setBeds] = React.useState("any")
  const [baths, setBaths] = React.useState("any")
  const [selectedFeatures, setSelectedFeatures] = React.useState<string[]>([])
  const [open, setOpen] = React.useState(false)
  const [featuresOpen, setFeaturesOpen] = React.useState(false)

  const selectedLocation = locations.find((loc) => loc.value === location)

  const formatPrice = (value: number) => {
    if (value === 20) return "$20M+"
    return `$${value}M`
  }

  return (
    <div className="space-y-4 bg-muted p-6 rounded-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Location</label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
                {selectedLocation?.label}
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-0">
              <Command>
                <CommandInput placeholder="Search location..." />
                <CommandList>
                  <CommandEmpty>No location found.</CommandEmpty>
                  <CommandGroup>
                    {locations.map((loc) => (
                      <CommandItem
                        key={loc.value}
                        value={loc.value}
                        onSelect={(currentValue) => {
                          setLocation(currentValue === location ? "all" : currentValue)
                          setOpen(false)
                        }}
                      >
                        <Check className={`mr-2 h-4 w-4 ${location === loc.value ? "opacity-100" : "opacity-0"}`} />
                        {loc.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Property Type</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              {propertyTypes.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Beds</label>
          <Select value={beds} onValueChange={setBeds}>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Baths</label>
          <Select value={baths} onValueChange={setBaths}>
            <SelectTrigger>
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
              <SelectItem value="5">5+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Price Range</label>
        <div className="pt-4 px-2">
          <Slider defaultValue={[0, 20]} max={20} step={0.5} value={priceRange} onValueChange={setPriceRange} />
          <div className="flex justify-between mt-2 text-sm text-muted-foreground">
            <span>{formatPrice(priceRange[0])}</span>
            <span>{formatPrice(priceRange[1])}</span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Features</label>
        <Popover open={featuresOpen} onOpenChange={setFeaturesOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              {selectedFeatures.length === 0 ? "Select features" : `${selectedFeatures.length} selected`}
              <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search features..." />
              <CommandList>
                <CommandEmpty>No features found.</CommandEmpty>
                <CommandGroup>
                  {features.map((feature) => (
                    <CommandItem
                      key={feature}
                      onSelect={() => {
                        setSelectedFeatures((prev) =>
                          prev.includes(feature) ? prev.filter((f) => f !== feature) : [...prev, feature],
                        )
                      }}
                    >
                      <div className="flex items-center">
                        <Check
                          className={`mr-2 h-4 w-4 ${selectedFeatures.includes(feature) ? "opacity-100" : "opacity-0"}`}
                        />
                        {feature}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Button className="flex-1">
          <Search className="mr-2 h-4 w-4" />
          Search Properties
        </Button>
        <Button
          variant="outline"
          onClick={() => {
            setLocation("all")
            setPriceRange([0, 20])
            setBeds("any")
            setBaths("any")
            setSelectedFeatures([])
          }}
        >
          Reset Filters
        </Button>
      </div>
    </div>
  )
}


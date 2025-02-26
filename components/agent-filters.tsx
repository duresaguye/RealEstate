"use client"

import * as React from "react"
import { Check, ChevronDown, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const locations = [
  { value: "all", label: "All Locations" },
  { value: "beverly-hills", label: "Beverly Hills" },
  { value: "new-york", label: "New York" },
  { value: "miami", label: "Miami" },
]

const specialties = [
  { value: "all", label: "All Specialties" },
  { value: "luxury-estates", label: "Luxury Estates" },
  { value: "waterfront", label: "Waterfront Properties" },
  { value: "condos", label: "Luxury Condos" },
  { value: "investment", label: "Investment Properties" },
  { value: "international", label: "International Buyers" },
]

export default function AgentFilters() {
  const [open, setOpen] = React.useState(false)
  const [specialtyOpen, setSpecialtyOpen] = React.useState(false)
  const [location, setLocation] = React.useState("all")
  const [specialty, setSpecialty] = React.useState("all")
  const [searchQuery, setSearchQuery] = React.useState("")

  const selectedLocation = locations.find((loc) => loc.value === location)
  const selectedSpecialty = specialties.find((spec) => spec.value === specialty)

  return (
    <div className="space-y-4">
      <Tabs defaultValue="all" className="w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <TabsList className="bg-muted/50">
            <TabsTrigger value="all">All Agents</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="new">New Agents</TabsTrigger>
          </TabsList>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search agents..."
                className="pl-8 w-full sm:w-[200px] md:w-[260px]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" aria-expanded={open} className="justify-between">
                {selectedLocation?.label || "Select location"}
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
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

          <Popover open={specialtyOpen} onOpenChange={setSpecialtyOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" role="combobox" aria-expanded={specialtyOpen} className="justify-between">
                {selectedSpecialty?.label || "Select specialty"}
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search specialty..." />
                <CommandList>
                  <CommandEmpty>No specialty found.</CommandEmpty>
                  <CommandGroup>
                    {specialties.map((spec) => (
                      <CommandItem
                        key={spec.value}
                        value={spec.value}
                        onSelect={(currentValue) => {
                          setSpecialty(currentValue === specialty ? "all" : currentValue)
                          setSpecialtyOpen(false)
                        }}
                      >
                        <Check className={`mr-2 h-4 w-4 ${specialty === spec.value ? "opacity-100" : "opacity-0"}`} />
                        {spec.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <Button
            variant="ghost"
            onClick={() => {
              setLocation("all")
              setSpecialty("all")
              setSearchQuery("")
            }}
          >
            Reset Filters
          </Button>
        </div>
      </Tabs>
    </div>
  )
}


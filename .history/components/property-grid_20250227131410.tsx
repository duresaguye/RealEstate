import PropertyCard from "@/components/property-card"

interface Property {
  id: number
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: number
  imageSrc: string
  slug: string
  type: string
  status: string
  features: string[]
}

interface PropertyGridProps {
  properties: Property[]
}

export default function PropertyGrid({ properties }: PropertyGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard
          key={property.id}
          title={property.title}
          location={property.location}
          price={property.price}
          beds={property.beds}
          baths={property.baths}
          sqft={property.sqft}
          imageSrc={property.imageSrc}
          slug={`/properties/${property.slug}`}
        />
      ))}
    </div>
  )
}


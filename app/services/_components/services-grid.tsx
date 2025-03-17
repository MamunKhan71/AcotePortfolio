import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";
import ServiceCard from "./service-card";

// Define the subcategory type
export interface ServiceSubcategory {
  id: string
  icon: string
  title: string
  slug: string
  color: string // For the icon color
}

export interface ServiceItem {
  id: string
  icon: string
  title: string
  description: string
  slug: string
  subcategories?: ServiceSubcategory[]
}

interface ServicesGridProps {
  services: ServiceItem[]
  className?: string
}

export default function ServicesGrid({ services, className }: ServicesGridProps) {

  const IconComponent = ({ iconName }: { iconName: string }) => {
    const LucideIcon = (LucideIcons as any)[iconName];
    return LucideIcon ? (
      <div className={`flex-shrink-0 text-primary`}>
        <LucideIcon className="h-8 w-8" />
      </div>
    ) : null;
  }

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      {services.map((service) => (
        <div key={service.id}>
          <ServiceCard
            icon={<IconComponent iconName={service.icon} />}
            title={service.title}
            description={service.description}
            href={`/services/${service.slug}`}
            subcategories={service.subcategories}
          />
        </div>
      ))}
    </div>
  )
}


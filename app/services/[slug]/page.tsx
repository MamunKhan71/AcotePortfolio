import { serviceDetailsData, ServicePageProps } from "@/data/service-data-details"
import ServiceDetailComponent from "../_components/service-detail"

export default function ServicePage({ params }: ServicePageProps) {
    const { slug } = params
    const serviceDetail = serviceDetailsData[slug]

    if (!serviceDetail) {
        return <div>Service not found</div>
    }

    return <ServiceDetailComponent service={serviceDetail} />
}


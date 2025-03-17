import { serviceDetailsData } from "@/data/service-data-details";
import ServiceDetailComponent from "../_components/service-detail";

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const serviceDetail = serviceDetailsData[slug];

    if (!serviceDetail) {
        return <div>Service not found</div>;
    }

    return <ServiceDetailComponent service={serviceDetail} />;
}

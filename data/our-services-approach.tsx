import HealthIcon from "@/components/icons/health-icon"
import ReportIcon from "@/components/icons/report-icon"
import SmileIcon from "@/components/icons/smile-icon"
import UserIdIcon from "@/components/icons/user-id-icon"
import UserMinusIcon from "@/components/icons/user-minus"
import WebDeveloperIcon from "@/components/icons/web-developers"

export interface ourServicesApproachDataTypes {
    title: string,
    description: string,
    icon: React.ReactNode
}
export const ourServicesApproachData: ourServicesApproachDataTypes[] = [
    {
        "title": "User-centric approach",
        "description": "We keep in mind each stage of your user journey to build smart, immersive & seamless UX, giving your web app a headstart in the market.",
        "icon": <UserMinusIcon />
    },
    {
        "title": "Seasoned developers",
        "description": "Our developers have top-notch competency across different technologies to reduce turnaround time and transform your idea into a scalable web app the way you want it with zero tech hurdles.",
        "icon": <WebDeveloperIcon />
    },
    {
        "title": "Entrepreneur-friendly",
        "description": "Before we kickstart your project, we relate to you as entrepreneurs and ensure we are on the same page. This helps us create solutions that align with your requirements.",
        "icon": <HealthIcon />
    },
    {
        "title": "Complete transparency",
        "description": "Engage anytime with our developers through our open and 100% transparent communication loop that lets you keep all your worries at bay.",
        "icon": <UserIdIcon />
    },
    {
        "title": "Quality assurance",
        "description": "No bugs escape the experienced eyes of our quality analysts. We employ intensive testing to ensure your web app hits the bullseye at every level.",
        "icon": <ReportIcon />
    },
    {
        "title": "100% customer satisfaction",
        "description": "With over 97% project success rate, we go the extra mile and do whatever it takes to deliver your project on time and leave a smile on your face.",
        "icon": <SmileIcon />
    }
]

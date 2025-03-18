import iconAi from "@/components/icons/iconAi";
import IconBackOffice from "@/components/icons/IconBackOffice";
import iconContentMarketing from "@/components/icons/iconContentMarketing";
import iconCustomSoftware from "@/components/icons/iconCustomSoftware";
import iconDataEntry from "@/components/icons/iconDataEntry";
import iconDb from "@/components/icons/iconDb";
import iconIot from "@/components/icons/iconIot";
import iconMarketing from "@/components/icons/iconMarketing";
import iconMobile from "@/components/icons/iconMobile";
import iconMultiAi from "@/components/icons/iconMultiAi";
import iconScraping from "@/components/icons/iconScraping";
import iconSeo from "@/components/icons/iconSeo";
import iconUiDesign from "@/components/icons/iconUiDesign";
import iconVideoMarketing from "@/components/icons/iconVideoMarketing";
import iconVision from "@/components/icons/iconVision";
import iconWebDev from "@/components/icons/iconWebDev";

export const services = {
  it: {
    title: "Developments",
    items: [
      {
        title: "Mobile App Development",
        description: "Leading Mobile Application Development Services Provider",
        icon: iconMobile,
        href: '/services/mobile-app-development'
      },
      {
        title: "Custom Software",
        description: "Software Development As A Service (SaaS) Corporation",
        icon: iconCustomSoftware,
        href: '/services/custom-software'
      },
      {
        title: "Web Development",
        description: "Building scalable, secure, & user-friendly web solutions.",
        icon: iconWebDev,
        href: '/services/web-development'
      },
      {
        title: "UI/UX Design",
        description: "Designing seamless, user-centric digital experiences.",
        icon: iconUiDesign,
        href: '/services/ui-ux-design'
      },
    ],
  },
  ai: {
    title: "AI/ML Solution",
    items: [
      {
        title: "Machine Learning",
        description: "Driving smarter decisions through advanced predictive algorithms.",
        icon: iconAi,
        href: '/services/machine-learning'
      },
      {
        title: "NLP",
        description: "Valuable insights from the web efficiently & securely.",
        icon: iconIot,
        href: '/services/nlp'
      },
      {
        title: "Predictive Analytics",
        description: "Integrating diverse data streams for holistic AI-powered experiences.",
        icon: iconMultiAi,
        href: '/services/predictive-analytics'
      },
      {
        title: "Computer Vision",
        description: "Empowering machines to see, understand, & analyze the world.",
        icon: iconVision,
        href: '/services/computer-vision'
      },
    ],
  },
  bpo: {
    title: "BPO",
    items: [
      {
        title: "Technical Support",
        description: "Fast and relaible technical support for your needs",
        icon: iconDb,
        href: '/services/technical-support'
      },
      {
        title: "Customer Support",
        description: "Transforming raw data into actionable insights.",
        icon: iconDataEntry,
        href: '/services/customer-support'
      },
      {
        title: "Back-office Support",
        description: "Crafting intuitive Back-office Support for enhanced user navigation.",
        icon: IconBackOffice,
        href: '/services/back-office'
      },
      {
        title: "HR Services",
        description: "HR Services for your business needs.",
        icon: iconScraping,
        href: '/services/hr-services'
      },
    ],
  },
  marketing: {
    title: "Digital Marketing",
    items: [
      {
        title: "SEO",
        description: "Optimizing visibility to drive organic growth.",
        icon: iconSeo,
        href: '/services/digital-marketing'
      },
      {
        title: "Social Media Marketing",
        description: "Engaging audiences and building connections across platforms.",
        icon: iconMarketing,
        href: '/services/social-media'
      },
      {
        title: "Content Marketing",
        description: "Creating valuable content to inform, inspire, and convert.",
        icon: iconContentMarketing,
        href: '/services/content-marketing'
      },
      {
        title: "Email Marketing",
        description: "Captivating audiences through powerful email marketing.",
        icon: iconVideoMarketing,
        href: '/services/email-marketing'
      },
    ],
  },
}

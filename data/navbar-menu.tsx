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
import { AppWindow, Brain, Building2, Code2, Database, FileCode2, Laptop2, LayoutGrid, MessageSquare, MousePointerClick, PenTool, Search, Share2, Smartphone, Video } from "lucide-react";

export const services = {
  it: {
    title: "IT Solution",
    items: [
      {
        title: "Mobile App Development",
        description: "Leading Mobile Application Development Services Provider",
        icon: iconMobile,
      },
      {
        title: "Custom Software",
        description: "Software Development As A Service (SaaS) Corporation",
        icon: iconCustomSoftware,
      },
      {
        title: "Web Development",
        description: "Building scalable, secure, & user-friendly web solutions.",
        icon: iconWebDev,
      },
      {
        title: "UI/UX Design",
        description: "Designing seamless, user-centric digital experiences.",
        icon: iconUiDesign,
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
      },
      {
        title: "IoT Development",
        description: "Valuable insights from the web efficiently & securely.",
        icon: iconIot,
      },
      {
        title: "Multi Modal AI",
        description: "Integrating diverse data streams for holistic AI-powered experiences.",
        icon: iconMultiAi,
      },
      {
        title: "Computer Vision",
        description: "Empowering machines to see, understand, & analyze the world.",
        icon: iconVision,
      },
    ],
  },
  bpo: {
    title: "BPO",
    items: [
      {
        title: "Data Entry",
        description: "Accurate and efficient input for seamless data management.",
        icon: iconDb,
      },
      {
        title: "Data Processing",
        description: "Transforming raw data into actionable insights.",
        icon: iconDataEntry,
      },
      {
        title: "Back-office Support",
        description: "Crafting intuitive Back-office Support for enhanced user navigation.",
        icon: IconBackOffice,
      },
      {
        title: "Data Scrapping",
        description: "Harvesting web data securely and effectively.",
        icon: iconScraping,
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
      },
      {
        title: "Social Media Marketing",
        description: "Engaging audiences and building connections across platforms.",
        icon: iconMarketing,
      },
      {
        title: "Content Marketing",
        description: "Creating valuable content to inform, inspire, and convert.",
        icon: iconContentMarketing,
      },
      {
        title: "Video Marketing",
        description: "Captivating audiences through powerful visual storytelling.",
        icon: iconVideoMarketing,
      },
    ],
  },
}

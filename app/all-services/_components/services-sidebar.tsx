"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import {
  Code,
  Database,
  Layers,
  LayoutGrid,
  Lightbulb,
  Megaphone,
  MonitorSmartphone,
  Network,
  PenTool,
  Search,
  Server,
  Settings,
  Smartphone,
  Video,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
} from "@/components/ui/sidebar"

// Service data structure with nested categories
const servicesData = [
  {
    id: "it-solutions",
    title: "IT Solutions",
    icon: <Server className="h-5 w-5" />,
    items: [
      {
        id: "mobile-app-development",
        title: "Mobile App Development",
        icon: <Smartphone className="h-4 w-4" />,
        description: "Leading Mobile Application Development Services Provider",
        subItems: [
          { id: "ios-development", title: "iOS Development" },
          { id: "android-development", title: "Android Development" },
          { id: "cross-platform", title: "Cross-Platform Apps" },
        ],
      },
      {
        id: "custom-software",
        title: "Custom Software",
        icon: <Settings className="h-4 w-4" />,
        description: "Software Development As A Service (SaaS) Corporation",
        subItems: [
          { id: "enterprise-solutions", title: "Enterprise Solutions" },
          { id: "cloud-applications", title: "Cloud Applications" },
          { id: "legacy-modernization", title: "Legacy System Modernization" },
        ],
      },
      {
        id: "web-development",
        title: "Web Development",
        icon: <Code className="h-4 w-4" />,
        description: "Building scalable, secure, & user-friendly web solutions.",
        subItems: [
          { id: "frontend-development", title: "Frontend Development" },
          { id: "backend-development", title: "Backend Development" },
          { id: "full-stack-development", title: "Full Stack Development" },
        ],
      },
      {
        id: "ui-ux-design",
        title: "UI/UX Design",
        icon: <PenTool className="h-4 w-4" />,
        description: "Designing seamless, user-centric digital experiences.",
        subItems: [
          { id: "user-research", title: "User Research" },
          { id: "interface-design", title: "Interface Design" },
          { id: "usability-testing", title: "Usability Testing" },
        ],
      },
    ],
  },
  {
    id: "ai-ml-solutions",
    title: "AI/ML Solutions",
    icon: <Lightbulb className="h-5 w-5" />,
    items: [
      {
        id: "machine-learning",
        title: "Machine Learning",
        icon: <Network className="h-4 w-4" />,
        description: "Driving smarter decisions through advanced predictive algorithms.",
        subItems: [
          { id: "supervised-learning", title: "Supervised Learning" },
          { id: "unsupervised-learning", title: "Unsupervised Learning" },
          { id: "reinforcement-learning", title: "Reinforcement Learning" },
        ],
      },
      {
        id: "iot-development",
        title: "IoT Development",
        icon: <MonitorSmartphone className="h-4 w-4" />,
        description: "Valuable insights from the web efficiently & securely.",
        subItems: [
          { id: "iot-sensors", title: "IoT Sensors & Devices" },
          { id: "iot-platforms", title: "IoT Platforms" },
          { id: "iot-analytics", title: "IoT Analytics" },
        ],
      },
      {
        id: "multi-modal-ai",
        title: "Multi Modal AI",
        icon: <Layers className="h-4 w-4" />,
        description: "Integrating diverse data streams for holistic AI-powered experiences.",
        subItems: [
          { id: "computer-vision", title: "Computer Vision" },
          { id: "natural-language-processing", title: "Natural Language Processing" },
          { id: "speech-recognition", title: "Speech Recognition" },
        ],
      },
      {
        id: "computer-vision",
        title: "Computer Vision",
        icon: <LayoutGrid className="h-4 w-4" />,
        description: "Empowering machines to see, understand, & analyze the world.",
        subItems: [
          { id: "image-recognition", title: "Image Recognition" },
          { id: "object-detection", title: "Object Detection" },
          { id: "facial-recognition", title: "Facial Recognition" },
        ],
      },
    ],
  },
  {
    id: "bpo",
    title: "BPO",
    icon: <Database className="h-5 w-5" />,
    items: [
      {
        id: "data-entry",
        title: "Data Entry",
        icon: <Database className="h-4 w-4" />,
        description: "Accurate and efficient input for seamless data management.",
        subItems: [
          { id: "form-processing", title: "Form Processing" },
          { id: "data-conversion", title: "Data Conversion" },
          { id: "data-cleansing", title: "Data Cleansing" },
        ],
      },
      {
        id: "data-processing",
        title: "Data Processing",
        icon: <Server className="h-4 w-4" />,
        description: "Transforming raw data into actionable insights.",
        subItems: [
          { id: "data-mining", title: "Data Mining" },
          { id: "data-analysis", title: "Data Analysis" },
          { id: "data-visualization", title: "Data Visualization" },
        ],
      },
      {
        id: "back-office-support",
        title: "Back-office Support",
        icon: <Settings className="h-4 w-4" />,
        description: "Crafting intuitive Back-office Support for enhanced user navigation.",
        subItems: [
          { id: "accounting-services", title: "Accounting Services" },
          { id: "hr-services", title: "HR Services" },
          { id: "customer-support", title: "Customer Support" },
        ],
      },
      {
        id: "data-scrapping",
        title: "Data Scrapping",
        icon: <Search className="h-4 w-4" />,
        description: "Harvesting web data securely and effectively.",
        subItems: [
          { id: "web-scraping", title: "Web Scraping" },
          { id: "content-extraction", title: "Content Extraction" },
          { id: "data-aggregation", title: "Data Aggregation" },
        ],
      },
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: <Megaphone className="h-5 w-5" />,
    items: [
      {
        id: "seo",
        title: "SEO",
        icon: <Search className="h-4 w-4" />,
        description: "Optimizing visibility to drive organic growth.",
        subItems: [
          { id: "on-page-seo", title: "On-Page SEO" },
          { id: "off-page-seo", title: "Off-Page SEO" },
          { id: "technical-seo", title: "Technical SEO" },
        ],
      },
      {
        id: "social-media-marketing",
        title: "Social Media Marketing",
        icon: <Megaphone className="h-4 w-4" />,
        description: "Engaging audiences and building connections across platforms.",
        subItems: [
          { id: "social-media-strategy", title: "Social Media Strategy" },
          { id: "content-creation", title: "Content Creation" },
          { id: "community-management", title: "Community Management" },
        ],
      },
      {
        id: "content-marketing",
        title: "Content Marketing",
        icon: <PenTool className="h-4 w-4" />,
        description: "Creating valuable content to inform, inspire, and convert.",
        subItems: [
          { id: "blog-writing", title: "Blog Writing" },
          { id: "ebook-creation", title: "eBook Creation" },
          { id: "infographic-design", title: "Infographic Design" },
        ],
      },
      {
        id: "video-marketing",
        title: "Video Marketing",
        icon: <Video className="h-4 w-4" />,
        description: "Captivating audiences through powerful visual storytelling.",
        subItems: [
          { id: "video-production", title: "Video Production" },
          { id: "animation", title: "Animation" },
          { id: "video-advertising", title: "Video Advertising" },
        ],
      },
    ],
  },
]

export function ServicesSidebar() {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")

  // Get the current service and subservice from URL params
  const currentService = searchParams.get("service") || ""
  const currentSubService = searchParams.get("subservice") || ""
  const currentSubCategory = searchParams.get("subcategory") || ""

  // Filter services based on search query
  const filteredServices = servicesData
    .map((category) => {
      const filteredItems = category.items.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.subItems.some((subItem) => subItem.title.toLowerCase().includes(searchQuery.toLowerCase())),
      )

      return {
        ...category,
        items: filteredItems,
      }
    })
    .filter((category) => category.items.length > 0)

  return (
    <SidebarProvider defaultOpen={true}>
      <Sidebar variant="floating" className="border-r">
        <SidebarHeader>
          <div className="flex items-center px-2 py-2">
            <h2 className="text-xl font-bold">Our Services</h2>
          </div>
          <div className="px-2 pb-2">
            <SidebarInput
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </SidebarHeader>
        <SidebarContent>
          {filteredServices.map((category) => (
            <SidebarGroup key={category.id}>
              <SidebarGroupLabel>
                <span className="flex items-center gap-2">
                  {category.icon}
                  {category.title}
                </span>
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {category.items.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton asChild isActive={currentService === item.id} tooltip={item.title}>
                        <Link href={`/services?service=${item.id}`}>
                          {item.icon}
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                      {item.subItems && item.subItems.length > 0 && (
                        <SidebarMenuSub>
                          {item.subItems.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.id}>
                              <SidebarMenuSubButton asChild isActive={currentSubService === subItem.id}>
                                <Link href={`/services?service=${item.id}&subservice=${subItem.id}`}>
                                  {subItem.title}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      )}
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}


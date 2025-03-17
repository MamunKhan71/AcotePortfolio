import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { servicesData } from "@/data/service-data"
import Image from "next/image"
import ServicesGrid from "./_components/services-grid"

const developmentServices = servicesData.filter((service) =>
  ["mobile-app-development", "custom-software", "web-development"].includes(service.id),
)

const aiMlServices = servicesData.filter((service) => ["ai-ml-solutions"].includes(service.id))

const bpoServices = servicesData.filter((service) => ["bpo-services"].includes(service.id))

const marketingServices = servicesData.filter((service) => ["digital-marketing"].includes(service.id))

const glassServices = servicesData.filter((service) => ["glass-studio-service"].includes(service.id))

export default function ServicesPage() {
  return (
    <>
      <section className="py-28 relative">
        <Image
            src="/services-background-2.jpg"
            alt="Services Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="absolute inset-0 -z-10"
        />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-white/90">Comprehensive technology solutions tailored to your business needs</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
                <TabsTrigger value="all">All Services</TabsTrigger>
                <TabsTrigger value="development">Development</TabsTrigger>
                <TabsTrigger value="ai-ml">AI/ML Solutions</TabsTrigger>
                <TabsTrigger value="bpo">BPO</TabsTrigger>
                <TabsTrigger value="marketing">Digital Marketing</TabsTrigger>
                <TabsTrigger value="glass">Glass Studio</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <ServicesGrid services={servicesData} />
            </TabsContent>

            <TabsContent value="development" className="mt-0">
              <ServicesGrid services={developmentServices} />
            </TabsContent>

            <TabsContent value="ai-ml" className="mt-0">
              <ServicesGrid services={aiMlServices} />
            </TabsContent>

            <TabsContent value="bpo" className="mt-0">
              <ServicesGrid services={bpoServices} />
            </TabsContent>

            <TabsContent value="marketing" className="mt-0">
              <ServicesGrid services={marketingServices} />
            </TabsContent>

            <TabsContent value="glass" className="mt-0">
              <ServicesGrid services={glassServices} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </>
  )
}


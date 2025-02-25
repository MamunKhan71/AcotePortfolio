import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function CardBackground() {
  return (
    <Card className="w-full h-full border-none rounded-xl">
      <div className="relative">
        <img
          src="/usa.png"
          width={223}
          height={325}
          alt="Card image"
          className="object-cover w-full rounded-t-xl"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b overflow-hidden from-transparent to-black opacity-80 rounded-t-xl rotate-180"></div>
      </div>
      <CardHeader className="px-0 text-white text-center bg-[#1B1C1C] py-3">
        <CardTitle className="text-lg">USA</CardTitle>
      </CardHeader>
    </Card>
  )
}

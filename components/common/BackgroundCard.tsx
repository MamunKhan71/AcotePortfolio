import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function CardBackground() {
  return (
    <div
      className="relative overflow-hidden w-[223px] h-[320px] rounded-2xl bg-[#1B1C1C] bg-contain bg-no-repeat"
      style={{
        backgroundImage: `url('/usa.png')`,
      }}
    >
      <div
        className="absolute bottom-10 left-0 w-full h-1/2"
        style={{
          background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)`
        }}
      ></div>
      <div
        className="absolute top-0 left-0 w-full h-1/2"
        style={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)`
        }}
      ></div>
      <div className="w-full text-center absolute top-4 left-1/2 -translate-x-1/2">
        <h2 className="text-white text-xl font-bold">Coming Soon</h2>
      </div>
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-2">
          <img src="/usa-flag.png" className="h-4 w-4" />
          <h2 className="text-white text-sm font-semibold ">USA (2025)</h2>
        </div>
      </div>
    </div>
  )
}

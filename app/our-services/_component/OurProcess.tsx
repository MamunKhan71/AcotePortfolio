"use client"
import { useEffect, useRef } from "react"
import { useScroll } from "framer-motion"
import { webDevSteps } from "@/data/web-development-process"
import MobileProcessStep from "./MobileSteps"

type ProcessStepProps = {
  step: string
  title: string
  description: string
  align: "left" | "right"
  margin: string
}

const ProcessStep = ({ step, title, description, align, margin }: ProcessStepProps) => {
  const stepContent = (
    <div className="flex flex-col items-start">
      <div className="bg-primary text-[40px] text-white font-bold rounded-tl-[20px] rounded-md rounded-br-[20px] px-4 py-2 flex items-center justify-center mb-4">
        {step}
      </div>
      <h3 className="md:text-[33.172px] font-bold md:leading-[55px]">{title}</h3>
      <p className="text-xl md:leading-[28px] max-w-[300px]">{description}</p>
    </div>
  )

  return (
    <div className={`relative ${margin} grid grid-cols-2`}>
      {align === "left" ? (
        <>
          <div className="col-span-1 flex items-center justify-center">{stepContent}</div>
          <div className="col-span-1" />
        </>
      ) : (
        <>
          <div className="col-span-1" />
          <div className="col-span-1 flex items-center justify-center">{stepContent}</div>
        </>
      )}
    </div>
  )
}

export default function OurProcess() {
  const container = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  useEffect(() => {
    scrollYProgress.on("change", (progress) => {
      if (container.current) {
        const svg = container.current.querySelector("svg")
        if (svg) {
          const svgElement = svg.querySelector("#moving-svg")
          if (svgElement) {
            const pathElement = svg.querySelector("#curve") as SVGPathElement
            if (pathElement) {
              const pathLength = pathElement.getTotalLength()
              const distance = pathLength * progress
              const point = pathElement.getPointAtLength(distance)

              // Get the angle at the current point
              const lookAhead = 1
              const nextPoint = pathElement.getPointAtLength(Math.min(distance + lookAhead, pathLength))

              // Calculate angle and add 210 degrees to point downward
              const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x)
              const degrees = angle * (180 / Math.PI) + 210

              // Apply both translation and rotation with adjusted center point
              svgElement.setAttribute(
                "transform",
                `translate(${point.x - 35}, ${point.y - 29}) rotate(${degrees}, 35, 29)`,
              )
            }
          }
        }
      }
    })
  }, [scrollYProgress])

  return (
    <div>
      <div className="hidden md:block relative h-full md:h-[2001px] w-full bg-[#0a1526] text-white py-[90px]">
        {/* Header */}
        <div className="container mx-auto relative z-20">
          <div className="max-w-[689px]">
            <h1 className="text-[74.414px] text-white md:leading-[94px] max-w-[650px] font-bold">
              Web Development The Acote Process
            </h1>
            <p className="text-white text-xl">We devise agile development strategies to create your web app from scratch.</p>
          </div>

          {/* Process Steps */}
          <div className="relative mt-20 w-full">
            {webDevSteps?.map((stepData, idx) => (
              <ProcessStep key={idx} {...stepData} />
            ))}
          </div>
        </div>

        {/* SVG Path with Moving SVG Element */}
        <div ref={container} className="absolute left-1/2 -translate-x-1/2 bottom-0">
          <svg xmlns="http://www.w3.org/2000/svg" width="881" height="1724" viewBox="0 0 841 1724" fill="none">
            {/* Path Curve */}
            <path
              id="curve"
              d="M488 1.5C716 15.5 863 58 836 348C809 638 1 649 1 1037C1 1425 631 1273 631 1723"
              stroke="#3C3E4D"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray="10 10"
            />

            {/* SVG Element that follows the path */}
            <g id="moving-svg">
              <path
                d="M31.4809 31.2535L42.8127 41.5162C43.4987 42.1375 43.0452 43.2771 42.1199 43.2572L9.23523 42.5517C8.41135 42.534 7.96126 41.5833 8.46976 40.9349L28.9377 14.8332C29.5094 14.1042 30.6793 14.4772 30.7235 15.4025L31.4809 31.2535ZM31.4809 31.2535L25 35"
                stroke="#21B24B"
                strokeWidth={3}
              />
              <path
                d="M35.7318 20.9459C35.413 21.0939 35.2745 21.4724 35.4225 21.7912C35.5705 22.11 35.9489 22.2485 36.2677 22.1005L35.7318 20.9459ZM36.2677 22.1005L53.5858 14.0609L53.0499 12.9064L35.7318 20.9459L36.2677 22.1005Z"
                fill="url(#paint0_linear_359_8509)"
              />
              <path
                d="M41.0916 32.4913C40.7728 32.6393 40.6343 33.0178 40.7823 33.3366C40.9304 33.6554 41.3088 33.7939 41.6276 33.6459L41.0916 32.4913ZM41.6276 33.6459L58.9457 25.6064L58.4097 24.4518L41.0916 32.4913L41.6276 33.6459Z"
                fill="url(#paint1_linear_359_8509)"
              />
              <path
                d="M38.4119 26.7186C38.0931 26.8666 37.9547 27.2451 38.1027 27.5639C38.2507 27.8827 38.6291 28.0212 38.9479 27.8732L38.4119 26.7186ZM38.9479 27.8732L63.7705 16.3499L63.2346 15.1953L38.4119 26.7186L38.9479 27.8732Z"
                fill="url(#paint2_linear_359_8509)"
              />
            </g>

            {/* Gradient definitions */}
            <defs>
              <linearGradient
                id="paint0_linear_359_8509"
                x1="35.7892"
                y1="21.0697"
                x2="53.1073"
                y2="13.0302"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#21B34B" />
                <stop offset={1} stopColor="#0E4C20" stopOpacity={0} />
              </linearGradient>
              <linearGradient
                id="paint1_linear_359_8509"
                x1="41.1491"
                y1="32.6151"
                x2="58.4672"
                y2="24.5756"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#21B34B" />
                <stop offset={1} stopColor="#0E4C20" stopOpacity={0} />
              </linearGradient>
              <linearGradient
                id="paint2_linear_359_8509"
                x1="38.4694"
                y1="26.8424"
                x2="63.292"
                y2="15.3191"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#21B34B" />
                <stop offset={1} stopColor="#0E4C20" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Mobile Section */}
      <div className="md:hidden relative mt-12 bg-secondary px-8 py-12">
        <div className="absolute left-[47px] h-[85%] top-1/2 -translate-y-1/2 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 to-primary/10 z-0"></div>
        {webDevSteps?.map((step, index) => (
          <MobileProcessStep
            description={step.description}
            number={step.step}
            title={step.title}
            key={`${step.title}-${index}`}
          />
        ))}
      </div>
    </div>
  )
}


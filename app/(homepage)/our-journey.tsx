"use client"
import CardBackground from "@/components/common/BackgroundCard"
import ComponentTitle from "@/components/common/ComponentTitle"
import HeaderBadge from "@/components/common/HeaderBadge"
import { Button } from "@/components/ui/button"
import { countryList } from "@/data/country-list"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const OurJourney = () => {
  const [activeCountry, setActiveCountry] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCountry((prevCountry) => (prevCountry + 1) % countryList.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])
  return (
    <div className="min-h-[601px] w-full bg-[#111827] py-10 md:py-0">
      {/* Desktop Layout - Hidden on mobile */}
      <div className="relative w-full h-full container mx-auto py-[100px] hidden md:block">
        <div className="w-full h-full max-w-sm">
          <HeaderBadge title="our journey" />
          <ComponentTitle title="Our Global Presence" className={"text-white"} />
          <div className="mt-7 w-full space-y-3">
            {countryList?.map((country, index) => (
              <div key={index} className={`${activeCountry === index ? "w-full" : "w-[92%]"}`}>
                <Button
                  onClick={() => setActiveCountry(index)}
                  variant={"darkash"}
                  className={`w-full justify-start gap-2`}
                >
                  <span className="w-[9.515px] h-[9.515px] bg-[#76BE42] rounded-full"></span>
                  {country.countryTitle}
                </Button>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[339.323px] w-[894.638px] absolute right-0 top-1/2 -translate-y-1/2">
          <div className="relative">
            <img className="opacity-30" src="/world-map.png" alt="world map of acot" />
            <div className="absolute -top-16 left-24">
              <div className="flex gap-4 items-center">
                <div className="bg-red-500 h-3 w-3 rounded-full animate-heartbeat border border-[#00000]/10"></div>
                <div className="w-[223px] h-[315.422px]">
                  <AnimatePresence mode="wait">
                    {activeCountry === 0 && (
                      <motion.div
                        key="country-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <CardBackground
                          country={countryList?.find((country) => country.id === activeCountry)!}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
            {/* SAME FOR THE REST */}
            <div className="absolute -top-[32px] right-[296px]">
              <div className="flex gap-4 items-center">
                <div className="w-[223px] h-[315.422px]">
                  <AnimatePresence mode="wait">
                    {activeCountry === 1 && (
                      <motion.div
                        key="country-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <CardBackground
                          country={countryList?.find((country) => country.id === activeCountry)!}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="bg-[#117fd9] h-3 w-3 rounded-full animate-heartbeat border border-[#00000]/10"></div>
              </div>
            </div>
            <div className="absolute top-0 right-[180px]">
              <div className="flex gap-4 items-center">
                <div className="w-[223px] h-[315.422px]">
                  <AnimatePresence mode="wait">
                    {activeCountry === 2 && (
                      <motion.div
                        key="country-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <CardBackground
                          country={countryList?.find((country) => country.id === activeCountry)!}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="bg-[#117fd9] h-3 w-3 rounded-full animate-heartbeat border border-[#00000]/10"></div>
              </div>
            </div>
            <div className="absolute top-[55px] right-[195px]">
              <div className="flex gap-4 items-center">
                <div className="w-[223px] h-[315.422px]">
                  <AnimatePresence mode="wait">
                    {activeCountry === 3 && (
                      <motion.div
                        key="country-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <CardBackground
                          country={countryList?.find((country) => country.id === activeCountry)!}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="bg-[#11d9c8] h-3 w-3 rounded-full animate-heartbeat border border-[#00000]/10"></div>
              </div>
            </div>
            <div className="absolute top-[48px] right-[105px]">
              <div className="flex gap-4 items-center">
                <div className="w-[223px] h-[315.422px]">
                  <AnimatePresence mode="wait">
                    {activeCountry === 4 && (
                      <motion.div
                        key="country-0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                      >
                        <CardBackground
                          country={countryList?.find((country) => country.id === activeCountry)!}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <div className="bg-[#eb7600] h-3 w-3 rounded-full animate-heartbeat border border-[#00000]/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Hidden on desktop */}
      <div className="container mx-auto px-4 py-10 md:hidden w-full">
        <div className="w-full text-center">
          <HeaderBadge title="our journey" />
          <ComponentTitle title="Our Global Presence" className={"text-white"} />
        </div>

        <div className="aboluste w-full">
          <img
            className="w-full max-h-[200px] object-contain mx-auto"
            src="/map-mobile.png"
            alt="world map of acot"
          />

          {/* Active country card for mobile */}
          <div className="flex justify-center items-center w-full">
            <div className="w-full h-auto flex items-center justify-center">
              <CardBackground country={countryList?.find((country) => country.id === activeCountry)!} />
            </div>
          </div>
        </div>

        {/* Country selection buttons for mobile */}
        <div className="mt-8 w-full space-y-3">
          {countryList?.map((country, index) => (
            <div key={index} className={`${activeCountry === index ? "w-full" : "w-[92%] mx-auto"}`}>
              <Button
                onClick={() => setActiveCountry(index)}
                variant={"darkash"}
                className={`w-full justify-start gap-2`}
              >
                <span className="w-[9.515px] h-[9.515px] bg-[#76BE42] rounded-full"></span>
                {country.countryTitle}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OurJourney


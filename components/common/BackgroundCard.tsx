import { countryListTypes } from "@/data/country-list"

export default function CardBackground({ country }: { country: countryListTypes }) {
  return (
    <div
      className="relative w-[223px] h-[320px] rounded-2xl bg-[#1B1C1C] bg-contain bg-no-repeat z-20"
      style={{
        backgroundImage: `${country.id === 0 ? `url('${country?.image}')` : ''}`,
      }}
    >
      {
        country.id !== 0 && <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full rounded-2xl">
          <img src={country.image} alt="" />
        </div>
      }
      {
        !country.operation_status && <div
          className="absolute bottom-10 left-0 w-full h-1/2 z-20 "
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)`
          }}
        ></div>
      }
      {
        country.operation_status && <div
          className="absolute bottom-10 left-0 w-full h-1/2 z-20 "
          style={{
            background: `linear-gradient(180deg, rgba(27, 28, 28, 0.00) 0%, #1B1C1C 100%)`
          }}
        ></div>
      }
      {
        !country?.operation_status && <div
          className="absolute top-0 left-0 w-full h-1/2 rounded-2xl"
          style={{
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)`
          }}
        ></div>
      }
      <div className="w-full text-center absolute top-4 left-1/2 -translate-x-1/2 rounded-2xl">
        {
          !country?.operation_status ?
            <h2 className="text-white text-xl font-bold">Coming Soon</h2>
            :
            <>
              <h2 className="text-white text-xl font-bold">{country?.name}</h2>
              <p className="text-white/80 text-sm">- {country?.role}</p>
            </>
        }
      </div>

      <div className="absolute w-full bottom-2.5 left-1/2 -translate-x-1/2">
        <div className="flex items-center justify-center gap-2 ">
          <img src={country.flag} className="h-4 w-4" />
          <h2 className="text-white text-sm font-semibold">{country.country}{" "}{country.type}</h2>
        </div>
      </div>
      {
        country.id === 0 ? <div className="absolute top-1/2 -translate-y-1/2 -left-3.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="19" viewBox="0 0 15 19" fill="none">
            <path d="M0.842511 10.9506C-0.0625951 10.3932 -0.0625959 9.07745 0.84251 8.52005L12.75 1.18692C13.7009 0.601302 14.9257 1.28542 14.9257 2.4022L14.9257 17.0685C14.9257 18.1852 13.7009 18.8693 12.75 18.2837L0.842511 10.9506Z" fill="#333535" />
          </svg>
        </div> : <div className="absolute top-1/2 -translate-y-1/2 -right-3.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
            <path d="M14.6454 7.64892C15.5597 8.21193 15.5597 9.54093 14.6454 10.1039L2.61807 17.5109C1.65758 18.1024 0.420502 17.4114 0.420502 16.2834L0.420502 1.46949C0.420502 0.341473 1.65758 -0.349534 2.61807 0.241975L14.6454 7.64892Z" fill="#333535" />
          </svg>
        </div>
      }
    </div>
  )
}

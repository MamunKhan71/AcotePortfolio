import React from 'react'

const ConstructionIcon = ({ isHovered = true }: { isHovered: boolean }) => {
    return (
        <svg
            width={107}
            height={66}
            viewBox="0 0 107 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect
                width={36}
                height={18}
                transform="translate(0.629883)"
                fill={isHovered ? '#21B24B' : "url(#pattern0_2057_5112)"}
            />
            <g clipPath="url(#clip0_2057_5112)">
                <g clipPath="url(#clip1_2057_5112)">
                    <path d="M23.3101 26L39.3101 36V66H23.3101V26Z" fill={isHovered ? '#21B24B' : "#E2E2E2"} />
                    <path
                        d="M7.31006 66V36.75L23.3101 27V66"
                        stroke={isHovered ? "#21B24B" : "white"}
                        strokeWidth={2}
                        strokeLinejoin="round"
                    />
                </g>
            </g>
            <g clipPath="url(#clip2_2057_5112)">
                <g clipPath="url(#clip3_2057_5112)">
                    <path d="M79.8 10L105.8 26V74H79.8V10Z" fill="#E2E2E2" />
                    <path
                        d="M53.8 74V26.75L79.8 11V74"
                        stroke={isHovered ? "#21B24B" : "white"}
                        strokeWidth={2}
                        strokeLinejoin="round"
                    />
                </g>
            </g>
            <defs>
                <pattern
                    id="pattern0_2057_5112"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use
                        xlinkHref="#image0_2057_5112"
                        transform="scale(0.0277778 0.0555556)"
                    />
                </pattern>
                <clipPath id="clip0_2057_5112">
                    <rect
                        width={35}
                        height={41}
                        fill={isHovered ? "#21B24B" : "white"}
                        transform="translate(5.31006 25)"
                    />
                </clipPath>
                <clipPath id="clip1_2057_5112">
                    <rect
                        width={35}
                        height={41}
                        fill={isHovered ? "#21B24B" : "white"}
                        transform="translate(5.31006 25)"
                    />
                </clipPath>
                <clipPath id="clip2_2057_5112">
                    <rect width={55} height={65} fill={isHovered ? "#21B24B" : "white"} transform="translate(51.8 9)" />
                </clipPath>
                <clipPath id="clip3_2057_5112">
                    <rect width={55} height={65} fill={isHovered ? "#21B24B" : "white"} transform="translate(51.8 9)" />
                </clipPath>
                <image
                    id="image0_2057_5112"
                    width={36}
                    height={18}
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAASCAYAAAAzI3woAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEcSURBVHgBzZWBEYIwDEWDEzBCR2AD2cARcAPZQDdwBEaQDZQN2AA20A1qyv1yuQpKBarvLpeDpuknpC3RnxGRJ1rrmF3GlsAUW4zhB1sLK9mqKIpaWgMWkrJdtT8XM5eWgpMpR8gdzwe2BBWzsTHbFmMXR1hhctEcOEEOAVbIUQqY+DFmTiNy5PQNPPEkvu7sI2REWCHynXzmu2IOtBCouJ8oZ1JGC8M59yJ//ilYiZ5ZrDID6+Sip9S7wMLuCFoZ9KXhOhaQIqDRc7fnNEGx+BvpUIA9N44UCBwJr1VC71gUBcKpUnesbDCWwper3T0D8Frm7qvxmElBO/gbhaeENxd1L0jB1xSeCj7p37j/MSToo+5Mki876EfI9Z/h08H2KOI4VAAAAABJRU5ErkJggg=="
                />
            </defs>
        </svg>

    )
}

export default ConstructionIcon
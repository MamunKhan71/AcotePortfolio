import React from 'react'

const AiIcon = ({ isHovered = true }: { isHovered: boolean }) => {
    return (
        <svg
            width={90}
            height={58}
            viewBox="0 0 90 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g clipPath="url(#clip0_2057_5111)">
                <g clipPath="url(#clip1_2057_5111)">
                    <g clipPath="url(#clip2_2057_5111)">
                        <mask
                            id="mask0_2057_5111"
                            style={{ maskType: "luminance" }}
                            maskUnits="userSpaceOnUse"
                            x={0}
                            y={8}
                            width={53}
                            height={58}
                        >
                            <path d="M52.7 8H0.699951V66H52.7V8Z" fill={isHovered ? "#21B24B" : "white"} />
                        </mask>
                        <g mask="url(#mask0_2057_5111)">
                            <path
                                d="M49.7 10H3.69995C3.14767 10 2.69995 10.4477 2.69995 11V67C2.69995 67.5523 3.14767 68 3.69995 68H49.7C50.2522 68 50.7 67.5523 50.7 67V11C50.7 10.4477 50.2522 10 49.7 10Z"
                                stroke={isHovered ? "#21B24B" : "white"}
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                    </g>
                </g>
            </g>
            <rect
                width={72}
                height={64}
                transform="translate(17.79 0.390137)"
                fill="url(#pattern0_2057_5111)"
            />
            <defs>
                <pattern
                    id="pattern0_2057_5111"
                    patternContentUnits="objectBoundingBox"
                    width={1}
                    height={1}
                >
                    <use
                        xlinkHref="#image0_2057_5111"
                        transform="scale(0.0138889 0.015625)"
                    />
                </pattern>
                <clipPath id="clip0_2057_5111">
                    <rect
                        width={52}
                        height={58}
                        fill={isHovered ? "#21B24B" : "white"}
                        transform="translate(0.699951 8)"
                    />
                </clipPath>
                <clipPath id="clip1_2057_5111">
                    <rect
                        width={52}
                        height={58}
                        fill={isHovered ? "#21B24B" : "white"}
                        transform="translate(0.699951 8)"
                    />
                </clipPath>
                <clipPath id="clip2_2057_5111">
                    <rect
                        width={52}
                        height={58}
                        fill={isHovered ? "#21B24B" : "white"}
                        transform="translate(0.699951 8)"
                    />
                </clipPath>
                <image
                    id="image0_2057_5111"
                    width={72}
                    height={64}
                    preserveAspectRatio="none"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABACAYAAAC5vjEqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADqSURBVHgB7dixDcIwFAbhl4QBUqdiNEZhA0Y0SmG3LGAZV1Qoh8uI+5qkSJOT5eKfUkq3ZVkeEbGGPlprz/64T/u+p/5yDX3zmsM4R9Y5dMhAwEDAQMBAwEDAQMBAwEDAQMBAwEDgMvLxtm3Rp5E4s1pr5Jx//n7oBPWNJM5u9B+GTlApJf6NdxAwEDAQMBAwEDAQMBAwEDAQMBAwEDAQMBBwDwLuQcA9CHgHAQMBAwEDAQMBAwEDAQMBAwEDAQMBAwEDAfcg4B4E3IOAdxAwEDAQMBAwEDAQMBAwEDAQMBAwEDAQMBAwEHgDcT85X+m5PhMAAAAASUVORK5CYII="
                />
            </defs>
        </svg>

    )
}

export default AiIcon
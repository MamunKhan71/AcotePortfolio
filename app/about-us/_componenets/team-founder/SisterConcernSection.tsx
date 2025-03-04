import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const SisterConcernSection = () => {
    return (
        <div>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-full h-px my-8 bg-[#686868] border-0 dark:bg-gray-700" />
                <span className="absolute px-3 font-medium text-2xl -translate-x-1/2 bg-[#101B26] left-1/2 text-white tracking-[0.7px]">Our Sister Concern</span>
            </div>
            <div className='pt-10 px-52'>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="w-[164px] h-[164px] mb-4 md:mb-0 md:mr-6 flex-shrink-0">
                        <Image
                            src="/about-us/kvillage-logo.png"
                            alt="K-Village Logo"
                            width={164}
                            height={164}
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex-1 text-white space-y-10">
                        <div className='space-y-3'>
                            <h3 className="text-4xl font-semibold text-center md:text-left">Korean Language Training Center</h3>
                            <p className="text-lg text-[#C1C1C1] md:leading-[28px]">
                                K-Village is leading Korean language training center, offers comprehensive language training and
                                consultancy services. They promote Korean culture through K-Life, offering engaging K-language programs
                                for all levels. Explore the Korean language and culture with K-Village.
                            </p>
                        </div>
                        <div className="flex items-center justify-start gap-9 overflow-hidden h-full w-full">
                            <Button variant={'default'}>Lean More</Button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1" height="31" viewBox="0 0 1 31" fill="none">
                                <path d="M0.495117 1.09839L0.495118 30.0984" stroke="#8E8E8E" strokeLinecap="round" />
                            </svg>
                            <div className="flex items-center">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-[35px] h-[35px] rounded-full border-2 border-[#0f1923] overflow-hidden">
                                            <Image
                                                src={`/about-us/avatar${i}.png`}
                                                alt={`User ${i}`}
                                                width={35}
                                                height={35}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="ml-5  text-xl text-[#878787] inline-flex gap-2 items-center">
                                    <span className="font-semibold text-white tracking-wider">579+</span>
                                    <span className="text-xs">Satisfied Users</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SisterConcernSection
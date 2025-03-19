'use client'
import ShimmerButton from '@/components/shimmer-button'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Share2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import JobApplicationForm from '../_components/job-application-form'

const JobApplyPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    return (
        <div className='pt-10 px-4 md:px-0'>
            <section className="container mx-auto py-10 relative">
                <Image src={'/join-us.jpg'} alt={'service.title'} layout="fill" objectFit="cover" className="absolute inset-0 -z-20 rounded-2xl" style={{ filter: 'brightness(0.1)' }} />
                <div className="container mx-auto px-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                        <div className="flex flex-col md:flex-row w-full justify-between items-center">
                            <div className="md:max-w-2xl">
                                <Link href="/careers" className="inline-flex items-center text-white/80 hover:text-white mb-4">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Back to all jobs
                                </Link>
                                <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">{'Frontend Developer'}</h1>
                                <p className="text-base md:text-xl text-white/90 mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus iste eos quam eum ipsam eius natus ratione, voluptate fugiat. Modi.</p>
                                <div className="flex gap-4 items-center">
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <Link href={'tel:+8801758388865'}>
                                    <Button size="lg" className="bg-primary text-white hover:bg-secondary inline-flex gap-2 items-center">
                                        <Share2 /> Share
                                    </Button>
                                </Link>
                                <Link href={'/book-appointment'}>
                                    <ShimmerButton title="Apply Now" className="text-white text-sm md:text-base" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <JobApplicationForm isSubmitted={isSubmitted} setIsSubmitted={setIsSubmitted} />
        </div>
    )
}

export default JobApplyPage
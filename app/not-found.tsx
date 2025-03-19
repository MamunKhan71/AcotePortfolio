import { Button } from "@/components/ui/button"
import { Briefcase, Calendar, Home, Phone, Stethoscope, TriangleAlert } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function NotFound() {
    return (
        <div className="md:min-h-screen bg-background flex flex-col items-center justify-center text-center gap-2 px-4 md:px-0">
            <div className="relative h-60 w-60">
                <Image src={'/404.png'} fill alt="404 not found image" />
            </div>
            <h1 className="text-4xl font-bold text-primary mb-2">Oops! Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">It seems we can't find the page you're looking for.</p>
            <div className="bg-white p-6 border rounded-lg max-w-md w-full mb-8">
                <h2 className="text-2xl font-semibold text-primary mb-4">Need help?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link href="/" passHref>
                        <Button variant="default" className="w-full">
                            <Home className="mr-1 h-4 w-4" /> Home
                        </Button>
                    </Link>
                    <Link href="/services" passHref>
                        <Button variant="default" className="w-full">
                            <Briefcase className="mr-1 h-4 w-4" /> Our Services
                        </Button>
                    </Link>
                    <Link href="/book-appointment" passHref>
                        <Button variant="default" className="w-full">
                            <Calendar className="mr-1 h-4 w-4" /> Book Appointment
                        </Button>
                    </Link>
                    <Link href="/contact" passHref>
                        <Button variant="default" className="w-full">
                            <Phone className="mr-1 h-4 w-4" /> Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
            <p className="text-sm text-gray-500">
                If you believe this is an error, please contact our support team. <br />
                <span className="font-semibold text-primary"><a href="mailto:support@drseba24.com">support@acotegroup.com</a></span>
            </p>
        </div>
    )
}


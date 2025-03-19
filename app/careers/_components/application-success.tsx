import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ApplicationSuccess({ jobId = "1" }) {
    // This would typically come from an API call using the jobId
    const job = {
        id: 1,
        title: "Senior Frontend Developer",
    }

    return (
        <div className="w-full bg-[#020b1f] text-white min-h-screen py-12 flex items-center justify-center">
            <div className="container mx-auto px-4 max-w-md">
                <div className="bg-[#051440] rounded-xl p-8 shadow-lg text-center">
                    <div className="bg-[#00a651]/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="h-10 w-10 text-[#00a651]" />
                    </div>

                    <h1 className="text-2xl font-bold mb-4">Application Submitted!</h1>

                    <p className="text-gray-300 mb-6">
                        Thank you for applying for the <span className="font-medium text-white">{job.title}</span> position. We've
                        received your application and will review it shortly.
                    </p>

                    <div className="bg-[#0a1e5a] rounded-lg p-4 mb-6">
                        <h2 className="font-medium mb-2">What happens next?</h2>
                        <ol className="text-sm text-gray-300 text-left space-y-2">
                            <li className="flex items-start">
                                <span className="bg-[#00a651] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                                    1
                                </span>
                                <span>Our team will review your application</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-[#00a651] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                                    2
                                </span>
                                <span>If your profile matches our requirements, we'll contact you for an initial interview</span>
                            </li>
                            <li className="flex items-start">
                                <span className="bg-[#00a651] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0 mt-0.5">
                                    3
                                </span>
                                <span>You'll receive an email with the status of your application within 1-2 weeks</span>
                            </li>
                        </ol>
                    </div>

                    <div className="space-y-3">
                        <Link href="/careers">
                            <Button className="w-full bg-[#00a651] hover:bg-[#008c44]">Browse More Jobs</Button>
                        </Link>
                        <Link href="/">
                            <Button variant="outline" className="w-full border-[#1a2d6d] hover:bg-[#0a1e5a]">
                                Return to Homepage
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


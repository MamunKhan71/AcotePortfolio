import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import Link from "next/link"

export default function ApplicationError({ jobId = "1" }) {
    return (
        <div className="w-full bg-[#020b1f] text-white min-h-screen py-12 flex items-center justify-center">
            <div className="container mx-auto px-4 max-w-md">
                <div className="bg-[#051440] rounded-xl p-8 shadow-lg text-center">
                    <div className="bg-red-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle className="h-10 w-10 text-red-500" />
                    </div>

                    <h1 className="text-2xl font-bold mb-4">Application Not Submitted</h1>

                    <p className="text-gray-300 mb-6">
                        We encountered an issue while submitting your application. This could be due to a temporary technical
                        problem.
                    </p>

                    <div className="bg-[#0a1e5a] rounded-lg p-4 mb-6">
                        <h2 className="font-medium mb-2">What you can do:</h2>
                        <ul className="text-sm text-gray-300 text-left space-y-2">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Try submitting your application again</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>Check your internet connection</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2">•</span>
                                <span>If the problem persists, please contact us at careers@acotegroup.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <Link href={`/careers/${jobId}/apply`}>
                            <Button className="w-full bg-[#00a651] hover:bg-[#008c44]">Try Again</Button>
                        </Link>
                        <Link href="/careers">
                            <Button variant="outline" className="w-full border-[#1a2d6d] hover:bg-[#0a1e5a]">
                                Return to Careers
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


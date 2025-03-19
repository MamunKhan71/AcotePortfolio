"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, CheckCircle2, Clock, Globe, MapPin } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    firstName: z.string().min(2, {
        message: "First name must be at least 2 characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    phone: z.string().min(10, {
        message: "Please enter a valid phone number.",
    }),
    resume: z.instanceof(FileList).refine((files) => files.length > 0, {
        message: "Please upload your resume.",
    }),
    experience: z.string({
        required_error: "Please select your experience level.",
    }),
    currentEmployment: z.string({
        required_error: "Please select your current employment status.",
    }),
    availability: z.string({
        required_error: "Please select your availability.",
    }),
    coverLetter: z.string().optional(),
})

export default function JobApplicationForm({ isSubmitted, setIsSubmitted }: { isSubmitted: boolean, setIsSubmitted: (value: boolean) => void }) {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            coverLetter: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true)

        // Create FormData object
        const formData = new FormData()

        // Append form fields to FormData
        Object.entries(values).forEach(([key, value]) => {
            if (key === "resume") {
                if (value instanceof FileList && value.length > 0) {
                    formData.append("resume", value[0])
                }
            } else {
                formData.append(key, value as string)
            }
        })

        await new Promise((resolve) => setTimeout(resolve, 1500))
        // const response = await fetch('/api/job-application', {
        //   method: 'POST',
        //   body: formData,
        // });

        setIsSubmitting(false)
        setIsSubmitted(true)
    }

    return (
        <div className="container mx-auto py-10 ">
            {isSubmitted ? (
                <SuccessMessage />
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <JobDetails />
                    <div>
                        <Card className="shadow-lg">
                            <CardContent className="pt-6">
                                <h2 className="text-2xl font-bold mb-6 text-primary">Apply Now</h2>
                                <Form {...form}>
                                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="firstName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>First Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="John" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="lastName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Last Name</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Doe" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Email</FormLabel>
                                                        <FormControl>
                                                            <Input type="email" placeholder="john.doe@example.com" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="phone"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Phone Number</FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="+1 (555) 123-4567" {...field} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="resume"
                                            render={({ field: { value, onChange, ...fieldProps } }) => (
                                                <FormItem>
                                                    <FormLabel>Resume/CV</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            type="file"
                                                            accept=".pdf,.doc,.docx"
                                                            onChange={(e) => onChange(e.target.files)}
                                                            {...fieldProps}
                                                            className="file:mr-4 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
                                                        />
                                                    </FormControl>
                                                    <FormDescription>Upload your resume (PDF, DOC, or DOCX)</FormDescription>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <FormField
                                            control={form.control}
                                            name="experience"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Experience Level</FormLabel>
                                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                        <FormControl>
                                                            <SelectTrigger>
                                                                <SelectValue placeholder="Select your experience level" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                                                            <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                                                            <SelectItem value="senior">Senior Level (5+ years)</SelectItem>
                                                            <SelectItem value="lead">Lead/Manager (7+ years)</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <FormField
                                                control={form.control}
                                                name="currentEmployment"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Current Employment</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select status" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="employed">Currently Employed</SelectItem>
                                                                <SelectItem value="unemployed">Not Currently Employed</SelectItem>
                                                                <SelectItem value="student">Student</SelectItem>
                                                                <SelectItem value="freelance">Freelancer</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="availability"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <FormLabel>Availability to Start</FormLabel>
                                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                            <FormControl>
                                                                <SelectTrigger>
                                                                    <SelectValue placeholder="Select availability" />
                                                                </SelectTrigger>
                                                            </FormControl>
                                                            <SelectContent>
                                                                <SelectItem value="immediate">Immediately</SelectItem>
                                                                <SelectItem value="2weeks">2 Weeks Notice</SelectItem>
                                                                <SelectItem value="1month">1 Month Notice</SelectItem>
                                                                <SelectItem value="3months">3+ Months</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </div>

                                        <FormField
                                            control={form.control}
                                            name="coverLetter"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Cover Letter (Optional)</FormLabel>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                                                            className="min-h-[120px]"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                                            {isSubmitting ? "Submitting..." : "Submit Application"}
                                        </Button>
                                    </form>
                                </Form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            )}
        </div>
    )
}

function JobDetails() {
    return (
        <div className="space-y-4 md:space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl md:text-3xl font-bold text-primary">Frontend Developer</h1>
                    <p className="text-base md:text-lg text-secondary-foreground mt-2">Acote Group LTD.</p>
                </div>
                <div>
                    <Badge variant="outline" className="flex font-normal items-center gap-1 text-xs md:text-sm md:py-1.5">
                        <CalendarIcon size={14} className="text-primary" />
                        2 days ago
                    </Badge>
                </div>
            </div>

            <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="flex font-normal items-center gap-1 text-sm py-1.5">
                    <MapPin size={14} className="text-primary" />
                    DTX Business Tower, Pragati Sarani, Dhaka
                </Badge>
                <Badge variant="outline" className="flex font-normal items-center gap-1 text-sm py-1.5">
                    <Clock size={14} className="text-primary" />
                    Full-time
                </Badge>
                <Badge variant="outline" className="flex items-center font-normal gap-1 text-sm py-1.5">
                    <Globe size={14} className="text-primary" />
                    Remote options available
                </Badge>
            </div>

            <Card className="bg-primary/5 border-primary/20">
                <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-2">About the Role</h3>
                    <p className="text-secondary-foreground">
                        We're looking for an experienced Full Stack Developer to join our growing team. You'll be working on
                        cutting-edge projects using the latest technologies to build scalable, high-performance applications for our
                        enterprise clients.
                    </p>
                </CardContent>
            </Card>

            <div>
                <h3 className="text-lg font-semibold mb-3">Key Responsibilities</h3>
                <ul className="space-y-2">
                    {[
                        "Design and develop scalable web applications using modern frameworks",
                        "Collaborate with cross-functional teams to define and implement new features",
                        "Write clean, maintainable, and efficient code",
                        "Troubleshoot and debug applications",
                        "Optimize applications for maximum speed and scalability",
                        "Participate in code reviews and contribute to team knowledge sharing",
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-secondary-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <Separator />

            <div>
                <h3 className="text-lg font-semibold mb-3">Required Skills</h3>
                <div className="flex flex-wrap gap-2">
                    {[
                        "JavaScript",
                        "TypeScript",
                        "React",
                        "Node.js",
                        "Next.js",
                        "RESTful APIs",
                        "GraphQL",
                        "SQL",
                        "NoSQL",
                        "Git",
                        "CI/CD",
                        "Cloud Services (AWS/Azure/GCP)",
                    ].map((skill, index) => (
                        <Badge key={index} className="text-sm py-1 bg-primary text-white font-normal border-none">
                            {skill}
                        </Badge>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Benefits</h3>
                <ul className="space-y-2">
                    {[
                        "Competitive salary and equity package",
                        "Flexible work arrangements",
                        "Health, dental, and vision insurance",
                        "401(k) matching",
                        "Professional development budget",
                        "Unlimited PTO policy",
                    ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-secondary-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

function SuccessMessage() {
    return (
        <div className="max-w-md mx-auto text-center py-12">
            <div className="bg-primary/10 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-primary mb-2">Application Submitted!</h2>
            <p className="text-secondary-foreground mb-6">
                Thank you for applying to the Senior Full Stack Developer position at TechInnovate Solutions. We've received
                your application and will review it shortly.
            </p>
            <p className="text-sm text-muted-foreground">
                You should receive a confirmation email within the next few minutes. Our team will be in touch with you
                regarding next steps.
            </p>
        </div>
    )
}


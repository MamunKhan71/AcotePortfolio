"use client"

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    otherContact: string;
    message: string;
    service: string;
    acceptTerms: boolean;
}

interface Errors {
    [key: string]: string;
}

interface InputFieldProps {
    label: string;
    name: keyof FormData;
    type?: string;
    value: string | boolean;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    error?: string;
    required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type = "text", value, onChange, error, required }) => (
    <div>
        <label className="block text-base mb-[15px]">
            {label} {required && <span className="text-primary">*</span>}
        </label>
        <input
            type={type}
            name={name}
            value={String(value)}
            onChange={onChange}
            className={`w-full p-2 border ${error ? "border-gray-300" : "border-[#E6E6E6]"} rounded-lg`}
        />
        {error && <p className="text-primary text-xs mt-1">{error}</p>}
    </div>
);

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        company: "",
        otherContact: "",
        message: "",
        service: "",
        acceptTerms: false,
    });

    const [errors, setErrors] = useState<Errors>({});

    const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));

        if (errors[name]) {
            setErrors((prev) => {
                const { [name]: removedError, ...rest } = prev;
                return rest;
            });
        }
    }, [errors]);

    const validateForm = (): boolean => {
        const newErrors: Errors = {};
        ["name", "email", "phone", "service"].forEach((field) => {
            if (!formData[field as keyof FormData].toString().trim()) {
                newErrors[field] = `${field} is required`;
            }
        });
        if (!formData.acceptTerms) newErrors.acceptTerms = "You must accept the terms";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form submitted:", formData);
        }
    };

    return (
        <div className="bg-[#F2F2F7] px-4 py-8 md:p-9 rounded-lg">
            <h2 className="text-2xl font-medium mb-3">How can we help you?</h2>
            <p className="text-lg mb-10">Describe your request and tell us about your project idea</p>

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-6">
                    <InputField label="Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} required />
                    <InputField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
                    <InputField label="Phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} required />
                    <div>
                        <label className="block text-base mb-[15px]">Service required <span className="text-primary">*</span></label>
                        <div className="relative">
                            <select
                            
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className={`w-full p-2 border ${errors.service ? "border-red-500" : "border-[#E6E6E6]"} rounded-lg appearance-none pr-10`}
                            >
                                <option value="" disabled>Select your Service</option>
                                <option value="Web Development">Web Development</option>
                                <option value="Mobile App Development">Mobile App Development</option>
                                <option value="UI/UX Design">UI/UX Design</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Consulting">Consulting</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <ChevronDown className="h-4 w-4 text-gray-500" />
                            </div>
                        </div>
                        {errors.service && <p className="text-primary text-xs mt-1">{errors.service}</p>}
                    </div>
                    <InputField label="Company" name="company" value={formData.company} onChange={handleChange} />
                    <InputField label="Other Contact" name="otherContact" value={formData.otherContact} onChange={handleChange} />
                </div>
                <div className="mt-4">
                    <label className="block text-base mb-[15px]">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-2 border border-[#E6E6E6] rounded-lg"
                    />
                </div>
                <div className="mt-6 flex items-center">
                    <input
                        type="checkbox"
                        id="acceptTerms"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="acceptTerms" className="text-sm">
                        I accept the <a href="#" className="underline">Terms</a> & <a href="#" className="underline">Privacy Policy</a>
                    </label>
                </div>
                {errors.acceptTerms && <p className="text-primary text-xs mt-1">{errors.acceptTerms}</p>}
                <div className="mt-6">
                    <Button variant="default">Leave us a message</Button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

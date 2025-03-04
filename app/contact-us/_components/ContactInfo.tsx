import { contactData } from '@/data/contact-info'

const steps: string[] = [
    "We will contact you within 24 hours",
    "We'll clarify your expectations, business objectives, and project requirements",
    "We'll develop and accept a proposal",
    "Following that, our partnership can begin"
];

interface ContactDetailProps {
    title: string;
    content: React.ReactNode;
}

const ContactDetail: React.FC<ContactDetailProps> = ({ title, content }) => (
    <div>
        <h3 className="text-lg font-light text-[#6E6E6E] md:leading-[23.4px]">{title}</h3>
        <p className='text-lg font-normal md:leading-[27px]'>{content}</p>
    </div>
);

const ContactInfo: React.FC = () => {
    return (
        <div className="bg-white">
            <h2 className="text-[28px] mb-6 text-[#1E2228]">What we'll do next?</h2>

            <div className="space-y-6">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full border border-[#21B24B] bg-green-100 text-green-500 flex items-center justify-center mr-4 text-lg">
                            {index + 1}
                        </div>
                        <p className='text-base font-light md:leading-[20.8px]'>{step}</p>
                    </div>
                ))}
            </div>

            <div className="mt-16 space-y-6">
                <ContactDetail title="Drop us a line" content={contactData.email} />
                <ContactDetail 
                    title="Main office" 
                    content={
                        <>
                            <p className="mb-1">{contactData.address.line1}</p>
                            <p>{contactData.address.line2}</p>
                        </>
                    } 
                />
                <ContactDetail title="Contacts" content={contactData.phone} />
            </div>
        </div>
    );
};

export default ContactInfo;

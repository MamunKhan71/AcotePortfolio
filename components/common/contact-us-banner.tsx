import Link from 'next/link'
import { Button } from '../ui/button'

const ContactUsBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url('/contact-us-banner.png')` }}
      className='h-full w-full text-white'
    >
      <div className='container mx-auto py-14 md:py-16 space-y-8 md:space-y-11 px-4 md:px-0'>
        <div className='space-y-3 md:space-y-5 mb-4'>
          <h1 className='text-4xl md:text-[56px] font-medium'>Work With Us</h1>
          <p className='text-xl md:text-2xl font-medium'>Join us to accelerate<br className='hidden md:block' />
            technology adoption together!</p>
        </div>
        <Link href={'/contact-us'}>
          <Button className='bg-white text-secondary'>Submit Request <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
            <path d="M0.618591 7.83594H14.8038" stroke="black" strokeWidth="1.77315" />
            <path d="M10.1423 2.28223L15.6938 7.83412L10.1423 13.3856" stroke="black" strokeWidth="1.77315" strokeLinejoin="round" />
          </svg></Button>
        </Link>
      </div>
    </div>
  )
}

export default ContactUsBanner
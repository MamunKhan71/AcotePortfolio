import React from 'react'
import { Button } from '../ui/button'
import IconRightArrow from '../icons/iconRightArrow'

const ContactUsBanner = () => {
  return (
    <div
      style={{ backgroundImage: `url('/contact-us-banner.png')` }}
      className='h-full w-full text-white'
    >
      <div className='container mx-auto py-16 space-y-11'>
        <div className='space-y-5'>
          <h1 className='text-[56px] font-medium'>Work With Us</h1>
          <p className='text-2xl font-medium'>Join us to accelerate<br />
            technology adoption together!</p>
        </div>
        <Button className='bg-white text-secondary'>Submit Request <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
          <path d="M0.618591 7.83594H14.8038" stroke="black" strokeWidth="1.77315" />
          <path d="M10.1423 2.28223L15.6938 7.83412L10.1423 13.3856" stroke="black" strokeWidth="1.77315" strokeLinejoin="round" />
        </svg></Button>
      </div>
    </div>
  )
}

export default ContactUsBanner
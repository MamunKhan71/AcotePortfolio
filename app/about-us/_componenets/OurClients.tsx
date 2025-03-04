import ComponentTitle from '@/components/common/ComponentTitle'
import React from 'react'

const OurClients = () => {
    return (
        <div className='container mx-auto text-center'>
            <ComponentTitle title='Our Clients' />
            <div className='w-full h-full mt-10'>
                <img className='w-full h-full' src="/about-us/our-clients.png" alt="our client image" />
            </div>
        </div>
    )
}

export default OurClients
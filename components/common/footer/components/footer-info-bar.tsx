import React from 'react'

const FooterInfoBar = () => {
    return (
        <div className='bg-[#041428] w-full border border-b-0 border-x-0 border-t-[#232751]'>
            <div className='container mx-auto py-5 text-white text-sm px-4 md:px-0'>
                <div className='flex justify-between items-center w-full '>
                    <p>&copy; <span className='hidden md:inline-flex'> Copyright 2025</span> <span className='text-primary font-medium'>Acote Group</span> <span className='hidden md:inline-flex'>| All Rights Reserved.</span></p>
                    <div className='flex gap-10 items-center'>
                        <span>Privacy policy</span>
                        <span>Terms and conditions</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterInfoBar
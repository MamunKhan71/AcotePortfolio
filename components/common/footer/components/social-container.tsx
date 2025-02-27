import FacebookLogo from '@/components/icons/facebook-logo'
import InstagramLogo from '@/components/icons/insta-logo'
import LinkedinLogo from '@/components/icons/linkedin-logo'
import XLogo from '@/components/icons/x-logo'
import React from 'react'

const SocialContainer = () => {
    return (
        <div className='flex gap-[22px] items-center'>
            <LinkedinLogo />
            <FacebookLogo />
            <InstagramLogo />
            <XLogo />
        </div>
    )
}

export default SocialContainer
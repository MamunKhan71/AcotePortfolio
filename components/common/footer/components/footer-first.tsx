import SocialContainer from './social-container'

const FooterFirst = () => {
    return (
        <div className='space-y-11'>
            <div className='space-y-3'>
                <img className='w-[133.873px]' src="/acote-logo.png" alt="acote-logo" />
                <p className='text-base text-white md:max-w-80'>Welcome to our business powerhouse, where we seamlessly integrate BPO services, innovative Design Solutions, result-driven Digital Marketing strategies, and transformative IT Solutions to fuel your success.</p>
            </div>
            <div>
                <SocialContainer />
            </div>
        </div>
    )
}

export default FooterFirst
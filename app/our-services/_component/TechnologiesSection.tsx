import ComponentTitle from '@/components/common/ComponentTitle'
import HeaderDescription from '@/components/common/HeaderDescription'
import React from 'react'
import TechStack from './TechStack'

const TechnologiesSection = () => {
    return (
        <div className='container mx-auto w-full'>
            <div className='space-y-2'>
                <ComponentTitle title='Technologies' />
                <HeaderDescription title='Advanced technological stacks available to satisfy any development requirements from your business' />
            </div>
            <div className='mt-10'>
                <TechStack />
            </div>
        </div>
    )
}

export default TechnologiesSection
import { teamInfoTypes } from '@/data/our-team'
import React from 'react'
import { TeamCard } from './TeamCard'

interface teamInfoProps {
    teams: teamInfoTypes[]
}
const TeamMembers: React.FC<teamInfoProps> = ({ teams }) => {
    return (
        <div>
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-4 md:gap-9 mb-6 md:mb-12 mt-8 md:mt-16 md:px-20 w-full">
                {teams.map((team, index) => (
                    <TeamCard key={index} {...team} />
                ))}
            </div>
        </div>
    )
}

export default TeamMembers
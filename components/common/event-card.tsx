import { EventDataTypes } from "@/data/our-event-data";

const EventCard = (
    {
        image,
        date,
        title,
    }: EventDataTypes
) => {
    return (
        <div className='space-y-4'>
            <div className="w-full h-[270.98px]">
                <img className="w-full h-full object-cover" src={image} alt="event1.png" />
            </div>
            <div className='flex items-center gap-6 text-base text-secondary'>
                <p>{date}</p>
                <hr className='border h-4 w-0' />
                <p className='font-bold'>{title}</p>
            </div>
        </div>
    )
}

export default EventCard;
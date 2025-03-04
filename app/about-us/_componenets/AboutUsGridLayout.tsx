import Image from 'next/image'

const headerImageStyle = `relative w-full h-full rounded-[10px] overflow-hidden`
const headerImageClass = `object-cover h-full w-full`

const AboutUsGridLayout = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
            <div className={`row-span-2 ${headerImageStyle}`}>
                <Image src={"/about-us/about-header1.webp"} alt="about us header" fill className={headerImageClass} />
            </div>
            <div className={`col-span-2 ${headerImageStyle}`}>
                <Image src={"/about-us/about-header2.webp"} alt="about us header" fill className={headerImageClass} />
            </div>
            <div className={`col-start-2 row-start-2 ${headerImageStyle}`}>
                <Image src={"/about-us/about-header3.webp"} alt="about us header" width={300} height={530} className={headerImageClass} />
            </div>
            <div className={`col-start-3 row-start-2 ${headerImageStyle}`}>
                <Image src={"/about-us/about-header4.webp"} alt="about us header" width={300} height={530} className={headerImageClass} />
            </div>
        </div>
    )
}

export default AboutUsGridLayout
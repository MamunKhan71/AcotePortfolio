import { Marquee } from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";


const reviews = [
    {
        img: "/samsung-logo.png",
    },
    {
        img: "/lg-logo.png",
    },
    {
        img: "/tinto-logo.png",
    },
    {
        img: "/kakao-logo.png",
    },
    {
        img: "/koica-logo.png",
    },
    {
        img: "/talk-logo.png",
    },
    {
        img: "/dgbangla-logo.png",
    },
    {
        img: "/opoch-logo.png",
    },
    {
        img: "/aimmo-logo.png",
    },
    {
        img: "/deepsales-logo.png",
    },
    {
        img: "/korean-logo.png",
    },
    {
        img: "/irtech-logo.png",
    },
    {
        img: "/ifb-logo.png",
    },
    {
        img: "/hunday-logo.png",
    },
    {
        img: "/felix-logo.png",
    },
    {
        img: "/grepp-logo.png",
    },
    {
        img: "/ex-logo.png",
    },
    {
        img: "/kaist-logo.png",
    },
    {
        img: "/danby-logo.png",
    },
    {
        img: "/adb-logo.png",
    },
    {
        img: "/esoft-logo.png",
    },
    {
        img: "/kmac-logo.png",
    },
    {
        img: "/crowd-logo.png",
    },
    {
        img: "/oac-logo.png",
    },
    {
        img: "/test-logo.png",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
    img,
}: {
    img: string;
}) => {
    return (
        <figure
            className={cn(
                "relative h-full w-[190px] cursor-pointer overflow-hidden rounded-xl py-1 px-6 shadow-sm",
                // light styles
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                // dark styles
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex h-16 flex-row items-center justify-center w-full gap-2">
                <img  alt="" src={img} className="h-full object-contain" />
            </div>
        </figure>
    );
};

export function CompanySlider() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-12">
            <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((review, index) => (
                    <ReviewCard key={index} img={review.img} />
                ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((review, index) => (
                    <ReviewCard key={index} img={review.img} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
    );
}

import HeaderSection from "@/components/PortfolioHeaderSection";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalendarScheduler() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "30min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return (
        <div className="relative w-full h-full container mx-auto overflow-hidden">
            <HeaderSection
                breadcrumb="Home / <span class='font-bold text-primary'>Schedule</span>"
                title="Book Schedule"
            />
            <div className="w-full h-full mt-10">
                <Cal namespace="30min"
                    className="w-full h-full"
                    calLink="acote-schedule/30min"
                    style={{ width: "100%", height: "100%" }}
                    config={{ "layout": "month_view" }}
                />
            </div>
            <div className="bg-white absolute bottom-0 z-30 py-8 px-12 left-1/2 -translate-x-1/2">
            </div>
        </div>
    )
};
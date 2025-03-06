export interface webDevStepsTypes {
    step: string;
    title: string;
    description: string;
    align: "left" | "right";
    margin: string;
}
export const webDevSteps: webDevStepsTypes[] = [
    {
        step: "01",
        title: "Roadmap",
        description: "We design the complete project roadmap.",
        align: "left" as const,
        margin: "mb-32",
    },
    {
        step: "02",
        title: "User Experience",
        description: "Experienced UX team to work on your project.",
        align: "right" as const,
        margin: "mb-32",
    },
    {
        step: "03",
        title: "Development",
        description: "Flexible development with minimal coding.",
        align: "left" as const,
        margin: "mb-32",
    },
    {
        step: "04",
        title: "Testing",
        description: "Intensive testing to review your app from every angle.",
        align: "right" as const,
        margin: "mb-32",
    },
    {
        step: "05",
        title: "Iteration",
        description: "Optimizes your app's performance further.",
        align: "left" as const,
        margin: "mb-16",
    },
];
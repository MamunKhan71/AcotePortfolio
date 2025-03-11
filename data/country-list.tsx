export interface countryListTypes {
    id: number;
    countryTitle: string,
    country: string;
    year: number;
    name: string;
    role: string;
    type: string;
    operation_status: boolean;
    image: string;
    flag: string;
}

export const countryList: countryListTypes[] = [
    {
        id: 0,
        countryTitle: "USA (2025)",
        country: "USA",
        type: "2025",
        year: 2025,
        name: "Hasan Mahmudul",
        role: "Vice President",
        operation_status: false,
        image: "/usa-profile.png",
        flag: '/usa-flag.png'
    },
    {
        id: 1,
        countryTitle: "Bangladesh - Head Office",
        country: "Bangladesh",
        type: "HQ",
        year: 2025,
        name: "Hasan Mahmudul",
        role: "Vice President",
        operation_status: true,
        image: "/hasan-profile.png",
        flag: '/bd-flag.png'
    },
    {
        id: 2,
        countryTitle: "South Korea",
        country: "South Korea",
        type: "",
        year: 2025,
        name: "Kim Kwang Sik (Kevin)",
        role: "IT Project evelopment and Advisor, Chief of Acote Korea",
        operation_status: true,
        image: "/kim-profile.png",
        flag: '/korea-flag.png'
    },
    {
        id: 3,
        countryTitle: "Singapore (2024)",
        country: "Singapore",
        type: "",
        year: 2024,
        name: "Jordan Ng",
        role: "Country Head (Singapore)",
        operation_status: true,
        image: "/nig-profile.png",
        flag: '/sg-flag.png'
    },
    {
        id: 4,
        countryTitle: "Japan (2025)",
        country: "Japan",
        type: "(2025)",
        year: 2025,
        name: "Hasan Mahmudul",
        role: "Vice President",
        operation_status: false,
        image: "/japan-profile.png",
        flag: '/usa-flag.png'
    }
];

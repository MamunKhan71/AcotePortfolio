export interface countryListTypes {
    id: number;
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
        country: "USA",
        type: "(2025)",
        year: 2025,
        name: "Hasan Mahmudul",
        role: "Vice President",
        operation_status: false,
        image: "Operational",
        flag: '/usa-flag.png'
    },
    {
        id: 1,
        country: "Bangladesh",
        type: "HQ",
        year: 2025,
        name: "Hasan Mahmudul",
        role: "Vice President",
        operation_status: true,
        image: "Operational",
        flag: '/bd-flag.png'
    },
    {
        id: 2,
        country: "South Korea",
        type: "",
        year: 2025,
        name: "Hasan Mahmudul",
        role: "Vice President",
        operation_status: true,
        image: "In Development",
        flag: '/korea-flag.png'
    },
    {
        id: 3,
        country: "Singapore",
        type: "",
        year: 2024,
        name: "Hasan Mahmudul",
        role: "Vice President",
        operation_status: true,
        image: "In Development",
        flag: '/sg-flag.png'
    },
    {
        id: 4,
        country: "Japan",
        type: "(2025)",
        year: 2025,
        name: "Hasan Mahmudul",
        role: "Vice President",
        operation_status: false,
        image: "In Development",
        flag: '/usa-flag.png'
    }
];

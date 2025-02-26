export interface countryListTypes {
    id: number;
    country: string;
    year: number;
    name: string;
    role: string;
    type: string;
    operation_status: boolean;
    image: string;
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
        image: "Operational"
    },
    {
        id: 1,
        country: "Bangladesh",
        type: "Head Office",
        year: 2025,  
        name: "Hasan Mahmudul",
        role: "Vice President",
        operation_status: true,
        image: "Operational"
    },
    {
        id: 2,
        country: "South Korea",
        type: "",
        year: 2025,  
        name: "Hasan Mahmudul",
        role: "Vice President",
        operation_status: true,
        image: "In Development"
    },
    {
        id: 3,
        country: "Singapore",
        type: "(2024) ",
        year: 2024,
        name: "Hasan Mahmudul",
        role: "Vice President",
        operation_status: true,
        image: "In Development"
    },
    {
        id: 4,
        country: "Japan",
        type: "(2025)",
        year: 2025,
        name: "Hasan Mahmudul",
        role: "Vice President",
        operation_status: false,
        image: "In Development"
    }
];

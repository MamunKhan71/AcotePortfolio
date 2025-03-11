import AiIcon from "@/components/icons/ai-icon";
import AutoMotive from "@/components/icons/automotive-icon";
import ConstructionIcon from "@/components/icons/construction-icon";
import EcommerceIcon from "@/components/icons/ecommrece-icon";
import EducationIcon from "@/components/icons/education-icon";
import FinanceIcon from "@/components/icons/finance-icon";
import HealthcareIcon from "@/components/icons/healthcare-icon";
import TravelIcon from "@/components/icons/travel-icon";

export interface CategoryDataTypes {
    id?: number;
    name: string;
    icon: React.ComponentType<{ isHovered: boolean }>;
};

const categoriesData: CategoryDataTypes[] = [
    { id: 1, name: "Finance", icon: FinanceIcon },
    { id: 4, name: "Healthcare", icon: HealthcareIcon },
    { id: 7, name: "Education", icon: EducationIcon },
    { id: 2, name: "Artificial Intelligence", icon: AiIcon },
    { id: 5, name: "Construction", icon: ConstructionIcon },
    { id: 8, name: "Ecommerce", icon: EcommerceIcon },
    { id: 3, name: "Automotive", icon: AutoMotive },
    { id: 6, name: "Travel", icon: TravelIcon },
    { id: 9, name: "Others", icon: EcommerceIcon },
];

export default categoriesData;
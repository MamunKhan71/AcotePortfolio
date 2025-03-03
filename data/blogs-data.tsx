export interface blogsDataTypes {
    id: string,
    imageUrl: string,
    category: string,
    title: string,
    isVisible?: boolean,
}
export const blogsData: blogsDataTypes[] = [
    {
        id: '1',
        imageUrl: "/blog1.png",
        category: "Web Design",
        title: "DG-Bangla Construction Website Case Study"
    },
    {
        id: '2',
        imageUrl: "/blog2.png",
        category: "UI/UX Design",
        title: "Acote AI Innovation Hub Website"
    },
    {
        id: '3',
        imageUrl: "/blog3.png",
        category: "UI/UX Design",
        title: "AOP Development"
    },
]
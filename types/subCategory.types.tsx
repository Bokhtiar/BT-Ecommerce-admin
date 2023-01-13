type ICategory = {
    _id:string;
    name:string;
}
export interface ISubCategory {
    _id: string;
    category: ICategory | null;
    name: string;
    icon: string;
    banner_image: string;
}

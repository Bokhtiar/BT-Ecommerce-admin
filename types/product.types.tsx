type ICategory = {
  _id: string;
  name: string;
};

type ISubCategory = {
  _id: string;
  name: string;
};

/* resouce list */
export interface IProduct {
  _id: string;
  category: ICategory | null;
  subCategory: ISubCategory | null;
  name: string;
  sale_price: number;
  regular_price: number;
  is_product: string;
  image: string;
  description: string;
  quantity: string;
}

/* resource createUpdate */
export interface IProductCreateUpdate {
  category: ICategory | null;
  subCategory: ISubCategory | null;
  name: string;
  sale_price: number;
  regular_price: number;
  image: string;
  is_product: string;
  description: string;
  quantity: string;
}

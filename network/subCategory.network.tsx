import { privateRequest } from "../config/axios.config";


/* Show list of resources */
export type IndexParamsTypes = {
  page: number;
  limit: number;
  query?: string;
};
export const SubCategoryIndexNetwork = async (reqParams: IndexParamsTypes) => {
  return await privateRequest.get(`api/v1/admin/sub-category`, {
    params: { ...reqParams },
  });
};


/* store request */
type SubCategoryDataType = {
  name: string;
  icon: string;
  banner_image: string;
  category: string
};

export const SubCategoryCreateNetwork = async (data: SubCategoryDataType) => {
  return await privateRequest.post(`/api/v1/admin/sub-category`, data);
};

/* subcategory show */
export const SubCategoryShowNetwork = async ({ _id }: { _id: string }) => {
  return await privateRequest.get(`/api/v1/admin/sub-category/${_id}`)
}

/* subCategory destroy */
export const SubCategoryDestroyNetwork = async({_id}: {_id: string}) => {
  return await privateRequest.delete(`/api/v1/admin/sub-category/${_id}`)
}

/* Search from resources */
export const SubCategorySearch = async (query: string) => {
  return await privateRequest.get(
    `/api/v1/admin/sub-category/?query=${query}`
  );
};

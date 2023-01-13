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
  image: string;
};

export const SubCategoryCreateNetwork = async (data: SubCategoryDataType) => {
  return await privateRequest.post(`/api/v1/admin/sub-category`, data);
};
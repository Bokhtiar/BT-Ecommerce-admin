import { privateRequest } from "../config/axios.config";


/* Show list of resources */
export type IndexParamsTypes = {
  page: number;
  limit: number;
  query?: string;
};
export const CategoryIndexNetwork = async (reqParams: IndexParamsTypes) => {
  return await privateRequest.get(`api/v1/admin/category`, {
    params: { ...reqParams },
  });
}; 



/* store request */
type LoginDataType = {
  name: string;
  icon: string;
  image: string;
};

export const CategoryCreateNetwork = async (data: LoginDataType) => {
  return await privateRequest.post(`/api/v1/admin/category`, data);
};

/* show category */
export const CategoryShowNetwork = async ({ _id }: { _id: string }) => {
  return await privateRequest.get(`/api/v1/admin/category/${_id}`);
};


/* category destroy network */
export const CategoryDestroyNetwork = async ({ _id }: { _id: string }) => {
  return await privateRequest.delete(`/api/v1/admin/category/${_id}`);
};
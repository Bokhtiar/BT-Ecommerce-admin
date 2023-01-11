import { privateRequest } from "../config/axios.config";

/* Login request */
type LoginDataType = {
  name: string;
  icon: string;
  image: string;
};

export const CategoryCreateNetwork = async (data: LoginDataType) => {
  return await privateRequest.post(`/api/v1/admin/category`, data);
};
 
import { privateRequest } from "../config/axios.config";

/* store request */
type LoginDataType = {
    name: string;
    icon: string;
    image: string;
  };
  
  export const SubCategoryCreateNetwork = async (data: LoginDataType) => {
    return await privateRequest.post(`/api/v1/admin/sub-category`, data);
  };
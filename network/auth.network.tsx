import { publicRequest } from "../config/axios.config";

/* Login request */
type LoginDataType = {
  email: string;
  password: string;
};

export const login = async (data: LoginDataType) => {
  return await publicRequest.post(`/api/v1/admin/auth/login`, data);
};

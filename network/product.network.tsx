import { privateRequest } from '../config/axios.config';
import { IProduct, IProductCreateUpdate } from '../types/product.types'

/* resource list */
export type IndexParamsTypes = {
    page: number;
    limit: number;
    query?: string;
};

export const Index = async (reqParams: IndexParamsTypes) => {
    return await privateRequest.get(`api/v1/admin/sub-category`, {
        params: { ...reqParams },
    });
};

/* resource store */
export const Store = async (data: IProductCreateUpdate) => {
    return await privateRequest.post(`/api/v1/admin/product`, data)
}

/* resource show */
export const Show = async ({ _id }: { _id: string }) => {
    return await privateRequest.get(`/api/v1/admin/product/${_id}`)
}

/* resource destory */
export const destory = async ({ _id }: { _id: string }) => {
    return await privateRequest.delete(`/api/v1/admin/product/${_id}`)
}
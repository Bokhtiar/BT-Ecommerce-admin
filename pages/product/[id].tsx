import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState } from 'react'
import { Bradcrumbs } from '../../components/bradcrumbs'
import { Show } from '../../network/product.network'
import { IProduct } from '../../types/product.types'
import { networkErrorHandeller } from '../../utils/helpers'

const ProductShow: React.FC = (): JSX.Element => {
    const [product, setProduct] = useState<IProduct | null>(null)

    const router = useRouter();
    const { id } = router.query
    const _id = id

    /* useCallback */
    const fetchData = useCallback(async () => {
        try {
            const response = await Show({ _id })
            console.log("res", response);
            
            if (response && response.status === 200) {
                setProduct(response.data.data)
            }
        } catch (error: any) {
            if (error) {
                networkErrorHandeller(error)
            }
        }
    }, [product])

    /* useEffect */
    useEffect(()=> {
        fetchData()
    },[])

    return (
        <>
            <Bradcrumbs
                page_title='Single product show'
                another_page_title='Product List'
                another_page_link='/product'
            ></Bradcrumbs>

            <div className='grid grid-cols-1 md:grid-cols-2 '>
                <div className='col-span-1'>
                    <img src={product?.image} alt="" />
                </div>
                <div className='col-span-1'>
                    <span>{product?.name}</span> <br />
                    <span>Category: {product?.category?.name}</span> <br />
                    <span>SubCategory: {product?.subCategory?.name}</span> <br />
                    <span>Sale price : {product?.sale_price}</span> <br />
                </div>
            </div>

        </>
    )
}
export default ProductShow
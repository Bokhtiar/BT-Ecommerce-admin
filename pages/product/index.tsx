import Link from "next/link"
import { useCallback, useEffect, useState } from "react"
import { Bradcrumbs } from "../../components/bradcrumbs"
import { PrimaryButton } from "../../components/button"
import { DataTable } from "../../components/table"
import { Index } from "../../network/product.network"
import { IRDataColumns } from "../../types/datatable.types"
import { IProduct } from '../../types/product.types'
import { networkErrorHandeller } from "../../utils/helpers"


const ProductIndex: React.FC = (): JSX.Element => {
    const [products, setProduct] = useState<IProduct[] | []>([])
    const [isLoading, setLoading] = useState<boolean>(true);
    const [perPage, setPerPage] = useState<number>(10);
    const [totalRows, setTotalRows] = useState<number>(0);

    /* fetch product data */
    const fetchData = useCallback(async (page: number) => {
        setLoading(true);
        try {
            const response = await Index({
                page,
                limit: perPage,
            })
            console.log("p",response);
            
            if (response && response.status === 200) {
                setProduct(response?.data?.data);
                setTotalRows(response?.data?.paginate?.total_items);
            }
            setLoading(false);
        } catch (error: any) {
            if (error) {
                setLoading(false);
                networkErrorHandeller(error)
            }
        }
    }, [products])


    /* handle paginate page change */
    const handlePageChange = (page: number) => fetchData(page);

    /* handle paginate row change */
    const handlePerRowsChange = async (newPerPage: number, page: number) => {
        const response = await Index({
            page,
            limit: newPerPage,
        });
        setProduct(response.data.data);
        setPerPage(newPerPage);
        setLoading(false);
    };

    /* data columns */
    const columns: IRDataColumns[] = [
        {
            name: "Image",
            cell: (row) => (
                <img
                    src={row.image}
                    alt="Product avatar"
                    className="w-[50px] h-[50px] rounded-full"
                />
            ),
        },

        {
            name: "Name",
            selector: (row) => row.name,
        },

        {
            name: "Sale Price",
            selector: (row) => row.sale_price,
        },

        {
            name: "Regular Price",
            selector: (row) => row.regular_price,
        },

        {
            name: "Action",
            cell: (row) => (
                <div className="flex gap-1">
                    <Link href={`/product/${row._id}`}>
                        <PrimaryButton name="show"></PrimaryButton>
                    </Link>

                    {/* <button onClick={() => destroy(row._id)}>
                        <PrimaryButton name="delete"></PrimaryButton>
                    </button> */}
                </div>
            ),
        },
    ];



    return (
        <>
            <Bradcrumbs page_title="Product List" another_page_title="Product Create" another_page_link="/product/form" ></Bradcrumbs>
            <DataTable
                data={products}
                columns={columns}
                loading={isLoading}
                pagination={true}
                paginationServer={true}
                totalRows={totalRows}
                handlePerRowsChange={handlePerRowsChange}
                handlePageChange={handlePageChange}
                noDataMessage="No category available."
            />
        </>
    )
}
export default ProductIndex
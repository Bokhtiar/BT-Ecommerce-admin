import Link from "next/link";
import { useCallback, useState } from "react";
import { Bradcrumbs } from "../../components/bradcrumbs";
import { PrimaryButton } from "../../components/button";
import { DataTable } from "../../components/table";
import { Toastify } from "../../components/toastify";
import authRoute from "../../hook/authRouter";
import { SubCategoryDestroyNetwork, SubCategoryIndexNetwork } from "../../network/subCategory.network";
import { IRDataColumns } from "../../types/datatable.types";
import { ISubCategory } from "../../types/subCategory.types";
import { networkErrorHandeller } from "../../utils/helpers";

const Index: React.FC = (): JSX.Element => {
  const [data, setData] = useState<ISubCategory[] | []>([])
  const [isLoading, setLoading] = useState<boolean>(true);
  const [perPage, setPerPage] = useState<number>(5);
  const [totalRows, setTotalRows] = useState<number>(0);

  const fetchData = useCallback(async (page: number) => {
    try {
      const response = await SubCategoryIndexNetwork({
        page,
        limit: perPage
      });
      if (response && response.status === 200) {
        console.log("subcategory", response);
        setData(response?.data?.data)
        setTotalRows(response?.data?.paginate?.total_items);
      }
    } catch (error: any) {
      if (error) {
        networkErrorHandeller(error)
      }
    }
  }, [data])



  /* handle paginate page change */
  const handlePageChange = (page: number) => fetchData(page);

  /* handle paginate row change */
  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setLoading(true);
    const response = await SubCategoryIndexNetwork({
      page,
      limit: newPerPage,
    });
    setData(response.data.data);
    setPerPage(newPerPage);
    setLoading(false);
  };


  /* destory subCategory */
  const destroy = async(_id:string) => {
   const response =  await SubCategoryDestroyNetwork({_id})
    Toastify.Success(response.data.message);
    return fetchData()
  }

  /* data columns */
  const columns: IRDataColumns[] = [
    {
      name: "Icon",
      cell: (row) => (
        <img
          src={row.icon}
          alt="SubCategory image"
          className="w-[50px] h-[50px] rounded-full mx-auto"
        />
      ),
    },

    {
      name: "Name",
      selector: (row) => row.name,
    },

    {
      name: "Action",
      minWidth: "130px",
      cell: (row) => (
        <div className="flex gap-1">
          <Link href={`/subCategory/${row._id}`}>
            <PrimaryButton name="show"></PrimaryButton>
          </Link>
          
          <button onClick={() => destroy(row._id)}>
            <PrimaryButton name="delete"></PrimaryButton>
          </button>
        </div>
      ),
    },
  ];



  return (
    <div>
      <Bradcrumbs page_title="SubCategory List" another_page_title="subCategory create" another_page_link="/subCategory/form"></Bradcrumbs>
      <DataTable
        data={data}
        columns={columns}
        loading={isLoading}
        pagination={true}
        paginationServer={true}
        totalRows={totalRows}
        handlePerRowsChange={handlePerRowsChange}
        handlePageChange={handlePageChange}
        noDataMessage="No subCategory available."
      />

    </div>
  )
}
export default authRoute(Index) 
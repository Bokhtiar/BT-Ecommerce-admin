import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { PrimaryButton } from "../../components/button";
import { DataTable } from "../../components/table";
import { CategoryDestroyNetwork, CategoryIndexNetwork } from "../../network/category.network";
import { ICategory } from "../../types/category.types";
import { IRDataColumns } from "../../types/datatable.types";
import { networkErrorHandeller } from "../../utils/helpers";

const Index: React.FC = (): JSX.Element => {
  const [data, setData] = useState<ICategory[] | []>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [perPage, setPerPage] = useState<number>(10);
  const [totalRows, setTotalRows] = useState<number>(0);

  /* Fetch data */ 
  const fetchData = useCallback(
    async (page: number) => {
      try {
        setLoading(true);
        const response = await CategoryIndexNetwork({
          page,
          limit: perPage,
        });
        if (response && response.status === 200) {
          setData(response?.data?.data);
          setTotalRows(response?.data?.paginate?.total_items);
        }
        setLoading(false);
      } catch (error: any) {
        if (error) {
          setLoading(false);
          networkErrorHandeller(error);
        }
      }
    },
    [perPage]
  );

  /* handle paginate page change */
  const handlePageChange = (page: number) => fetchData(page);

  /* handle paginate row change */
  const handlePerRowsChange = async (newPerPage: number, page: number) => {
    setLoading(true);
    const response = await CategoryIndexNetwork({
      page,
      limit: newPerPage,
    });
    setData(response.data.data);
    setPerPage(newPerPage);
    setLoading(false);
  };

  /* data columns */
  const columns: IRDataColumns[] = [
    {
      name: "Icon",
      maxWidth: "60px",
      cell: (row) => (
        <img
          src={row.icon}
          alt="Company avatar"
          className="w-[50px] h-[50px] rounded-full mx-auto"
        />
      ),
    },
    {
      name: "image",
      maxWidth: "60px",
      cell: (row) => (
        <img
          src={row.banner_image}
          alt="Company avatar"
          className="w-[50px] h-[50px] rounded-full mx-auto"
        />
      ),
    },
    {
      name: "Company",
      maxWidth: "150px",
      selector: (row) => row.name,
    },

    {
      name: "Action",
      minWidth: "130px",
      cell: (row) => (
        <div className="flex gap-1">
          <Link href={`/category/${row._id}`}>
            <PrimaryButton name="show"></PrimaryButton>
          </Link>

          <button onClick={() => destroy(row._id)}>
            <PrimaryButton name="delete"></PrimaryButton>
          </button>
        </div>
      ),
    },
  ];


  /* destory */
  const destroy = async(_id:string) => {
    await CategoryDestroyNetwork({_id});
    return fetchData();
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <p className="text-gray-700 text-2xl lg:text-3xl mb-1">All Category</p>
      <p className="text-gray-400 text-sm mb-8 xl:mb-10"></p>

      <DataTable
        data={data}
        columns={columns}
        loading={isLoading}
        pagination={true}
        paginationServer={true}
        totalRows={totalRows}
        handlePerRowsChange={handlePerRowsChange}
        handlePageChange={handlePageChange}
        noDataMessage="No jobs available."
      />
    </div>
  );
};

export default Index;

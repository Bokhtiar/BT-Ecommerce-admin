import ReactDataTable from "react-data-table-component";
import { IRDataTable } from "../../types/datatable.types";
import { NoContent } from "../204";
import { TablePreloader } from "../preloader/table.preloader";


export const DataTable: React.FC<IRDataTable> = (
  props: IRDataTable
): JSX.Element => {
  const customStyles = {
    cells: { 
      style: {
        paddingTop: "10px",
        paddingBottom: "10px",
      },
    }, 
  };

  return (
    <ReactDataTable
      columns={props.columns}
      data={props.data}
      progressPending={props.loading}
      progressComponent={<TablePreloader />}
      customStyles={customStyles}
      noDataComponent={
        <NoContent message={props.noDataMessage || "No content available."} />
      }
      pagination={props.pagination}
      paginationServer={props.paginationServer}
      paginationTotalRows={props.totalRows}
      onChangeRowsPerPage={props.handlePerRowsChange}
      onChangePage={props.handlePageChange}
    />
  );
};

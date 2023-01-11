export interface IRDataTable {
  columns: any[];
  data: any[];
  loading: boolean;
  noDataMessage?: string;
  pagination: boolean;
  paginationServer: boolean;
  totalRows?: number;
  handlePerRowsChange?: (newPerPage: number, page: number) => Promise<void>;
  handlePageChange?: (data: any) => void;
}

export interface IRDataColumns {
  name: string;
  sortable?: boolean;
  minWidth?: string;
  maxWidth?: string;
  grow?: number;
  selector?: (data: any) => void;
  cell?: (data: any) => any;
}

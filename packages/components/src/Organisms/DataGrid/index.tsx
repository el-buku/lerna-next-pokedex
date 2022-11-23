import {
  DataGrid,
  GridCallbackDetails,
  GridColumns,
  DataGridProps as MuiGridProps,
} from "@mui/x-data-grid";

export type DataGridControlProps = {
  isLoading: boolean;
  totalRows: number;
  page: number;
  pageSize: number;
  rows: any[];
  onPageChange: (page: number, details: GridCallbackDetails<any>) => void;
};

export type DataGridProps = DataGridControlProps & {
  rowsPerPageOptions: number[];
  onPageChange: (page: number, details: GridCallbackDetails<any>) => void;
  onPageSizeChange?: (
    pageSize: number,
    details: GridCallbackDetails<any>
  ) => void;
  columns: GridColumns;
  remainingProps: Partial<MuiGridProps>;
};

export const InnerGridStyles = {
  "& .MuiDataGrid-columnHeaders": { display: "none" },
  "& .MuiDataGrid-virtualScrollerContent": { height: "auto!important" },
  "& .MuiDataGrid-virtualScroller": { margin: "0px!important" },
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100vw",
    position: "relative",
    marginTop: 0,
    margin: "auto",
    "& div": { flex: "1 0 175px" },
  },
};

const CustomDataGrid = ({
  isLoading,
  totalRows,
  page,
  pageSize,
  rows,
  columns,
  rowsPerPageOptions,
  onPageChange,
  onPageSizeChange,
  remainingProps,
}: DataGridProps) => {
  return (
    <DataGrid
      density="compact"
      pagination
      paginationMode="server"
      loading={isLoading}
      rowCount={totalRows}
      page={page}
      pageSize={pageSize}
      rows={rows}
      columns={columns}
      rowsPerPageOptions={rowsPerPageOptions}
      onPageChange={onPageChange}
      onPageSizeChange={onPageSizeChange}
      {...remainingProps}
    />
  );
};

export default CustomDataGrid;

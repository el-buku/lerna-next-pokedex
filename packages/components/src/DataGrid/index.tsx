import {
  DataGrid,
  GridCallbackDetails,
  GridColumns,
  DataGridProps as MuiGridProps,
} from "@mui/x-data-grid";

export type DataGridProps = {
  isLoading: boolean;
  totalRows: number;
  page: number;
  pageSize: number;
  rows: any[];
  columns: GridColumns;
  rowsPerPageOptions: number[];
  onPageChange: (page: number, details: GridCallbackDetails<any>) => void;
  onPageSizeChange: (pageSize: number) => void;
  remainingProps: Partial<MuiGridProps>;
};

export const InnerGridStyles = {
  "& .MuiDataGrid-columnHeaders": { display: "none" },
  "& .MuiDataGrid-virtualScrollerContent": { height: "auto!important" },
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
      onRowClick={() => console.log("pula")}
      {...remainingProps}
    />
  );
};

export default CustomDataGrid;

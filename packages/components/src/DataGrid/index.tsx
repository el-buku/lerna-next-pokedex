import { DataGrid, GridCallbackDetails, GridColumns } from "@mui/x-data-grid";
import React from "react";

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
  rest: any;
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
  rest,
}: DataGridProps) => {
  return (
    <DataGrid
      density="compact"
      autoHeight
      rowHeight={50}
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
      {...rest}
    />
  );
};

export default CustomDataGrid;

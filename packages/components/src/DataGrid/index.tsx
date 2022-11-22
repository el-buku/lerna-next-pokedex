import {
  DataGrid,
  GridCallbackDetails,
  GridColumns,
  DataGridProps as MuiGridProps,
} from "@mui/x-data-grid";
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
  remainingProps: Partial<MuiGridProps>;
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
      {...remainingProps}
    />
  );
};

export default CustomDataGrid;

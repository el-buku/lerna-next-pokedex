import React from "react";
import { storiesOf } from "@storybook/react";
import { createFakeServer } from "@mui/x-data-grid-generator";

import DataGrid from "./index";

function DataGridStory() {
  const SERVER_OPTIONS = {
    useCursorPagination: false,
  };

  const { columns, initialState, useQuery } = createFakeServer(
    {},
    SERVER_OPTIONS
  );
  const rowsPerPageOptions = [5, 25, 50];
  const [page, setPage] = React.useState(0);
  const [pageSize, _setPageSize] = React.useState(rowsPerPageOptions[0]);

  const queryOptions = React.useMemo(
    () => ({
      page,
      pageSize,
    }),
    [page, pageSize]
  );
  console.log(page, pageSize);
  const { isLoading, data, pageInfo } = useQuery(queryOptions);

  // Some API clients return undefined while loading
  // Following lines are here to prevent `rowCountState` from being undefined during the loading
  const [rowCountState, setRowCountState] = React.useState(
    pageInfo?.totalRowCount || 0
  );
  React.useEffect(() => {
    setRowCountState((prevRowCountState) =>
      pageInfo?.totalRowCount !== undefined
        ? pageInfo?.totalRowCount
        : prevRowCountState
    );
  }, [pageInfo?.totalRowCount, setRowCountState]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        totalRows={rowCountState}
        isLoading={isLoading}
        rowsPerPageOptions={rowsPerPageOptions}
        page={page}
        pageSize={pageSize}
        onPageChange={(newPage) => setPage(newPage)}
        columns={columns}
        remainingProps={{ initialState }}
      />
    </div>
  );
}

storiesOf("DataGrid", module).add("default", () => <DataGridStory />);

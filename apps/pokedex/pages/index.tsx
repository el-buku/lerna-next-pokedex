/** @jsxImportSource @emotion/react */

import { css, jsx } from "@emotion/react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Header,
  DataGrid,
  Styles,
  InnerGridStyles,
  PokemonCard,
} from "pokedex-components";
import {
  wrapper,
  getPaginatedPokemonsList,
  pokemonApiUtil,
  useGetPaginatedPokemonsListQuery,
} from "pokedex-utils";
import { useState } from "react";

const getOffsetParams = (page: any, perPage: any) => ({
  page: (typeof parseInt(page) === "number" && parseInt(page)) || 0,
  perPage:
    (typeof parseInt(perPage) == "number" &&
      ((parseInt(perPage) < 100 && parseInt(perPage)) || 100)) ||
    25,
});

const GridContainer = css`
  ${Styles.FullHeight}
  ${Styles.MarginAuto}
`;

const PokemonCardRow = (rowData: any) => {
  const {
    row: { name },
  } = rowData;
  return <PokemonCard name={name}></PokemonCard>;
};

export default function Home() {
  const { query } = useRouter();
  const initialOffsetParams = getOffsetParams(query.page, query.perPage);
  const [page, setPage] = useState(initialOffsetParams.page);
  const [perPage, setPerPage] = useState(initialOffsetParams.perPage);
  const { isLoading, error, data } = useGetPaginatedPokemonsListQuery({
    page,
    perPage,
  }) as {
    data?: {
      results: Array<{ name: string }>;
      count: number;
    };
    isLoading: boolean;
    error?: any;
  };
  console.log(data);
  const perPageOptions = Array.from(
    new Set([25, 50, 100, initialOffsetParams.perPage].sort((x, y) => x - y))
  );
  return (
    <>
      <Head>
        <title>Next Pokedex</title>
      </Head>
      <Header />
      <div css={GridContainer}>
        <DataGrid
          {...{
            isLoading,
            page,
            pageSize: perPage,
            totalRows: data?.count || 0,
            rows: data?.results || [],
            columns: [
              { field: "name", headerName: "Pokemon Name", width: 300 },
            ],
            rowsPerPageOptions: perPageOptions,
            onPageChange: (page) => {},
            onPageSizeChange: (pageSize) => {},
            remainingProps: {
              getRowId: (row: any) => row.name,
              sx: InnerGridStyles,
              disableVirtualization: true,
              components: { Row: PokemonCardRow },
            },
          }}
        />
      </div>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { page, perPage } = context.query;
    const offsetParams = getOffsetParams(page, perPage);
    store.dispatch(getPaginatedPokemonsList.initiate(offsetParams));
    await pokemonApiUtil.getRunningQueriesThunk();
    return {
      props: {},
    };
  }
);

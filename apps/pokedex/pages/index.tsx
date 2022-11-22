/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  Header,
  DataGrid,
  Styles,
  InnerGridStyles,
  PokemonCard,
  Spinner,
  GridPagination,
} from "pokedex-components";
import { FullWidth, PaddingTop } from "pokedex-components/lib/styles/base";
import {
  wrapper,
  getPaginatedPokemonsList,
  pokemonApiUtil,
  useGetPaginatedPokemonsListQuery,
} from "pokedex-utils";
import { useEffect, useState } from "react";

const GridContainer = css`
  height: 66vh;
  ${Styles.MarginAuto}
`;

const PokemonCardRow = (rowData: any) => {
  const {
    row: { name },
  } = rowData;
  return <PokemonCard name={name}></PokemonCard>;
};

const LoadingOverlay = () => {
  return (
    <div
      css={css`
        ${FullWidth}
        position:fixed;
        height: 100vh;
        background: #ffffffbf;
        z-index: 1000;
        top: 0;
        padding-top: 45vh;
      `}
    >
      <Spinner />
    </div>
  );
};

const PER_PAGE = 35;

export default function Home() {
  const router = useRouter();
  const { query } = router;
  const parsedPageIndex = parseInt((query.page as any) || 0);

  const [page, setPage] = useState(
    (parsedPageIndex !== NaN && parsedPageIndex >= 0 && parsedPageIndex) || 0
  );
  const perPage = PER_PAGE;

  const [isLoadingThunks, setIsLoadingThunks] = useState(false);
  const queryResult = useGetPaginatedPokemonsListQuery({
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
  const { isLoading, error } = queryResult;
  console.log("slb", queryResult);
  //@ts-ignore
  const data = queryResult?.currentData || queryResult.data;
  useEffect(() => {
    const awaitQueries = async () => {
      setIsLoadingThunks(true);
      await pokemonApiUtil.getRunningQueriesThunk();
      // timeout for a nicer UX
      await new Promise<void>((resolve) =>
        setTimeout(() => {
          setIsLoadingThunks(false);
          resolve();
        }, (Math.random() * (8 - 3) + 3) * 100)
      );

      window.history.pushState("", "", `?page=${page}`);
    };
    awaitQueries();
  }, [page, router]);
  const perPageOptions = [perPage];
  return (
    <>
      <Head>
        <title>Next Pokedex</title>
      </Head>
      <Header />
      <div css={GridContainer}>
        <DataGrid
          {...{
            isLoading: isLoading || isLoadingThunks,
            page,
            pageSize: perPage,
            totalRows: data?.count || 0,
            rows: data?.results || [],
            columns: [
              { field: "name", headerName: "Pokemon Name", width: 300 },
            ],
            rowsPerPageOptions: perPageOptions,
            onPageChange: setPage,
            onPageSizeChange: (pageSize) => {},
            remainingProps: {
              getRowId: (row: any) => row.name,
              sx: InnerGridStyles,
              disableVirtualization: true,
              components: {
                Row: PokemonCardRow,
                LoadingOverlay: LoadingOverlay,
                Pagination: GridPagination,
              },
            },
          }}
        />
      </div>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const { query } = context;
    const parsedPageIndex = parseInt((query.page as any) || 0);

    const offsetParams = {
      page:
        (parsedPageIndex !== NaN && parsedPageIndex >= 0 && parsedPageIndex) ||
        0,
      perPage: PER_PAGE,
    };
    store.dispatch(getPaginatedPokemonsList.initiate(offsetParams));
    await pokemonApiUtil.getRunningQueriesThunk();
    return {
      props: {},
    };
  }
);

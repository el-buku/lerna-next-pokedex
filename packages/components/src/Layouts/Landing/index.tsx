import { FC, useEffect } from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { capitalize } from "pokedex-utils";
import { PokemonCard } from "../../Atoms";
import {
  DataGrid,
  DataGridControlProps,
  GridPagination,
  Header,
  InnerGridStyles,
} from "../../Organisms";
import { AbsoluteCenter, MarginAuto } from "../../styles/base";
import { LoadingLayout } from "..";

const GridContainer = css`
  height: 66vh;
  ${MarginAuto}
`;

const ControlledPokemonRow = (rowData: any) => {
  const {
    row: { name },
  } = rowData;
  const router = useRouter();
  const pokemonPath = `/${name}`;
  useEffect(() => {
    router.prefetch(pokemonPath);
    //eslint-disable-next-line
  }, []);

  return (
    <PokemonCard
      Component={() => <h3 css={AbsoluteCenter}>{capitalize(name)}</h3>}
      onClick={() => router.push(pokemonPath)}
    ></PokemonCard>
  );
};

const Landing: FC<{ dataGridControlProps: DataGridControlProps }> = ({
  dataGridControlProps,
}) => {
  return (
    <>
      <Header />
      <div css={GridContainer}>
        <DataGrid
          {...{
            ...dataGridControlProps,
            rowsPerPageOptions: [dataGridControlProps.pageSize],
            columns: [
              { field: "name", headerName: "Pokemon Name", width: 300 },
            ],
            remainingProps: {
              getRowId: (row: any) => row.name,
              sx: InnerGridStyles,
              disableVirtualization: true,
              components: {
                Row: ControlledPokemonRow,
                LoadingOverlay: LoadingLayout,
                Pagination: GridPagination,
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default Landing;

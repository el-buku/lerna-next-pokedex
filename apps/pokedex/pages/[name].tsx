import { useRouter } from "next/router";
import {
  getPokemonByName,
  pokemonApiUtil,
  useGetPokemonByNameQuery,
  wrapper,
  querySkipToken,
  Pokemon,
} from "pokedex-utils";
import { PokemonDetailsLayout, LoadingLayout } from "pokedex-components";

export default function PokemonDetailsPage() {
  const {
    query: { name },
    isFallback,
  } = useRouter();

  const { data, error, isLoading } = useGetPokemonByNameQuery(
    typeof name === "string" ? name : querySkipToken,
    {
      skip: isFallback,
    }
  ) as {
    data?: Pokemon;
    error?: any;
    isLoading: boolean;
  };
  console.log("err", error);
  return (
    <PokemonDetailsLayout
      isLoading={isFallback || isLoading}
      error={!!error}
      data={data}
    />
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const name = context.params?.name;
    if (typeof name === "string") {
      const result = await store.dispatch(getPokemonByName.initiate(name));
      await pokemonApiUtil.getRunningQueriesThunk();
    }

    return {
      props: {},
    };
  }
);

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  tagTypes: [],
  endpoints: (endpointBuilder) => ({
    getPokemonByName: endpointBuilder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonList: endpointBuilder.query({
      query: () => `pokemon/`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonListQuery } = pokemonApi;

export const { getPokemonByName, getPokemonList } = pokemonApi.endpoints;

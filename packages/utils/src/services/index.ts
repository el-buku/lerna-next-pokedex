import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { HYDRATE } from "next-redux-wrapper";

export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2/",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (endpointBuilder) => ({
    getPokemonByName: endpointBuilder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPaginatedPokemonsList: endpointBuilder.query<
      {
        results: Array<{ name: string }>;
        count: number;
      },
      { page: number; perPage: number }
    >({
      query: ({ page, perPage }) =>
        `pokemon/?offset=${page * perPage}&limit=${page * perPage + perPage}`,
    }),
    getAllPokemonsList: endpointBuilder.query<
      {
        results: Array<{ name: string }>;
        count: number;
      },
      void
    >({
      query: () => `pokemon/?offset=0&limit=10000`,
    }),
  }),
});

export const pokemonApiUtil: typeof pokemonApi.util = pokemonApi.util;

export const {
  useGetPokemonByNameQuery,
  useGetPaginatedPokemonsListQuery,
  useGetAllPokemonsListQuery,
} = pokemonApi;

export const {
  getPokemonByName,
  getPaginatedPokemonsList,
  getAllPokemonsList,
} = pokemonApi.endpoints;

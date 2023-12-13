import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const tmdbAPI = createApi({
  reducerPath: "tmdbAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
 getGenres: builder.query({
      query: () => `genre/movie/list?api_key=c643a6685dfefa1bd8e9df8ab94f6004`,
    }),
    getMovies: builder.query({
      query: ({ genreName, page, searchQuery }) => {
      if(searchQuery){
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=c643a6685dfefa1bd8e9df8ab94f6004`
      }
        if (genreName && typeof genreName === 'number') {
          return `discover/movie?with_genres=${genreName}&page=${page}&api_key=c643a6685dfefa1bd8e9df8ab94f6004`
        }
        return `movie/popular?page=${page}&api_key=c643a6685dfefa1bd8e9df8ab94f6004`;
      }
    }),
    getMovie: builder.query({
      query: (id) =>
        `/movie/${id}?append_to_response=videos,credits&api_key=c643a6685dfefa1bd8e9df8ab94f6004`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery, useGetGenresQuery } = tmdbAPI;

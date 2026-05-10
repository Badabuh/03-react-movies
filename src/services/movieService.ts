import axios from "axios";
import type { Movies, MoviesResponse } from "../types/movie";

const tmdbClient = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
  },
});

export interface FetchMoviesResult {
  movies: Movies;
  totalPages: number;
}

export async function fetchMovies(
  query: string,
  page: number,
  signal?: AbortSignal,
): Promise<FetchMoviesResult> {
  const response = await tmdbClient.get<MoviesResponse>("/search/movie", {
    params: {
      query,
      page,
    },
    signal,
  });

  const results = Array.isArray(response.data.results)
    ? response.data.results
    : [];

  return {
    movies: results,
    totalPages: response.data.total_pages ?? 1,
  };
}

export function isRequestCanceled(error: unknown): boolean {
  return axios.isCancel(error);
}

export interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}

export type Movies = Movie[];

export interface MoviesResponse {
  page: number;
  results: Movies;
  total_pages: number;
  total_results: number;
}

import css from "./MovieGrid.module.css";
import type { Movies } from "../../types/movie";

interface MovieGridProps {
  movies: Movies;
  onSelect: (movieId: number) => void;
}

export default function MovieGrid({ movies, onSelect }: MovieGridProps) {
  function renderMovies() {
    if (!movies) {
      return null;
    }
    return movies.map((movie) => (
      <li key={movie.id} onClick={() => onSelect(movie.id)}>
        <div className={css.card}>
          <img
            className={css.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            loading="lazy"
          />
          <h2 className={css.title}>{movie.title}</h2>
        </div>
      </li>
    ));
  }

  return (
    <>
      <ul className={css.grid}>{renderMovies()}</ul>
    </>
  );
}

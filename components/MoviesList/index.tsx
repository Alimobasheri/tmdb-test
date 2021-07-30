import type { FunctionComponent } from "react";
import type { MovieResult } from "../../types";
import MovieCard from "../MovieCard";

interface MoviesListProps {
  movies: MovieResult[];
}

const MoviesList: FunctionComponent<MoviesListProps> = ({ movies }) => {
  return (
    <>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...{ movie }}>
          <MovieCard.Title>{movie.title}</MovieCard.Title>
          <MovieCard.Genres genres={movie.genre_ids} />
        </MovieCard>
      ))}
    </>
  );
};

export default MoviesList;

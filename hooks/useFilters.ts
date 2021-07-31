import { ChangeEvent, useEffect, useState } from "react";
import { Genre, MovieResult } from "../types";
import { useGenresSelector } from "../contexts/Genres";

interface FiltersProps {
  movies: MovieResult[];
  isLoadingMovies: boolean;
}

const sortMoviesByPopularity = (
  movies: MovieResult[] | undefined
): MovieResult[] =>
  Array.isArray(movies)
    ? movies.sort((movieA, movieB) => movieB.popularity - movieA.popularity)
    : [];

export default function useFilters({ movies, isLoadingMovies }: FiltersProps) {
  const [selectedGenres, setSelectedGenres] = useState<Genre["id"][]>([]);
  const [minRatingValue, setMinRatingValue] = useState<number>(0);
  const [filteredMovies, setFilteredMovies] = useState<MovieResult[]>(
    isLoadingMovies ? [] : sortMoviesByPopularity(movies)
  );
  const { genres: allGenres } = useGenresSelector(null);

  const handleSelectChange = (event: ChangeEvent<{ value: number[] }>) => {
    const { value } = event.target;
    setSelectedGenres(value);
  };

  const handleRatingChange = (event: ChangeEvent<{ value: string }>) => {
    const { value } = event.target;
    console.log({ value });
    setMinRatingValue(parseInt(value));
  };

  useEffect(() => {
    if (!Array.isArray(movies)) {
      setFilteredMovies([]);
      return;
    }
    if (selectedGenres.length > 0 || minRatingValue > 0) {
      setFilteredMovies(
        sortMoviesByPopularity(movies)
          .filter((movie) => movie.vote_average >= minRatingValue)
          .filter((movie) =>
            selectedGenres.every((genre) => movie.genre_ids.includes(genre))
          )
      );
    } else {
      setFilteredMovies(sortMoviesByPopularity(movies));
    }
  }, [selectedGenres, movies, minRatingValue, isLoadingMovies]);

  useEffect(() => {
    if (!isLoadingMovies && Array.isArray(movies))
      setFilteredMovies(sortMoviesByPopularity(movies));
  }, [isLoadingMovies]);

  const getSelectProps = () => {
    return {
      values: selectedGenres,
      genres: !!allGenres ? allGenres : [],
      onChange: handleSelectChange,
    };
  };

  const getRatingProps = () => ({
    value: minRatingValue,
    onChange: handleRatingChange,
  });

  const getMoviesListProps = () => {
    return {
      movies: filteredMovies,
    };
  };

  return {
    getSelectProps,
    getMoviesListProps,
    getRatingProps,
  };
}

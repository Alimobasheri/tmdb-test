import { useState, useEffect, useContext } from "react";
import type { Genre } from "../../../types";
import GenresContext from "../GenresContext";

interface IGenresSelector {
  genres: Genre[] | [];
}
const useGenresSelector = (genre_ids: number[] | null): IGenresSelector => {
  const { genres, isLoading } = useContext(GenresContext);
  const mapGenres = (genre_ids: number[]): Genre[] | [] => {
    if (isLoading) return [];
    if (!genre_ids) return genres;
    return genre_ids.map((genId) => genres.find((gen) => gen.id === genId));
  };
  const [mappedGenres, setMappedGenres] = useState(mapGenres(genre_ids));
  useEffect(() => {
    const newMappedGenres: Genre[] | [] = mapGenres(genre_ids);
    if (JSON.stringify(newMappedGenres) !== JSON.stringify(mappedGenres))
      setMappedGenres(newMappedGenres);
  }, [isLoading, JSON.stringify(genres)]);

  return {
    genres: mappedGenres,
  };
};

export default useGenresSelector;

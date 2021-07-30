import { createContext } from "react";
import type { Genre } from "../../types";

interface IGenresContext {
  isLoading: boolean;
  genres: Genre[];
}

const GenresContext = createContext<IGenresContext>({
  isLoading: true,
  genres: [],
});

export default GenresContext;

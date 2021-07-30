import GenresContext from "./GenresContext";
import useGenres from "../../hooks/useGenres";

export default function GenresProvider({ children }) {
  const { error, data, isLoading } = useGenres();
  return (
    <GenresContext.Provider value={{ isLoading, genres: data }}>
      {children}
    </GenresContext.Provider>
  );
}

import { useQuery } from "react-query";

export default function useMovies() {
  return useQuery("movies", () =>
    fetch("/api/movies")
      .then((res) => res.json())
      .then((obj) => obj.results)
      .catch((error) => {
        throw new Error("error");
      })
  );
}

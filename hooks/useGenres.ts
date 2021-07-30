import { useQuery } from "react-query";

export default function useGenres() {
  return useQuery("genres", () =>
    fetch("/api/genres")
      .then((res) => res.json())
      .then((obj) => obj.genres)
      .catch((error) => {
        throw new Error("error");
      })
  );
}

import { FunctionComponent } from "react";
import { CircularProgress } from "@material-ui/core";
import MoviesList from "../../components/MoviesList";
import useMovies from "../../hooks/useMovies";

const Movies: FunctionComponent<{}> = () => {
  const { isLoading, error, data } = useMovies();
  if (isLoading) {
    return <CircularProgress />;
  }
  return <MoviesList movies={data} />;
};

export default Movies;

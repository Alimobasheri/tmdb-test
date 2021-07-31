import { FunctionComponent } from "react";
import {
  CircularProgress,
  Container,
  FormControl,
  Grid,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import MoviesList from "../../components/MoviesList";
import useMovies from "../../hooks/useMovies";
import useFilters from "../../hooks/useFilters";
import GenresFilter from "../../components/GenresFilter";
import RatingFilter from "../../components/RatingFilter";

const useMoviesStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      widht: "100%",
      padding: theme.spacing(1),
    },
    loadingWrapper: {
      widht: "100%",
      minHeight: "100%",

      justifyContent: "center",
      alignItems: "center",
    },
    formWrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    },
  })
);

const Movies: FunctionComponent<{}> = () => {
  const classes = useMoviesStyles();
  const { isLoading, error, data } = useMovies();
  const { getSelectProps, getMoviesListProps, getRatingProps } = useFilters({
    movies: data,
    isLoadingMovies: isLoading,
  });
  if (isLoading) {
    return (
      <Container component="div" className={classes.loadingWrapper}>
        <CircularProgress />
      </Container>
    );
  }
  return (
    <Container component="div" maxWidth="xs">
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justifyContent="flex-start">
            <Grid item xs={12} md={2}>
              <GenresFilter {...getSelectProps()} />
            </Grid>
            <Grid item xs={12} md={2}>
              <RatingFilter {...getRatingProps()} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <MoviesList {...getMoviesListProps()} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Movies;

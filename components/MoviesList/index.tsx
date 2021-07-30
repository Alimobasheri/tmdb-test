import type { FunctionComponent } from "react";
import type { MovieResult } from "../../types";
import {
  Container,
  Grid,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";
import MovieCard from "../MovieCard";

interface MoviesListProps {
  movies: MovieResult[];
}

const useListStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      width: "100%",
    },
  })
);

const MoviesList: FunctionComponent<MoviesListProps> = ({ movies }) => {
  const classes = useListStyles();
  return (
    <Container component="div" className={classes.root}>
      <Grid container>
        {movies.map((movie) => (
          <Grid item xs={12} md={6} lg={4} key={movie.id}>
            <MovieCard key={movie.id} {...{ movie }}>
              <MovieCard.Title>{movie.title}</MovieCard.Title>
              <MovieCard.Genres genres={movie.genre_ids} />
            </MovieCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default MoviesList;

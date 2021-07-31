import type { FunctionComponent } from "react";
import { useContext } from "react";
import { GenresContext, useGenresSelector } from "../../contexts/Genres";
import type { MovieResult } from "../../types";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
  Theme,
  createStyles,
  Chip,
} from "@material-ui/core";

const useCardStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 300,
      padding: theme.spacing(1),
      margin: theme.spacing(2),
    },
    media: {
      height: 150,
    },
    tag: {
      margin: theme.spacing(0.5),
    },
  })
);

interface MovieCardProps {
  movie: MovieResult;
}

interface MovieCardComposition {
  Title: FunctionComponent<{}>;
  Genres: FunctionComponent<MovieCardGenresProps>;
}

const MovieCard: FunctionComponent<MovieCardProps> & MovieCardComposition = ({
  movie,
  children,
}) => {
  const classes = useCardStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} />
      <CardContent>{children}</CardContent>
    </Card>
  );
};

const MovieCardTitle: FunctionComponent<{}> = ({ children }) => {
  return (
    <Typography variant="h4" component="h2">
      {children}
    </Typography>
  );
};

interface MovieCardGenresProps {
  genres: number[];
}

const MovieCardGenres: FunctionComponent<MovieCardGenresProps> = ({
  genres,
}) => {
  const { genres: genresMapped } = useGenresSelector(genres);
  const classes = useCardStyles();
  return (
    <div>
      {genresMapped.map((genre, key) => (
        <Chip key={key} label={genre.name} className={classes.tag} />
      ))}
    </div>
  );
};

MovieCard.Title = MovieCardTitle;
MovieCard.Genres = MovieCardGenres;
export default MovieCard;

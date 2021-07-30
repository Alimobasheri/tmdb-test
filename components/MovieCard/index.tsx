import type { FunctionComponent } from "react";
import { useContext } from "react";
import { GenresContext } from "../../contexts/Genres";
import type { MovieResult } from "../../types";

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
  return <div>{children}</div>;
};

const MovieCardTitle: FunctionComponent<{}> = ({ children }) => {
  return <h2>{children}</h2>;
};

interface MovieCardGenresProps {
  genres: number[];
}

const MovieCardGenres: FunctionComponent<MovieCardGenresProps> = ({
  genres,
}) => {
  const genresContext = useContext(GenresContext);
  const { genres: genresList, isLoading } = genresContext;
  return (
    <div>
      {!isLoading &&
        Array.isArray(genresList) &&
        genres.map((genre, key) => (
          <span key={key}>
            {genresList.find((gen) => gen.id === genre).name}
          </span>
        ))}
    </div>
  );
};

MovieCard.Title = MovieCardTitle;
MovieCard.Genres = MovieCardGenres;
export default MovieCard;

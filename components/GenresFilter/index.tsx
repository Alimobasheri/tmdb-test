import type { ChangeEvent, FunctionComponent } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  makeStyles,
  createStyles,
  Theme,
  Container,
} from "@material-ui/core";
import { Genre } from "../../types";

interface GenresFilterProps {
  genres: Genre[];
  values: Genre["id"][];
  onChange: (event: ChangeEvent<{ value: unknown }>) => void;
}

const useFiltersStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 200,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    select: {
      minWidth: 120,
    },
  })
);

const GenresFilter: FunctionComponent<GenresFilterProps> = ({
  values,
  genres,
  onChange,
}) => {
  const classes = useFiltersStyle();
  return (
    <Container className={classes.root}>
      <InputLabel id="filter-select">Filter by Genres</InputLabel>
      <Select
        multiple
        value={values}
        {...{ onChange }}
        className={classes.select}
        labelId="filter-select"
      >
        {genres.map((genre) => (
          <MenuItem key={genre.id} value={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </Select>
    </Container>
  );
};

export default GenresFilter;

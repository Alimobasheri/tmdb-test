import type { ChangeEvent, FunctionComponent } from "react";
import {
  Container,
  Select,
  TextField,
  InputLabel,
  MenuItem,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import { Genre } from "../../types";

interface RatingFilterProps {
  value: number;
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
    input: {
      minWidth: 120,
      marginLeft: theme.spacing(1),
    },
  })
);

const RatingFilter: FunctionComponent<RatingFilterProps> = ({
  value,
  onChange,
}) => {
  const classes = useFiltersStyle();
  return (
    <Container className={classes.root}>
      <InputLabel id="rating-filter">Minimum Rating:</InputLabel>
      <TextField
        type="number"
        id="rating-filter"
        inputProps={{ min: 0, max: 10, step: 1 }}
        className={classes.input}
        {...{ value, onChange }}
      />
    </Container>
  );
};

export default RatingFilter;

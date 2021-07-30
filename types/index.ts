export interface MovieResult {
  genre_ids: number[];
  id: number;
  title: string;
  overwiew: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
}

export interface Genre {
  id: number;
  name: string;
}

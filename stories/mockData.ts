import { Genre, MovieResult } from "../types";

export const mockMoviesData: MovieResult[] = [
  {
    genre_ids: [12, 28, 32, 24],
    title: "Space Jam",
    popularity: 4.3,
    poster_path: "path/to/poster",
    vote_average: 5.5,
    id: 1,
  },
  {
    genre_ids: [12, 28],
    title: "Loki",
    popularity: 6.8,
    poster_path: "path/to/poster",
    vote_average: 8.5,
    id: 2,
  },
  {
    genre_ids: [12, 32, 24],
    title: "Simpsons",
    popularity: 9.5,
    poster_path: "path/to/poster",
    vote_average: 7,
    id: 3,
  },
  {
    genre_ids: [12, 28, 24],
    title: "No Time To Die",
    popularity: 6.2,
    poster_path: "path/to/poster",
    vote_average: 7.1,
    id: 4,
  },
];

export const mockGenresData: Genre[] = [
  { id: 12, name: "Action" },
  { id: 28, name: "Adventure" },
  { id: 32, name: "Romance" },
  { id: 24, name: "Science Fiction" },
];

import type { ComponentStory, ComponentMeta } from "@storybook/react";
import MovieCard from "../components/MovieCard";
import { GenresProvider } from "../contexts/Genres";
import { QueryClient, QueryClientProvider } from "react-query";
import { rest } from "msw";

export default {
  title: "Movies/MovieCard",
  component: MovieCard,
  argTypes: {
    title: { control: "string" },
  },
} as ComponentMeta<typeof MovieCard>;

const fakeMovie = {
  title: "Loki",
  genre_ids: [12, 28],
};

const queryClient = new QueryClient();

const Template: ComponentStory<typeof MovieCard> = (args) => (
  <QueryClientProvider client={queryClient}>
    <GenresProvider>
      <MovieCard movie={args.movie}>
        <MovieCard.Title>{args.movie.title}</MovieCard.Title>
        <MovieCard.Genres genres={args.movie.genre_ids} />
      </MovieCard>
    </GenresProvider>
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.args = {
  movie: fakeMovie,
};
Default.parameters = {
  msw: [
    rest.get("/api/genres", (req, res, ctx) => {
      return res(
        ctx.json({
          genres: [
            { id: 12, name: "Action" },
            { id: 28, name: "Adventure" },
          ],
        })
      );
    }),
  ],
};

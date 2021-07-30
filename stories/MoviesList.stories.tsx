import type { ComponentStory, ComponentMeta } from "@storybook/react";
import MoviesList from "../components/MoviesList";
import { GenresProvider } from "../contexts/Genres";
import { QueryClient, QueryClientProvider } from "react-query";
import { rest } from "msw";
import { mockGenresData, mockMoviesData } from "./mockData";

export default {
  title: "Movies/MoviesList",
  component: MoviesList,
  argTypes: {
    title: { control: "string" },
  },
} as ComponentMeta<typeof MoviesList>;

const queryClient = new QueryClient();

const Template: ComponentStory<typeof MoviesList> = (args) => (
  <QueryClientProvider client={queryClient}>
    <GenresProvider>
      <MoviesList movies={mockMoviesData} />
    </GenresProvider>
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.parameters = {
  msw: [
    rest.get("/api/movies", (req, res, ctx) => {
      return res(
        ctx.json({
          result: mockMoviesData,
        })
      );
    }),
    rest.get("/api/genres", (req, res, ctx) => {
      return res(
        ctx.json({
          genres: mockGenresData,
        })
      );
    }),
  ],
};

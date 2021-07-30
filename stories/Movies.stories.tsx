import type { ComponentStory, ComponentMeta } from "@storybook/react";
import Movies from "../containers/Movies";
import { GenresProvider } from "../contexts/Genres";
import { QueryClient, QueryClientProvider } from "react-query";
import { rest } from "msw";
import { mockGenresData, mockMoviesData } from "./mockData";

export default {
  title: "Movies/Index",
  component: Movies,
} as ComponentMeta<typeof Movies>;

const queryClient = new QueryClient();

const Template: ComponentStory<typeof Movies> = (args) => (
  <QueryClientProvider client={queryClient}>
    <GenresProvider>
      <Movies />
    </GenresProvider>
  </QueryClientProvider>
);

export const Default = Template.bind({});
Default.parameters = {
  msw: [
    rest.get("/api/movies", (req, res, ctx) => {
      return res(
        ctx.json({
          results: mockMoviesData,
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

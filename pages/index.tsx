import { FunctionComponent } from "react";
import Movies from "../containers/Movies";
import { QueryClient, QueryClientProvider } from "react-query";
import { GenresProvider } from "../contexts/Genres";
import styles from "../styles/Home.module.css";

const queryClient = new QueryClient();
export default function Index() {
  return (
    <QueryClientProvider client={queryClient}>
      <GenresProvider>
        <Movies />
      </GenresProvider>
    </QueryClientProvider>
  );
}

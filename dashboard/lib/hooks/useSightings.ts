import useSWR from "swr";
import { Sighting } from "../types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useSightings = () => {
  const { data, error } = useSWR<Sighting[]>("/api/sighting", fetcher);

  // render data
  const isLoading = !data && !error;

  return {
    data,
    isLoading,
    error,
  };
};

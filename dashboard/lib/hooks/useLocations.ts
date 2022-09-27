import useSWR from "swr";
import { Location } from "../types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useLocations = () => {
  const { data, error } = useSWR<Location[]>("/api/location", fetcher);

  // render data
  const isLoading = !data && !error;

  return {
    data,
    isLoading,
    error,
  };
};

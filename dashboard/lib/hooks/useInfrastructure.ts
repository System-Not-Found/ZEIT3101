import useSWR from "swr";
import { Infrastructure } from "../types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useInfrastructure = () => {
  const { data, error } = useSWR<Infrastructure[]>(
    "/api/infrastructure",
    fetcher
  );

  // render data
  const isLoading = !data && !error;

  return {
    data,
    isLoading,
    error,
  };
};

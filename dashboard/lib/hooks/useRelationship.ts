import useSWR from "swr";
import { StixObject } from "../types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useRelatipnship = (object: StixObject) => {
  const { data, error } = useSWR<StixObject[]>(
    `/api/relationship/${object.id}`,
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

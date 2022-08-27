import useSWR from "swr";
import { NetworkTraffic } from "../types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useNetworkObservables = () => {
  const { data, error } = useSWR<NetworkTraffic[]>(
    "/api/network-traffic",
    fetcher,
    {
      refreshInterval: 1000,
    }
  );

  // render data
  const isLoading = !data && !error;

  return {
    data,
    isLoading,
    error,
  };
};

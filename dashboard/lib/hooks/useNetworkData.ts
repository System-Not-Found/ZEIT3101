import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useNetworkData = () => {
  const { data, error } = useSWR(
    "/api/infrastructure-traffic/network",
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

import useSWR from "swr";
import { Infrastructure } from "../types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useInfrastructureTraffic = (infrastructure: Infrastructure) => {
  const { data, error } = useSWR<Infrastructure[]>(
    `/api/infrastructure-traffic/${infrastructure.id}`,
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

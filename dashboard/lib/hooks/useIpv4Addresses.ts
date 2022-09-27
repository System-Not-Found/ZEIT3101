import useSWR from "swr";
import { Ipv4Address } from "../types";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useIpv4Addresses = () => {
  const { data, error } = useSWR<Ipv4Address[]>("/api/ipv4-addr", fetcher);

  // render data
  const isLoading = !data && !error;

  return {
    data,
    isLoading,
    error,
  };
};

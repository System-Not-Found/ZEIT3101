import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useIpv4Addresses } from "../lib/hooks/useIpv4Addresses";
import { useNetworkObservables } from "../lib/hooks/useNetworkObservables";
import { Ipv4Address, NetworkTraffic } from "../lib/types";

const Home: NextPage = () => {
  const { data: networkObservables } = useNetworkObservables();
  const { data: ipAddresses } = useIpv4Addresses();

  return (
    <div>
      {ipAddresses ? (
        Object.entries(
          ipAddresses.reduce((acc, curr) => {
            return (
              acc[curr.value] ? ++acc[curr.value] : (acc[curr.value] = 1), acc
            );
          }, {} as Record<string, number>)
        ).map(([k, v]) => (
          <p>
            {k} occurred {v} times
          </p>
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;

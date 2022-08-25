import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Ipv4Address, NetworkTraffic } from "../lib/types";

const Home: NextPage = () => {
  const [networkObservables, setNetworkObservables] = useState<
    NetworkTraffic[]
  >([]);
  const [ipAddresses, setIpAddresses] = useState<Ipv4Address[]>();

  useEffect(() => {
    const getNetworkObservables = async () => {
      const response = await fetch("/api/network-traffic");
      if (response.ok) {
        const observables = await response.json();

        setNetworkObservables(observables);
      }

      const ipResponse = await fetch("/api/ipv4-addr");
      if (ipResponse.ok) {
        const ipAddresses = await ipResponse.json();

        setIpAddresses(ipAddresses);
      }
    };
    getNetworkObservables();
  }, []);

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

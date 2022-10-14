import { FC } from "react";
import { useSightings } from "../../lib/hooks/useSightings";
import { DataMode } from "../../lib/types";
import Spinner from "../shared/Spinner";

type Status = "LOW" | "MEDIUM" | "HIGH";

const getStatus = (sightings: number): Status => {
  if (sightings > 3) return "HIGH";
  if (sightings > 0 && sightings < 3) return "MEDIUM";
  return "LOW";
};

interface Props {
  mode?: DataMode;
}

const SecurityStatus: FC<Props> = ({ mode = "realtime" }) => {
  const { data, isLoading } = useSightings(mode);

  const status = getStatus(data?.length || 0);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    !isLoading && (
      <div className="flex flex-col gap-10 p-4">
        <p className="text-5xl text-white">Security Status</p>
        <div className="flex gap-2 justify-between items-center">
          <p className="text-6xl text-white">{status} RISK</p>
          <img className="h-40" src={`/img/${status.toLowerCase()}risk.png`} />
        </div>
      </div>
    )
  );
};

export default SecurityStatus;

import { useIndicators } from "../../lib/hooks/useIndicators";
import { DataMode } from "../../lib/types";
import Tooltip from "../shared/Tooltip";

interface Props {
  mode?: DataMode;
}

const SightingConsole: React.FC<Props> = ({ mode = "realtime" }) => {
  const { data } = useIndicators(mode);

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-xl pb-4">Malicious Sightings</p>
        <Tooltip content="This visualisation shows what IP Addresses have been flagged as potentially malicious." />
      </div>
      {[...new Set(data?.map((i) => i.pattern))].map((i) => (
        <p key={i}>
          Sighting of: {i.split("'")[1]}. View on{" "}
          <a
            className="text-blue-500"
            href={`https://www.virustotal.com/gui/ip-address/${
              i.split("'")[1]
            }`}
            target="_blank"
            rel="noreferrer"
          >
            VirusTotal
          </a>
          .
        </p>
      ))}
    </div>
  );
};

export default SightingConsole;

//https://www.virustotal.com/gui/ip-address/76.76.21.9

import { FC } from "react";
import { InputNode, ResponsiveNetwork } from "@nivo/network";
import { useNetworkData } from "../../lib/hooks/useNetworkData";

const isLocal = (n: { id: string }) => n.id.startsWith("192.168");

const nodeSize = (n: { id: string }) => (isLocal(n) ? 24 : 15);

const InfrastructureMap: FC = () => {
  const { data, isLoading } = useNetworkData();

  return (
    <>
      <p className="text-xl pb-4">Devices on Network</p>
      {!isLoading && data.nodes && (
        <ResponsiveNetwork
          data={data}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          linkDistance={100}
          centeringStrength={2}
          repulsivity={20}
          nodeSize={(n) => nodeSize(n)}
          activeNodeSize={(n) => 1.5 * nodeSize(n)}
          nodeColor={(n: InputNode) => (isLocal(n) ? "#86dacc" : "#f69889")}
          nodeBorderWidth={1}
          nodeBorderColor={{
            from: "color",
            modifiers: [["darker", 0.8]],
          }}
          linkBlendMode="multiply"
          motionConfig="gentle"
        />
      )}
    </>
  );
};

export default InfrastructureMap;

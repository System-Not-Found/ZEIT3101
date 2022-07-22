// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/network
import { ResponsiveNetwork } from "@nivo/network";
import { FC } from "react";

const data = {
  nodes: [
    {
      id: "Server 1",
      height: 1,
      size: 24,
      color: "#00ADB5",
    },
    {
      id: "Router",
      height: 1,
      size: 24,
      color: "#eeeeee",
    },
    {
      id: "Server 2",
      height: 2,
      size: 28,
      color: "#00ADB5",
    },
    {
      id: "Internet",
      height: 2,
      size: 24,
      color: "#ca4e5a",
    },
  ],
  links: [
    {
      source: "Router",
      target: "Server 1",
      distance: 150,
    },
    {
      source: "Router",
      target: "Server 2",
      distance: 150,
    },
    {
      source: "Internet",
      target: "Router",
      distance: 150,
    },
  ],
};

const Network: FC = () => (
  <ResponsiveNetwork
    data={data}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    linkDistance={function (e) {
      return e.distance;
    }}
    centeringStrength={0.3}
    repulsivity={6}
    nodeSize={function (n) {
      return n.size;
    }}
    activeNodeSize={function (n) {
      return 1.5 * n.size;
    }}
    nodeColor={function (e) {
      return e.color;
    }}
    nodeBorderWidth={1}
    nodeBorderColor={{
      from: "color",
      modifiers: [["darker", 0.8]],
    }}
    linkThickness={function (n) {
      return 2 + 2 * n.target.data.height;
    }}
    linkBlendMode="multiply"
    motionConfig="wobbly"
    // nodeComponent={CustomNodeComponent}
  />
);

const CustomNodeComponent: FC = () => {
  return <div>Ogga booga</div>;
};

export default Network;

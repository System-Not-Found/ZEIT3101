// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/line
import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";

const data = [
  {
    id: "japan",
    color: "hsl(156, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 10,
      },
      {
        x: "helicopter",
        y: 185,
      },
      {
        x: "boat",
        y: 129,
      },
      {
        x: "train",
        y: 139,
      },
      {
        x: "subway",
        y: 84,
      },
      {
        x: "bus",
        y: 57,
      },
      {
        x: "car",
        y: 45,
      },
      {
        x: "moto",
        y: 297,
      },
      {
        x: "bicycle",
        y: 163,
      },
      {
        x: "horse",
        y: 63,
      },
      {
        x: "skateboard",
        y: 288,
      },
      {
        x: "others",
        y: 214,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(125, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 134,
      },
      {
        x: "helicopter",
        y: 72,
      },
      {
        x: "boat",
        y: 116,
      },
      {
        x: "train",
        y: 145,
      },
      {
        x: "subway",
        y: 269,
      },
      {
        x: "bus",
        y: 28,
      },
      {
        x: "car",
        y: 279,
      },
      {
        x: "moto",
        y: 106,
      },
      {
        x: "bicycle",
        y: 259,
      },
      {
        x: "horse",
        y: 58,
      },
      {
        x: "skateboard",
        y: 168,
      },
      {
        x: "others",
        y: 295,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(190, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 59,
      },
      {
        x: "helicopter",
        y: 73,
      },
      {
        x: "boat",
        y: 187,
      },
      {
        x: "train",
        y: 225,
      },
      {
        x: "subway",
        y: 40,
      },
      {
        x: "bus",
        y: 165,
      },
      {
        x: "car",
        y: 148,
      },
      {
        x: "moto",
        y: 287,
      },
      {
        x: "bicycle",
        y: 187,
      },
      {
        x: "horse",
        y: 294,
      },
      {
        x: "skateboard",
        y: 260,
      },
      {
        x: "others",
        y: 273,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(178, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 149,
      },
      {
        x: "helicopter",
        y: 12,
      },
      {
        x: "boat",
        y: 289,
      },
      {
        x: "train",
        y: 234,
      },
      {
        x: "subway",
        y: 215,
      },
      {
        x: "bus",
        y: 77,
      },
      {
        x: "car",
        y: 197,
      },
      {
        x: "moto",
        y: 97,
      },
      {
        x: "bicycle",
        y: 15,
      },
      {
        x: "horse",
        y: 209,
      },
      {
        x: "skateboard",
        y: 221,
      },
      {
        x: "others",
        y: 163,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(264, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 100,
      },
      {
        x: "helicopter",
        y: 50,
      },
      {
        x: "boat",
        y: 274,
      },
      {
        x: "train",
        y: 232,
      },
      {
        x: "subway",
        y: 117,
      },
      {
        x: "bus",
        y: 143,
      },
      {
        x: "car",
        y: 71,
      },
      {
        x: "moto",
        y: 222,
      },
      {
        x: "bicycle",
        y: 292,
      },
      {
        x: "horse",
        y: 287,
      },
      {
        x: "skateboard",
        y: 225,
      },
      {
        x: "others",
        y: 190,
      },
    ],
  },
];

const Timeline = () => (
  <ResponsiveLine
    data={data}
    theme={{
      textColor: "white",
    }}
    margin={{ right: 110, bottom: 75, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "transportation",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "count",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    enableArea={true}
    defs={[
      linearGradientDef("gradientA", [
        { offset: 0, color: "inherit" },
        { offset: 100, color: "inherit", opacity: 0 },
      ]),
    ]}
    fill={[{ match: "*", id: "gradientA" }]}
  />
);

export default Timeline;

import { ResponsiveLine } from "@nivo/line";
import { linearGradientDef } from "@nivo/core";
import { FC } from "react";

const data = [
  {
    id: "malware",
    color: "hsl(150, 70%, 50%)",
    data: [
      {
        x: "January",
        y: 6,
      },
      {
        x: "February",
        y: 278,
      },
      {
        x: "March",
        y: 253,
      },
      {
        x: "April",
        y: 181,
      },
      {
        x: "May",
        y: 216,
      },
      {
        x: "June",
        y: 168,
      },
      {
        x: "July",
        y: 186,
      },
      {
        x: "August",
        y: 3,
      },
      {
        x: "September",
        y: 7,
      },
      {
        x: "October",
        y: 27,
      },
      {
        x: "November",
        y: 138,
      },
      {
        x: "December",
        y: 178,
      },
    ],
  },
  {
    id: "ipv4 addresses",
    color: "hsl(41, 70%, 50%)",
    data: [
      {
        x: "January",
        y: 122,
      },
      {
        x: "February",
        y: 96,
      },
      {
        x: "March",
        y: 26,
      },
      {
        x: "April",
        y: 107,
      },
      {
        x: "May",
        y: 152,
      },
      {
        x: "June",
        y: 56,
      },
      {
        x: "July",
        y: 290,
      },
      {
        x: "August",
        y: 138,
      },
      {
        x: "September",
        y: 169,
      },
      {
        x: "October",
        y: 133,
      },
      {
        x: "November",
        y: 75,
      },
      {
        x: "December",
        y: 203,
      },
    ],
  },
  {
    id: "url",
    color: "hsl(129, 70%, 50%)",
    data: [
      {
        x: "January",
        y: 129,
      },
      {
        x: "February",
        y: 41,
      },
      {
        x: "March",
        y: 108,
      },
      {
        x: "April",
        y: 149,
      },
      {
        x: "May",
        y: 20,
      },
      {
        x: "June",
        y: 224,
      },
      {
        x: "July",
        y: 210,
      },
      {
        x: "August",
        y: 121,
      },
      {
        x: "September",
        y: 36,
      },
      {
        x: "October",
        y: 72,
      },
      {
        x: "November",
        y: 156,
      },
      {
        x: "December",
        y: 50,
      },
    ],
  },
  {
    id: "domain name",
    color: "hsl(117, 70%, 50%)",
    data: [
      {
        x: "January",
        y: 198,
      },
      {
        x: "February",
        y: 138,
      },
      {
        x: "March",
        y: 210,
      },
      {
        x: "April",
        y: 128,
      },
      {
        x: "May",
        y: 225,
      },
      {
        x: "June",
        y: 156,
      },
      {
        x: "July",
        y: 254,
      },
      {
        x: "August",
        y: 58,
      },
      {
        x: "September",
        y: 242,
      },
      {
        x: "October",
        y: 134,
      },
      {
        x: "November",
        y: 9,
      },
      {
        x: "December",
        y: 93,
      },
    ],
  },
  {
    id: "file hash",
    color: "hsl(53, 70%, 50%)",
    data: [
      {
        x: "January",
        y: 278,
      },
      {
        x: "February",
        y: 70,
      },
      {
        x: "March",
        y: 210,
      },
      {
        x: "April",
        y: 26,
      },
      {
        x: "May",
        y: 23,
      },
      {
        x: "June",
        y: 86,
      },
      {
        x: "July",
        y: 257,
      },
      {
        x: "August",
        y: 203,
      },
      {
        x: "September",
        y: 71,
      },
      {
        x: "October",
        y: 82,
      },
      {
        x: "November",
        y: 232,
      },
      {
        x: "December",
        y: 219,
      },
    ],
  },
];

const Timeline: FC = () => {
  return (
    <ResponsiveLine
      data={data}
      theme={{
        fontSize: 16,
        textColor: "white",
      }}
      margin={{ top: 50, right: 200, bottom: 50, left: 60 }}
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
        legend: "Time",
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
};
export default Timeline;

import { ResponsiveTimeRange } from "@nivo/calendar";
import { FC } from "react";
import { useSightings } from "../../lib/hooks/useSightings";
import { DataMode } from "../../lib/types";
import Tooltip from "../shared/Tooltip";

interface Props {
  mode?: DataMode;
}

const SightingCalendar: FC<Props> = ({ mode = "realtime" }) => {
  const { data, isLoading } = useSightings(mode);

  return (
    <>
      <div className="flex justify-between items-center">
        <p className="text-xl pb-4">Malicious Sightings this Month</p>
        <Tooltip content="This is a network time graph showing the traffic over time" />
      </div>

      {!isLoading && data && (
        <ResponsiveTimeRange
          // data={data.map((s) => ({ day: s.first_seen, value: 1 }))}
          data={
            mode === "realtime"
              ? []
              : [
                  { day: "2022-09-03", value: 2 },
                  { day: "2022-09-14", value: 5 },
                  { day: "2022-09-21", value: 3 },
                  { day: "2022-09-23", value: 7 },
                ]
          }
          from="2022-09-01"
          to="2022-09-31"
          emptyColor="#eeeeee"
          colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
          margin={{ top: 40, right: 40, bottom: 100, left: 40 }}
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
          legends={[
            {
              anchor: "bottom-right",
              direction: "row",
              justify: false,
              itemCount: 4,
              itemWidth: 42,
              itemHeight: 36,
              itemsSpacing: 14,
              itemDirection: "right-to-left",
              translateX: -60,
              translateY: -80,
              symbolSize: 20,
            },
          ]}
        />
      )}
    </>
  );
};

export default SightingCalendar;

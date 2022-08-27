import { ResponsiveTimeRange } from "@nivo/calendar";

const data = [
  {
    value: 105,
    day: "2018-06-13",
  },
  {
    value: 196,
    day: "2018-07-12",
  },
  {
    value: 71,
    day: "2018-05-14",
  },
  {
    value: 213,
    day: "2018-06-07",
  },
  {
    value: 113,
    day: "2018-07-13",
  },
  {
    value: 49,
    day: "2018-04-30",
  },
  {
    value: 236,
    day: "2018-04-13",
  },
  {
    value: 102,
    day: "2018-06-21",
  },
  {
    value: 141,
    day: "2018-08-07",
  },
  {
    value: 353,
    day: "2018-06-03",
  },
  {
    value: 384,
    day: "2018-06-30",
  },
  {
    value: 398,
    day: "2018-06-20",
  },
  {
    value: 49,
    day: "2018-04-18",
  },
  {
    value: 218,
    day: "2018-06-25",
  },
  {
    value: 185,
    day: "2018-04-24",
  },
  {
    value: 209,
    day: "2018-06-08",
  },
  {
    value: 253,
    day: "2018-08-08",
  },
  {
    value: 36,
    day: "2018-06-05",
  },
  {
    value: 152,
    day: "2018-07-26",
  },
  {
    value: 242,
    day: "2018-05-31",
  },
  {
    value: 395,
    day: "2018-07-15",
  },
  {
    value: 317,
    day: "2018-04-07",
  },
  {
    value: 35,
    day: "2018-06-12",
  },
  {
    value: 122,
    day: "2018-04-21",
  },
  {
    value: 27,
    day: "2018-05-21",
  },
  {
    value: 200,
    day: "2018-07-22",
  },
  {
    value: 311,
    day: "2018-05-07",
  },
  {
    value: 321,
    day: "2018-04-06",
  },
  {
    value: 106,
    day: "2018-06-04",
  },
  {
    value: 29,
    day: "2018-05-28",
  },
  {
    value: 17,
    day: "2018-07-04",
  },
  {
    value: 79,
    day: "2018-07-30",
  },
  {
    value: 79,
    day: "2018-08-09",
  },
  {
    value: 3,
    day: "2018-05-09",
  },
  {
    value: 30,
    day: "2018-06-16",
  },
  {
    value: 62,
    day: "2018-04-02",
  },
  {
    value: 300,
    day: "2018-04-23",
  },
  {
    value: 337,
    day: "2018-08-01",
  },
  {
    value: 317,
    day: "2018-07-31",
  },
  {
    value: 130,
    day: "2018-04-19",
  },
  {
    value: 190,
    day: "2018-07-24",
  },
  {
    value: 124,
    day: "2018-04-15",
  },
  {
    value: 316,
    day: "2018-04-12",
  },
  {
    value: 368,
    day: "2018-06-24",
  },
  {
    value: 369,
    day: "2018-07-27",
  },
  {
    value: 191,
    day: "2018-07-17",
  },
  {
    value: 247,
    day: "2018-06-14",
  },
  {
    value: 220,
    day: "2018-06-28",
  },
  {
    value: 49,
    day: "2018-05-19",
  },
  {
    value: 251,
    day: "2018-04-03",
  },
  {
    value: 44,
    day: "2018-05-16",
  },
  {
    value: 334,
    day: "2018-06-09",
  },
  {
    value: 9,
    day: "2018-08-10",
  },
  {
    value: 304,
    day: "2018-07-01",
  },
  {
    value: 371,
    day: "2018-05-08",
  },
  {
    value: 63,
    day: "2018-04-09",
  },
  {
    value: 386,
    day: "2018-08-03",
  },
  {
    value: 22,
    day: "2018-07-19",
  },
  {
    value: 105,
    day: "2018-06-29",
  },
  {
    value: 40,
    day: "2018-04-04",
  },
  {
    value: 253,
    day: "2018-04-20",
  },
  {
    value: 177,
    day: "2018-07-23",
  },
  {
    value: 4,
    day: "2018-04-05",
  },
  {
    value: 232,
    day: "2018-07-14",
  },
  {
    value: 303,
    day: "2018-07-02",
  },
  {
    value: 326,
    day: "2018-06-15",
  },
  {
    value: 364,
    day: "2018-07-21",
  },
];

const IndicatorSightings = () => (
  <ResponsiveTimeRange
    data={data}
    theme={{
      textColor: "white",
    }}
    from="2018-04-01"
    to="2018-08-12"
    emptyColor="#eeeeee"
    colors={["#61cdbb", "#97e3d5", "#e8c1a0", "#f47560"]}
    margin={{ top: 40, right: 40, bottom: 10, left: 40 }}
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
        translateY: -60,
        symbolSize: 20,
      },
    ]}
  />
);

export default IndicatorSightings;

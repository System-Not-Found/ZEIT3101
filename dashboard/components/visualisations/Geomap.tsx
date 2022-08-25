import { ResponsiveChoropleth } from "@nivo/geo";
import { features } from "../../lib/visualisations/geomap-features";

const data = [
  {
    id: "AFG",
    value: 916555,
  },
  {
    id: "AGO",
    value: 99220,
  },
  {
    id: "ALB",
    value: 536929,
  },
  {
    id: "ARE",
    value: 512977,
  },
  {
    id: "ARG",
    value: 721004,
  },
  {
    id: "ARM",
    value: 377579,
  },
  {
    id: "ATA",
    value: 96931,
  },
  {
    id: "ATF",
    value: 385464,
  },
  {
    id: "AUT",
    value: 134418,
  },
  {
    id: "AZE",
    value: 472531,
  },
  {
    id: "BDI",
    value: 408885,
  },
  {
    id: "BEL",
    value: 129786,
  },
  {
    id: "BEN",
    value: 594659,
  },
  {
    id: "BFA",
    value: 840553,
  },
  {
    id: "BGD",
    value: 538560,
  },
  {
    id: "BGR",
    value: 230658,
  },
  {
    id: "BHS",
    value: 184572,
  },
  {
    id: "BIH",
    value: 11274,
  },
  {
    id: "BLR",
    value: 422186,
  },
  {
    id: "BLZ",
    value: 208849,
  },
  {
    id: "BOL",
    value: 94184,
  },
  {
    id: "BRN",
    value: 206697,
  },
  {
    id: "BTN",
    value: 922463,
  },
  {
    id: "BWA",
    value: 831508,
  },
  {
    id: "CAF",
    value: 804250,
  },
  {
    id: "CAN",
    value: 52779,
  },
  {
    id: "CHE",
    value: 891987,
  },
  {
    id: "CHL",
    value: 58270,
  },
  {
    id: "CHN",
    value: 700040,
  },
  {
    id: "CIV",
    value: 139902,
  },
  {
    id: "CMR",
    value: 626280,
  },
  {
    id: "COG",
    value: 46756,
  },
  {
    id: "COL",
    value: 902424,
  },
  {
    id: "CRI",
    value: 831073,
  },
  {
    id: "CUB",
    value: 31741,
  },
  {
    id: "-99",
    value: 108815,
  },
  {
    id: "CYP",
    value: 800932,
  },
  {
    id: "CZE",
    value: 931490,
  },
  {
    id: "DEU",
    value: 910054,
  },
  {
    id: "DJI",
    value: 796183,
  },
  {
    id: "DNK",
    value: 841128,
  },
  {
    id: "DOM",
    value: 984331,
  },
  {
    id: "DZA",
    value: 489137,
  },
  {
    id: "ECU",
    value: 697542,
  },
  {
    id: "EGY",
    value: 722634,
  },
  {
    id: "ERI",
    value: 467478,
  },
  {
    id: "ESP",
    value: 814715,
  },
  {
    id: "EST",
    value: 215362,
  },
  {
    id: "ETH",
    value: 610240,
  },
  {
    id: "FIN",
    value: 716597,
  },
  {
    id: "FJI",
    value: 693962,
  },
  {
    id: "FLK",
    value: 745085,
  },
  {
    id: "FRA",
    value: 72987,
  },
  {
    id: "GAB",
    value: 572429,
  },
  {
    id: "GBR",
    value: 164049,
  },
  {
    id: "GEO",
    value: 433629,
  },
  {
    id: "GHA",
    value: 617942,
  },
  {
    id: "GIN",
    value: 743704,
  },
  {
    id: "GMB",
    value: 632954,
  },
  {
    id: "GNB",
    value: 821286,
  },
  {
    id: "GNQ",
    value: 23303,
  },
  {
    id: "GRC",
    value: 25962,
  },
  {
    id: "GTM",
    value: 693804,
  },
  {
    id: "GUY",
    value: 400959,
  },
  {
    id: "HND",
    value: 523469,
  },
  {
    id: "HRV",
    value: 659635,
  },
  {
    id: "HTI",
    value: 214216,
  },
  {
    id: "HUN",
    value: 894828,
  },
  {
    id: "IDN",
    value: 805276,
  },
  {
    id: "IND",
    value: 462171,
  },
  {
    id: "IRL",
    value: 556272,
  },
  {
    id: "IRN",
    value: 354574,
  },
  {
    id: "IRQ",
    value: 530624,
  },
  {
    id: "ISL",
    value: 250922,
  },
  {
    id: "ISR",
    value: 176084,
  },
  {
    id: "ITA",
    value: 264259,
  },
  {
    id: "JAM",
    value: 951339,
  },
  {
    id: "JOR",
    value: 445798,
  },
  {
    id: "JPN",
    value: 189867,
  },
  {
    id: "KAZ",
    value: 155118,
  },
  {
    id: "KEN",
    value: 911389,
  },
  {
    id: "KGZ",
    value: 831040,
  },
  {
    id: "KHM",
    value: 541275,
  },
  {
    id: "OSA",
    value: 407933,
  },
  {
    id: "KWT",
    value: 519404,
  },
  {
    id: "LAO",
    value: 244357,
  },
  {
    id: "LBN",
    value: 758485,
  },
  {
    id: "LBR",
    value: 53104,
  },
  {
    id: "LBY",
    value: 100041,
  },
  {
    id: "LKA",
    value: 863001,
  },
  {
    id: "LSO",
    value: 217087,
  },
  {
    id: "LTU",
    value: 752265,
  },
  {
    id: "LUX",
    value: 148684,
  },
  {
    id: "LVA",
    value: 338156,
  },
  {
    id: "MAR",
    value: 687876,
  },
  {
    id: "MDA",
    value: 520367,
  },
  {
    id: "MDG",
    value: 660386,
  },
  {
    id: "MEX",
    value: 665322,
  },
  {
    id: "MKD",
    value: 82674,
  },
  {
    id: "MLI",
    value: 111872,
  },
  {
    id: "MMR",
    value: 870513,
  },
  {
    id: "MNE",
    value: 76219,
  },
  {
    id: "MNG",
    value: 225434,
  },
  {
    id: "MOZ",
    value: 522338,
  },
  {
    id: "MRT",
    value: 784608,
  },
  {
    id: "MWI",
    value: 286778,
  },
  {
    id: "MYS",
    value: 418086,
  },
  {
    id: "NAM",
    value: 433484,
  },
  {
    id: "NCL",
    value: 854723,
  },
  {
    id: "NER",
    value: 696745,
  },
  {
    id: "NGA",
    value: 887884,
  },
  {
    id: "NIC",
    value: 847115,
  },
  {
    id: "NLD",
    value: 20060,
  },
  {
    id: "NOR",
    value: 374249,
  },
  {
    id: "NPL",
    value: 835883,
  },
  {
    id: "NZL",
    value: 5597,
  },
  {
    id: "OMN",
    value: 637090,
  },
  {
    id: "PAK",
    value: 747101,
  },
  {
    id: "PAN",
    value: 731905,
  },
  {
    id: "PER",
    value: 917237,
  },
  {
    id: "PHL",
    value: 91004,
  },
  {
    id: "PNG",
    value: 574752,
  },
  {
    id: "POL",
    value: 91491,
  },
  {
    id: "PRI",
    value: 44575,
  },
  {
    id: "PRT",
    value: 360764,
  },
  {
    id: "PRY",
    value: 808143,
  },
  {
    id: "QAT",
    value: 409451,
  },
  {
    id: "ROU",
    value: 817594,
  },
  {
    id: "RUS",
    value: 231830,
  },
  {
    id: "RWA",
    value: 191926,
  },
  {
    id: "ESH",
    value: 159664,
  },
  {
    id: "SAU",
    value: 187382,
  },
  {
    id: "SDN",
    value: 376951,
  },
  {
    id: "SDS",
    value: 102356,
  },
  {
    id: "SEN",
    value: 189153,
  },
  {
    id: "SLB",
    value: 58476,
  },
  {
    id: "SLE",
    value: 640977,
  },
  {
    id: "SLV",
    value: 170707,
  },
  {
    id: "ABV",
    value: 876776,
  },
  {
    id: "SOM",
    value: 974622,
  },
  {
    id: "SRB",
    value: 536703,
  },
  {
    id: "SUR",
    value: 569978,
  },
  {
    id: "SVK",
    value: 370447,
  },
  {
    id: "SVN",
    value: 212148,
  },
  {
    id: "SWZ",
    value: 875332,
  },
  {
    id: "SYR",
    value: 651091,
  },
  {
    id: "TCD",
    value: 602573,
  },
  {
    id: "TGO",
    value: 483626,
  },
  {
    id: "THA",
    value: 381533,
  },
  {
    id: "TJK",
    value: 548291,
  },
  {
    id: "TKM",
    value: 354477,
  },
  {
    id: "TLS",
    value: 467318,
  },
  {
    id: "TTO",
    value: 295615,
  },
  {
    id: "TUN",
    value: 635811,
  },
  {
    id: "TUR",
    value: 714748,
  },
  {
    id: "TWN",
    value: 684126,
  },
  {
    id: "TZA",
    value: 435057,
  },
  {
    id: "UGA",
    value: 41346,
  },
  {
    id: "UKR",
    value: 499128,
  },
  {
    id: "URY",
    value: 681839,
  },
  {
    id: "USA",
    value: 321799,
  },
  {
    id: "UZB",
    value: 742242,
  },
  {
    id: "VEN",
    value: 174749,
  },
  {
    id: "VNM",
    value: 712334,
  },
  {
    id: "VUT",
    value: 322106,
  },
  {
    id: "PSE",
    value: 713515,
  },
  {
    id: "YEM",
    value: 283163,
  },
  {
    id: "ZAF",
    value: 217928,
  },
  {
    id: "ZMB",
    value: 71471,
  },
  {
    id: "ZWE",
    value: 696224,
  },
  {
    id: "KOR",
    value: 190353,
  },
];

const Geomap = () => (
  <ResponsiveChoropleth
    data={data}
    theme={{
      textColor: "white",
    }}
    features={features}
    margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
    colors="nivo"
    domain={[0, 1000000]}
    unknownColor="#666666"
    label="properties.name"
    valueFormat=".2s"
    projectionTranslation={[0.5, 0.5]}
    projectionRotation={[0, 0, 0]}
    enableGraticule={true}
    graticuleLineColor="#dddddd"
    borderWidth={0.5}
    borderColor="#152538"
    legends={[
      {
        anchor: "bottom-left",
        direction: "column",
        justify: true,
        translateX: 20,
        translateY: -100,
        itemsSpacing: 0,
        itemWidth: 94,
        itemHeight: 18,
        itemDirection: "left-to-right",
        itemTextColor: "#444444",
        itemOpacity: 0.85,
        symbolSize: 18,
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000000",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default Geomap;

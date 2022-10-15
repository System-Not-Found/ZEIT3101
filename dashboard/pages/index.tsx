import type { NextPage } from "next";
import GeoMap from "../components/data/GeoMap";
import InfrastructureList from "../components/data/InfrastructureList";
import SecurityStatus from "../components/data/SecurityStatus";
import SightingCalendar from "../components/data/SightingCalendar";
import TimeGraph from "../components/data/TimeGraph";
import Panel from "../components/shared/Panel";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <div className="flex h-screen gap-10 flex-wrap p-12">
          <Panel compact={true} light={false}>
            <SecurityStatus />
          </Panel>

          <Panel>
            <TimeGraph />
          </Panel>
          <Panel compact={true}>
            <SightingCalendar />
          </Panel>
          <Panel>
            <GeoMap />
          </Panel>
          <Panel>
            <InfrastructureList />
          </Panel>
        </div>
      </div>
      <div className="absolute bottom-0 h-5"></div>
    </>
  );
};

export default Home;

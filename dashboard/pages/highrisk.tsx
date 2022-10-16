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
        <p className="pl-12">
          This is for demonstration purposes only and is not an example of your
          network&apos;s current security position.
        </p>
        <div className="flex h-screen gap-10 flex-wrap p-12">
          <Panel compact={true} light={false}>
            <SecurityStatus mode="highrisk" />
          </Panel>
          <Panel>
            <TimeGraph mode="highrisk" />
          </Panel>
          <Panel compact={true}>
            <SightingCalendar mode="highrisk" />
          </Panel>
          <Panel>
            <GeoMap mode="highrisk" />
          </Panel>
          <Panel>
            <InfrastructureList mode="highrisk" />
          </Panel>
        </div>
      </div>
      <div className="absolute bottom-0 h-5"></div>
    </>
  );
};

export default Home;

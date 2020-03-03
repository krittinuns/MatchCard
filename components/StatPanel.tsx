import useSWR from "swr";

import { useGlobalState } from "./GlobalState";
import StatLabel from "../components/StatLabel";

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Stat = () => {
  const [click] = useGlobalState("click");
  const [myBestClick] = useGlobalState("myBestClick");

  const { data } = useSWR("/api/getGlobalBest", fetcher);
  const globalBest = data?.click;

  return (
    <div className="stat-panel">
      <StatLabel label="CLICK" value={click} />
      <StatLabel label="MY BEST" value={myBestClick} />
      <StatLabel label="GLOBAL BEST" value={globalBest} />
    </div>
  );
};

export default Stat;

import useSWR from "swr";

import { useGlobalState } from "./GlobalState";

function fetcher(url) {
  return fetch(url).then(r => r.json());
}

const Stat = () => {
  const [click] = useGlobalState("click");
  const [myBestClick] = useGlobalState("myBestClick");

  const { data } = useSWR("/api/getGlobalBest", fetcher);
  const globalBest = data?.click;

  return (
    <div>
      <h1>Click : {click}</h1>
      <h1>My Best : {myBestClick}</h1>
      <h1>Global Best : {globalBest}</h1>
    </div>
  );
};

export default Stat;

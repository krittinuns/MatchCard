import { useGlobalState } from "./State";

const Stat = () => {
  const [click, setClick] = useGlobalState("click");

  return (
    <div>
      <h1>Click : {click}</h1>
      <h1>My Best : 0</h1>
      <h1>Global Best : 0</h1>
    </div>
  );
};

export default Stat;

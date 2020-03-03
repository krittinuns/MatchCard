import _ from "lodash";
import "./styles.scss";

import Stat from "../components/Stat";
import Board from "../components/Board";

const generatePairingNumbers = (): Array<number> => {
  let numbers: Array<number> = [];
  numbers.push(..._.range(1, 7));
  numbers.push(..._.range(1, 7));
  numbers = _.shuffle(numbers);

  return numbers;
};

const App: Function = () => {
  const numbers = generatePairingNumbers();

  return (
    <div>
      <Stat />
      <Board numbers={numbers} />
    </div>
  );
};

export default App;

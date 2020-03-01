import _ from "lodash";

import Card from "../components/Card";

const generatePairNumbers = (): Array<number> => {
  let numbers: Array<number> = [];
  numbers.push(..._.range(1, 7));
  numbers.push(..._.range(1, 7));
  numbers = _.shuffle(numbers);

  return numbers;
};

const Board: Function = (): JSX.Element => {
  return (
    <div className="board">
      {generatePairNumbers().map((digit, index) => {
        return <Card key={index} digit={digit} />;
      })}
    </div>
  );
};

export default Board;

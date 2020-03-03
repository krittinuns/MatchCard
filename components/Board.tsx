import { useState } from "react";

import Card from "../components/Card";

type Props = {
  numbers: Array<number>;
};

const Board: Function = (props: Props): JSX.Element => {
  const [matchingNumber, setMatchingNumber] = useState(0);

  const onFlip = (cardId: number, clickingNumber: number) => {
    if (matchingNumber == 0) {
      setMatchingNumber(clickingNumber);
    } else {
      if (matchingNumber == clickingNumber) {
        console.log("MATCH!!");
        // set matched state to cards
      } else {
        console.log("missed...");
        // flip 2 cards down
      }
      setMatchingNumber(0);
    }
  };

  return (
    <div className="board">
      {props.numbers.map((number, index) => {
        return (
          <Card key={index} cardId={index} number={number} onFlip={onFlip} />
        );
      })}
    </div>
  );
};

export default Board;

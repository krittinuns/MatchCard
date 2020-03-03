import _ from "lodash";
import "./styles.scss";
import { useState, useRef } from "react";

import StatPanel from "../components/StatPanel";
import Board from "../components/Board";
import NewGameButton from "../components/NewGameButton";

const TOTAL_PAIRS = 6;

const generatePairingNumbers = (): Array<number> => {
  let numbers: Array<number> = [];
  numbers.push(..._.range(1, TOTAL_PAIRS + 1));
  numbers.push(..._.range(1, TOTAL_PAIRS + 1));
  numbers = _.shuffle(numbers);

  return numbers;
};

const Game: Function = () => {
  const [numbers, setNumbers] = useState(generatePairingNumbers());
  const boardRef = useRef();

  const newGame = () => {
    _.get(boardRef, "current").newGame();

    setTimeout(() => {
      setNumbers(generatePairingNumbers());
    }, 500);
  };

  return (
    <div>
      <StatPanel />
      <NewGameButton onClick={newGame} />
      <Board ref={boardRef} numbers={numbers} />
    </div>
  );
};

export default Game;

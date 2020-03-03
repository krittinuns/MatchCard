import { useState, useRef } from "react";
import _ from "lodash";

import { useGlobalState } from "./State";
import Card from "./Card";

type Props = {
  numbers: Array<number>;
};

const Board: Function = (props: Props): JSX.Element => {
  const [paringCardId, setParingCardId] = useState(null);
  const [click, setClick] = useGlobalState("click");
  const [, toggleGamePause] = useGlobalState("isGamePause");

  // create references to each card
  const refs = Array.from({ length: 12 }).map(() => useRef());

  // on card-flip handler
  const onFlip = (clickedCardId: number) => {
    setClick(click + 1);

    if (_.isNull(paringCardId)) {
      setParingCardId(clickedCardId);
    } else {
      const clickedCard = _.get(refs[clickedCardId], "current");
      const prevCard = _.get(refs[paringCardId], "current");

      if (clickedCard.getNumber() !== prevCard.getNumber()) {
        toggleGamePause(true);
        clickedCard.flipDown();
        prevCard.flipDown();
      }
      setParingCardId(null);
    }
  };

  return (
    <div className="board">
      {props.numbers.map((number, index) => {
        return (
          <Card
            key={index}
            cardId={index}
            number={number}
            onFlip={onFlip}
            ref={refs[index]}
          />
        );
      })}
    </div>
  );
};

export default Board;

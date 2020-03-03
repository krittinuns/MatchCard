import { useState, useEffect, useRef } from "react";
import _ from "lodash";

import { useGlobalState } from "./State";
import Card from "./Card";

type Props = {
  numbers: Array<number>;
};

const Board: Function = (props: Props): JSX.Element => {
  const [click, setClick] = useGlobalState("click");
  const [myBestClick, setMyBestClick] = useGlobalState("myBestClick");
  const [, toggleGamePause] = useGlobalState("isGamePause");

  const [paringCardId, setParingCardId] = useState(null);
  const [matchedPair, setMatchedPair] = useState(0);

  const totalPair = props.numbers.length / 2;
  const { LOCAL_STORAGE_MYBEST } = process.env;

  // create references to each card
  const refs = Array.from({ length: props.numbers.length }).map(() => useRef());

  useEffect(() => {
    // load best click
    const localBestClick = parseInt(localStorage.getItem(LOCAL_STORAGE_MYBEST));
    if (!_.isNaN(localBestClick)) {
      setMyBestClick(localBestClick);
    }
  });

  useEffect(() => {
    // game over
    if (matchedPair == totalPair) {
      // new best click
      if (click < myBestClick) {
        setMyBestClick(click);
        localStorage.setItem(LOCAL_STORAGE_MYBEST, click.toString());
      }
    }
  }, [matchedPair]);

  // on card-flip handler
  const onFlip = (clickedCardId: number) => {
    setClick(click + 1);

    if (_.isNull(paringCardId)) {
      setParingCardId(clickedCardId);
    } else {
      const clickedCard = _.get(refs[clickedCardId], "current");
      const prevCard = _.get(refs[paringCardId], "current");

      if (clickedCard.getNumber() !== prevCard.getNumber()) {
        // miss
        toggleGamePause(true);
        clickedCard.flipDown();
        prevCard.flipDown();
      } else {
        // match
        setMatchedPair(matchedPair + 1);
      }
      // reset pairing
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

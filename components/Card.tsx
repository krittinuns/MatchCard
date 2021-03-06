import { useState, forwardRef, useImperativeHandle } from "react";
import { useGlobalState } from "./GlobalState";

type Props = {
  cardId: number;
  number: number;
  onFlip: Function;
};

const Card: Function = forwardRef(
  (props: Props, ref): JSX.Element => {
    const [isReveal, toggleReveal] = useState(false);
    const [isGamePause, toggleGamePause] = useGlobalState("isGamePause");

    // functions that referer can call
    useImperativeHandle(ref, () => ({
      flipDown(delay = 1000) {
        setTimeout(() => {
          toggleReveal(false);
          toggleGamePause(false);
        }, delay);
      },
      getNumber() {
        return props.number;
      }
    }));

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      console.log("isGamePause : " + isGamePause);
      if (!(isReveal || isGamePause)) {
        toggleReveal(true);
        props.onFlip(props.cardId, props.number);
      }
    };

    return (
      <div
        className={isReveal ? "flip-card flip-card-reveal" : "flip-card"}
        onClick={handleClick}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front" />
          <div className="flip-card-back">
            {isReveal && <h1>{props.number}</h1>}
          </div>
        </div>
      </div>
    );
  }
);

export default Card;

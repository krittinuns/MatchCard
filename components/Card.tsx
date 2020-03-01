import { useState } from "react";
import { useGlobalState } from "./State";

type Props = { digit: number };

const Card = (props: Props) => {
  const [click, setClick] = useGlobalState("click");
  const [isReveal, toggleReveal] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    toggleReveal(!isReveal);
    setClick(current => current + 1);
  };

  return (
    <div
      className={isReveal ? "flip-card flip-card-reveal" : "flip-card"}
      onClick={handleClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front" />
        <div className="flip-card-back">
          {isReveal && <h1>{props.digit}</h1>}
        </div>
      </div>
    </div>
  );
};

export default Card;

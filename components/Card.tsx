import { useState, forwardRef } from "react";
// import { useGlobalState } from "./State";

type Props = {
  cardId: number;
  number: number;
  onFlip: Function;
};

const Card: Function = forwardRef((props: Props, ref) => {
  // const [click, setClick] = useGlobalState("click");
  // const [matching, setMatching] = useGlobalState("matching");
  const [isReveal, toggleReveal] = useState(false);
  const [isMatch, toggleMatch] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (!isMatch) {
      toggleReveal(!isReveal);

      // console.log(` *-*-*-*- ${props.number}`);

      props.onFlip(props.cardId, props.number);
    }

    // setClick(current => current + 1);

    // if (matching === 0) {
    //   setMatching(props.digit);
    // } else {
    //   console.log("matching --- : " + matching);
    //   if (matching === props.digit) {
    //     console.log("MATCH!!");
    //     // TODO : tell board to set match both cards
    //     props.onPairMatch(matching);
    //   }
    //   setMatching(0);
    // }
  };

  // console.log(` ????? ${props.number}`);
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
});

export default Card;

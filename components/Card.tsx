type Props = { digit: number };

const Card = (props: Props) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front" />
        <div className="flip-card-back">
          <h1>{props.digit}</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;

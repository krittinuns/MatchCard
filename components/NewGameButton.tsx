type Props = {
  onClick: Function;
};

const NewGameButton: Function = (props: Props): JSX.Element => {
  const handleClick = () => {
    props.onClick();
  };

  return (
    <div className="new-game">
      <button onClick={handleClick}>New Game</button>
    </div>
  );
};

export default NewGameButton;

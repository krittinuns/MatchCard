type Props = {
  onClick: Function;
};

const NewGameButton: Function = (props: Props): JSX.Element => {
  const handleClick = () => {
    props.onClick();
  };

  return <button onClick={handleClick}>New Game</button>;
};

export default NewGameButton;

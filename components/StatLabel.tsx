type Props = {
  label: string;
  value: number;
};

const StatLabel: Function = (props: Props): JSX.Element => {
  return (
    <div className="stat-label">
      <h2>{props.label}</h2>
      <p>{props.value}</p>
    </div>
  );
};

export default StatLabel;

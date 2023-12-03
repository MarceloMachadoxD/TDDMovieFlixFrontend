import './styles.css';

type Props = {
  buttonLabel: string;
};

export const Button = (props: Props) => {
  return (
    <button className="btn btn-primary btn-lg start-button">
      {props.buttonLabel}
    </button>
  );
};

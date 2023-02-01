import { IShortBreedInfo } from "../../interfaces/IShortBreedInfo";
import { useStyles } from "./styles";

interface IModal {
  data: IShortBreedInfo | undefined,
  onClick: (id: string) => void;
};

export const Modal = ({data, onClick}: IModal): JSX.Element | null => {
  const style = useStyles();

  const { name, description, life } = data || {};
  const { min, max } = life || {};

  const handleOnClick = () => {
    onClick('');
  };

  return !!data ? (
    <div className={style.wrapper}>
      <div className={style.container}>
        <button className={style.closeBtn} onClick={handleOnClick}>&#10006;</button>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{`${min}-${max} years`}</p>
      </div>
    </div>
  ) : null;
};

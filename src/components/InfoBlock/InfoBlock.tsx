import { IShortBreedInfo } from "../../interfaces/IShortBreedInfo";
import { useStyles } from "./styles";

export interface IInfoBlock {
  breedInfo: IShortBreedInfo,
  onClick: (id: string) => void
};

export const InfoBlock = ({ breedInfo, onClick }: IInfoBlock): JSX.Element => {
  const style = useStyles();

  const { id, name, description } = breedInfo;
  
  const shortDescription = description.split(' ').slice(0, 3).join(' ');

  const handleOnClick = () => onClick(id);

  return (
    <div className={style.primary} onClick={handleOnClick}>
      <h3>{name}</h3>
      <p>{shortDescription}</p>
    </div>
  )
};

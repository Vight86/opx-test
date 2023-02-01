import { memo } from "react";
import { InfoBlock } from "../InfoBlock/InfoBlock";
import { IShortBreedInfo } from "../../interfaces/IShortBreedInfo";
import { useStyles } from "./style";

interface IInfoList {
  data: IShortBreedInfo[],
  onClick: (it: string) => void
};

const InfoList = ({data, onClick}: IInfoList): JSX.Element => {
  const style = useStyles();

  return (
    <div className={style.primary}>
      {data.map(item => <InfoBlock key={item.id} breedInfo={item} onClick={onClick} />)}
    </div>
  )
};

export const InfoListMemo = memo(InfoList);
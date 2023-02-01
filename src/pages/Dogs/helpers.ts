import { IBreedInfo } from "../../interfaces/IBreedInfo";
import { IShortBreedInfo } from "../../interfaces/IShortBreedInfo";

export const getBreedsShortInfo = (info: IBreedInfo[]): IShortBreedInfo[] => {
  return info.map(({id, attributes}) => {
    const {name, description, life} = attributes;
    return {id, name, description, life};
  })
};

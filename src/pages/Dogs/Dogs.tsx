import { useCallback, useMemo, useState } from 'react';
import { InfoListMemo } from "../../components/InfoList/InfoList";
import { Modal } from '../../components/Modal/Modal';
import { BasicLayout } from "../../layouts/BasicLayout/BasicLayout";

import { useBreeds } from "./hooks";

export const Dogs = (): JSX.Element => {
  const [currentBreedId, setCurrentBreedId] = useState<string>('');

  const breeds = useBreeds('https://dogapi.dog/api/v2/breeds');
  const breedsMemo = useMemo(() => breeds, [breeds]);

  const currentBreed = breeds.find(breed => breed.id === currentBreedId);

  const toggleModal = useCallback((breedId: string) => {
    setCurrentBreedId(breedId);
  }, []);
   
  return (
    <BasicLayout>
      <InfoListMemo data={breedsMemo} onClick={toggleModal} />
      <Modal data={currentBreed} onClick={toggleModal} />
    </BasicLayout>
  );
};

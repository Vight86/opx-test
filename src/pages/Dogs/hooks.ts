import { useState, useEffect } from 'react';
import { getBreedsShortInfo } from './helpers';
import { IShortBreedInfo } from '../../interfaces/IShortBreedInfo';

export const useBreeds = (url: string): IShortBreedInfo[] => {
  const [breeds, setBreeds] = useState<IShortBreedInfo[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBreeds = async () => {
      try {
        const response = await fetch(url, {signal: controller.signal});
        const { data } = await response.json();
        const breedsShortInfo = getBreedsShortInfo(data);

        setBreeds(breedsShortInfo);
      } catch (err) {
        throw err;
      }
    };

    fetchBreeds();
    
    return () => controller.abort();
  }, [url]);

  return breeds;
};

import { useCallback, useEffect, useState } from "react";
import { LetterBlockMemo } from "../LetterBlock/LetterBlock";
import { isValueInArray, removeValueFromArray } from "./helpers";
import { useStyles } from "./styles";

export interface ILetterGrid {
  initLetters: string[]
}

export const LetterGrid = ({initLetters}: ILetterGrid): JSX.Element => {
  const style = useStyles();
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    if(letters.length === initLetters.length) {
      let shouldReverse = true;
      const id = setInterval(() => {
        setLetters(prevLetters => {
          !prevLetters.length && clearInterval(id);
          const reversedLetters = shouldReverse ? [...prevLetters].reverse() : [...prevLetters];
          shouldReverse = false;
          reversedLetters.pop();
          return reversedLetters;          
        });
        
      }, 200);
    }
  }, [letters.length, initLetters.length]);
  
  const onClick = (letter: string): void => {
    setLetters(prevCheckedLetters => {
      return isValueInArray(letter, prevCheckedLetters)
        ? removeValueFromArray(letter, prevCheckedLetters)
        : [...prevCheckedLetters, letter];
    });
  };

  const handleLetterBlockClick = useCallback((letter: string) => onClick(letter), []);

  return (
    <div className={style.primary}>
      {initLetters.map(letter => <LetterBlockMemo
        key={letter}
        letter={letter}
        checked={isValueInArray(letter, letters)}
        onClick={handleLetterBlockClick} />)}
      </div>
  );
};

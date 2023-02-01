import { memo } from "react";
import { useStyles } from "./styles"

export interface ILetterBlock {
  letter: string,
  checked: boolean,
  onClick: (s: string) => void
};

export const LetterBlock = ({letter, checked, onClick}: ILetterBlock): JSX.Element => {
  const styles = useStyles();

  const handleOnClick = () => onClick && onClick(letter);
  console.log('l render')

  return (
    <button
      className={checked ? styles.secondary : styles.primary}
      onClick={handleOnClick}>
        {letter}
    </button>
  );
};

export const LetterBlockMemo = memo(LetterBlock);

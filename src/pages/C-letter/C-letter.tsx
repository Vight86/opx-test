import { LetterGrid } from "../../components/LetterGrid/LetterGrid";
import { BasicLayout } from "../../layouts/BasicLayout/BasicLayout";

export const CLetter = () => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

  return (
    <BasicLayout>
      <LetterGrid initLetters={letters} />
    </BasicLayout>
  );
}
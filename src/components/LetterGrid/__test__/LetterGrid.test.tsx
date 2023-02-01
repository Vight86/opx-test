import { shallow } from "enzyme";
import { LetterGrid, ILetterGrid } from "../LetterGrid";
import { LetterBlock } from "../../LetterBlock/LetterBlock";

describe('<LetterGrid>', () => {
  const mockProps = {
    initLetters: ['A', 'B']
  };

  const setup = (props: ILetterGrid) => shallow(<LetterGrid {...props} />);

  test('should render correct number of letter blocks', () => {
    const component = setup(mockProps);
    expect(component.find(LetterBlock).length).toBe(2);
  });

  test('should render correct letters in blocks', () => {
    const component = setup(mockProps);
    component.find(LetterBlock).forEach((node, index) => {
      expect(node.prop('letter')).toBe(mockProps.initLetters[index]);
    });
  });
});
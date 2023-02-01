import { shallow } from 'enzyme';
import { LetterBlock, ILetterBlock } from '../LetterBlock';

describe('<LetterBlock>', () => {
  const mockProps: ILetterBlock = {
    letter: 'A',
    checked: false,
    onClick: jest.fn()
  }

  const setup = (props: ILetterBlock) => shallow(<LetterBlock {...props}/>);

  test('should render one button', () => {
    const component = setup(mockProps);
    expect(component.find('button').length).toBe(1);
  });

  test('should render button with correct letter', () => {
    const component = setup(mockProps);
    expect(component.find('button').text()).toBe(mockProps.letter);
  });

  test('should invoke onClick handler', () => {
    const component = setup(mockProps);
    component.find('button').simulate('click');
    expect(mockProps.onClick).toHaveBeenCalled();
  });
});

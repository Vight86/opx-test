import { shallow } from 'enzyme';
import { InfoBlock, IInfoBlock } from '../InfoBlock';

describe('<InfoBlock>', () => {
  const mockProps = {
    breedInfo: {
      id: '1',
      name: 'test',
      description: 'description',
      life: {
        min: 10,
        max: 20
      }
    },
    onClick: jest.fn()
  };

  const setup = (props: IInfoBlock) => shallow(<InfoBlock {...props} />);

  test('should render <div />', () => {
    const component = setup(mockProps);
    expect(component.find('div').length).toBe(1);
  });

  test('should render correct class name', () => {
    const component = setup(mockProps);
    expect(component.find('div').prop('className')).toBe('makeStyles-primary-1');
  });

  test('should render correct name', () => {
    const component = setup(mockProps);
    expect(component.find('h3').text()).toBe(mockProps.breedInfo.name);
  });

  test('should render correct description', () => {
    const component = setup(mockProps);
    expect(component.find('p').text()).toBe(mockProps.breedInfo.description);
  });

  test('should invoke onClick handler', () => {
    const component = setup(mockProps);
    component.find('div').simulate('click')
    expect(mockProps.onClick).toHaveBeenCalled();
  })
})
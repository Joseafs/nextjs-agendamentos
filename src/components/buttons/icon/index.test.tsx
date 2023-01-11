import { fireEvent, render } from '@testing-library/react';
import { ThemeUI } from '~/theme/theme-provider';
import { ButtonIcon } from '.';

const mockFn = jest.fn();

const component = (
  <ThemeUI>
    <ButtonIcon onClick={mockFn}>Text Icon Button</ButtonIcon>
  </ThemeUI>
);

describe('ButtonIcon', () => {
  it('Should click and call jest.fn', () => {
    const { queryByText } = render(component);

    const btn = queryByText('Text Icon Button') as HTMLButtonElement;
    fireEvent.click(btn);

    expect(mockFn).toBeCalled();
  });
});

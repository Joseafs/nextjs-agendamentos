import { fireEvent, render } from '@testing-library/react';
import { ThemeUI } from '~/theme/theme-provider';
import { InputText } from '.';

const mockFn = jest.fn();

const inputValue = 'Yamamoto Genryuusai Shigekuni';

const component = (
  <ThemeUI>
    <InputText name="test" onChange={mockFn} label="Input test"></InputText>
  </ThemeUI>
);

describe('InputText', () => {
  it('Should check input change', () => {
    const { getByTestId } = render(component);

    const input = getByTestId('input-test') as HTMLInputElement;
    fireEvent.change(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
    expect(mockFn).toBeCalledTimes(1);
  });
});

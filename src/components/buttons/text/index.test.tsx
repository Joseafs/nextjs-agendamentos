import { render } from '@testing-library/react';
import { ThemeUI } from '~/theme/theme-provider';
import { ButtonText } from '.';

const component = (disabled?: boolean) => (
  <ThemeUI>
    <ButtonText text="Text test" disabled={disabled}></ButtonText>
  </ThemeUI>
);

describe('ButtonText', () => {
  it('Should have text', () => {
    const { queryByText } = render(component());
    expect(queryByText('Text test')).toBeTruthy();
  });
  it('Should check for disabled attribute', () => {
    const { queryByText } = render(component(true));
    expect(queryByText('Text test')).toBeDisabled();
  });
});

import { render } from '@testing-library/react';
import { ThemeUI } from '~/theme/theme-provider';
import { SectionBase } from '.';

const text = 'Gon Freecss';

const component = (
  <ThemeUI>
    <SectionBase fixed>{text}</SectionBase>
  </ThemeUI>
);

describe('SectionBase', () => {
  it('Should have text', () => {
    const { queryByText } = render(component);
    expect(queryByText(text)).toBeTruthy();
  });
});

import { render } from '@testing-library/react';
import { ThemeUI } from '~/theme/theme-provider';
import { ScreenHome } from '.';

const component = (
  <ThemeUI>
    <ScreenHome />
  </ThemeUI>
);

describe('ScreenHome', () => {
  it('Should have the text inside', () => {
    const { queryByText } = render(component);
    expect(queryByText('Boilerplate NextJs + Styled-components')).toBeTruthy();
  });
});

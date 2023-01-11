import { render } from '@testing-library/react';
import { ThemeUI } from '~/theme/theme-provider';
import { Grid } from '.';

const component = (
  <ThemeUI>
    <Grid>Text test</Grid>
  </ThemeUI>
);

describe('Grid', () => {
  it('Should have the content', () => {
    const { queryByText } = render(component);
    expect(queryByText('Text test')).toBeTruthy();
  });
});

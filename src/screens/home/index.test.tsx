import { render } from '@testing-library/react';
import { createContext } from 'react';
import { ThemeUI } from '~/theme/theme-provider';
import { SiteStore } from '~/utils/stores/site';
import { ScreenHome } from '.';

const UserContext = createContext({});

const user = { scheduling: [] };

const component = (
  <SiteStore>
    <ThemeUI>
      <ScreenHome />
    </ThemeUI>
  </SiteStore>
);

describe('ScreenHome', () => {
  it('Should have the text inside', () => {
    const { queryByText } = render(component);
    expect(queryByText('Agendamento Online')).toBeTruthy();
  });
});

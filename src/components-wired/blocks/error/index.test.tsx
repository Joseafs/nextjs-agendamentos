import { render } from '@testing-library/react';
import { ThemeUI } from '~/theme/theme-provider';
import { SiteContext } from '~/utils/stores/site';
import { BlockErrorWired } from '.';

export const listError = [
  {
    id: 'test-11',
    text: <>Text Test 11</>
  },
  {
    id: 'test-22',
    text: <>Text Test 22</>
  },
  {
    id: 'test-33',
    text: <>Text Test 33</>
  }
];

const component = (
  <SiteContext.Provider
    value={{
      // @ts-ignore: Unreachable code error
      state: { error: listError }
    }}
  >
    <ThemeUI>
      <BlockErrorWired />
    </ThemeUI>
  </SiteContext.Provider>
);

describe('BlockErrorWired', () => {
  it('Should have the list of text from Context', () => {
    const { queryByText } = render(component);
    expect(queryByText('Text Test 11')).toBeTruthy();
    expect(queryByText('Text Test 22')).toBeTruthy();
    expect(queryByText('Text Test 33')).toBeTruthy();
  });
});

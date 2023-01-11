import { render } from '@testing-library/react';
import { ThemeUI } from '~/theme/theme-provider';
import { BlockError } from '.';

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
  <ThemeUI>
    <BlockError list={listError} />
  </ThemeUI>
);
const componentEmpty = (
  <ThemeUI>
    <BlockError list={[]} />
  </ThemeUI>
);

describe('BlockError', () => {
  it('Should have the list of text', () => {
    const { queryByText } = render(component);
    expect(queryByText('Text Test 11')).toBeTruthy();
    expect(queryByText('Text Test 22')).toBeTruthy();
    expect(queryByText('Text Test 33')).toBeTruthy();
  });
  it('Should not have the initial text', () => {
    const { queryByText } = render(componentEmpty);
    expect(queryByText('ATENÇÃO')).toBeFalsy();
  });
});

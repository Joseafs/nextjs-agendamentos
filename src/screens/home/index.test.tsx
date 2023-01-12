import { act, fireEvent, render } from '@testing-library/react';
import { SiteContext } from '~/stores/site';
import { ThemeUI } from '~/theme/theme-provider';
import { TpSchedulingItem } from '~/types/common';
import { ScreenHome } from '.';

const mockSetError = jest.fn();
const mockSetErrorAddByName = jest.fn();
const mockSetErrorRemByName = jest.fn();
const mockSetErrorRemAll = jest.fn();
const mockSetScheduling = jest.fn();
const mockSetSchedulingConflicts = jest.fn();

const listScheduling = [
  {
    id: 1,
    title: 'Test Note A',
    dateTimeStart: '2023-01-03T15:22',
    dateTimeEnd: '2023-01-03T22:24'
  },

  {
    id: 2,
    title: 'Test Note B',
    dateTimeStart: '2000-02-03T01:22',
    dateTimeEnd: '2000-02-03T02:24'
  },
  {
    id: 3,
    title: 'Test Note C',
    dateTimeStart: '2021-01-03T01:22',
    dateTimeEnd: '2021-01-03T02:24'
  }
];

const componentScheduling = (conflicts: TpSchedulingItem[]) => (
  <SiteContext.Provider
    value={{
      state: {
        scheduling: listScheduling,
        schedulingConflicts: conflicts,
        error: []
      },
      dispatch: {
        setError: mockSetError,
        setErrorAddByName: mockSetErrorAddByName,
        setErrorRemByName: mockSetErrorRemByName,
        setErrorRemAll: mockSetErrorRemAll,
        setScheduling: mockSetScheduling,
        setSchedulingConflicts: mockSetSchedulingConflicts
      }
    }}
  >
    <ThemeUI>
      <ScreenHome />
    </ThemeUI>
  </SiteContext.Provider>
);

describe('ScreenHome', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('Should match snapshot', () => {
    const { container } = render(componentScheduling([]));
    expect(container).toMatchSnapshot();
  });

  it('Should call setScheduling when click to remove', async () => {
    const { getByTestId } = render(componentScheduling([listScheduling[0]]));
    const btnRemove = getByTestId('button-icon--remove-1') as HTMLButtonElement;

    await act(async () => {
      fireEvent.click(btnRemove);
    });

    expect(mockSetScheduling).toHaveBeenCalledTimes(1);
    expect(mockSetScheduling).toBeCalledWith([
      listScheduling[1],
      listScheduling[2]
    ]);
  });
  it('Should call setScheduling when remove all rows', async () => {
    const { getByTestId } = render(componentScheduling([listScheduling[0]]));
    const btnRemove1 = getByTestId(
      'button-icon--remove-1'
    ) as HTMLButtonElement;
    const btnRemove2 = getByTestId(
      'button-icon--remove-2'
    ) as HTMLButtonElement;
    const btnRemove3 = getByTestId(
      'button-icon--remove-3'
    ) as HTMLButtonElement;

    await act(async () => {
      fireEvent.click(btnRemove1);
      fireEvent.click(btnRemove2);
      fireEvent.click(btnRemove3);
    });

    expect(mockSetScheduling).toBeCalledTimes(3);
  });
});

import { fireEvent, render } from '@testing-library/react';
import { ThemeUI } from '~/theme/theme-provider';
import { TableScheduling } from '.';

const mockFn = jest.fn();

const listScheduling = [
  {
    id: 1,
    title: 'Test Note D',
    dateTimeStart: '2023-01-03T15:22',
    dateTimeEnd: '2023-01-03T22:24'
  },

  {
    id: 2,
    title: 'Test Note C',
    dateTimeStart: '2000-02-03T01:22',
    dateTimeEnd: '2000-02-03T02:24'
  },
  {
    id: 3,
    title: 'Test Note B',
    dateTimeStart: '2021-01-03T01:22',
    dateTimeEnd: '2021-01-03T02:24'
  },
  {
    id: 4,
    title: 'Test Note A',
    dateTimeStart: '2022-01-01T01:22',
    dateTimeEnd: '2022-01-01T02:24'
  },
  {
    id: 4,
    title: 'Test Note A',
    dateTimeStart: '2012-01-01T01:22',
    dateTimeEnd: '2012-01-01T02:24'
  },
  {
    id: 5,
    title: 'Test Note Z',
    dateTimeStart: '2024-01-01T01:22',
    dateTimeEnd: '2024-01-01T02:24'
  },
  {
    id: 6,
    title: 'Test Note G',
    dateTimeStart: '2018-01-01T01:22',
    dateTimeEnd: '2018-01-01T02:24'
  },
  {
    id: 7,
    title: 'Test Note 123',
    dateTimeStart: '2017-01-01T01:22',
    dateTimeEnd: '2017-01-01T02:24'
  },
  {
    id: 8,
    title: 'Test Note Lorem',
    dateTimeStart: '2016-01-01T01:22',
    dateTimeEnd: '2016-01-01T02:24'
  }
];

const component = (
  <ThemeUI>
    <TableScheduling
      listScheduling={listScheduling}
      listConflictsID={[5, 6, 7]}
      onDelete={mockFn}
    />
  </ThemeUI>
);

describe('TableScheduling', () => {
  it('Should check itens of the list', () => {
    const { queryAllByText } = render(component);
    expect(queryAllByText(listScheduling[0].title)).toBeTruthy();
    expect(queryAllByText(listScheduling[1].title)).toBeTruthy();
    expect(queryAllByText(listScheduling[2].title)).toBeTruthy();
    expect(queryAllByText(listScheduling[3].title)).toBeTruthy();
  });
  it('Should check the first item of the role after order by click in fields', () => {
    const { queryByText, getAllByRole } = render(component);

    const cellTitle = queryByText('Título') as HTMLTableCellElement;
    const cellDtStart = queryByText('Início') as HTMLTableCellElement;
    const cellDtEnd = queryByText('Fim') as HTMLTableCellElement;

    let listByRole = getAllByRole('row');

    expect(listByRole).toHaveLength(10);
    expect(listByRole[1]).toHaveTextContent('Test Note Z');

    fireEvent.click(cellDtStart);
    listByRole = getAllByRole('row');
    expect(listByRole[1]).toHaveTextContent('Test Note C');

    fireEvent.click(cellTitle);
    fireEvent.click(cellTitle);
    fireEvent.click(cellTitle);
    listByRole = getAllByRole('row');
    expect(listByRole[1]).toHaveTextContent('Test Note 123');

    fireEvent.click(cellDtEnd);
    fireEvent.click(cellDtEnd);
    listByRole = getAllByRole('row');
    expect(listByRole[1]).toHaveTextContent('Test Note C');
  });
  it('Should use mockFn when click to remove', () => {
    const { getByTestId } = render(component);
    const btnRemove = getByTestId('button-icon--remove-1') as HTMLButtonElement;
    fireEvent.click(btnRemove);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  it('Should check by listConflictsID', () => {
    const { getAllByRole } = render(component);

    let listByRole = getAllByRole('row');
    expect(listByRole[1]).toHaveClass('conflict');
    expect(listByRole[5]).toHaveClass('conflict');
    expect(listByRole[6]).toHaveClass('conflict');
  });
});

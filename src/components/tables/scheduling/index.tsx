import { DateTime, Interval } from 'luxon';
import { memo, useEffect, useState } from 'react';
import { BsArrowDown } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { TpSchedulingItem } from '~/types/common';
import { calcHoursAndMinutesByMinutes } from '~/utils/calc/time';
import { ButtonRemove, IconSort, Root, Table, TableTh } from './styled';

type PropsSortFields = 'title' | 'dateTimeStart' | 'dateTimeEnd' | string;
interface Props {
  listScheduling: TpSchedulingItem[];
  listConflictsID?: number[];
  onDelete?: (id: number) => void;
}

function descendingOrder<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const handleSortByField = (
  list: TpSchedulingItem[],
  field: PropsSortFields,
  order: 'asc' | 'desc'
) => {
  const commonText = ['title'];

  if (commonText.includes(field)) {
    return list.sort((a, b) =>
      order === 'asc'
        ? -descendingOrder(a, b, field)
        : descendingOrder(a, b, field)
    );
  } else {
    return list.sort((a, b) =>
      order === 'asc'
        ? new Date(b[field]).getTime() - new Date(a[field]).getTime()
        : new Date(a[field]).getTime() - new Date(b[field]).getTime()
    );
  }
};

const OgTableScheduling = ({
  listScheduling,
  listConflictsID = [],
  onDelete
}: Props) => {
  const [list, setList] = useState<TpSchedulingItem[]>([]);
  const [sortBy, setSortBy] = useState<PropsSortFields>('dateTimeStart');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleClickSort = (field: PropsSortFields) => {
    const isAsc = sortBy === field && sortOrder === 'asc';
    setSortBy(field);
    setSortOrder(isAsc ? 'desc' : 'asc');
  };

  useEffect(() => {
    const newList = handleSortByField(listScheduling, sortBy, sortOrder);
    setList([...newList]);
  }, [sortOrder, sortBy, listScheduling]);

  return list.length > 0 ? (
    <Root>
      <Table>
        <thead>
          <tr>
            <TableTh align="center" onClick={() => handleClickSort('title')}>
              T??tulo
              <IconSort
                active={sortBy === 'title' && sortOrder === 'asc'}
                visible={sortBy === 'title'}
              >
                <BsArrowDown />
              </IconSort>
            </TableTh>
            <TableTh
              align="center"
              onClick={() => handleClickSort('dateTimeStart')}
            >
              In??cio
              <IconSort
                active={sortBy === 'dateTimeStart' && sortOrder === 'asc'}
                visible={sortBy === 'dateTimeStart'}
              >
                <BsArrowDown />
              </IconSort>
            </TableTh>
            <TableTh
              align="center"
              onClick={() => handleClickSort('dateTimeEnd')}
            >
              Fim
              <IconSort
                active={sortBy === 'dateTimeEnd' && sortOrder === 'asc'}
                visible={sortBy === 'dateTimeEnd'}
              >
                <BsArrowDown />
              </IconSort>
            </TableTh>
            <th align="center">Dura????o</th>
            {onDelete && <th align="center">Apagar</th>}
          </tr>
        </thead>
        <tbody>
          {list.length > 0 &&
            sortBy &&
            list.map(({ id, title, dateTimeStart, dateTimeEnd }, index) => {
              const dtStart = DateTime.fromISO(dateTimeStart);
              const dtEnd = DateTime.fromISO(dateTimeEnd);
              const dtDurationMin = Interval.fromDateTimes(
                dtStart,
                dtEnd
              ).length('minutes');

              const dtDuration = calcHoursAndMinutesByMinutes(dtDurationMin);

              return (
                <tr
                  key={`tr-${title}-${index}`}
                  className={listConflictsID.includes(id) ? 'conflict' : ''}
                >
                  <td data-th="T??tulo" align="center">
                    {title}
                  </td>
                  <td data-th="In??cio" align="center">
                    {dtStart.toFormat(`dd/MM/yyyy`)} <br />{' '}
                    {dtStart.toFormat(`HH:mm`)}
                  </td>
                  <td data-th="Fim" align="center">
                    {dtEnd.toFormat(`dd/MM/yyyy`)} <br />{' '}
                    {dtEnd.toFormat(`HH:mm`)}
                  </td>
                  <td data-th="Dura????o" align="center">
                    {dtDuration}
                  </td>
                  {onDelete && (
                    <td align="center" width={120}>
                      <ButtonRemove
                        color="error"
                        onClick={() => onDelete(id)}
                        name={`remove-${id}`}
                      >
                        <MdDelete size="1.2rem" />
                      </ButtonRemove>
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Root>
  ) : null;
};

export const TableScheduling = memo(OgTableScheduling);

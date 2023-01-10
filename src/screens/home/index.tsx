import { memo, useContext, useEffect, useState } from 'react';
import { BlockWarning } from '~/components/elements/styled';
import { FormikScheduling } from '~/components/formik/scheduling';
import { SectionBase } from '~/components/sections/base';
import { TableScheduling } from '~/components/tables/scheduling';
import { TemplateScreen } from '~/components/templates/screen';
import { TpSchedulingItem } from '~/types/scheduling';
import { SiteContext } from '~/utils/stores/site';

const listMock = [
  {
    id: 1,
    title: 'Lorem Ipsum A',
    dateTimeStart: '2023-01-03T15:22',
    dateTimeEnd: '2023-01-03T22:24'
  },
  {
    id: 21,
    title: 'Lorem Ipsum A-2',
    dateTimeStart: '2023-01-03T01:22',
    dateTimeEnd: '2023-01-03T02:24'
  },
  {
    id: 211,
    title: 'Lorem Ipsum A-2-1',
    dateTimeStart: '2000-02-03T01:22',
    dateTimeEnd: '2000-02-03T02:24'
  },
  {
    id: 222,
    title: 'Lorem Ipsum A-2-2',
    dateTimeStart: '2000-02-03T01:22',
    dateTimeEnd: '2001-01-03T02:24'
  },
  {
    id: 233,
    title: 'Lorem Ipsum A-2-3',
    dateTimeStart: '2000-02-03T01:22',
    dateTimeEnd: '2026-06-03T12:24'
  },
  {
    id: 3,
    title: 'Lorem Ipsum B',
    dateTimeStart: '2023-01-11T18:26',
    dateTimeEnd: '2023-01-11T22:24'
  },
  {
    id: 4,
    title: 'Lorem Ipsum B-2',
    dateTimeStart: '2023-01-02T18:26',
    dateTimeEnd: '2023-01-02T22:24'
  },
  {
    id: 5,
    title: 'Lorem Ipsum C',
    dateTimeStart: '2023-01-16T15:22',
    dateTimeEnd: '2023-01-16T19:24'
  },
  {
    id: 6,
    title: 'Lorem Ipsum C-2',
    dateTimeStart: '2023-01-28T15:22',
    dateTimeEnd: '2023-01-28T19:24'
  },
  {
    id: 7,
    title: 'Lorem Ipsum D',
    dateTimeStart: '2023-01-26T18:26',
    dateTimeEnd: '2023-01-26T22:24'
  },
  {
    id: 8,
    title: 'Lorem Ipsum D-2',
    dateTimeStart: '2023-01-15T18:26',
    dateTimeEnd: '2023-01-15T22:24'
  }
];

const OgScreenHome = () => {
  const { state, dispatch } = useContext(SiteContext);

  const [list, setList] = useState<TpSchedulingItem[]>([]);
  const [listConflicts, setListConflicts] = useState<number[]>([]);

  useEffect(() => {
    if (state.scheduling.length < 1) return;
    setList(state.scheduling);
    if (state.schedulingConflicts.length < 1) {
      setListConflicts([]);
      return;
    }
    const listConflictIDs = state.schedulingConflicts.map((item) => item.id);
    setListConflicts(listConflictIDs);
  }, [state]);

  const Inject = () => {
    dispatch.setScheduling([...list, ...listMock]);
  };

  const handleDelete = (id: number) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    dispatch.setScheduling(newList);
  };

  return (
    <TemplateScreen>
      <SectionBase fixed>
        <h1>Agendamento Online</h1>
        <FormikScheduling />
        {listConflicts.length > 0 && (
          <BlockWarning>
            <h5>
              Não será possível criar novos agendamentos, resolva os conflitos
              para continuar
            </h5>
            <h6>
              Conflitos Identificados: <strong>{listConflicts.length}</strong>
            </h6>
          </BlockWarning>
        )}
        <TableScheduling
          listScheduling={list}
          onDelete={handleDelete}
          listConflictsID={listConflicts}
        />
        <button onClick={Inject}>Inject</button>
      </SectionBase>
    </TemplateScreen>
  );
};

export const ScreenHome = memo(OgScreenHome);

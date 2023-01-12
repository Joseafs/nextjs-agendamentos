import { memo, useContext, useEffect, useState } from 'react';
import { BlockErrorWired } from '~/components-wired/blocks/error';
import { FormikSchedulingWired } from '~/components-wired/formik/scheduling';
import { SectionBase } from '~/components/sections/base';
import { TableScheduling } from '~/components/tables/scheduling';
import { TemplateScreen } from '~/components/templates/screen';
import { SiteContext } from '~/stores/site';
import { TpSchedulingItem } from '~/types/common';
import { errorSchedulingConflicts } from '~/utils/warnings/error';
import { Title } from './styled';

const OgScreenHome = () => {
  const { state, dispatch } = useContext(SiteContext);

  const { scheduling, schedulingConflicts } = state;

  const [list, setList] = useState<TpSchedulingItem[]>([]);
  const [listConflicts, setListConflicts] = useState<number[]>([]);

  useEffect(() => {
    if (state.scheduling.length < 1) return;
    setList(state.scheduling);
    if (state.schedulingConflicts.length < 1) {
      setListConflicts([]);
      dispatch.setErrorRemByName('schedulingConflicts');
      return;
    }
    const listConflictIDs = state.schedulingConflicts.map((item) => item.id);
    setListConflicts(listConflictIDs);

    dispatch.setErrorAddByName(
      'schedulingConflicts',
      errorSchedulingConflicts(listConflictIDs.length)
    );
  }, [schedulingConflicts, scheduling]);

  const handleDelete = (id: number) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    dispatch.setScheduling(newList);
  };

  return (
    <TemplateScreen>
      <SectionBase fixed>
        <Title>Agendamento Online</Title>
        <FormikSchedulingWired />
        <BlockErrorWired />
        <TableScheduling
          listScheduling={list}
          onDelete={handleDelete}
          listConflictsID={listConflicts}
        />
      </SectionBase>
    </TemplateScreen>
  );
};

export const ScreenHome = memo(OgScreenHome);

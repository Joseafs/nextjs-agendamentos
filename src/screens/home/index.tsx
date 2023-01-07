import { memo, useContext, useEffect, useState } from 'react';
import { FormikScheduling } from '~/components/formik/scheduling';
import { SectionBase } from '~/components/sections/base';
import { TableEnhanced } from '~/components/tables/enhanced';
import { TemplateScreen } from '~/components/templates/screen';
import { TpSchedulingItem } from '~/types/scheduling';
import { SiteContext } from '~/utils/stores/site';

const OgScreenHome = () => {
  const { state } = useContext(SiteContext);

  const [list, setList] = useState<TpSchedulingItem[]>([]);

  useEffect(() => {
    if (state.scheduling.length < 1) return;
    setList(state.scheduling);
  }, [state.scheduling]);

  return (
    <TemplateScreen>
      <SectionBase fixed>
        <h1>Agendamento Online</h1>
        <FormikScheduling />
        <TableEnhanced list={list} />
      </SectionBase>
    </TemplateScreen>
  );
};

export const ScreenHome = memo(OgScreenHome);

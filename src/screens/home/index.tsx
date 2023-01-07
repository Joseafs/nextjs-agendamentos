import { memo } from 'react';
import { FormikScheduling } from '~/components/formik/scheduling';
import { SectionBase } from '~/components/sections/base';
import { TemplateScreen } from '~/components/templates/screen';

const OgScreenHome = () => {
  return (
    <TemplateScreen>
      <SectionBase fixed>
        <FormikScheduling />
      </SectionBase>
    </TemplateScreen>
  );
};

export const ScreenHome = memo(OgScreenHome);

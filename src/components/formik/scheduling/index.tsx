import { useFormikContext } from 'formik';
import { memo } from 'react';
import { Grid } from '~/components/blocks/grid';
import { ButtonText } from '~/components/buttons/text';
import { InputText } from '~/components/inputs/text';
import { TpSchedulingItem } from '~/types/common';
import { GridContent, Root } from './styled';

type Props = {
  disabled?: boolean;
};

const OgFormikScheduling = ({ disabled }: Props) => {
  const { values, setFieldValue } = useFormikContext<TpSchedulingItem>();

  return (
    <Root id="formik--scheduling-root">
      <Grid flex mgn={[1]}>
        <InputText
          required
          name="title"
          type="text"
          label="Título"
          value={values.title}
          placeholder="Informe o Título do agendamento"
          onChange={(e) => setFieldValue('title', e.target.value)}
        />
      </Grid>
      <GridContent>
        <Grid flex mgn={[1]}>
          <InputText
            required
            name="dateTimeStart"
            type="datetime-local"
            max={values.dateTimeEnd}
            label="Dia e horário de início"
            value={values.dateTimeStart}
            onChange={(e) => setFieldValue('dateTimeStart', e.target.value)}
          />
        </Grid>
        <Grid flex mgn={[1]}>
          <InputText
            required
            name="dateTimeEnd"
            type="datetime-local"
            min={values.dateTimeStart}
            label="Dia e horário de fim"
            value={values.dateTimeEnd}
            onChange={(e) => setFieldValue('dateTimeEnd', e.target.value)}
          />
        </Grid>
      </GridContent>
      <Grid flex mgn={[2, 1]}>
        <ButtonText
          color="primary"
          text="Agendar"
          type="submit"
          disabled={disabled}
        />
      </Grid>
    </Root>
  );
};

export const FormikScheduling = memo(OgFormikScheduling);

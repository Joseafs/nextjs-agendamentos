import { useFormik } from 'formik';
import { memo } from 'react';
import { Grid } from '~/components/blocks/grid';
import { ButtonText } from '~/components/buttons/text';
import { InputText } from '~/components/inputs/text';
import { FormContent, Root } from './styled';

type PropsFormik = {
  title: string;
  timeStart: string;
  timeEnd: string;
};

const OgFormikScheduling = () => {
  const handleSubmit = async (values: PropsFormik) => {
    console.log('tte--inset', values);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      timeStart: '',
      timeEnd: ''
    },
    onSubmit: handleSubmit
  });

  return (
    <Root>
      <FormContent onSubmit={formik.handleSubmit}>
        <Grid flex mgn={[1]}>
          <InputText
            name="title"
            type="text"
            label="Título"
            value={formik.values.title}
            onChange={formik.handleChange}
          />
        </Grid>
        <Grid flex>
          <Grid flex mgn={[1]}>
            <InputText
              name="timeStart"
              type="datetime-local"
              label="Dia e horário de início"
              value={formik.values.timeStart}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid flex mgn={[1]}>
            <InputText
              name="timeEnd"
              type="datetime-local"
              label="Dia e horário de fim"
              value={formik.values.timeEnd}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
        <Grid flex mgn={[2, 1]}>
          <ButtonText color="primary" text="Agendar" type="submit" />
        </Grid>
      </FormContent>
    </Root>
  );
};

export const FormikScheduling = memo(OgFormikScheduling);

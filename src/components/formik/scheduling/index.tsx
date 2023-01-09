import { useFormik } from 'formik';
import { memo, useContext } from 'react';
import { Grid } from '~/components/blocks/grid';
import { ButtonText } from '~/components/buttons/text';
import { InputText } from '~/components/inputs/text';
import { TpSchedulingItem } from '~/types/scheduling';
import { SiteContext } from '~/utils/stores/site';
import { FormContent, Root } from './styled';

const OgFormikScheduling = () => {
  const { dispatch, state } = useContext(SiteContext);

  const handleSubmit = async (values: TpSchedulingItem) => {
    dispatch.setScheduling([...state.scheduling, values]);
  };

  const formik = useFormik({
    initialValues: {
      title: 'Lorem Ipsum',
      timeStart: '2023-01-18T18:11',
      timeEnd: '2023-01-27T18:11'
    },
    onSubmit: handleSubmit
  });

  return (
    <Root>
      <FormContent onSubmit={formik.handleSubmit}>
        <Grid flex mgn={[1]}>
          <InputText
            required
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
              required
              name="timeStart"
              type="datetime-local"
              max={formik.values.timeEnd}
              label="Dia e horário de início"
              value={formik.values.timeStart}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid flex mgn={[1]}>
            <InputText
              required
              name="timeEnd"
              type="datetime-local"
              min={formik.values.timeStart}
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

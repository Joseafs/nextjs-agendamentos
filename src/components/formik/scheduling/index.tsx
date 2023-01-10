import { useFormik } from 'formik';
import { DateTime, Interval } from 'luxon';
import { memo, useContext, useEffect, useState } from 'react';
import { Grid } from '~/components/blocks/grid';
import { ButtonText } from '~/components/buttons/text';
import { InputText } from '~/components/inputs/text';
import { TpSchedulingItem } from '~/types/scheduling';
import { SiteContext } from '~/utils/stores/site';
import { FormContent, Root } from './styled';

const OgFormikScheduling = () => {
  const { dispatch, state } = useContext(SiteContext);
  const [conflict, setConflict] = useState(false);

  const handleSubmit = async (values: TpSchedulingItem) => {
    const id = state.scheduling.length;
    const valuesObj = { ...values, id };
    dispatch.setScheduling([...state.scheduling, valuesObj]);
  };

  const formik = useFormik({
    initialValues: {
      id: 0,
      title: '',
      dateTimeStart: '',
      dateTimeEnd: '',
      duration: ''
    },
    onSubmit: handleSubmit
  });

  useEffect(() => {
    const dtStartISO = DateTime.fromISO(formik.values.dateTimeStart);
    const dtEndISO = DateTime.fromISO(formik.values.dateTimeEnd);
    const intervalInput = Interval.fromDateTimes(dtStartISO, dtEndISO);

    const isDateTimeRegistered = state.scheduling.filter((item) => {
      const dtStartItem = DateTime.fromISO(item.dateTimeStart);
      const dtEndItem = DateTime.fromISO(item.dateTimeEnd);

      const dtStartInterval = intervalInput.contains(dtStartItem);
      const dtEndInterval = intervalInput.contains(dtEndItem);

      return dtStartInterval || dtEndInterval;
    });

    if (isDateTimeRegistered.length > 0) {
      setConflict(true);
      return;
    }
    setConflict(false);
  }, [formik.values, state.scheduling]);

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
              name="dateTimeStart"
              type="datetime-local"
              max={formik.values.dateTimeEnd}
              label="Dia e horário de início"
              value={formik.values.dateTimeStart}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid flex mgn={[1]}>
            <InputText
              required
              name="dateTimeEnd"
              type="datetime-local"
              min={formik.values.dateTimeStart}
              label="Dia e horário de fim"
              value={formik.values.dateTimeEnd}
              onChange={formik.handleChange}
            />
          </Grid>
        </Grid>
        <Grid flex mgn={[2, 1]}>
          <ButtonText
            color="primary"
            text="Agendar"
            type="submit"
            disabled={conflict}
          />
        </Grid>
      </FormContent>
    </Root>
  );
};

export const FormikScheduling = memo(OgFormikScheduling);

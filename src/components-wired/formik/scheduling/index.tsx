import { Form, Formik, FormikProps } from 'formik';
import { DateTime, Interval } from 'luxon';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { FormikScheduling } from '~/components/formik/scheduling';
import { SchedulingInitial, TpSchedulingItem } from '~/types/common';
import { SiteContext } from '~/utils/stores/site';
import { errorSchedulingEndBiggerThanStart } from '~/utils/warnings/error';

const OgFormikSchedulingWired = () => {
  const { dispatch, state } = useContext(SiteContext);
  const [error, setError] = useState(false);
  const [values, setValues] = useState<TpSchedulingItem>();

  const formRef = useRef<FormikProps<TpSchedulingItem>>(null);

  const handlerSubmit = (values: TpSchedulingItem) => {
    if (error) return;

    console.log('tte--values-sub', values, formRef.current?.values);
    const id = state.scheduling.length;
    const valuesObj = { ...values, id };
    dispatch.setScheduling([...state.scheduling, valuesObj]);
    formRef.current?.resetForm();
    setValues(SchedulingInitial);
  };

  const handlerValid = (values: TpSchedulingItem) => {
    if (!values) return;
    setValues(values);
  };

  useEffect(() => {
    if (!values) return;
    const dtStartISO = DateTime.fromISO(values.dateTimeStart);
    const dtEndISO = DateTime.fromISO(values.dateTimeEnd);
    const intervalInput = Interval.fromDateTimes(dtStartISO, dtEndISO);

    if (dtStartISO >= dtEndISO) {
      dispatch.setErrorAddByName(
        'schedulingEndBiggerThanStart',
        errorSchedulingEndBiggerThanStart()
      );
      setError(true);
      return;
    }
    dispatch.setErrorRemByName('schedulingEndBiggerThanStart');

    const isDateTimeRegistered = state.scheduling.filter((item) => {
      const dtStartItem = DateTime.fromISO(item.dateTimeStart);
      const dtEndItem = DateTime.fromISO(item.dateTimeEnd);
      const intervalRegistered = Interval.fromDateTimes(dtStartItem, dtEndItem);

      const dtStartInterval = intervalInput.contains(dtStartItem);
      const dtEndInterval = intervalInput.contains(dtEndItem);

      const dtStartIntervalRegistered = intervalRegistered.contains(dtStartISO);
      const dtEndIntervalRegistered = intervalRegistered.contains(dtEndISO);

      return (
        dtStartInterval ||
        dtEndInterval ||
        dtStartIntervalRegistered ||
        dtEndIntervalRegistered
      );
    });

    if (isDateTimeRegistered.length > 0) {
      dispatch.setSchedulingConflicts(isDateTimeRegistered);
      setError(true);
      return;
    }
    setError(false);
    dispatch.setSchedulingConflicts([]);
  }, [values, state.scheduling]);

  return (
    <Formik
      innerRef={formRef}
      initialValues={SchedulingInitial}
      onSubmit={handlerSubmit}
      validate={handlerValid}
    >
      <Form>
        <FormikScheduling disabled={error} />
      </Form>
    </Formik>
  );
};

export const FormikSchedulingWired = memo(OgFormikSchedulingWired);

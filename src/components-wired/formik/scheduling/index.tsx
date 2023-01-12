import { Form, Formik, FormikProps } from 'formik';
import { DateTime, Interval } from 'luxon';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { FormikScheduling } from '~/components/formik/scheduling';
import { SchedulingInitial, TpSchedulingItem } from '~/types/common';
import { SiteContext } from '~/utils/stores/site';
import {
  errorSchedulingEndBiggerThanStart,
  errorSchedulingTitle
} from '~/utils/warnings/error';

const OgFormikSchedulingWired = () => {
  const { dispatch, state } = useContext(SiteContext);
  const [error, setError] = useState(true);
  const [values, setValues] = useState<TpSchedulingItem>();

  const formRef = useRef<FormikProps<TpSchedulingItem>>(null);

  const handlerSubmit = (values: TpSchedulingItem) => {
    if (error) return;
    const countIDS = state.scheduling.map((item) => item.id);
    const maxID = Math.max(...countIDS);
    const id = maxID === -Infinity ? 0 : maxID + 1;
    const valuesObj = { ...values, id };
    dispatch.setScheduling([...state.scheduling, valuesObj]);
    formRef.current?.resetForm();
    setValues(SchedulingInitial);
  };

  const handlerValidate = (values: TpSchedulingItem) => {
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
      return;
    }

    dispatch.setSchedulingConflicts([]);
  }, [values, state.scheduling]);

  useEffect(() => {
    if (!values) return;
    if (values.title.length < 3) {
      dispatch.setErrorAddByName('schedulingTitle', errorSchedulingTitle());
      return;
    }
    dispatch.setErrorRemByName('schedulingTitle');
  }, [values?.title]);

  useEffect(() => {
    if (
      !values ||
      !values.title ||
      !values.dateTimeEnd ||
      !values.dateTimeStart
    ) {
      setError(true);
      return;
    }
    if (state.error.length > 0) {
      setError(true);
      return;
    }
    setError(false);
  }, [state.error]);

  return (
    <Formik
      innerRef={formRef}
      initialValues={SchedulingInitial}
      onSubmit={handlerSubmit}
      validate={handlerValidate}
    >
      <Form>
        <FormikScheduling disabled={error} />
      </Form>
    </Formik>
  );
};

export const FormikSchedulingWired = memo(OgFormikSchedulingWired);

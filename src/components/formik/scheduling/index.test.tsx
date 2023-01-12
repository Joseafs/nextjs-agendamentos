import { act, fireEvent, render } from '@testing-library/react';
import { Formik } from 'formik';
import { ThemeUI } from '~/theme/theme-provider';
import { SchedulingInitial } from '~/types/common';
import { FormikScheduling } from '.';

const mockFn = jest.fn();

const title = 'Scheluing for Series';
const dateTimeStart = '2016-01-01T01:22';
const dateTimeEnd = '2016-01-01T02:24';

const component = (
  <ThemeUI>
    <Formik
      initialValues={SchedulingInitial}
      onSubmit={mockFn}
      validate={mockFn}
    >
      <FormikScheduling />
    </Formik>
  </ThemeUI>
);

describe('FormikScheduling', () => {
  it('Should match snapshot', () => {
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });

  it('Should change input value', async () => {
    const { getByTestId } = render(component);

    const inputTitle = getByTestId('input-title') as HTMLInputElement;
    const inputDateTimeStart = getByTestId(
      'input-dateTimeStart'
    ) as HTMLInputElement;
    const inputDateTimeEnd = getByTestId(
      'input-dateTimeEnd'
    ) as HTMLInputElement;

    await act(async () => {
      fireEvent.change(inputTitle, { target: { value: title } });
    });

    expect(inputTitle.value).toBe(title);
    expect(mockFn).toBeCalledTimes(1);

    await act(async () => {
      fireEvent.change(inputDateTimeStart, {
        target: { value: dateTimeStart }
      });
    });
    expect(inputDateTimeStart.value).toBe(dateTimeStart);
    expect(mockFn).toBeCalledTimes(2);

    await act(async () => {
      fireEvent.change(inputDateTimeEnd, { target: { value: dateTimeEnd } });
    });
    expect(inputDateTimeEnd.value).toBe(dateTimeEnd);
    expect(mockFn).toBeCalledTimes(3);
  });
});

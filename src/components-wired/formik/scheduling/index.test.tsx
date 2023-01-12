import { act, fireEvent, render } from '@testing-library/react';
import { ThemeUI } from '~/theme/theme-provider';
import { SiteStore } from '~/utils/stores/site';
import { FormikSchedulingWired } from '.';

const fluxToInsertSchedule = async (
  getByTestId: (e: string) => HTMLElement
) => {
  const inputTitle = getByTestId('input-title') as HTMLInputElement;
  const inputDateTimeStart = getByTestId(
    'input-dateTimeStart'
  ) as HTMLInputElement;
  const inputDateTimeEnd = getByTestId('input-dateTimeEnd') as HTMLInputElement;

  await act(async () => {
    fireEvent.change(inputTitle, { target: { value: title } });
    fireEvent.change(inputDateTimeStart, {
      target: { value: dateTimeStart }
    });
    fireEvent.change(inputDateTimeEnd, {
      target: { value: dateTimeEnd }
    });
  });

  expect(inputTitle.value).toBe(title);
  expect(inputDateTimeStart.value).toBe(dateTimeStart);
  expect(inputDateTimeEnd.value).toBe(dateTimeEnd);
};

const title = 'Scheluing for Series';
const dateTimeStart = '2016-01-01T01:22';
const dateTimeEnd = '2016-01-01T02:24';
const dateTimeEndBeforeStart = '2010-01-01T02:24';

const component = (
  <SiteStore>
    <ThemeUI>
      <FormikSchedulingWired />
    </ThemeUI>
  </SiteStore>
);

describe('FormikSchedulingWired', () => {
  it('Should match snapshot', () => {
    const { container } = render(component);
    expect(container).toMatchSnapshot();
  });

  it('Should button disabled if dateEnd is greater than dateStart', async () => {
    const { getByTestId, queryByText } = render(component);

    const inputTitle = getByTestId('input-title') as HTMLInputElement;
    const inputDateTimeStart = getByTestId(
      'input-dateTimeStart'
    ) as HTMLInputElement;
    const inputDateTimeEnd = getByTestId(
      'input-dateTimeEnd'
    ) as HTMLInputElement;
    const btnSubmit = queryByText('Agendar') as HTMLButtonElement;

    await act(async () => {
      fireEvent.change(inputTitle, { target: { value: title } });
      fireEvent.change(inputDateTimeStart, {
        target: { value: dateTimeStart }
      });
      fireEvent.change(inputDateTimeEnd, {
        target: { value: dateTimeEndBeforeStart }
      });
    });

    expect(inputTitle.value).toBe(title);
    expect(inputDateTimeStart.value).toBe(dateTimeStart);
    expect(inputDateTimeEnd.value).toBe(dateTimeEndBeforeStart);

    expect(btnSubmit).toBeDisabled();
  });

  it('Should flux works for insert new schedulings', async () => {
    const { getByTestId, queryByText } = render(component);

    const btnSubmit = queryByText('Agendar') as HTMLButtonElement;
    const inputTitle = getByTestId('input-title') as HTMLInputElement;

    await act(async () => {
      fluxToInsertSchedule(getByTestId);
    });
    expect(btnSubmit).not.toBeDisabled();

    await act(async () => {
      fireEvent.click(btnSubmit);
    });
    expect(inputTitle.value).toBe('');
  });
  it('Should block for insert schedulings in same period', async () => {
    const { getByTestId, queryByText } = render(component);

    const btnSubmit = queryByText('Agendar') as HTMLButtonElement;

    await act(async () => {
      fluxToInsertSchedule(getByTestId);
    });

    expect(btnSubmit).not.toBeDisabled();

    await act(async () => {
      fireEvent.click(btnSubmit);
    });
    const inputTitle = getByTestId('input-title') as HTMLInputElement;
    expect(inputTitle.value).toBe('');

    expect(btnSubmit).toBeDisabled();

    await act(async () => {
      fluxToInsertSchedule(getByTestId);
    });

    expect(inputTitle.value).toBe(title);
    expect(btnSubmit).toBeDisabled();
  });
});

import { render } from '@testing-library/react';
import {
  errorSchedulingConflicts,
  errorSchedulingEndBiggerThanStart,
  errorSchedulingTitle
} from './error';

describe('Warnings Error', () => {
  it('Should match text and count of errorSchedulingConflicts', () => {
    const { container } = render(errorSchedulingConflicts(5));

    expect(container).toMatchSnapshot();
    expect(container).toHaveTextContent('Conflito(s) Identificado(s): 5');
  });
  it('Should match text of errorSchedulingEndBiggerThanStart', () => {
    const { container } = render(errorSchedulingEndBiggerThanStart());
    expect(container).toMatchSnapshot();
  });
  it('Should match text of errorSchedulingTitle', () => {
    const { container } = render(errorSchedulingTitle());
    expect(container).toMatchSnapshot();
  });
});

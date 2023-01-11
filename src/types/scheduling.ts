export type TpSchedulingItem = {
  [key: string]: string | number;
  id: number;
  title: string;
  dateTimeStart: string;
  dateTimeEnd: string;
};

export const SchedulingInitial = {
  id: 0,
  title: '',
  dateTimeStart: '',
  dateTimeEnd: '',
  duration: ''
};

export type TpErrorList = {
  [key: string]: string | JSX.Element;
  id: string;
  text: string | JSX.Element;
};

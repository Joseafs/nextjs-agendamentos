export type TpSchedulingItem = {
  [key: string]: string | number;
  id: number;
  title: string;
  dateTimeStart: string;
  dateTimeEnd: string;
};

export type TpErrorList = {
  [key: string]: string | JSX.Element;
  id: string;
  text: string | JSX.Element;
};

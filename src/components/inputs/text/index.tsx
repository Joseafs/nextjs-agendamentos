import { memo } from 'react';
import { Input, Label, Root } from './styled';

interface Props {
  name: string;
  type?: React.InputHTMLAttributes<unknown>['type'];
  label?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OgInputText = ({ name, type, label, value, onChange }: Props) => {
  return (
    <Root>
      {label && <Label>{label}</Label>}
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </Root>
  );
};

export const InputText = memo(OgInputText);

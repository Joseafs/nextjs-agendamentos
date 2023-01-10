import { memo } from 'react';
import { Input, Label, Root } from './styled';

interface Props {
  name: string;
  type?: React.InputHTMLAttributes<unknown>['type'];
  label?: string;
  required?: boolean;
  value?: string | number;
  min?: string | number;
  max?: string | number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OgInputText = ({
  name,
  type,
  label,
  value,
  min,
  max,
  required,
  placeholder,
  onChange
}: Props) => {
  return (
    <Root>
      {label && <Label>{label}</Label>}
      <Input
        id={name}
        required={required}
        name={name}
        min={min}
        max={max}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Root>
  );
};

export const InputText = memo(OgInputText);

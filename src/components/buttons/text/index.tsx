import { memo } from 'react';
import { PropsBaseColors } from '~/types/theme';
import { Root } from './styled';

export type PropsThemeButton = {
  color?: PropsBaseColors;
};

interface Props extends PropsThemeButton {
  type?: React.ButtonHTMLAttributes<unknown>['type'];
  text?: string;
}

const OgButtonText = ({ text, type, color }: Props) => {
  return (
    <Root type={type} color={color}>
      {text}
    </Root>
  );
};

export const ButtonText = memo(OgButtonText);

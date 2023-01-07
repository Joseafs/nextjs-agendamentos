import { memo } from 'react';
import { PropsBaseColors, PropsBaseColorsOptions } from '~/types/theme';
import { Root } from './styled';

export type PropsThemeButton = {
  color?: PropsBaseColors;
  contrast?: PropsBaseColorsOptions;
};

interface Props extends PropsThemeButton {
  type?: React.ButtonHTMLAttributes<unknown>['type'];
  children: React.ReactNode;
}

const OgButtonIcon = ({
  type = 'button',
  color = 'primary',
  contrast = 'light',
  children
}: Props) => {
  return (
    <Root type={type} color={color} contrast={contrast}>
      {children}
    </Root>
  );
};

export const ButtonIcon = memo(OgButtonIcon);

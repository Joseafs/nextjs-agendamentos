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
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const OgButtonIcon = ({
  type = 'button',
  color = 'primary',
  contrast = 'light',
  onClick,
  className,
  children
}: Props) => {
  return (
    <Root
      className={className}
      type={type}
      color={color}
      contrast={contrast}
      onClick={onClick}
    >
      {children}
    </Root>
  );
};

export const ButtonIcon = memo(OgButtonIcon);

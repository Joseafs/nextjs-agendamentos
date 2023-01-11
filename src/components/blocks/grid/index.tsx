import React, { memo } from 'react';

import { Root } from './styled';

export type PropsGrid = {
  mgn?: number[];
  pdg?: number[];
  zind?: string;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  bgColor?: string;
  flex?: boolean;
  align?: 'left' | 'center' | 'right';
};

interface Props extends PropsGrid {
  children?: React.ReactNode;
  className?: string;
}

const OgGrid = ({
  children,
  mgn,
  align,
  pdg,
  zind,
  bgColor,
  overflow,
  flex,
  className
}: Props) => {
  return (
    <Root
      zind={zind}
      mgn={mgn}
      align={align}
      pdg={pdg}
      bgColor={bgColor}
      overflow={overflow}
      className={className}
      flex={flex}
    >
      {children}
    </Root>
  );
};

export const Grid = memo(OgGrid);

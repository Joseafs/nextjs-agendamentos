import React, { memo } from 'react';

import { Root } from './styled';

type PropsWidth = 'desktop' | 'tablet' | 'mobile' | string;

export type PropsGrid = {
  mgn?: number[];
  pdg?: number[];
  zind?: string;
  overflow?: 'visible' | 'hidden' | 'scroll' | 'auto';
  maxWidth?: PropsWidth;
  bgColor?: string;
  flex?: boolean;
  align?: 'left' | 'center' | 'right';
  xs?: string;
};

interface Props extends PropsGrid {
  children?: React.ReactNode;
  className?: string;
  as?: 'section' | 'div' | 'article';
}

const OgGrid = ({
  children,
  mgn,
  align,
  pdg,
  zind,
  bgColor,
  overflow,
  maxWidth,
  flex,
  className,
  as
}: Props) => {
  return (
    <Root
      zind={zind}
      mgn={mgn}
      as={as}
      align={align}
      pdg={pdg}
      maxWidth={maxWidth}
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

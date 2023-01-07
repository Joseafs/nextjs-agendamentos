import { memo } from 'react';
import { Container, Root } from './styled';

export type PropsRoot = {
  fixed?: boolean;
  className?: string;
};

interface Props extends PropsRoot {
  children?: React.ReactNode;
}

const OgSectionBase = ({ children, className, fixed }: Props) => {
  return (
    <Root className={className} fixed={fixed}>
      <Container>{children}</Container>
    </Root>
  );
};

export const SectionBase = memo(OgSectionBase);

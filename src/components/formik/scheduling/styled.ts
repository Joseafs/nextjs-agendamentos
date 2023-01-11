import styled, { css } from 'styled-components';
import { useMediaQuery } from '~/utils/theme';

export const Root = styled.div`
  ${({ theme }) => css`
    margin: 0 -${theme.space}px;
  `}
`;

export const GridContent = styled.div`
  display: flex;
  @media ${useMediaQuery().maxW.md} {
    display: inline-block;
    width: 100%;
  }
`;

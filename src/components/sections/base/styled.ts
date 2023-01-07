import styled, { css } from 'styled-components';
import { useMediaQuery } from '~/utils/theme';
import { PropsRoot } from '.';

export const Container = styled.div`
  width: 100%;
`;

export const Root = styled.section<PropsRoot>`
  justify-content: center;
  display: flex;

  ${({ theme, fixed }) =>
    fixed &&
    css`
      padding: ${theme.space * 2}px;

      & ${Container} {
        ${theme.breakpoints.keys.map(
          (item) =>
            theme.breakpoints.values[item] > 0 &&
            theme.breakpoints.values[item] < 1500 &&
            css`
              @media ${useMediaQuery().minW[item]} {
                max-width: ${theme.breakpoints.values[item]}px;
              }
            `
        )}
      }
    `}
`;

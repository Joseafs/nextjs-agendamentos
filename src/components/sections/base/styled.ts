import styled, { css } from 'styled-components';
import { useMediaQuery } from '~/utils/theme';
import { PropsRoot } from '.';

export const Container = styled.div``;

export const Root = styled.section<PropsRoot>`
  padding: 20px;
  width: 100%;

  ${({ theme, fixed }) =>
    fixed &&
    css`
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
    `}
`;

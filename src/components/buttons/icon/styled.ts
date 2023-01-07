import styled, { css } from 'styled-components';
import { getThemeColor } from '~/utils/theme';
import { PropsThemeButton } from '.';

export const Root = styled.button<PropsThemeButton>`
  display: flex;
  flex: 1;
  outline: unset;
  cursor: pointer;
  justify-content: center;
  margin: auto;

  ${({ theme, color, contrast }) => css`
    ${theme.animation.transition[0]};
    color: ${theme.palette.common.white};
    padding: ${theme.space * 1}px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    & svg {
      fill: ${getThemeColor(theme, color, 'main')};
    }

    &:hover {
      ${theme.animation.hover[0]};
      background-color: ${getThemeColor(theme, color, contrast)};
    }
    &:active {
      ${theme.animation.active[0]};
    }
  `}
`;

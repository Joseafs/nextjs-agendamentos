import styled, { css } from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex: 1;

  ${({ theme }) => css`
    border-top: 2px solid ${theme.palette.grey[100]};

    padding-top: ${theme.space * 3}px;
    margin-top: ${theme.space * 3}px;
  `}
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: unset;
  border-spacing: 4px 0;

  ${({ theme }) => css`
    & th {
      padding: ${theme.space * 2}px 0;
      align-items: center;
      border-radius: ${theme.shape.radius}px;
    }

    & td {
      padding: ${theme.space}px;
    }

    & tbody tr {
      &:nth-of-type(odd) {
        background-color: ${theme.palette.grey[100]};
      }
    }
  `}
`;

type PropsIconSort = {
  active?: boolean;
  visible?: boolean;
};

export const IconSort = styled.div<PropsIconSort>`
  position: relative;
  display: inline-block;
  opacity: 0.2;

  ${({ theme, active, visible }) => css`
    ${theme.animation.transition[0]};
    margin-left: ${theme.space}px;

    ${active &&
    css`
      transform: rotate(180deg);
    `}
    ${visible &&
    css`
      opacity: 1;
    `}
  `};
`;

export const TableTh = styled.th`
  cursor: pointer;

  ${({ theme }) => css`
    ${theme.animation.transition[0]};
    border: 1px solid ${theme.palette.grey[200]};

    &:hover {
      background-color: ${theme.palette.grey[200]};
    }
  `};
`;

import styled, { css } from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex: 1;

  ${({ theme }) => css`
    border-top: 2px solid ${theme.palette.grey[100]};

    padding-top: ${theme.space * 3}px;
    margin-top: ${theme.space * 4}px;
  `}
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: unset;
  border-spacing: 4px 0;

  & th {
    ${({ theme }) => css`
      padding-bottom: ${theme.space * 3}px;
    `}
  }

  & td {
    ${({ theme }) => css`
      padding: ${theme.space}px;
    `}
  }
  & tr {
    &:nth-of-type(odd) {
      background-color: rgba(0, 0, 0, 0.04);
    }
  }
`;

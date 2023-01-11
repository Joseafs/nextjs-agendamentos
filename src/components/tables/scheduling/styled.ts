import styled, { css } from 'styled-components';
import { ButtonIcon } from '~/components/buttons/icon';
import { useMediaQuery } from '~/utils/theme';

export const Root = styled.div`
  display: flex;
  flex: 1;

  ${({ theme }) => css`
    border-top: 2px solid ${theme.palette.grey[100]};

    padding-top: ${theme.space * 3}px;
    margin-top: ${theme.space * 3}px;
  `}
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

export const ButtonRemove = styled(ButtonIcon)`
  @media ${useMediaQuery().maxW.md} {
    position: absolute;
    border-radius: ${({ theme }) => `0 0 ${theme.space}px ${theme.space}px`};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
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
      &.conflict {
        background-color: ${theme.palette.error.light};
        &:nth-of-type(odd) {
          background-color: ${theme.palette.error.light}a2;
        }
      }
    }
  `}

  @media ${useMediaQuery().maxW.md} {
    border: 0;

    & thead {
      & th {
        display: none;
      }
      & tr {
        display: flex;
        flex: 1;
        justify-content: space-between;
        border-bottom: unset;
      }
      & ${TableTh} {
        display: flex;
        flex: 1;
        max-width: 32%;
        justify-content: center;
      }
    }

    & tr {
      margin-bottom: ${({ theme }) => theme.space * 2}px;
      display: block;
      border-radius: ${({ theme }) => theme.space}px;
    }

    & td {
      border-bottom: 1px solid ${({ theme }) => theme.palette.grey[300]};
      padding: ${({ theme }) => `${theme.space}px ${theme.space * 2}px`};
      font-size: 0.8em;
      display: block;
      text-align: right;
      width: 100%;
      position: relative;

      &:last-child {
        min-height: ${({ theme }) => theme.space * 5}px;
        border-bottom: 0;
      }
    }

    & td::before {
      content: attr(data-th);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
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

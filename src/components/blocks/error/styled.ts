import styled, { css } from 'styled-components';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1rem;

  & * {
    margin: 0;
    padding: 0;
  }

  ${({ theme }) => css`
    background-color: ${theme.palette.error.light};
    color: ${theme.palette.error.main};
    border-radius: ${theme.shape.radius}px;
    padding: ${theme.space * 2}px;
  `}
`;

export const Title = styled.h4`
  ${({ theme }) => css`
    background-color: ${theme.palette.error.light};
    color: ${theme.palette.error.main};
    margin-bottom: ${theme.space}px;
  `}
`;
export const UL = styled.ul`
  ${({ theme }) => css`
    margin: 0 ${theme.space * 2}px;
  `}
`;
export const Text = styled.li`
  ${({ theme }) => css`
    margin: ${theme.space}px 0;
  `}
`;

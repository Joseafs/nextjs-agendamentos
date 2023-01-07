import styled, { css } from 'styled-components';

export const Root = styled.div``;

export const FormContent = styled.form`
  ${({ theme }) => css`
    margin: 0 -${theme.space}px;
  `}
`;

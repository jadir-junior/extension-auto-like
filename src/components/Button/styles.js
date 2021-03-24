import styled, { css } from "styled-components";

const buttonModifiers = {
  primary: () => css`
    background-color: #fd5068;
    color: white;
  `,
};

export const Button = styled.button`
  ${({ color }) => css`
    background-color: transparent;
    border: none;
    cursor: pointer;

    ${!!color && buttonModifiers[color]}
  `}
`;

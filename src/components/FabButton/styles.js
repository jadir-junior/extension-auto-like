import styled, { css } from "styled-components";

const wrapperModifiers = {
  small: () => css`
    padding: 8px;
  `,
  medium: () => css`
    padding: 16px;
  `,
};

export const Wrapper = styled.button`
  ${({ size }) => css`
    border: none;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 28%);
    color: #5c5c5c;
    cursor: pointer;

    ${!!size && wrapperModifiers[size]}
  `}
`;

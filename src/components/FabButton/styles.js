import styled, { css } from "styled-components";

import { COLORS } from "../../theme/theme";

const wrapperModifiers = {
  small: () => css`
    padding: 8px;
  `,
  medium: () => css`
    padding: 16px;
  `,
  disabled: () => css`
    background-color: ${COLORS.DISABLED_COLOR};
    cursor: not-allowed;
  `,
};

export const Wrapper = styled.button`
  ${({ size, disabled }) => css`
    border: none;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 28%);
    color: #5c5c5c;
    cursor: pointer;

    ${!!size && wrapperModifiers[size]}
    ${!!disabled && wrapperModifiers["disabled"]}
  `}
`;

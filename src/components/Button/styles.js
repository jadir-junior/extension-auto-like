import styled, { css } from "styled-components";

import { COLORS } from "../../theme/theme";

const buttonModifiers = {
  primary: () => css`
    background-color: ${COLORS.PRIMARY_COLOR};
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

import styled, { css } from "styled-components";

import { COLORS } from "../../theme/theme";

export const Wrapper = styled.div`
  width: 100%;
  background-color: #f5f7fa;
  height: 100%;
`;

export const Title = styled.h2`
  ${() => css`
    color: ${COLORS.PRIMARY_COLOR};
  `}
`;

export const Header = styled.div`
  padding: 16px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  padding: 0 16px 16px 16px;
`;

export const ButtonContainer = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-around;
`;

export const Option = styled.span`
  font-weight: bold;
`;

export const ItemConfiguration = styled.div`
  padding: 8px 0;
`;

export const Value = styled.span`
  color: #5c5c5c;
  font-weight: 400;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const buttonTitleModifiers = {
  primary: () => css`
    color: ${COLORS.PRIMARY_COLOR};
  `,
  warning: () => css`
    color: ${COLORS.WARNING_COLOR};
  `,
  disabled: () => css`
    color: ${COLORS.DISABLED_COLOR};
  `,
};

export const ButtonTitle = styled.div`
  ${({ color, disabled }) => css`
    font-weight: bold;
    margin-top: 8px;

    ${!!color && buttonTitleModifiers[color]}
    ${!!disabled && buttonTitleModifiers["disabled"]}
  `}
`;

export const Settings = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`;

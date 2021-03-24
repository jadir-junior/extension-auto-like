import * as S from "./styles";

const FabButton = ({ children, size = "small" }) => (
  <S.Wrapper size={size}>{children}</S.Wrapper>
);

export default FabButton;

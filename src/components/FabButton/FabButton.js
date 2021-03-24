import * as S from "./styles";

const FabButton = ({ children, size = "small", onClick, disabled }) => (
  <S.Wrapper onClick={onClick} size={size} disabled={disabled}>
    {children}
  </S.Wrapper>
);

export default FabButton;

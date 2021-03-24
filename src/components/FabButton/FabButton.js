import * as S from "./styles";

const FabButton = ({ children, size = "small", onClick }) => (
  <S.Wrapper onClick={onClick} size={size}>
    {children}
  </S.Wrapper>
);

export default FabButton;

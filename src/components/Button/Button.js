import * as S from "./styles";

const Button = ({ children, onClick, color }) => {
  return (
    <S.Button onClick={onClick} color={color}>
      {children}
    </S.Button>
  );
};

export default Button;

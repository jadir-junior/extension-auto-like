import * as S from "./styles";

const Button = ({ children, onClick }) => {
  return <S.Button onClick={onClick}>{children}</S.Button>;
};

export default Button;

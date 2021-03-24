import * as S from "./styles";

const Input = ({ onChange, value, placeholder }) => {
  return (
    <S.Wrapper onChange={onChange} value={value} placeholder={placeholder} />
  );
};

export default Input;

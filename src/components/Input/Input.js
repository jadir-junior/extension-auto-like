import * as S from "./styles";

const Input = ({ onChange, value, placeholder, onKeyDown }) => {
  return (
    <S.Wrapper
      onChange={onChange}
      value={value}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
    />
  );
};

export default Input;

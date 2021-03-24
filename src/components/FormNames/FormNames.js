import * as S from "./styles";

import { setName } from "../../services/names";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const FormNames = ({ onSubmitForm }) => {
  const [value, setValue] = useState("");

  const handleNameOnChange = (event) => {
    setValue(event.target.value.trim());
  };

  const capitalize = (s) => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const onSubmit = () => {
    const name = {
      name: capitalize(value),
      id: uuidv4(),
    };

    setName(name);
    onSubmitForm();
    setValue("");
  };

  return (
    <S.WrapperInput>
      <input type="text" onChange={handleNameOnChange} value={value} />
      <button onClick={onSubmit}>+</button>
    </S.WrapperInput>
  );
};

export default FormNames;

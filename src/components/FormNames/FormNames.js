import * as S from "./styles";

import Button from "../Button/Button";
import Input from "../Input/Input";
import { Plus as PlusIcon } from "@styled-icons/feather/Plus";
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

  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (!value) {
      return;
    }

    const name = {
      name: capitalize(value),
      id: uuidv4(),
    };

    onSubmitForm(name);
    setValue("");
  };

  return (
    <S.WrapperInput>
      <Input
        onChange={handleNameOnChange}
        onKeyDown={handleOnKeyDown}
        value={value}
        placeholder="Adicionar nome"
      />
      <S.WrapperButton>
        <Button color="primary" onClick={onSubmit}>
          <PlusIcon size="46" />
        </Button>
      </S.WrapperButton>
    </S.WrapperInput>
  );
};

export default FormNames;

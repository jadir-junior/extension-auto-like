import * as S from "./style";

import { deleteName, getNames } from "../../services/names";

import DescriptionFeature from "../../components/DescriptionFeature/DescriptionFeature";
import FormNames from "../../components/FormNames/FormNames";
import NameList from "../../components/NameList/NameList";
import Navbar from "../../components/Navbar/Navbar";
import { setName as setNameService } from "../../services/names";
import { useState } from "react";

const Name = () => {
  const [names, setNames] = useState(getNames());

  const updateList = () => {
    setNames(getNames());
  };

  const setName = (name) => {
    setNameService(name);
    updateList();
  };

  const deleteItem = (item) => {
    deleteName(item);
    updateList();
  };

  return (
    <S.Wrapper>
      <Navbar title="Deslikes em nomes" />

      <S.Content>
        <NameList names={names} onClick={deleteItem} />
        <FormNames onSubmitForm={setName} />
        <DescriptionFeature>
          Aqui você pode criar uma lista de nome (ex: Renata, João, Maria,
          Bruno) de pessoas que você não quer likes
        </DescriptionFeature>
      </S.Content>
    </S.Wrapper>
  );
};

export default Name;

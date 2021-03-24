import * as S from "./styles";

import { deleteBio, getBios, setBio } from "../../services/bio";

import DescriptionFeature from "../../components/DescriptionFeature/DescriptionFeature";
import FormNames from "../../components/FormNames/FormNames";
import NameList from "../../components/NameList/NameList";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";

const BioPage = () => {
  const [bios, setBios] = useState(getBios());

  const updateList = () => {
    setBios(getBios());
  };

  const handleSetName = (bio) => {
    setBio(bio);
    updateList();
  };

  const handleDeleteItem = (bio) => {
    deleteBio(bio);
    updateList();
  };

  return (
    <S.Wrapper>
      <Navbar title="Deslikes em termos na bio" />

      <S.Content>
        <NameList names={bios} onClick={handleDeleteItem} />
        <FormNames onSubmitForm={handleSetName} />
        <DescriptionFeature>
          Aqui você pode escolher uma palavra para dar dislike caso encontrado
          em um biografia da pessoa (ex: maconheira, maromba, fitness...)
        </DescriptionFeature>
      </S.Content>
    </S.Wrapper>
  );
};

export default BioPage;

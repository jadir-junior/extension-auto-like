import * as S from "./styles";

import { getSettingModal, setSettingModal } from "../../services/modal";

import Card from "../../components/Card/Card";
import CardLink from "../../components/CardLink/CardLink";
import DescriptionFeature from "../../components/DescriptionFeature/DescriptionFeature";
import Navbar from "../../components/Navbar/Navbar";
import { Switch } from "@material-ui/core";
import Timetomatch from "../../components/TimeToMatch/Timetomatch";
import { useEffect } from "react";
import { useState } from "react";

const Settings = () => {
  const [modal, setModal] = useState(!!getSettingModal());

  useEffect(() => {
    setSettingModal(modal);
  }, [modal]);

  const handleChange = (event) => {
    setModal(event.target.checked);
  };

  return (
    <S.Wrapper>
      <Navbar title="Settings" />

      <S.Content>
        <Timetomatch />

        <Card title="Ajustes de deslikes">
          <CardLink to="/names">Nomes</CardLink>
          {/* <CardLink to="/bio">Bio</CardLink> */}
        </Card>
        <DescriptionFeature>
          Essas são suas preferências para dizer em quem não dar likes, pelo
          nome (ex: Renata, Julia)
          {/* <span> */}
          {/* ou por alguma palavra na descrição (ex: Aquariana, Gamer, Vinho) */}
          {/* </span> */}
        </DescriptionFeature>

        <Card title="Modal Super Like">
          <S.SettingItem>
            <div>Ativado</div>
            <Switch
              checked={modal}
              onChange={handleChange}
              name="switchModal"
              value={modal}
            />
          </S.SettingItem>
        </Card>
        <DescriptionFeature>
          Essa preferência é para fechar o modal de super like que aparece de
          vez em quando!
        </DescriptionFeature>
      </S.Content>
    </S.Wrapper>
  );
};

export default Settings;

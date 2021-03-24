import * as S from "./styles";

import Card from "../../components/Card/Card";
import CardLink from "../../components/CardLink/CardLink";
import DescriptionFeature from "../../components/DescriptionFeature/DescriptionFeature";
import Navbar from "../../components/Navbar/Navbar";
import Timetomatch from "../../components/TimeToMatch/Timetomatch";

const Settings = () => {
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
      </S.Content>
    </S.Wrapper>
  );
};

export default Settings;

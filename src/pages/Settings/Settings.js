import * as S from "./styles";

import Navbar from "../../components/Navbar/Navbar";
import Timetomatch from "../../components/TimeToMatch/Timetomatch";

const Settings = () => {
  return (
    <S.Wrapper>
      <Navbar title="Settings" />

      <S.Content>
        <Timetomatch />
      </S.Content>
    </S.Wrapper>
  );
};

export default Settings;

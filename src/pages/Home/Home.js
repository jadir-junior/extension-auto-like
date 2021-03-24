/*global chrome*/

import * as S from "./styles";

import Card from "../../components/Card/Card";
import CardTitle from "../../components/Card/CardTitle";
import FabButton from "../../components/FabButton/FabButton";
import { Settings as IconSettings } from "@styled-icons/feather/Settings";
import { Link } from "react-router-dom";
import { convertMilisecondsOnSeconds } from "../../utils/convertTime";
import { getBios } from "../../services/bio";
import { getNames } from "../../services/names";
import { getTime } from "../../services/time";

const Home = () => {
  const time = getTime();
  const names = getNames();
  const bios = getBios();

  const sendMessage = (data, cb) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { data: data }, () => {
        cb();
      });
    });
  };

  const like = () => {
    const config = {
      time: getTime(),
      names: getNames(),
      bios: getBios(),
      type: "like",
    };

    sendMessage(config, () => {});
  };

  return (
    <S.Wrapper>
      <S.Header>
        <Link to="/settings">
          <FabButton>
            <IconSettings size={34} />
          </FabButton>
        </Link>
      </S.Header>

      <S.Content>
        <Card>
          <CardTitle title="Configurações"></CardTitle>
          <div>
            <S.ItemConfiguration>
              <S.Option>Intervalo entre like:</S.Option>{" "}
              <S.Value>{convertMilisecondsOnSeconds(time)} Seg.</S.Value>
            </S.ItemConfiguration>
            <S.ItemConfiguration>
              <S.Option>Deslikes em nomes: </S.Option>{" "}
              {!!names.length ? (
                names.map((name, i) => {
                  return names.length === i + 1 ? (
                    <S.Value> {name.name}</S.Value>
                  ) : (
                    <S.Value>{name.name}, </S.Value>
                  );
                })
              ) : (
                <S.Value>Você não cadastrou nenhum nome ainda!</S.Value>
              )}
            </S.ItemConfiguration>

            <S.ItemConfiguration>
              <S.Option>Deslikes em palavras da bio: </S.Option>{" "}
              {!!bios.length ? (
                bios.map((bio, i) => {
                  return bios.length === i + 1 ? (
                    <S.Value> {bio.name}</S.Value>
                  ) : (
                    <S.Value>{bio.name}, </S.Value>
                  );
                })
              ) : (
                <S.Value>
                  Você não cadastrou nenhuma palavra para bio ainda!
                </S.Value>
              )}
            </S.ItemConfiguration>
          </div>
        </Card>
      </S.Content>

      <button onClick={like}>Like</button>
    </S.Wrapper>
  );
};

export default Home;

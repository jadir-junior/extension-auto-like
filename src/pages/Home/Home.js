/*global chrome*/

import * as S from "./styles";

import { COLORS, FONT_COLORS } from "../../theme/theme";

import Card from "../../components/Card/Card";
import CardTitle from "../../components/Card/CardTitle";
import FabButton from "../../components/FabButton/FabButton";
import { Heart as HeartIcon } from "@styled-icons/feather/Heart";
import { Settings as IconSettings } from "@styled-icons/feather/Settings";
import { Link } from "react-router-dom";
import { X as XIcon } from "@styled-icons/feather/X";
import { convertMilisecondsOnSeconds } from "../../utils/convertTime";
import { getBios } from "../../services/bio";
import { getNames } from "../../services/names";
import { getTime } from "../../services/time";
import { useState } from "react";

const Home = () => {
  const [liked, setLiked] = useState(false);

  const time = getTime();
  const names = getNames();
  // const bios = getBios();

  const sendMessage = (data, cb) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { data: data }, () => {
        cb();
      });
    });
  };

  const stop = () => {
    const config = {
      type: "stop",
    };

    sendMessage(config, () => {});
    setLiked(false);
  };

  const like = () => {
    const config = {
      time: getTime(),
      names: getNames(),
      bios: getBios(),
      type: "like",
    };

    sendMessage(config, () => {});
    setLiked(true);
  };

  return (
    <S.Wrapper>
      <S.Settings>
        <Link to="/settings">
          <FabButton>
            <IconSettings size={34} />
          </FabButton>
        </Link>
      </S.Settings>
      <S.Header>
        <S.Title>AUTO LIKE</S.Title>
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
              <S.Option>Deslikes em nomes: </S.Option> <br />
              {!!names.length ? (
                names.map((name, i) => {
                  return names.length === i + 1 ? (
                    <S.Value key={name.id}> {name.name}</S.Value>
                  ) : (
                    <S.Value key={name.id}>{name.name}, </S.Value>
                  );
                })
              ) : (
                <S.Value>Você não cadastrou nenhum nome ainda!</S.Value>
              )}
            </S.ItemConfiguration>

            {/* <S.ItemConfiguration>
              <S.Option>Deslikes em palavras da bio: </S.Option> <br />
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
            </S.ItemConfiguration> */}
          </div>
        </Card>
      </S.Content>

      <S.ButtonContainer>
        <S.ButtonWrapper>
          <FabButton onClick={stop} size="medium">
            <XIcon size={50} style={{ color: COLORS.WARNING_COLOR }} />
          </FabButton>
          <S.ButtonTitle color="warning">Parar</S.ButtonTitle>
        </S.ButtonWrapper>
        <S.ButtonWrapper>
          <FabButton onClick={like} size="medium" disabled={liked}>
            <HeartIcon
              size={50}
              style={
                liked
                  ? { color: FONT_COLORS.DISABLED_COLOR }
                  : { color: COLORS.PRIMARY_COLOR }
              }
            />
          </FabButton>
          <S.ButtonTitle color="primary" disabled={liked}>
            Auto Like
          </S.ButtonTitle>
        </S.ButtonWrapper>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default Home;

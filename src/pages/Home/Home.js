/*global chrome*/

import * as S from "./styles";

import IconButton from "../../components/IconButton/IconButton";
import { Settings as IconSettings } from "@styled-icons/feather/Settings";
import { Link } from "react-router-dom";
import { getBios } from "../../services/bio";
import { getNames } from "../../services/names";
import { getTime } from "../../services/time";

const Home = () => {
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
      <Link to="/settings">
        <IconButton>
          <IconSettings size={34} />
        </IconButton>
      </Link>

      <button onClick={like}>Like</button>
    </S.Wrapper>
  );
};

export default Home;

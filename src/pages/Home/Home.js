import * as S from "./styles";

import IconButton from "../../components/IconButton/IconButton";
import { Settings as IconSettings } from "@styled-icons/feather/Settings";
import { Link } from "react-router-dom";

const Home = () => {
  const sendMessage = (data, cb) => {
    // chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    //   chrome.tabs.sendMessage(tabs[0].id, { data: data }, () => {
    //     cb();
    //   });
    // });
  };

  const like = () => {
    sendMessage("like", () => {
      window.close();
    });
  };

  return (
    <S.Wrapper>
      <Link to="/settings">
        <IconButton>
          <IconSettings size={34} />
        </IconButton>
      </Link>

      {/* <button onClick={like}>Like</button> */}
    </S.Wrapper>
  );
};

export default Home;

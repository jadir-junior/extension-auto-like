import * as S from "./style";

import { ArrowLeft as IconArrowLeft } from "@styled-icons/feather/ArrowLeft";
import history from "../../utils/history";

const Navbar = ({ title }) => (
  <S.Wrapper>
    <S.IconWrapper onClick={() => history.back()}>
      <IconArrowLeft size={30} />
    </S.IconWrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
);

export default Navbar;

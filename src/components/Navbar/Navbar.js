import * as S from "./style";

import { ArrowLeft as IconArrowLeft } from "@styled-icons/feather/ArrowLeft";

const Navbar = ({ title }) => (
  <S.Wrapper>
    <S.IconWrapper>
      <IconArrowLeft size={30} />
    </S.IconWrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
);

export default Navbar;

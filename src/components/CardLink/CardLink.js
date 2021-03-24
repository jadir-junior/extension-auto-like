import * as S from "./style";

import { ArrowRight as ArrowRightIcon } from "@styled-icons/feather/ArrowRight";
import { Link } from "react-router-dom";

const CardLink = ({ children, to }) => (
  <S.Wrapper>
    <Link to={to}>
      <S.Content>
        <S.Title>{children}</S.Title>
        <ArrowRightIcon size={16} />
      </S.Content>
    </Link>
  </S.Wrapper>
);

export default CardLink;

import * as S from "./styles";

import CardTitle from "./CardTitle";

const Card = ({ title, subtitle, children }) => (
  <S.Wrapper>
    {title && <CardTitle title={title} subtitle={subtitle}></CardTitle>}
    {children}
  </S.Wrapper>
);

export default Card;

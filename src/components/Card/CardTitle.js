import * as S from "./styles";

const CardTitle = ({ title, subtitle }) => (
  <S.TitleWrapper>
    {title && <S.Title>{title}</S.Title>}
    {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
  </S.TitleWrapper>
);

export default CardTitle;

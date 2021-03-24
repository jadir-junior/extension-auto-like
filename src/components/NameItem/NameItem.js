import * as S from "./styles";

import Button from "../Button/Button";
import { Trash as TrashIcon } from "@styled-icons/feather/Trash";

export const NameItem = ({ item, onClick }) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <S.Wrapper>
      {item.name}{" "}
      <Button onClick={handleClick}>
        <TrashIcon size={20} />
      </Button>
    </S.Wrapper>
  );
};

export default NameItem;

import NameItem from "../NameItem/NameItem";

export const NameList = ({ names, onClick }) => (
  <div>
    {!!names &&
      names.map((name) => (
        <NameItem onClick={onClick} key={name.id} item={name} />
      ))}
  </div>
);

export default NameList;

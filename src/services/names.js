export const getNames = () => {
  return JSON.parse(localStorage.getItem("names"));
};

export const setName = (name) => {
  let names = getNames();

  if (!names?.length) {
    names = [];
  }

  names.push(name);

  localStorage.setItem("names", JSON.stringify(names));
};

export const deleteName = (name) => {
  let names = getNames();

  const newListNames = names.filter((namebd) => namebd.id !== name.id);

  localStorage.setItem("names", JSON.stringify(newListNames));
};

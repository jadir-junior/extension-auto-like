export const setTime = (time) => {
  localStorage.setItem("time", JSON.stringify(time));
};

export const getTime = () => {
  return JSON.parse(localStorage.getItem("time"));
};

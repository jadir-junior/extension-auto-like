export const setTime = (time) => {
  localStorage.setItem("time", JSON.stringify(time));
};

export const getTime = () => {
  const time = JSON.parse(localStorage.getItem("time"));

  if (!time) {
    setTime(1000);
    return 1000;
  } else {
    return time;
  }
};

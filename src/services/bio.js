export const getBios = () => {
  return JSON.parse(localStorage.getItem("descriptions"));
};

export const setBio = (bio) => {
  let bios = getBios();

  if (!bios) {
    bios = [];
  }

  bios.push(bio);

  localStorage.setItem("descriptions", JSON.stringify(bios));
};

export const deleteBio = (bio) => {
  const descriptions = getBios();

  const newsBios = descriptions.filter((d) => d.id !== bio.id);

  localStorage.setItem("descriptions", JSON.stringify(newsBios));
};

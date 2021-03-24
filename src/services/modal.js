export const getSettingModal = () => {
  return JSON.parse(localStorage.getItem("modalSuperLike"));
};

export const setSettingModal = (value) => {
  let modal = getSettingModal();

  if (!modal) {
    modal = false;
  }

  modal = value;

  localStorage.setItem("modalSuperLike", JSON.stringify(modal));
};

/*global chrome */
var randomPeriod = 0;
var unlikeNames = [];
var unlikeBios = [];
var settime = null;
var lastBio = "";
var modalSuperLike = false;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.data.type === "like") {
    const config = request.data;
    randomPeriod = config.time;
    unlikeNames = config.names;
    unlikeBios = config.bios;
    modalSuperLike = config.modalSuperLike;

    loopLike();
  }

  if (request.data.type === "stop") {
    loopLike(true);
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.data.type === "time") {
    console.log(request);
  }
});

const checkTinder = () => {
  var base = "https://tinder.com/";
  return (
    window.location.href.startsWith(base + "app/recs") ||
    window.location.href.startsWith(base + "app/matches")
  );
};

const checkBumble = () => {
  var base = "https://bumble.com/";

  return window.location.href.startsWith(base + "app");
};

function haveWord(text, words) {
  if (!text || !words) {
    return false;
  }

  const result = words?.filter((word) =>
    // var bioClassName = document.getElementsByClassName("BreakWord");
    text.toLowerCase().includes(word?.name.toLowerCase())
  );

  if (result.length > 0) {
    return true;
  }

  return false;
}

const closeModal = () => {
  const modal = document.getElementsByClassName(
    "Maw($desktop-modal-width)--ml"
  );

  if (modal.length) {
    const buttons = modal[0].getElementsByTagName("button");
    buttons[1].click();
  }
};

const likeOrUnlike = () => {
  if (modalSuperLike) {
    closeModal();
  }

  var name = document.getElementsByClassName("Fz($xl) Fw($bold)")[1]?.innerHTML;
  var description = "";
  var unlikeButton = document.getElementsByClassName("button")[1];
  var likeButton = document.getElementsByClassName("button")[3];

  if (haveWord(name, unlikeNames) || haveWord(description, unlikeBios)) {
    console.log("unlike name + description:", `${name} - ${description}`);
    unlikeButton.click();
  } else {
    likeButton.click();
  }
};

const likeOrUnlikeBumble = () => {
  var name = document.getElementsByClassName(
    "encounters-story-profile__name"
  )[0].innerText;
  var like = document.getElementsByClassName("encounters-action--like")[0];
  var dislike = document.getElementsByClassName(
    "encounters-action--dislike"
  )[0];

  if (haveWord(name, unlikeNames)) {
    console.log("unlike name:", name);
    dislike.click();
  } else {
    like.click();
  }
};

const loopLike = (stop = false) => {
  settime = setTimeout(() => {
    if (checkTinder() && !stop) {
      likeOrUnlike();
      loopLike();
    } else if (checkBumble()) {
      likeOrUnlikeBumble();
      loopLike();
    } else {
      clearTimeout(settime);
    }
  }, randomPeriod);
};

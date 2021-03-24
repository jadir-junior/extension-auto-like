/*global chrome */
var randomPeriod = 0;
var unlikeNames = [];
var unlikeBios = [];
var settime = null;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.data.type === "like") {
    const config = request.data;
    randomPeriod = config.time;
    unlikeNames = config.names;
    unlikeBios = config.bios;

    loopLike();
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

function haveWord(text, words) {
  if (!text || !words) {
    return false;
  }

  const result = words?.filter((word) =>
    text.toLowerCase().includes(word?.name.toLowerCase())
  );

  if (result.length > 0) {
    return true;
  }

  return false;
}

const likeOrUnlike = () => {
  var name = document.getElementsByClassName("Fz($xl) Fw($bold)")[1]?.innerHTML;
  var description = document.getElementsByClassName("BreakWord")[0]?.innerHTML;
  var unlikeButton = document.getElementsByClassName("button")[1];
  var likeButton = document.getElementsByClassName("button")[3];

  if (haveWord(name, unlikeNames) || haveWord(description, unlikeBios)) {
    console.log("unlike name + description:", `${name} - ${description}`);
    unlikeButton.click();
  } else {
    likeButton.click();
  }
};

const loopLike = () => {
  console.log("time:", randomPeriod);
  console.log("unlike Names", unlikeNames);
  console.log("unlike bios", unlikeBios);

  settime = setTimeout(() => {
    if (checkTinder()) {
      likeOrUnlike();
      loopLike();
    } else {
      clearTimeout(settime);
    }
  }, randomPeriod);
};

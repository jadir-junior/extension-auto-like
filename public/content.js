/*global chrome */

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.data === "like") {
    loopLike();
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.data.type === "time") {
    console.log(request);
  }
});

const loopLike = () => {
  var randomPeriod = 500;
};

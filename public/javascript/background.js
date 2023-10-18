const user = {
  username: "demo-user",
  followingData: "",
  followersData: "",
};
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.action === "get-following-data") {
    const getFollowersData = async () => {
      let i = 1;
      let contDigit;
      while (true) {
        contDigit = false;
        const response = await fetch(
          "https://github.com/" + message.username + "?page=" + i + "&tab=following"
        );
        // user.data = await response.text();
        let followerData = await response.text();
        let regex = /<span class="Link--secondary pl-1">([^<]+)<\/span>/g;
        let spanContents = [];
        let match;
        while ((match = regex.exec(followerData)) !== null) {
          contDigit = true;
          spanContents.push(match[1]);
        }
        if (contDigit == false) break;
        else user.followingData = [...user.followingData, ...spanContents];
        i++;
      }
      sendResponse(user);
      user.followingData = [];
      spanContents = [];
    };
    getFollowersData();
  }

  if (message.action === "get-followers-data") {
    const getFollowersData = async () => {
      let i = 1;
      let contDigit;
      while (true) {
        contDigit = false;
        const response = await fetch(
          "https://github.com/" + message.username + "?page=" + i + "&tab=followers"
        );
        // user.data = await response.text();
        let followerData = await response.text();
        let regex = /<span class="Link--secondary pl-1">([^<]+)<\/span>/g;
        let spanContents = [];
        let match;
        while ((match = regex.exec(followerData)) !== null) {
          contDigit = true;
          spanContents.push(match[1]);
        }
        if (contDigit == false) break;
        else user.followersData = [...user.followersData, ...spanContents];
        i++;
      }
      sendResponse(user);
      user.followersData = [];
      spanContents = [];
    };
    getFollowersData();
  }
  return true;
});

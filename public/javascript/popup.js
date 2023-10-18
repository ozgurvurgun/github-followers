document.addEventListener("DOMContentLoaded", function () {
  const getDOMButton = document.getElementById("getDOMButton");
  const domDisplay = document.getElementById("domDisplay");
  const delay = document.getElementById("delay");
  let counterGlobal = 15;
  delay.innerText=counterGlobal
  getDOMButton.addEventListener("click", function () {
    
    let i = counterGlobal;
    const delayInterval = setInterval(() => {
      if (i === 0) {
        clearInterval(delayInterval);
        if (domDisplay.textContent === "") {
          domDisplay.innerHTML ="<p>Bir seyler ters gitti tekrar dene</p>"
        }
      }
      else{
        i--;
        delay.innerHTML = i;
      }
    }, 1000);
    getDOMButton.disabled = true;
    const usernameInput = document.getElementById("username").value;
    let followingData;
    let followersData;

    chrome.runtime.sendMessage({action: "get-following-data", username: usernameInput }, (followingResponse) => {
      followingData = followingResponse.followingData;
    });

    chrome.runtime.sendMessage({action: "get-followers-data", username: usernameInput }, (followersResponse) => {
      followersData = followersResponse.followersData;
    });

    setTimeout(() => {
        const findDifferentValues = (followingData, followersData) => [
          ...followingData.filter(user => !followersData.includes(user)),
        ];
        let notFollowingYou = findDifferentValues(followingData, followersData);
        let result ="";
        notFollowingYou.forEach((element, index)=> {
          result += `
          <p><span style="color:red">${index+1} - </span><a href="https://github.com/${element}">${element}</a></p>
          `
        });
        domDisplay.innerHTML = "";
        domDisplay.innerHTML = result;
        getDOMButton.disabled = false;
        setTimeout(() => {
          delay.innerHTML = counterGlobal;
          notFollowingYou = [];
          followingData = [];
          followersData = [];
        }, 500);
    }, 1000 * counterGlobal);
  });
});

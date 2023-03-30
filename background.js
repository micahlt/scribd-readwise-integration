let access_token = "";
const handleFinishRequest = (request) => {
  if (request.content) {
    fetch("https://readwise.io/welcome/sync", {
      method: "GET",
    }).then(() => {
      chrome.cookies.getAll(
        {
          domain: "readwise.io",
        },
        async (cookies) => {
          console.log(cookies);
          const access_token = cookies.filter((c) => c.name == "accessToken")[0]
            ?.value;
          if (!access_token) {
            return;
          }
          fetch(`https://readwise.io/api/v2/highlights/`, {
            method: "POST",
            headers: {
              Authorization: `Token ${access_token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify(request.content),
          }).then((res) => {
            if (res.ok) {
              console.log("Okay!");
              chrome.tabs.create({
                url: "https://readwise.io/dashboard",
              });
            }
          });
        }
      );
    });
  }
};
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message == "export") {
    sendResponse("ok");

    async function getTab() {
      let queryOptions = { active: true, currentWindow: true };
      let tabs = await chrome.tabs.query(queryOptions);
      return tabs[0].id;
    }
    const tabId = await getTab();
    chrome.scripting.executeScript(
      {
        target: { tabId: tabId },
        files: ["content.js"],
      },
      () => {
        console.log("executed");
      }
    );
  } else {
    handleFinishRequest(message);
  }
});

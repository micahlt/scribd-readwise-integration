var s = document.createElement("script");
s.src = chrome.runtime.getURL("export.js");
(document.head || document.documentElement).appendChild(s);
window.addEventListener("message", (event) => {
  if (
    event.source === window &&
    event?.data?.direction === "from-page-script"
  ) {
    console.log("MSG IN CONTENT");
    chrome.runtime.sendMessage(
      typeof browser != "undefined"
        ? "scribdreadwise@micahlindley.com"
        : "ilpnpfninhcmhcnnecbaefciaaenkefo",
      {
        type: "finished-export",
        content: event.data.message,
      }
    );
  }
});

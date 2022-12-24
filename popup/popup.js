const handle = (e) => {
  e.target.innerText = "exporting...";
  setTimeout(() => {
    window.close();
  }, 500);
  chrome.runtime.sendMessage("export");
};
document.getElementById("export").addEventListener("click", handle);

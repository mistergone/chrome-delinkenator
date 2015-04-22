
document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.executeScript(null, { file: "jquery.min.js" });
  chrome.tabs.executeScript(null, { file: "disabler-setup.js" });
  chrome.tabs.insertCSS(null, { file : "disabler.css" });
});

$(document).ready( function() {
  $('#disable-links').click( function() {
    chrome.tabs.executeScript(null, { file: "disable-links.js"});
    window.close();
  });
  $('#disable-buttons').click( function() {
    chrome.tabs.executeScript(null, { file: "disable-buttons.js"});
    window.close();
  });
});
 

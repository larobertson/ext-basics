chrome.tabs.onActivated.addListener(tab => {
  chrome.tabs.get(tab.tabId, current_tab_info => {
    if(/^https:\/\/www\.google/.test(current_tab_info.url)) {
      chrome.tabs.executeScript(current_tab_info.id, {file: './foreground.js'}, () => console.log('injected!!!'))
      chrome.tabs.insertCSS(null, {file: './mystyles.css'});
    }
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'yo check the storage!!!') {
    chrome.storage.local.get("password", value => {
      console.log('value', value);
    });
  }
})

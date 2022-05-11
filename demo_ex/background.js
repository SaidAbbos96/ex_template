console.log("back bor");
let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
    chrome.tts.speak("Your EX appletion is started.");
    chrome.storage.sync.set({ color });
    console.log("Default background color set to %cgreen", `color: ${color}`);
});
// chrome.action.onClicked.addListener((tab) => {
//     console.log("bsoildi");
//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         files: ["add.js"],
//     });
// });
// console.log(chrome);
// chrome.windows.create({
//         state: "maximized",
//         url: "http://www.google.com",
//     },
//     (window) => {
//         console.log(window);
//         console.log("ishladi");
//     }
// );
// console.log(chrome.storage);
// const user = {
//     username: "demo-user",
// };
// let id = chrome.runtime.id
// let port = chrome.runtime.connect(
//     id, {
//         name: "Powerman"
//     }
// )
// console.log(port);
// chrome.runtime.onConnect.addListener((port) => {
//     console.log(port);
//     port.postMessage("post bu backdan")
//     console.log("ulandi");
//     port.onMessage.addListener((message, sender, sendResponse) => {
//         // 2. A page requested user data, respond with a copy of `user`
//         // if (message === "get-user-data") {
//         // sendResponse("borss");
//         // }
//         console.log(message);
//         // console.log(sender);
//     });
// });
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     // 2. A page requested user data, respond with a copy of `user`
//     // if (message === "get-user-data") {
//     sendResponse("bor");
//     // }
//     console.log(message);
//     console.log(sender);
// });




// chrome.search.query({
//     disposition: "NEW_TAB",
//     text: "How to delete instagram account"
// })

// https: //developer.chrome.com/docs/extensions/reference/storage/#property-local
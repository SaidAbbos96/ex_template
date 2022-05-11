console.log("app bor");
// // // chrome.runtime.sendMessage("get-user-data", (response) => {
// // //     // 3. Got an asynchronous response with the data from the background
// // //     console.log("received user data", response);
// // //     // initializeUI(response);
// // // });
// // console.log(chrome.runtime);
// let id = chrome.runtime.id;
// // console.log(id);
// let port;
// if (port) {
//     console.log("bor ekan");
//     port.postMessage("or ekapost bu");
// } else {
//     port = chrome.runtime.connect(id, {
//         name: "Powerman",
//     });
// }
// console.log(port);

// port.onMessage.addListener((message, sender, sendResponse) => {
//     // 2. A page requested user data, respond with a copy of `user`
//     // if (message === "get-user-data") {
//     // sendResponse("borss");
//     // }
//     port.postMessage("post bu");
//     console.log(message);
//     // console.log(sender);
// });
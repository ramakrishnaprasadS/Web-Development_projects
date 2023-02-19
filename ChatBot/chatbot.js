let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let userInputEl = document.getElementById("userInput");
let chatContainerEl = document.getElementById("chatContainer");
let sendMsgBtnEl = document.getElementById("sendMsgBtn");
let ct = -1;
sendMsgBtnEl.onclick = function() {
    let msgToBot = userInputEl.value;
    let msgToBotChatContEl = document.createElement("div");
    let msgToBotChatEl = document.createElement("span");
    msgToBotChatEl.textContent = msgToBot;
    msgToBotChatEl.classList.add("msg-to-chatbot");
    msgToBotChatContEl.classList.add("msg-to-chatbot-container");
    msgToBotChatContEl.appendChild(msgToBotChatEl);
    chatContainerEl.appendChild(msgToBotChatContEl);
    userInputEl.value = "";
    ct = ct + 1;

    let msgfromBot = chatbotMsgList[ct];
    let msgfromBotChatContEl = document.createElement("div");
    let msgfromBotChatEl = document.createElement("span");
    msgfromBotChatEl.textContent = msgfromBot;
    msgfromBotChatEl.classList.add("msg-from-chatbot");
    msgfromBotChatContEl.classList.add("msg-from-chatbot-container");
    msgfromBotChatContEl.appendChild(msgfromBotChatEl);
    chatContainerEl.appendChild(msgfromBotChatContEl);
}
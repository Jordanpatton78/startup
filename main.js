function newMessage(){
    var question = document.createElement("div");
    question.className = "askQuestion";
    var send = document.createElement("div");
    send.className = "send";
    var p = document.createElement("p");
    p.className = "bubbleP";
    var text = document.getElementById("sendText").value;
    p.innerText = text;
    send.appendChild(p);
    question.appendChild(send);
    var main = document.getElementById("main");
    main.appendChild(question);
}
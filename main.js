function newMessage(){
    var question = document.createElement("div");
    question.className = "askQuestion";
    var send = document.createElement("div");
    send.className = "send";
    var p = document.createElement("p");
    p.className = "bubbleP";
    var text = document.getElementById("sendText").value;
    p.innerText = text;
    var icon = document.getElementById("onePunch");
    var newIcon = document.createElement("img");
    newIcon.src = icon.src;
    newIcon.className = "myIcon";
    send.appendChild(p);
    question.appendChild(newIcon);
    question.appendChild(send);
    var main = document.getElementById("main");
    main.appendChild(question);
}
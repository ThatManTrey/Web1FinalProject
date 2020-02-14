function validate(someForm) {
	var name = someForm.user.value;
	var pass = someForm.pass.value;
	if (name == "admin" && pass == "DaP455werd")
		window.location = "home.html";
	else
		document.getElementById("credentialFail").style.visibility = "visible";
	
}

function checkPw(someForm) {
	var pass1 = someForm.pass1.value;
	var pass2 = someForm.pass2.value;
	if (pass1 == pass2)
		console.log("passwords match");
	else
		document.getElementById("credentialFail").style.visibility = "visible";
}

function countThemWords() {
	var textArray = document.body.innerText.split(/[ \n]+/);
	textArray.pop();
	/*
	for (var i=0; i<textArray.length; i++) {
		console.log(textArray[i]);
	}
	*/
	return textArray.length;
}

function historySetup() {
	historyNode = document.getElementById("history")
	maxPos = historyNode.scrollHeight;
	currPos = 0;
	scrolling = false;
	rate = 5;
	interval = undefined;
}

function toggleScroll() {
	if (interval == undefined) {
		interval = setInterval(textScroll, 300);
	}
	else {
		clearInterval(interval);
		interval = undefined;
	}
}

function textScroll() {
	if (currPos < 0 || currPos > maxPos) 
		scrolling = !scrolling;
	if (!scrolling) {
		historyNode.scrollTo(0, currPos += rate);}
	else {
		historyNode.scrollTo(0, currPos -= rate);}
}

function turnOverTile(panelType, id) {
	document.getElementById(id.toString()).innerHTML = panelType;
	console.log(cnt25+" "+cnt5+" "+clckCnt);
	++clckCnt;
	if (panelType == '25%')
		++cnt25;
	else if (panelType == '5%')
		++cnt5;
	console.log(cnt25+" "+cnt5+" "+clckCnt);
	if (clckCnt == 3)
	{
		document.getElementById("result").style.color = "rgba(0,0,0,1)";
		var codeText;
		var codeNode = document.createElement("span");
		if (cnt25 == 3) {
			codeText = document.createTextNode("tWnty5");
			document.getElementById("message").innerHTML = "Here's your code: "
		}
		else if (cnt5 == 3) {
			codeText = document.createTextNode("jSt5");
			document.getElementById("message").innerHTML = "Here's your code: "
		}
		else
			codeText = document.createTextNode("Play Again");
		codeNode.appendChild(codeText)
		document.getElementById("code").appendChild(codeNode);
	}
}
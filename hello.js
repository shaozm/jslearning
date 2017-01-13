var msg = "Hello world!";

function writeMsg(){
	//document.write(msg);
	return msg;
}

function sayHello() {
	alert("hola!");
}

function redirect() {
	window.location = "http://www.google.com";
}

function redirectv2(url) {
	window.location = url;
}

function getConfirmation() {
	var retval = confirm("do you want to go to google.com?");
	if (retval == true){
		redirectv2("http://www.google.com");
	}
	else {
		alert("we are not going anywhere");
		redirectv2("http://www.amazon.com");
	}

}

function getPrompt() {
	var retval = prompt("type your name:")
	alert("you are " + retval);
}

//comment style1
/*
comment style2
*/

const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

function auth(){
	var email =document.getElementById("uid").value;
	var pass =document.getElementById("pass").value;
	if(email=="21BCS8644" && pass=="Ankit%45")
	{
		window.location.assign("1.html");
		alert("Login Sussesful")
	}
	else
	{
		alert("wrong id or password")
	}
}
inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

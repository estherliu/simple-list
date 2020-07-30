var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	addDeleteButton(li);
	li.addEventListener("click", toggleItemAfterClick);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleItemAfterClick(){
	this.classList.toggle("done");
}

function addDeleteButton(listitem){
	var newbutton = document.createElement("button");
	newbutton.appendChild(document.createTextNode("delete"));
	listitem.appendChild(newbutton);	
	newbutton.addEventListener("click",function(){
		this.parentNode.parentNode.removeChild(this.parentNode);
	});
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

var lis = document.querySelectorAll("li");
for(var i=0; i<lis.length; i++){
	lis[i].addEventListener("click", toggleItemAfterClick);
	addDeleteButton(lis[i]);
}
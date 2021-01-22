var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelector(".list");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	li.appendChild(btn);
	btn.onclick = removeDeleteBtn;
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

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

list.addEventListener("click", function(e){
	if (e.target){
		e.target.classList.toggle("done");
	}	
})
function removeDeleteBtn(evt){
	evt.target.parentNode.remove();
}
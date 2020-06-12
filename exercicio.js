var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.classList.add("fundolista");
	input.value = "";

	li.addEventListener("click",function riscarLista(){ //aqui, é um evento quando eu CLICO no LI adicionado a lista
		var riscado = li.classList.toggle("done");//aqui é: se clicar fica done, se clicar novamente fica sem DONE
		var remover = document.createElement("button");//crio um botao
		remover.classList.add("buscar");//adiciono a class ao botao
		remover.appendChild(document.createTextNode(""));//adiciono texto ao botao
		if(riscado){
		li.appendChild(remover);//se estiver RISCADO, eu add o botao ao LI
		remover.addEventListener("click",function removerLista(){//aqui se eu clicar no BOTAO REMOVER 	
		remover.parentElement.remove();}//remove o PAI do BOTAO REMOVER
		);}
			else {this.getElementsByClassName("buscar")[0].remove(); } //se RISCADO não for verdadeiro, o BOTAO é REMOVIDO
		 }			)	}



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

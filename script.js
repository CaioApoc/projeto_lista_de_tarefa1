var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");

// value lenght pra manipular depois e nao deixar criar tarefa em branco
function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li"); // vai criar a li e armazenar na variavel li

  li.appendChild(document.createTextNode(input.value)); // vai setar o valor do input dentro do filho da li
  ul.appendChild(li); //joga a li dentro do elemento pai ul
  input.value = ""; // reseta o texto do nosso input para voltar ao estado inicial

  function crossOut() {
    li.classList.toggle("done"); // via acessar a li e colocar ou tirar a classe done que marca como feito ou nao feito a tarefa
  }

  li.addEventListener("click", crossOut); // coloca o li para escutar o evento, quando clicar nele ele coloca ou tira a classe done

  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X")); // pra add o X no final da li para excluir, no caso o X é filho do dBtn que é o botao
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);

  function deleteListItem() {
    li.classList.add("delete"); // puxando a classe delete para o li que tem como display:none
  }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  } else {
    alert("Voce nao adicionou nenhuma tarefa!!!");
  }
}

// condicionando a ter mais de uma letra e inserir quando apertar a tecla enter (key code dela é 13)
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

// a diferenca entre add e toggle é que o add ele simplesmente adiciona, ja o toogle ele analisa, se tiver ele tira,se nao tiver ele coloca a classe

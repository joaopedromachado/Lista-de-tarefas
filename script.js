let minhaUL = document.getElementById("minhaUL")

//Sempre quando a página for carregada meu localStorage pega o valor da minhaUL e guarda dentro da lista
onload = function () {
    let lista = localStorage.getItem("tarefas");
    minhaUL.innerHTML = lista
}

//Botão onclick, no qual eu adiciono as tarefas vindas do usuário.
function addBtn() {
    let valorInput = document.getElementById("meuInput").value;
    let lista = document.createElement("li");
    let texto = document.createTextNode(valorInput);

    lista.appendChild(texto); // Cria a lista com o valor inserido no input.

// Condições:
    if (valorInput === '') {
//Se enviado o valorInput vázio, recebo um alerta para inserir tarefa
        alert("Por favor, insira sua tarefa!!");
      }else if (valorInput.length > 30) {
//Se enviado o valorInput maior a 20, recebo um alerta, cancelando a mesma.
          alert("Você excedeu o número máximo de caracteres permitidos")
      }else {
//Caso o usuário obedeça as condições acima, a tarefa é indexada para a <li>
        document.getElementById("minhaUL").appendChild(lista);
      }
//Após a execução da função o valor do input é retornado como vázio
        document.getElementById("meuInput").value = "";

//Crio um botão indexado dentro da tag <li>
    let criarSpan = document.createElement("SPAN");
    let textoSpan = document.createTextNode("x");
    criarSpan.setAttribute("id", "spanBtn")
    criarSpan.appendChild(textoSpan);
    lista.appendChild(criarSpan);

    criarSpan.setAttribute("onclick", "apagarTarefa(this)")


        guardarLista();
}

function apagarTarefa(e) {
    let criarSpan = e.parentElement
    let receber = criarSpan.parentElement
    receber.removeChild(criarSpan)
    guardarLista()
}

// Botão onclick, no qual eu apago todas as informações guardadas pelo localStorage
function clearBtn() {
    localStorage.clear()
    minhaUL.innerHTML = ""
}

//Guardo as informações que o usuário inseriu no input. Não é necessário utilizar o JSON pois a UL não está em formato de objeto.
function guardarLista() {
    let local = minhaUL.innerHTML
    localStorage.setItem("tarefas", local)

    apagarTarefa
}

minhaUL.addEventListener("click", function checkedBtn(elemento) {
    if(elemento.target.tagName === "LI"){
        elemento.target.classList.toggle("checked");
    }
    guardarLista()
});

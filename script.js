let minhaUL = document.getElementById("minhaUL")

onload = function () {
    let lista = localStorage.getItem("tarefas");
    minhaUL.innerHTML = lista
}

function addBtn() {
    let valorInput = document.getElementById("meuInput").value;
    let lista = document.createElement("li");
    let texto = document.createTextNode(valorInput);

    lista.appendChild(texto);

    if (valorInput === '') {

        alert("Por favor, insira sua tarefa!!");
      }else if (valorInput.length > 30) {

          alert("Você excedeu o número máximo de caracteres permitidos")
      }else {

        document.getElementById("minhaUL").appendChild(lista);
      }

        document.getElementById("meuInput").value = "";

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

function clearBtn() {
    localStorage.clear()
    minhaUL.innerHTML = ""
}

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

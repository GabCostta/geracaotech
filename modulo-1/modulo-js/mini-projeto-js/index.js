function abrirModal(){
    overlay.classList.add("active");
    criarTarefa.classList.add("active");
}

function fecharModal(){
    overlay.classList.remove("active");
    criarTarefa.classList.remove("active");
}

function buscarTarefas() {
    fetch("http://localhost:3000/tarefas")
    .then(res => res.json())
    .then(res => {
        inserirTarefas(res);
    })
} buscarTarefas();

function inserirTarefas(listaDeTarefas){
    if(listaDeTarefas.length > 0) {
        lista.innerHTML = ""
        listaDeTarefas.map(tarefa => {
            lista.innerHTML += `
                <li>
                    <h5>${tarefa.titulo}</h5>
                    <p>${tarefa.descricao}</p>
                    <div class="actions">
                        <box-icon name='trash' size="md" onclick="deletarTarefa(${tarefa.id})"></box-icon>      
                    </div>
                </li>
            `;
        })
    }
}

function novaTarefa(){
    event.preventDefault();
    let tarefa = {
        titulo: titulo.value,
        descricao: descricao.value
    }
    fetch("http://localhost:3000/tarefas", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body:JSON.stringify(tarefa)
    })
    .then(res => res.json())
    .then(res => {
        console.log(res);
    })
    fecharModal();
}

function deletarTarefa(id) {
    fetch(`http://localhost:3000/tarefas/${id}`, {
        method: "DELETE",
    })
    .then(res => res.json())
    .then(res => {
        alert("tarefa foi realizada cm sucesso");
        buscarTarefas();
    })
}

function pesquisarTarefas() {
    let lis = document.querySelector("ul li");
    if(busca.value.length > 0){
        lis.forEach(li => {
          if(li.children[0].innerText.includes(busca.value)){
            li.classList.add('oculto')
            li.classList.add("")
          }
        });
    }
}
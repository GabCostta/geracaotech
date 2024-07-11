cep.onkeyup = () => {
    if (cep.value.length ==8) {
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(resposta => resposta.json())
        .then(resposta2 => {
            rua.value = resposta2.logradouro;
            bairro.value = resposta2.bairro;
            cidade.value = resposta2.localidade;
            estado.value = resposta2.uf;
        })
        .finally(() => {
            alert("Procedimento concluido");
        })
    }   
}

function buscarRegioes() {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/regioes")
    .then(res => res.json())
    .then(res => {
        regioes.innerHTML = '<option value="">Selecione uma Regiao</option>';
        res.map(regiao => {
            regioes.innerHTML += `<option value="${regiao.id}">${regiao.nome}</option>`;
        })
    })
}

buscarRegioes();

function buscarEstados() {
    const regiaoSelecionada = document.getElementById('regioes').value;
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiaoSelecionada}/estados`)
    .then(res => res.json())
    .then(res => {
        estados.innerHTML = '<option value="">Selecione um Estado</option>';
        res.map(estado => {
            estados.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`;
        })
    })
}

function buscarCidades() {
    const estadoSelecionado = document.getElementById('estados').value;
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios?orderBy=nome`)
    .then(res => res.json())
    .then(res => {
        cidades.innerHTML = '<option value="">Selecione uma Cidade</option>';
        res.map(cidade => {
            cidades.innerHTML += `<option value="${cidade.id}">${cidade.nome}</option>`;
        })
    })
}
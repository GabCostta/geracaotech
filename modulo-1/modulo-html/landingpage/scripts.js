document.querySelector('.search-bar button').addEventListener('click', function() {
    const endereco = document.querySelector('.search-bar input').value;
    if (endereco) {
        // Substitua pela funcionalidade de busca real
        alert('Buscando por ' + endereco);
    } else {
        alert('Por favor, digite um endereço de entrega');
    }
});


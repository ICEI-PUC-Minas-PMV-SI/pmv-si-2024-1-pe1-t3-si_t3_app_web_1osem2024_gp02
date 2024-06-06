document.addEventListener('DOMContentLoaded', function() {
    const data = JSON.parse(localStorage.getItem("Logado"))
        ? JSON.parse(localStorage.getItem("Logado"))
        : {nome: 'Fulano'};

    document.getElementById('titulo').innerText = `Olá, ${data.nome}!`
})
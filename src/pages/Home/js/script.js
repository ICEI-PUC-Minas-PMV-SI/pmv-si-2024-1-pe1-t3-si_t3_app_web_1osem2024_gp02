document.addEventListener('DOMContentLoaded', function () {
    
    if (JSON.parse(localStorage.getItem("Logado"))) {

        const data = JSON.parse(localStorage.getItem("Logado"));

        document.getElementById('titulo').innerText = `Olá, ${data.nome}!`
        
    } else {
        window.location.href = '../Login/index.html'
    }

})
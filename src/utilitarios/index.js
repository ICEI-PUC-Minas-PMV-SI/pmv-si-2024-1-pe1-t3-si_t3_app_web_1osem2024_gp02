let user;

document.addEventListener('DOMContentLoaded', function () {
    if (JSON.parse(localStorage.getItem("Logado"))) {
        user = JSON.parse(localStorage.getItem("Logado"))
    } else {
        window.location.href = '../Login/index.html'
    }
})
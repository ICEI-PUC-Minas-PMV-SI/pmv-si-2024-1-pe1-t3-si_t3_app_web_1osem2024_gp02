let user;

document.addEventListener('DOMContentLoaded', function () {
    if (!JSON.parse(localStorage.getItem("Logado"))) {
        window.location.href = '../Login/index.html'
    }

    user = JSON.parse(localStorage.getItem("Logado"))
    
    loadComponent('header', '../../components/Header/index.html');
    loadComponent('menu', '../../components/Menu/index.html');

})

function loadComponent(elementId, componentUrl) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

function route(key) {

    const pages = [
        {
            key: 'home',
            href: '../Home/home.html'
        },
        {
            key: 'notificacoes',
            href: '../Home/home.html'
        },
        {
            key: 'mensagens',
            href: '../Home/home.html'
        },
        {
            key: 'menu',
            href: '../Menu/index.html'
        },
        {
            key: 'nova-vaga',
            href: '../MyParkingSpace/index.html'
        }
    ]
    
    const page = pages.find(page => {
        return page.key === key
    })

    if (page) window.location.href = page.href 
    else window.location.href = '../NotFound/index.html'

}
let user;

document.addEventListener('DOMContentLoaded', function () {
    if (!JSON.parse(localStorage.getItem("Logado"))) {
        window.location.href = '../Login/index.html'
    }

    user = JSON.parse(localStorage.getItem("Logado"))
    
    loadComponent('header', '../../components/Header/index.html');
    loadComponent('menu', '../../components/Menu/index.html');

})

function loadComponent(elementId, componentUrl, props = {}) {
    fetch(componentUrl)
        .then(response => response.text())
        .then(data => {

            // Substituir placeholders pelos valores dos parâmetros
            Object.keys(props).forEach(key => {
                const placeholder = `{{${key}}}`;
                data = data.split(placeholder).join(props[key]);
            });

            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

function route(key, id = null) {

    const pages = [
        {
            key: 'home',
            href: '../Home/index.html'
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
        },
        {
            key: 'buscar-vagas',
            href: '../Search/index.html'
        },
        {
            key: 'vaga',
            href: '../MyParkingSpace/index.html'
        }
    ]
    
    const page = pages.find(page => {
        return page.key === key
    })

    if (page) {
        
        page.href = id ? page.href + '?id=' + id : page.href
        window.location.href = page.href

    }
    else window.location.href = '../NotFound/index.html'

}
let user;

document.addEventListener('DOMContentLoaded', function () {
    if (!JSON.parse(localStorage.getItem("Logado"))) {
        window.location.href = '../Login/index.html'
    }

    user = JSON.parse(localStorage.getItem("Logado"))
    
    loadComponent('header', '../../components/Header/index.html');
    loadComponent('menu', '../../components/Menu/index.html');

})

function formatDateTime(data, hora) {
    const partesData = data.split("-");
    const dia = partesData[2];
    const mes = partesData[1];
    const ano = partesData[0];

    const partesHora = hora.split(":");
    const horas = partesHora[0];
    const minutos = partesHora[1];

    const dataHoraFormatada = dia + "/" + mes + "/" + ano + " " + horas + ":" + minutos;

    return dataHoraFormatada;
}

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
            key: 'cadastro',
            href: '../Cadastro/index.html'
        },
        {
            key: 'home',
            href: '../Home/index.html'
        },
        {
            key: 'notificacoes',
            href: '../Notificacoes/index.html'
        },
        {
            key: 'mensagens',
            href: '../Mensa/index.html'
        },
        {
            key: 'menu',
            href: '../Menu/index.html'
        },
        {
            key: 'minha-vaga',
            href: '../MinhaVaga/index.html'
        },
        {
            key: 'buscar-vagas',
            href: '../BuscarVagas/index.html'
        },
        {
            key: 'minhas-vagas',
            href: '../MinhasVagas/index.html'
        },
        {
            key: 'vaga',
            href: '../DetalheVaga/index.html'
        }
    ]
    
    const page = pages.find(page => {
        return page.key === key
    })

    if (page) {
        
        page.href = id ? page.href + '?id=' + id : page.href
        window.location.href = page.href

    }
    else window.location.href = '../PaginaNaoEncontrada/index.html'

}
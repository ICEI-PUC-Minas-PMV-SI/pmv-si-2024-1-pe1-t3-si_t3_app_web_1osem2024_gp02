let user;
let notificacoes = JSON.parse(localStorage.getItem("Notificacoes"))
    ? JSON.parse(localStorage.getItem("Notificacoes"))
    : [];

document.addEventListener('DOMContentLoaded', function () {
    
    if (!JSON.parse(localStorage.getItem("Logado"))) {
        window.location.href = '../Login/index.html'
    }

    user = JSON.parse(localStorage.getItem("Logado"))

    const url = window.location.href

    if (!user.condominios && url.indexOf('CompletarCadastro') == -1) {
        window.location.href = '../CompletarCadastro/index.html'
    }
    
    loadComponent('header', '../../components/Header/index.html');
    loadComponent('menu', '../../components/Menu/index.html', {}, ativarNotificacao);

})

function ativarNotificacao() {

    const novaNotificacao = notificacoes.filter(notificacao => {
        return notificacao.userId == user.id && !notificacao.visualizado
    })

    if (novaNotificacao.length > 0) {
        menu.querySelector('#iconeNotificacoes').src = '../../assets/icons/novas-notificacoes.svg';
    }

}

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

/*
    elementoId => id em que será inserido o conteúdo
    caminhoComponente => local da pasta que está o HTML a ser inserido
    parametros => parametros a serem inseridos no componente
    funcaoRetorno => funcao a ser executada após o carregamento do componente
*/
function loadComponent(elementoId, caminhoComponente, parametros = {}, funcaoRetorno = () => { return null }) {
    fetch(caminhoComponente)
        .then(response => response.text())
        .then(data => {

            Object.keys(parametros).forEach(key => {
                const placeholder = `{{${key}}}`;
                data = data.split(placeholder).join(parametros[key]);
            });

            document.getElementById(elementoId).insertAdjacentHTML('afterbegin', data);
            
            return funcaoRetorno()
        })
        .catch(error => {
            console.error('Error loading component:', error);
        });
}

function route(key, id = null) {

    const pages = [
        {
            key: 'perfil',
            href: '../Perfil/index.html'
        },
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
            href: '../HistoricosChat/index.html'
        },
        {
            key: 'conversa',
            href: '../ChatBase/index.html'
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
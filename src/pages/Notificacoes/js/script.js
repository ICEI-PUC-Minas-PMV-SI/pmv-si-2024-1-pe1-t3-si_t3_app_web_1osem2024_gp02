document.addEventListener('DOMContentLoaded', function () {

    const data = notificacoes.map(notificacao => {

        if (!notificacao.visualizado && notificacao.userId == user.id) {
        
            loadComponent('notificacoes', '../../components/NotificacaoSolicitacao/index.html', notificacao);
            notificacao.visualizado = true

        }

        return notificacao

    });

    const dataNotificacoesArray = JSON.stringify(data);
    localStorage.setItem("Notificacoes", dataNotificacoesArray);


})
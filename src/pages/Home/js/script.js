const vagas = JSON.parse(localStorage.getItem("Vagas"))
    ? JSON.parse(localStorage.getItem("Vagas"))
    : [];

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('titulo').innerText = `Olá, ${user.nome}!`

    vagas.forEach(vaga => {

        vaga.dateTime = formatDateTime(vaga.dataInicial, vaga.horaInicial)
        vaga.dataFinalTime = formatDateTime(vaga.dataFinal, vaga.horaFinal)
    
        if (vaga.status == 'solicitacao' && vaga.locatario.id == user.id) {
        
            loadComponent('vagas', '../../components/CardVagaSolicitacaoLocatario/index.html', vaga);
        
        } else if (vaga.status == 'solicitacao' && vaga.locador.id == user.id) {
            
            loadComponent('vagas', '../../components/CardVagaSolicitacaoLocador/index.html', vaga);

        } else if (vaga.status == 'reservado' && vaga.locatario.id == user.id) {
        
            loadComponent('vagas', '../../components/CardVagaReservadaLocatario/index.html', vaga);
        
        } else if (vaga.status == 'reservado' && vaga.locador.id == user.id) {
        
            loadComponent('vagas', '../../components/CardVagaReservadaLocador/index.html', vaga);
        
        }

    });

})

function atualizarStatus(status, id) {
    
    const data = vagas.map(vaga => { 
        
        if (vaga.id == id) {

            vaga.status = status

            if (status == 'livre') {

                notificacoes.push({
                    id: notificacoes.length + 1,
                    vagaId: vaga.id,
                    userId: vaga.locador.id,
                    tipo: 'solicitacao',
                    titulo: `Recusada - Vaga ${ vaga.id }`,
                    descricao: `${ vaga.locatario.nome } recusou seu pedido de uso da vaga.`,
                    visualizado: false
                })

                delete vaga.locador
                delete vaga.proposta

            } else if (status == 'reservado') {

                notificacoes.push({
                    id: notificacoes.length + 1,
                    vagaId: vaga.id,
                    userId: vaga.locador.id,
                    tipo: 'solicitacao',
                    titulo: `Reservado - Vaga ${ vaga.id }`,
                    descricao: `${ vaga.locatario.nome } aceitou seu pedido de uso da vaga.`,
                    visualizado: false
                })
                
            }
        }
        
        return vaga;
    })

    const dataArray = JSON.stringify(vagas);
    localStorage.setItem("Vagas", dataArray);
    
    const dataNotificacoesArray = JSON.stringify(notificacoes);
    localStorage.setItem("Notificacoes", dataNotificacoesArray);
    
    window.location.reload()
    
}
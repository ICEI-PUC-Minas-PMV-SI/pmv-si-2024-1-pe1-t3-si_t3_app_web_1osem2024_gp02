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

        }  else if (vaga.status == 'reservado' && vaga.locatario.id == user.id) {
        
            loadComponent('vagas', '../../components/CardVagaReservadaLocatario/index.html', vaga);
        
        } else if (vaga.status == 'reservado' && vaga.locador.id == user.id) {
        
            loadComponent('vagas', '../../components/CardVagaReservadaLocador/index.html', vaga);
        
        }

    });

})
const vagas = JSON.parse(localStorage.getItem("Vagas"))
    ? JSON.parse(localStorage.getItem("Vagas"))
    : [];

document.addEventListener('DOMContentLoaded', function () {

    document.getElementById('titulo').innerText = `Olá, ${user.nome}!`

    vagas.forEach(vaga => {

        if (vaga.status == 'reservado') {
            
            vaga.dateTime = formatDateTime(vaga.dataInicial, vaga.horaInicial)
            vaga.dataFinalTime = formatDateTime(vaga.dataFinal, vaga.horaFinal)
        
            if (vaga.locatarioId == user.id) {
                loadComponent('vagas', '../../components/CardVagaReservadaLocatario/index.html', vaga);
            } else if (vaga.locadorId == user.id) {
                loadComponent('vagas', '../../components/CardVagaReservadaLocador/index.html', vaga);
            }

        }

    });

})
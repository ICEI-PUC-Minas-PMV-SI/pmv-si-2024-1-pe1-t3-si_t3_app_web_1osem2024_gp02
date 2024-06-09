const vagas = JSON.parse(localStorage.getItem("Vagas"))
    ? JSON.parse(localStorage.getItem("Vagas"))
    : [];

document.addEventListener('DOMContentLoaded', function () {

    vagas.forEach(vaga => {

        if (vaga.locatario.id == user.id) {
            
            vaga.dateTime = formatDateTime(vaga.dataInicial, vaga.horaInicial)
            vaga.dataFinalTime = formatDateTime(vaga.dataFinal, vaga.horaFinal)

            if (vaga.status == 'livre') {
                loadComponent('vagas', '../../components/CardVagaLivre/index.html', vaga);
            } else if (vaga.status == 'solicitacao') {
                loadComponent('vagas', '../../components/CardVagaSolicitacaoLocatario/index.html', vaga);
            } else if (vaga.status == 'reservado') {
                loadComponent('vagas', '../../components/CardVagaReservadaLocador/index.html', vaga);
            }
            
        }

    });

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
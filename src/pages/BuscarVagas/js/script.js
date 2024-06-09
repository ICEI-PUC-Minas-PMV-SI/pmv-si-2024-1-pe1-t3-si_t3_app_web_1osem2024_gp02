const vagas = JSON.parse(localStorage.getItem("Vagas"))
    ? JSON.parse(localStorage.getItem("Vagas"))
    : [];

document.addEventListener('DOMContentLoaded', function () {

    vagas.forEach(vaga => {

        if (vaga.locatario.id != user.id && vaga.status == 'livre') {
            
            vaga.dateTime = formatDateTime(vaga.dataInicial, vaga.horaInicial)
            vaga.dataFinalTime = formatDateTime(vaga.dataFinal, vaga.horaFinal)
            loadComponent('vagas', '../../components/CardVagaLivreBusca/index.html', vaga);
            
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
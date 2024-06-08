const vagas = JSON.parse(localStorage.getItem("Vagas"))
    ? JSON.parse(localStorage.getItem("Vagas"))
    : [];

document.addEventListener('DOMContentLoaded', function () {

    vagas.forEach(vaga => {

        if (vaga.userId != user.id) {
            
            vaga.dateTime = formatDateTime(vaga.startDate, vaga.startTime)
            vaga.endDateTime = formatDateTime(vaga.endDate, vaga.endTime)
            loadComponent('vagas', '../../components/CardVaga/index.html', vaga);
            
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
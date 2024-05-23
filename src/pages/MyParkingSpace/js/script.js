const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = [
        {
            id: 1,
            condominium: form[0].value,
            parkingSpace: form[1].value,
            description: form[2].value,
            negotiation: form[3].value,
            time: formatDateTime(form[4].value, form[5].value),
            endTime: formatDateTime(form[6].value, form[7].value),
            amount: `R$${form[8].value}`
        }
    ]
    const dataArray = JSON.stringify(data);
    localStorage.setItem("teste", dataArray);
    form[0].value = '';
    form[1].value = '';
    form[2].value = '';
    form[3].value = '';
    form[4].value = '';
    form[5].value = '';
    form[6].value = '';
    form[7].value = '';
    form[8].value = '';
});

function formatCoin(input) {
    let valor = input.value.replace(/\D/g, '');
    valor = (valor / 100).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");

    input.value = valor;
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
const url = window.location.href;
const urlObj = new URL(url);
const params = urlObj.searchParams;
const id = params.get('id');

const form = document.getElementById('form');

let vaga;
let vagas = JSON.parse(localStorage.getItem("Vagas"))
    ? JSON.parse(localStorage.getItem("Vagas"))
    : [];

document.addEventListener('DOMContentLoaded', function () { 

    if (id) {
    
        vaga = vagas.find(vaga => {
            return vaga.id == id
        })
    
        if (vaga && vaga.userId == user.id) {
            form[0].value = vaga.condominium;
            form[1].value = vaga.parkingSpace;
            form[2].value = vaga.description;
            form[3].value = vaga.negotiation;
            form[4].value = vaga.startDate;
            form[5].value = vaga.startTime;
            form[6].value = vaga.endDate;
            form[7].value = vaga.endTime;
            form[8].value = vaga.amount;
        } else if (vaga) {
            window.location.href = '../Forbidden/index.html'
        } else {
            window.location.href = '../NotFound/index.html'
        }
    
    }
    
})

form.addEventListener('submit', e => {
    e.preventDefault();

    data = {
        ...vaga,
        condominium: form[0].value,
        parkingSpace: form[1].value,
        description: form[2].value,
        negotiation: form[3].value,
        startDate: form[4].value,
        startTime: form[5].value,
        endDate: form[6].value,
        endTime: form[7].value,
        amount: `${form[8].value}`,
    }

    if (data.id) {
        
        vagas = vagas.map(vaga => {
            return vaga.id == data.id ? data : vaga
        });

    } else {

        data = {
            ...data,
            id: vagas.length + 1,
            userId: user.id,
            status: 'livre',
        }

        vagas.push(data)
        form[0].value = '';
        form[1].value = '';
        form[2].value = '';
        form[3].value = '';
        form[4].value = '';
        form[5].value = '';
        form[6].value = '';
        form[7].value = '';
        form[8].value = '';

    }

    const dataArray = JSON.stringify(vagas);
    localStorage.setItem("Vagas", dataArray);
    
});

function formatCoin(input) {
    let valor = input.value.replace(/\D/g, '');
    valor = (valor / 100).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    input.value = valor;
}
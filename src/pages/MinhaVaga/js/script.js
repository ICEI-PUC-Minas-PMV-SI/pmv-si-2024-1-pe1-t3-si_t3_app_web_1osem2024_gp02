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

    
    user.condominios.forEach(condominio => {

        document.getElementById('condominioSelect').insertAdjacentHTML('afterbegin', `<option value='${condominio.nome}'>${condominio.nome}</option>`);
        
    });


    if (id) {
    
        vaga = vagas.find(vaga => {
            return vaga.id == id
        })
    
        if (vaga && vaga.locatario.id == user.id) {
            form[0].value = vaga.condominio;
            form[1].value = vaga.nome;
            form[2].value = vaga.descricao;
            form[3].value = vaga.negociacao;
            form[4].value = vaga.dataInicial;
            form[5].value = vaga.horaInicial;
            form[6].value = vaga.dataFinal;
            form[7].value = vaga.horaFinal;
            form[8].value = vaga.valor;
        } else if (vaga) {
            window.location.href = '../AcessoNegado/index.html'
        } else {
            window.location.href = '../PaginaNaoEncontrada/index.html'
        }
    
    }
    
})

form.addEventListener('submit', e => {
    e.preventDefault();
    let data = {
        ...vaga,
        condominio: form[0].value,
        nome: form[1].value,
        descricao: form[2].value,
        negociacao: form[3].value,
        dataInicial: form[4].value,
        horaInicial: form[5].value,
        dataFinal: form[6].value,
        horaFinal: form[7].value,
        valor: `${form[8].value}`,
    }

    if (data.id) {
        
        vagas = vagas.map(vaga => {
            return vaga.id == data.id ? data : vaga
        });

    } else {

        data = {
            ...data,
            id: vagas.length + 1,
            locatario: user,
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

    window.location.href = '../MinhasVagas/index.html'
    
});

function formatCoin(input) {
    let valor = input.value.replace(/\D/g, '');
    valor = (valor / 100).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    input.value = valor;
}
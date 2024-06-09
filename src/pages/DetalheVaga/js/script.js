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

        if (vaga) {
            
            document.getElementById("vagaNome").innerHTML = `Vaga ${vaga.nome}`
            document.getElementById("vagaNomeUsuario").innerHTML = vaga.locador && vaga.locatario == user.id ?  vaga.locador.nome : vaga.locatario.nome
            document.getElementById("vagaDescricao").innerHTML = vaga.descricao
            document.getElementById("vagaDataInicial").innerHTML = formatDateTime(vaga.dataInicial, vaga.horaInicial)
            document.getElementById("vagaDataFinal").innerHTML = formatDateTime(vaga.dataFinal, vaga.horaFinal)
            
            if (vaga.proposta && vaga.status == 'solicitacao') {
                form[0].value = vaga.dataInicial
                form[1].value = vaga.horaInicial
                form[2].value = vaga.dataFinal
                form[3].value = vaga.horaFinal
                form[4].value = vaga.pagamento
                document.getElementById("btnSalvar").innerHTML = 'Atualizar Proposta'
            }

        } else {
            window.location.href = '../PaginaNaoEncontrada/index.html'
        }
    
    }
    
})

form.addEventListener('submit', e => {
    
    e.preventDefault();

    let data = {
        ...vaga,
        locador: user,
        status: 'solicitacao',
        proposta: {
            dataInicial: form[0].value,
            horaInicial: form[1].value,
            dataFinal: form[2].value,
            horaFinal: form[3].value,
            pagamento: form[4].value,
        }
    }

    vagas = vagas.map(vaga => {
        return vaga.id == data.id ? data : vaga
    });

    form[0].value = '';
    form[1].value = '';
    form[2].value = '';
    form[3].value = '';
    form[4].value = '';

    const dataArray = JSON.stringify(vagas);
    localStorage.setItem("Vagas", dataArray);

    notificacoes.push({
        id: notificacoes.length + 1,
        vagaId: data.id,
        userId: data.locatario.id,
        tipo: 'solicitacao',
        titulo: `Solicitação - Vaga ${ data.id }`,
        descricao: `${ data.locador.nome } deseja utilizar sua vaga. Clique para visualizar.`,
        visualizado: false
    })

    const dataNotificacoesArray = JSON.stringify(notificacoes);
    localStorage.setItem("Notificacoes", dataNotificacoesArray);
    
});

function formatCoin(input) {
    let valor = input.value.replace(/\D/g, '');
    valor = (valor / 100).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    input.value = valor;
}
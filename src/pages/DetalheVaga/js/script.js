const url = window.location.href;
const urlObj = new URL(url);
const params = urlObj.searchParams;
const id = params.get('id');

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
            document.getElementById("vagaNomeUsuario").innerHTML = vaga.locador && vaga.locatario == user.id ? vaga.locador.nome : vaga.locatario.nome
            document.getElementById("vagaDescricao").innerHTML = vaga.descricao
            document.getElementById("vagaDataInicial").innerHTML = formatDateTime(vaga.dataInicial, vaga.horaInicial)
            document.getElementById("vagaDataFinal").innerHTML = formatDateTime(vaga.dataFinal, vaga.horaFinal)
            
            if (vaga.status == 'livre' || (vaga.status == 'solicitacao' && vaga.locador.id == user.id)) {
                loadComponent('formularioProposta', '../../components/FormularioProposta/index.html', {}, preencherFormulario);

            } else if (vaga.status == 'solicitacao' && vaga.locatario.id == user.id) {
                vaga.proposta.dataCompletaInicial = formatDateTime(vaga.proposta.dataInicial, vaga.proposta.horaInicial)
                vaga.proposta.dataCompletaFinal = formatDateTime(vaga.proposta.dataInicial, vaga.proposta.horaInicial)
                loadComponent('proposta', '../../components/Proposta/index.html', vaga.proposta);
                loadComponent('formularioAprovacao', '../../components/FormularioAprovacao/index.html', vaga);

            } else {
                vaga.proposta.dataCompletaInicial = formatDateTime(vaga.proposta.dataInicial, vaga.proposta.horaInicial)
                vaga.proposta.dataCompletaFinal = formatDateTime(vaga.proposta.dataInicial, vaga.proposta.horaInicial)
                loadComponent('proposta', '../../components/Proposta/index.html', vaga.proposta);
            }
        } else {
            window.location.href = '../PaginaNaoEncontrada/index.html'
        }
    
    }
    
})

function formatCoin(input) {
    let valor = input.value.replace(/\D/g, '');
    valor = (valor / 100).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    input.value = valor;
}

function preencherFormulario() {

    if (vaga.proposta) {

        const form = document.getElementById('form');
        
        form[0].value = vaga.proposta.dataInicial
        form[1].value = vaga.proposta.horaInicial
        form[2].value = vaga.proposta.dataFinal
        form[3].value = vaga.proposta.horaFinal
        form[4].value = vaga.proposta.pagamento

        document.getElementById("btnSalvar").innerHTML = 'Atualizar Proposta'
    
    }

}

function enviarFormulario() {
    
    const form = document.getElementById('form');

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

    window.location.reload() 
    
}

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
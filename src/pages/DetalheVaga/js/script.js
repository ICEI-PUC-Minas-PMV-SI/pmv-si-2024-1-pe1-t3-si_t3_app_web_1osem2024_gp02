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
            document.getElementById("vagaNomeUsuario").innerHTML = vaga.aaa
            document.getElementById("vagaDescricao").innerHTML = vaga.descricao
            document.getElementById("vagaDataInicial").innerHTML = formatDateTime(vaga.dataInicial, vaga.horaInicial)
            document.getElementById("vagaDataFinal").innerHTML = formatDateTime(vaga.dataFinal, vaga.horaFinal)
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
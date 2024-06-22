let logado = JSON.parse(localStorage.getItem("Logado"))
    ? JSON.parse(localStorage.getItem("Logado"))
    : {};

let cadastros = JSON.parse(localStorage.getItem("Cadastros"))
    ? JSON.parse(localStorage.getItem("Cadastros"))
    : [];

const condominios = JSON.parse(localStorage.getItem("Condominios"))
    ? JSON.parse(localStorage.getItem("Condominios"))
    : [
        {
            id: 1,
            nome: 'Portal recanto das margaridas'
        },
        {
            id: 2,
            nome: 'Edifício Juca Lopes'
        },
        {
            id: 3,
            nome: 'Jardim da Colina'
        },
    ];


let perfil = cadastros.find(cadastro => {
    return logado.id == cadastro.id
})

document.addEventListener('DOMContentLoaded', function () { 

    condominios.forEach((condominio, index) => {

        console.log(condominio)

        document.getElementById('inputCondominios').insertAdjacentHTML('afterend', ` \
                <div class='form-checkbox' > \
                    <input type='checkbox' name='condominios' value='${condominio.id}' id='optionCondominio${index}'> \
                    <label for='optionCondominio${index}'>${condominio.nome}</label> \
                </div> \
        `);
        
    });

    form[0].value = perfil.nome;
    form[1].value = perfil.email;
    form[2].value = perfil.telefone ?? '';
    form[3].value = perfil.cpf;
    form[4].value = perfil.descricao ?? '';
    
})

form.addEventListener('submit', e => {

    e.preventDefault();

    let data = {
        ...perfil,
        nome: form[0].value,
        email: form[1].value,
        telefone: form[2].value,
        cpf: form[3].value,
        descricao: form[4].value,
        condominios: []
    }

    logado = {
        ...logado,
        descricao: form[4].value,
        condominios: []
    }

    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {

            condominios.forEach(condominio => {
                if (condominio.id == checkboxes[i].value) {
                    data.condominios.push(condominio)           
                    logado.condominios.push(condominio)           
                }
            });
        }
    }

    cadastros = cadastros.map(cadastro => {
        return cadastro.id == data.id ? data : cadastro
    });

    const dataArray = JSON.stringify(cadastros);
    localStorage.setItem("Cadastros", dataArray);

    const dataLogado = JSON.stringify(logado);
    localStorage.setItem("Logado", dataLogado);

    window.location.href = '../Home/index.html'
    
});

function formatCoin(input) {
    let valor = input.value.replace(/\D/g, '');
    valor = (valor / 100).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
    input.value = valor;
}
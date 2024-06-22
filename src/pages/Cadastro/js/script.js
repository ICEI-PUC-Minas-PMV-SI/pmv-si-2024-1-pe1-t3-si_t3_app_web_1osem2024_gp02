const form = document.getElementById('form');
const cpfError = document.getElementById('cpf-error');
const passwordError = document.getElementById('password-error');
const cpfExiste = document.getElementById('cpfExiste');
const emailExiste = document.getElementById('emailExiste');

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("Cadastros"))
        ? JSON.parse(localStorage.getItem("Cadastros"))
        : [];

    if (validarCPF(form[2].value)) return;
    if (form[3].value !== form[4].value) return passwordError.style.display = 'block';
    if (validarInformacoes(data)) return;

    if (data.length > 0) {
        const index = data.length - 1;
        const object = {
            id: data[index].id + 1,
            nome: form[0].value,
            email: form[1].value,
            cpf: form[2].value,
            senha: criptografarSenha(form[3].value),
        };

        data.push(object);
    } else {
        const object = {
            id: 1,
            nome: form[0].value,
            email: form[1].value,
            cpf: form[2].value,
            senha: criptografarSenha(form[3].value),
        };

        data.push(object);
    };

    const dataArray = JSON.stringify(data);
    localStorage.setItem("Cadastros", dataArray);
    alert("cadastro feito com sucesso.");
    window.location.href = '../Login/index.html';
});

const validarInformacoes = (data) => {
    let semErro = false;
    for (let i = 0; i < data.length; i++) {
        if (data[i].email === form[1].value) {
            semErro = true;
            emailExiste.style.display = 'block';
            break;
        };

        if (data[i].cpf === form[2].value) {
            semErro = true;
            cpfExiste.style.display = 'block';
            break;
        };
    };

    return semErro
}

const confirmPassword = () => {
    passwordError.style.display = 'none';
}

const emailDisplay = () => {
    emailExiste.style.display = 'none';
}

const formatarCPF = () => {
    cpfError.style.display = 'none';
    cpfExiste.style.display = 'none';
    let cpf = form[2].value.replace(/\D/g, '');

    if (cpf.length > 3 && cpf.length <= 6) {
        cpf = cpf.replace(/(\d{3})(\d+)/, '$1.$2');
    } else if (cpf.length > 6 && cpf.length <= 9) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
    } else if (cpf.length > 9) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4');
    }

    form[2].value = cpf;
}

const validarCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]/g, '');

    if (cpf.length !== 11) return cpfError.style.display = 'block';

    if (/^(\d)\1+$/.test(cpf)) return cpfError.style.display = 'block';

    let soma = 0;
    let resto;

    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return cpfError.style.display = 'block';

    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11)) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return cpfError.style.display = 'block';

    cpfError.style.display = 'none';
    return false
}

const criptografarSenha = (senha) => {
    let resultado = '';
    for (let i = 0; i < senha.length; i++) {
        let charCodeAt = senha.charCodeAt(i);
        let codigo = charCodeAt + 8;
        resultado += String.fromCharCode(codigo);
    }
    return resultado;
}

const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("Cadastros"))
        ? JSON.parse(localStorage.getItem("Cadastros"))
        : [{}];

    data.map(val => {
        if (val.email === form[0].value && val.senha === criptografarSenha(form[1].value)) {
            const { id, email, nome } = val
            const dataArray = JSON.stringify({ id, email, nome });
            localStorage.setItem("Logado", dataArray);
            alert("Login feito com sucesso.");
            window.location.href = '../Home/index.html';
        } else {
            alert("Email ou senha incorretos.");
        }
    });
});

function criptografarSenha(senha) {
    let resultado = '';
    for (let i = 0; i < senha.length; i++) {
        let charCodeAt = senha.charCodeAt(i);
        let codigo = charCodeAt + 8;
        resultado += String.fromCharCode(codigo);
    }
    return resultado;
}
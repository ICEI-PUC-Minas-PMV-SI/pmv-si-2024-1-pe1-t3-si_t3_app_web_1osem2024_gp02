const mensagem = (val) => {
    localStorage.setItem("PessoaMensagem", val);
    window.location.href = '../ChatBase/index.html';
}
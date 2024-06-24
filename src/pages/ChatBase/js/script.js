const form = document.getElementById('form');
const input = document.getElementById('input');

document.addEventListener('DOMContentLoaded', function () {
    carregarChat()
});

form.addEventListener('submit', e => {
    e.preventDefault();
    const pessoaMensagem = localStorage.getItem("PessoaMensagem") || "";
    const chat = JSON.parse(localStorage.getItem("Chat")) || { chats: [] };

    for (let i = 0; i < chat.chats.length; i++) {
        if (chat.chats[i].participantes.filter((val) => val.id === user.id).length > 0 && chat.chats[i].participantes.filter((val) => val.id === Number(pessoaMensagem)).length > 0) {
            chat.chats[i].mensagens.push({ texto: input.value, enviadoPor: user.nome });
            break;
        };
    };

    const chatMessages = document.getElementById('chatMessages');
    const novaDiv = document.createElement('div');
    novaDiv.className = 'message__other';
    novaDiv.innerHTML = `<span class="message__sender">${user.nome}</span>${input.value}`;
    chatMessages.appendChild(novaDiv);

    input.value = "";
    localStorage.setItem("Chat", JSON.stringify(chat));
});

const carregarChat = () => {
    const { nome, id } = JSON.parse(localStorage.getItem("Logado"));
    const pessoaMensagem = localStorage.getItem("PessoaMensagem") || "";
    const { chats } = JSON.parse(localStorage.getItem("Chat")) || {};

    if (!chats) return;

    chats.map((chat) => {
        if (chat.participantes.filter((val) => val.id === id).length > 0 && chat.participantes.filter((val) => val.id === Number(pessoaMensagem)).length > 0) {
            chat.mensagens.map((mensagen) => {
                if (mensagen.enviadoPor === nome) {
                    const chatMessages = document.getElementById('chatMessages');
                    const novaDiv = document.createElement('div');
                    novaDiv.className = 'message__other';
                    novaDiv.innerHTML = `<span class="message__sender">${mensagen.enviadoPor}</span>${mensagen.texto}`;
                    chatMessages.appendChild(novaDiv);
                } else {
                    const chatMessages = document.getElementById('chatMessages');
                    const novaDiv = document.createElement('div');
                    novaDiv.className = 'message__self';
                    novaDiv.innerHTML = `<span class="message__sender">${mensagen.enviadoPor}</span>${mensagen.texto}`;
                    chatMessages.appendChild(novaDiv);
                };
            });
        };
    });
};

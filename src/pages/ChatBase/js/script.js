const form = document.getElementById('form');
const input = document.getElementById('input');

document.addEventListener('DOMContentLoaded', function () {
    carregarChat()
});

form.addEventListener('submit', e => {
    e.preventDefault();
    let validador = true;
    const pessoaMensagem = localStorage.getItem("PessoaMensagem") || "";
    const chat = JSON.parse(localStorage.getItem("Chat")) || { chats: [] };
    const chatJson = {
        id: chat.chats.length + 1,
        participantes: [user.nome, pessoaMensagem],
        mensagens: []
    };

    if (chat.chats.length === 0) {
        chatJson.mensagens.push({ texto: input.value, enviadoPor: user.nome });
        chat.chats.push(chatJson);
    } else {
        for (let i = 0; i < chat.chats.length; i++) {
            if (chat.chats[i].participantes.includes(user.nome) && chat.chats[i].participantes.includes(pessoaMensagem)) {
                chat.chats[i].mensagens.push({ texto: input.value, enviadoPor: user.nome });
                validador = false;
                break;
            } else {
                if (validador && chat.chats.length === (i + 1)) {
                    chatJson.mensagens.push({ texto: input.value, enviadoPor: user.nome });
                    chat.chats.push(chatJson);
                    break;
                };
            }
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
    const { nome } = JSON.parse(localStorage.getItem("Logado"));
    const pessoaMensagem = localStorage.getItem("PessoaMensagem") || "";
    const { chats } = JSON.parse(localStorage.getItem("Chat")) || {};

    if (!chats) return;

    chats.map((chat) => {
        if (chat.participantes.includes(nome) && chat.participantes.includes(pessoaMensagem)) {
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

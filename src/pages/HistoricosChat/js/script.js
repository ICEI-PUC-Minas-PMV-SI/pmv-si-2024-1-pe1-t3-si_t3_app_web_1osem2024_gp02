document.addEventListener('DOMContentLoaded', function () {
    const { chats } = JSON.parse(localStorage.getItem("Chat")) || [{}];
    const chatsUsuario = chats.filter((chat) => chat.participantes.filter((participante) => participante.id === user.id).length > 0);

    chatsUsuario.map((chatUsuario) => {
        chatUsuario.participantes.map((participante) => {
            if (participante.id !== user.id) {
                document.getElementById('historico').innerHTML = `<button onclick="chatUser(${participante.id})" type="button" class="notificationCard">
                <div class="notificationMessageCard">
                    <img class="imgPerfil" src="../../assets/img/perfil-sem-foto-1024x655.jpg.png" alt="">
                </div>
                <div class="textCard">
                    <h3>${participante.nome}</h3>
                    <p>Mensagem: ${chatUsuario.mensagens[chatUsuario.mensagens.length - 1].texto}</p>
                </div>
            </button>`
            };
        });
    });

});

const chatUser = (val) => {
    localStorage.setItem("PessoaMensagem", val);
    window.location.href = '../ChatBase/index.html';
};
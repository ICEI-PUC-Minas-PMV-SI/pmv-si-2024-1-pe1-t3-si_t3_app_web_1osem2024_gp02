document.addEventListener('DOMContentLoaded', function() {
    const data = JSON.parse(localStorage.getItem("Logado")) || {nome: 'Fulano'};
    const vagas = JSON.parse(localStorage.getItem("Vagas")) || [];

    const spaces = vagas.filter((vaga) => vaga.locatario.id === user.id);
    const vagasNomes = spaces.map((space) => space.nome).join(', ');
    const localizacao = data.condominios.map((condominio) => condominio.nome).join(', ');
    const descricao = data.descricao || '';
    const editButton = document.createElement('button');
    editButton.innerText = 'Editar Perfil';
    editButton.addEventListener('click', () => {
        window.location.href = '../CompletarCadastro/index.html';
    });

    document.getElementById('nome').innerText = `${data.nome}`
    document.getElementById('descricao').appendChild(document.createTextNode(descricao));
    document.getElementById('localizacao').appendChild(document.createTextNode(localizacao));
    document.getElementById('vagasPossuidas').appendChild(document.createTextNode(vagasNomes));
    document.getElementById('infoPerfil').insertAdjacentElement('afterend', editButton);
    document.getElementById('spacesAmount').innerText = spaces.length;

    document.getElementById('perfisAvali').innerHTML = `<div class="infoPerfil">
                <img class="imgPerfilAvali" src="../../assets/img/perfil-sem-foto-1024x655.jpg.png" alt="">
                <div class="textPerfil">
                    <b>teste</b>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-star-fill starAvaliacao" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-star-fill starAvaliacao" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-star-fill starAvaliacao" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-star-fill starAvaliacao" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>
                    <p>Avaliação</p>
                </div>
            </div>
            <div class="infoPerfil">
                <img class="imgPerfilAvali" src="../../assets/img/perfil-sem-foto-1024x655.jpg.png" alt="">
                <div class="textPerfil">
                    <b>outro</b>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-star-fill starAvaliacao" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-star-fill starAvaliacao" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-star-fill starAvaliacao" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                    </div>
                    <p>Avaliação</p>
                </div>
            </div>`
})
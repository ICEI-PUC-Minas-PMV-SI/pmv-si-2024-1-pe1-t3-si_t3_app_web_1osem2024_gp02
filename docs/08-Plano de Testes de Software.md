# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

<!-- Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7) -->

Definimos um plano de testes unitários para cada página a serem realizados em Jest.

## 1 - Tela de cadastro

> RF-001, RNF-004

| **Caso de teste** | **Descrição** | **Resultado esperado** |
|---|---|---|
| **CADASTRO-001** | Deve renderizar todos os componentes corretamente | Campo de nome, email, cpf, senha, confirmação de senha, botão de cadastro e login estão presentes |
| **CADASTRO-002** | Deve criar a conta caso todos os dados estejam corretos | Conta criada com sucesso |
| **CADASTRO-003** | Não deve criar a conta com um cpf inválido | Alerta/Não é possível criar a conta |
| **CADASTRO-004** | Não deve criar a conta com um email inválido | Alerta/Não é possível criar a conta |
| **CADASTRO-005** | Não deve criar a conta caso as senhas sejam diferentes | Alerta/Não é possível criar a conta |

## 2 - Tela de login

> RNF-004

| **Caso de teste** | **Descrição** | **Resultado esperado** |
|---|---|---|
| **LOGIN-001** | Deve renderizar todos os componentes corretamente | Todos os campos essenciais estão presentes |
| **LOGIN-002** | Não deve ser possível entrar com um email não cadastrado | Alerta/Não é possível entrar |
| **LOGIN-003** | Não deve ser possível entrar com uma senha incorreta | Alerta/Não é possível entrar |
| **LOGIN-004** | Deve ser possível ir para o cadastro | Redireciona para o cadastro |
| **LOGIN-005** | Deve ser possível ir para a recuperação de senha | Redireciona para recuperação de senha |
| **LOGIN-006** | Deve ser possível entrar | Loginrealizado com sucesso |

## 3 - Tela principal

> RNF-003, RF-005, RF-006

| **Caso de teste** | **Descrição** | **Resultado esperado** |
|---|---|---|
| **HOME-001** | Deve renderizar todos os componentes corretamente | Todos os campos e botões essenciais estão presentes |
| **HOME-002** | Deve ser possível ir para a busca de vagas ao clicar no botão | Redireciona para busca de vagas |
| **HOME-003** | Deve ser possível ir para o cadastro de vagas ao clicar no botão | Redireciona paro cadastro de vagas |
| **HOME-004** | Deve ser possível ver as reservas em andamento | Exibe as reservas corretamente |

## 4 - Tela de busca de vagas

> RF-006

| **Caso de teste** | **Descrição** | **Resultado esperado** |
|---|---|---|
| **BUSCA-001** | Deve renderizar todos os componentes corretamente | Todos os campos e botões essenciais estão presentes |
| **BUSCA-002** | Deve ser possível filtrar os resultados por preço | Exibe resultados de acordo com o filtro de preço |
| **BUSCA-003** | Deve ser possível filtrar os resultados por data | Exibe resultados de acordo com o filtro de data |
| **BUSCA-004** | Deve ser possível filtrar os resultados por horário | Exibe resultados de acordo com o filtro de horário |
| **BUSCA-005** | Deve ser possível ir para os detalhes de uma vaga ao clicar sobre o anuncio | Exibe redirecionar para os detealhes da vaga |

## 5 - Menu

> RNF-003

| **Caso de teste** | **Descrição** | **Resultado esperado** |
|---|---|---|
| **MENU-001** | Deve renderizar todos os componentes corretamente | Todos os campos e botões essenciais estão presentes |
| **MENU-002** | Deve ser possível ir para a tela de notificações ao clicar no botão | Redireciona para a tela de notificações |
| **MENU-003** | Deve ser possível ir para a tela de mensagens ao clicar no botão | Redireciona para a tela de mensagens |
| **MENU-004** | Deve ser possível abrir o menu de mais opções ao clicar no botão | Abre o menu de mais opções |
| **MENU-005** | Deve ser possível ir para a tela de perfil ao clicar no botão | Redireciona para a tela de perfil |
| **MENU-006** | Deve ser possível ir para a tela de gerenciamento de vagas ao clicar no botão | Redireciona para a tela de gerenciamento de vagas |
| **MENU-007** | Deve ser possível ir para a tela de histórico de reservas ao clicar no botão | Redireciona para a tela de histórico de reservas |
| **MENU-008** | Deve ser possível ir para a tela de reclamações ao clicar no botão | Redireciona para a tela de reclamações |
| **MENU-009** | Deve ser possível encerrar a sessão no aplicativo ao clicar no botão | Encerra a sessão |

## 5 - Tela de criação de nova vaga

>RF-005, RNF-004

| **Caso de teste** | **Descrição** | **Resultado esperado** |
|---|---|---|
| **NOVA-001** | Deve renderizar todos os componentes corretamente | Todos os campos e botões essenciais estão presentes |
| **NOVA-002** | Deve ser possível ver todos os condomínios dos quais o usuário faz parte na listagem | Todos os condomínios válidos listados |
| **NOVA-003** | Não deve ser possível ver condomínios dos quais o usuário não faz parte na listagem | Condomínios inválidos não são listados |
| **NOVA-004** | Não deve ser possível criar uma vaga com a data e hora final menor que a inicial | Alerta/Não é possível criar |
| **NOVA-005** | Não deve ser possível criar uma vaga com dados incompletos | Alerta/Não é possível criar |
| **NOVA-006** | Deve ser possível criar uma vaga com todos os dados válidos | Vaga publicada |

## 6 - Tela de detalhes da vaga

>RF-007, RF-008, RF-013

| **Caso de teste** | **Descrição** | **Resultado esperado** |
|---|---|---|
| **VAGA-001** | Deve renderizar todos os componentes corretamente | Todos os campos e botões essenciais estão presentes |
| **VAGA-002** | Deve ser possível enviar uma dúvida sobre a vaga | Mensagem publicada na página |
| **VAGA-003** | Deve ser possível ir ao perfil do anunciante ao clicar no link | Redireciona para o perfil |
| **VAGA-004** | Deve ser possível enviar uma dúvida sobre a vaga | Mensagem publicada na página |
| **VAGA-005** | Deve ser possível enviar uma dúvida sobre a vaga | Mensagem publicada na página |
| **VAGA-006** | Não deve ser possível enviar uma proposta de reserva sem os dados necessários preenchidos | Alerta/proposta não enviada |
| **VAGA-007** | Deve ser possível enviar uma proposta de reserva com todos os dados preenchidos | Proposta enviada |

## 7 - Tela de notificações

>RF-009, RF-014, RF-017

| **Caso de teste** | **Descrição** | **Resultado esperado** |
|---|---|---|
| **NOTA-001** | Deve ser possível ver notificação caso uma dúvida seja publicada na página de uma das vagas do usuário | Notificação presente |
| **NOTA-002** | Deve ser possível ir para a página da vaga ao clicar na notificação de dúvida | Redireciona para página correta |
| **NOTA-003** | Deve ser possível ver notificação caso haja solicitação de reserva de uma das vagas do usuário | Notificação presente |
| **NOTA-004** | Deve ser possível ir para a página de solicitações ao clicar na notificação de nova solicitação | Redireciona para página correta |
| **NOTA-005** | Deve ser possível ver notificação caso uma nova mensagem seja recebida | Notificação presente |
| **NOTA-006** | Deve ser possível ir para a página da conversa ao clicar na notificação de nova mensagem | Redireciona para página correta |
| **NOTA-007** | Deve ser possível ver notificação caso uma dúvida publicada pelo usuário seja respondida  | Notificação presente |
| **NOTA-008** | Deve ser possível ir para a página da vaga ao clicar na notificação de dúvida | Redireciona para página correta |
| **NOTA-009** | Deve ser possível ver notificação caso uma solicitação de reserva feita pelo usuário seja rejeitada | Notificação presente |
| **NOTA-010** | Deve ser possível ver notificação caso uma solicitação de reserva feita pelo usuário seja aprovada | Notificação presente |
| **NOTA-011** | Administrador: Deve ser possível ver notificação caso uma reclamação sobre um usuário seja feita | Notificação presente |

## 8 - Tela de mensagens e tela de conversa

>RF-009, RF-017

| **Caso de teste** | **Descrição** | **Resultado esperado** |
|---|---|---|
| **CHAT-001** | Deve renderizar todos os componentes corretamente | Todos os campos e botões essenciais estão presentes |
| **CHAT-002** | Deve ser possível visualizar uma listagem de mensagens recentes sobre as reservas ou reclamações do usuário | Mensagens listadas corretamente |
| **CHAT-003** | Deve ser possível abrir uma conversa ao clicar sobre a mensagem | Redireciona para a tela da conversa |
| **CHAT-004** | Deve ser possível responder a uma mensagem na tela da conversa  | Mensagens enviada |
| **VAGA-005** | Deve ser possível ir para a página da vaga ao clicar no link da página da conversa | Redireciona corretamente |

## 9 - Tela de reclamações: histórico e nova reclamação

>RF-017

| **Caso de teste** | **Descrição** | **Resultado esperado** |
|---|---|---|
| **RECLAMACAO-001** | Deve renderizar todos os componentes corretamente | Listagem de reclamações exibida corretamente |
| **RECLAMACAO-002** | Deve ser possível ir para a página de conversa aberta com o administrador sobre uma reclamação ao clicar no botão | Redireciona para a página da conversa |
| **RECLAMACAO-003** | Deve ser abrir o formulário de reclamação ao clicar na aba | Formulário exibido corretamente |
| **RECLAMACAO-004** | Não deve ser possível enviar uma reclamação com dados incompletos | Alerta/Não é possível enviar |
| **RECLAMACAO-005** | Deve ser possível enviar uma reclamacão com todos os dados preenchidos | Reclamação enviada |

# Registro de Testes de Software

<span style="color:red">Pré-requisitos: <a href="7-Programação de Funcionalidades.md"> Programação de Funcionalidades</a></span>, <a href="10-Plano de Testes de Usabilidade.md"> Plano de Testes de Usabilidade</a>

Relatório com evidências dos testes e relatos dos usuários participantes, baseado em um plano de testes pré-definido.

| **Caso de Teste** | CT001 - Criação da conta |
|---|---|
| **Procedimento** | 1- Entrar no aplicativo e preencher seus dados; 2- confirmar criação da conta |
| **Requisitos associados** | RF-001; RNF-003; RNF-004; |
| **Resultado esperado** | 1- conta criada com sucesso; 2- redireciona para o login |
| **Resultado esperado (dados inválidos)** | 1-Não é possível criar a conta; 2-Mensagens de erro explicativas exibidas |
| **Dados de entrada** | 1-Nome; 2-E-mail; 3-Cpf; 4-Senha |
| **Dados de entrada (inválidos)** | 1-Caracteris inválidos na opção nome como %$#@!; 2-E-mail sem seguir formatação correta de Email, exemplo: usuario@provedor.com; 3-Cpf invalido, exemplo: menos de 11 dígitos; 4- Senha com menos que 8 caracteres, ou sem conter ao menos uma letra maiúscula, uma minúscula e  um numero; 5- Qualquer campo de preenchimento em branco. |
| **Resultado** | Sucesso |

Evidência:

https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp02/assets/44041066/fee15710-ac66-4038-9a39-4206affac271


| **Caso de Teste** | CT002 - Login |
|---|---|
| **Procedimento** | 1- Entrada de dados da conta;  2-Confirmação do login; |
| **Requisitos associados** | RF-001; RF-002; RNF-003; RNF-004; |
| **Resultado esperado ** | 1- Login realizado com sucesso; 2-Redirecionamento para a pagina principal |
| **Resultado esperado (dados inválidos)** | 1-Não é possível realizar o login; 2-Mensagens de erro explicativas exibidas |
| **Dados de entrada** | 1-E-mail; 2-Senha |
| **Dados de entrada (inválidos)** | 1-E-mail invalido; 2-Senha invalida |
| **Resultado** | Sucesso |

Evidência:

https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp02/assets/44041066/3347249d-64ff-4058-93c4-9c91a8d60fba


| **Caso de Teste** | CT003 - Recuperação de conta |
|---|---|
| **Procedimento** | 1- Entrada de dados da conta;  2-Confirmar a recuperação da conta; |
| **Requisitos associados** | RF-001; RF-002; RNF-003; RNF-004; |
| **Resultado esperado ** | 1- Email de recuperação enviado com sucesso; 2- Redirecionamento para a pagina de recuperação de conta |
| **Resultado esperado (dados inválidos)** | 1-Não é possível a recuperação da conta; 2-Mensagens de erro explicativas exibidas |
| **Dados de entrada** | 1-E-mail;  |
| **Dados de entrada (inválidos)** | 1-E-mail invalido;  |
| **Resultado** | Falha |

Evidência:

https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp02/assets/44041066/52a248cc-2ad1-4bc3-bf1e-12915100f85f

| **Caso de Teste** | CT004 - Pagina Principal |
|---|---|
| **Procedimento** | 1- Verificar se consta na tela principal o resumo das reservas em andamento; 2- Verificar se consta os botões  de procurar vagas, anunciar vagas; 3-Verificar se os botões padrões se encontram na parte inferior da pagina; 3- Pressionar os botões da página principal correspondentes para cada área; |
| **Requisitos associados** | RF-015; RNF-002; RNF-003; RNF-004; |
| **Resultado esperado** | 1- Redirecionamento para a pagina correspondente |
| **Resultado esperado (dados inválidos)** | 1-Não é possível realizar o redirecionamento; 2-Mensagens de erro explicativas exibidas |
| **Resultado** |  |

Evidência:

| **Caso de Teste** | CT05 - Gerenciamento de vagas |
|---|---|
| **Procedimento** | 1- Verificar se é exibido na tela as informações de vagas do usuário; 2- Verificar se consta os botões Nova vaga, editar e excluir; 3- Verificar se os botões padrões se encontram na parte inferior da pagina; |
| **Requisitos associados** | RF-005; RF-006; RF-0015; RNF-003; RNF-004; |
| **Resultado esperado** | 1-Informações das vagas do usuário ; 2-Redirecionamento para pagina de edição de vaga; 3-Redirecionamento para pagina de criação de vaga; 4-Exclusão da vaga; |
| **Resultado esperado (dados inválidos)** | 1-Não é possível editar, criar ou excluir uma vaga; 2-Mensagens de erro explicativas exibidas |
| **Resultado** | Sucesso parcial: faltam opções de excluir a vaga ou criar uma nova vaga a partir desta tela |

Evidência:

https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp02/assets/44041066/a834e7eb-0e69-44b2-ac9b-1f75a84e0db3

| **Caso de Teste** | CT006 - Criação de vagas |
|---|---|
| **Procedimento** | 1-Preencher os dados da vaga; 2-Confirmar criação da vaga; 3-Verificar se os botões padrões se encontram na parte inferior da pagina; |
| **Requisitos associados** | RF-005; RNF-003; RNF-004; |
| **Resultado esperado** | 1-Vaga criada com sucesso; 2-Redireciona para a pagina de gerenciamento de vagas |
| **Resultado esperado (dados inválidos)** | 1-Não é possível criar a vaga; 2-Mensagens de erro explicativas exibidas |
| **Dados de entrada** | 1-Nome/Número da vaga; 2- Endereço; 3- Meios de pagamento aceitáveis; 4- Data da disponibilidade; 5- Preço em R$ da locação; |
| **Dados de entrada (inválidos)** | 1- Qualquer dos campos de preenchimento em branco; 2- data de disponibilidade passada, exemplo: 19/01/2020. |
| **Resultado** | Sucesso parcial: é possível criar vagas com datas passadas |

Evidência:

https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp02/assets/44041066/b163cf56-85ce-43fd-a66d-64482973d563

| **Caso de Teste** | CT007 - Edição de vaga |
|---|---|
| **Procedimento** | 1- Preencher os dados que serão alterados; 2- confirmar a alteração; 3-Verificar se os botões padrões se encontram na parte inferior da pagina; |
| **Requisitos associados** | RF-005; RNF-003; RNF-004; |
| **Resultado esperado** | 1- alteração feita com sucesso; 2- redireciona para a pagina de gerenciamento de vagas |
| **Resultado esperado (dados inválidos)** | 1-Não é possível editar a vaga; 2-Mensagens de erro explicativas exibidas |
| **Dados de entrada** | 1-preço da locação da vaga; 2- Data da disponibilidade |
| **Dados de entrada (inválidos)** | 1- caracteres inválidos no campo preço; 2- Data invalida; 3- Qualquer campo de preenchimento em branco; |
| **Resultado** |  |

![Evidência:](./video/--.mov)

| **Caso de Teste** | CT008 - Histórico da vaga |
|---|---|
| **Procedimento** | 1- Verificar se é exibido na tela as informações detalhadas da vaga; 2-Verificar se os botões padrões se encontram na parte inferior da pagina; |
| **Requisitos associados** | RF-015; RNF-003; RNF-004; |
| **Resultado esperado** | 1-Exibição do histórico de locação da vaga; |
| **Resultado** |  |

![Evidência:](./video/--.mov)

| **Caso de Teste** | CT009 - Procura de vagas |
|---|---|
| **Procedimento** | 1- Verificar se é exibido vagas disponíveis para locação; 3-Verificar se o botão detalhes se encontra em cada vaga; 4-Verificar se os botões padrões se encontram na parte inferior da pagina; |
| **Requisitos associados** | RF-006; RF-007; RNF-003; RNF-004; |
| **Resultado esperado** | 1- Exibição somente das vagas disponíveis no condomínio; 2-Exibição de informações básicas da vaga;  |
| **Resultado esperado (dados inválidos)** | 1- Não exibição das vagas disponíveis; 2- Exibição das vagas indisponíveis; |
| **Dados de entrada** | 1-Condominio; 2-Data de inicio da locação; 3- Data de termino da locação; |
| **Dados de entrada (inválidos)** | 1-Condominio invalido; 2-Data invalida; 3-Qualquer campo de preenchimento em branco. |
| **Resultado** | Sucesso parcial: não é exibido o valor por vaga, não é possível filtrar os resultados |

Evidência:

https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp02/assets/44041066/c24b28a0-2eba-4e8a-aae2-122285b94075

| **Caso de Teste** | CT010 - Solicitação de reserva de vaga |
|---|---|
| **Procedimento** | 1- Verificar exibição detalhada das informações da vaga; 2-Preencher proposta de locação; 3-Confirmação da proposta; 4-Verificar se os botões padrões se encontram na parte inferior da pagina; |
| **Requisitos associados** | RF-006; RF-007; RF-013; RNF-003; RNF-004; |
| **Resultado esperado** | 1- Proposta enviada com sucesso; 2- redireciona para a pagina principal; |
| **Resultado esperado (dados inválidos)** | 1-Não é possível enviar a proposta; 2-Mensagens de erro explicativas exibidas |
| **Dados de entrada** | 1-Data da locação; 2-Forma de pagamento; |
| **Dados de entrada (inválidos)** | 1-Data invalida; 2- Forma de pagamento invalida; |
| **Resultado** |  |

![Evidência:](./video/--.mov)

| **Caso de Teste** | CT011 - Enviar mensagem sobre a vaga |
|---|---|
| **Procedimento** | 1- Preencher o conteúdo da mensagem; 2- Enviar a mensagem; 3-Verificar se os botões padrões se encontram na parte inferior da pagina; |
| **Requisitos associados** | RF-008; RF-010; RF-014; RNF-003; RNF-004; |
| **Resultado esperado** | 1- Mensagem enviada com sucesso; 2- redireciona para o chat com o locatário e locador. |
| **Resultado esperado (dados inválidos)** | 1-Mensagem não enviada; 2-Mensagens de erro explicativas exibidas |
| **Dados de entrada** | 1-Conteudo da mensagem; |
| **Dados de entrada (inválidos)** | 1-Campo de preenchimento em branco; |
| **Resultado** |  |

![Evidência:](./video/--.mov)

| **Caso de Teste** | CT012 - Chat |
|---|---|
| **Procedimento** | 1- Verificar se consta a exibição das mensagens enviadas e recebidas anteriores; 2-Preencher nova mensagem; 3-Enviar mensagem; 4-Verificar se os botões padrões se encontram na parte inferior da pagina; |
| **Requisitos associados** | RF-008; RF-010; RF-014; RNF-003; RNF-004; |
| **Resultado esperado** | 1- Mensagem enviada com sucesso; 2- exibição da mensagem no chat; |
| **Resultado esperado (dados inválidos)** | 1-Mensagem não enviada; 2-Mensagens de erro explicativas exibidas |
| **Dados de entrada** | 1-Conteudo da mensagem; |
| **Dados de entrada (inválidos)** | 1-Campo de preenchimento em branco; |
| **Resultado** |  |

![Evidência:](./video/--.mov)

| **Caso de Teste** | CT013 - Aba de Notificações |
|---|---|
| **Procedimento** | 1- Verificar se consta a exibição de notificações sobre mensagens recebidas, propostas, reclamações; 2-Verificar se os botões padrões se encontram na parte inferior da pagina; |
| **Requisitos associados** | RF-009; RF-010; RF-014 RNF-003; RNF-004; |
| **Resultado esperado** | 1-Exibição das notificações de mensagens, propostas e reclamações; |
| **Resultado esperado (dados inválidos)** | 1-Não exibição das notificações; 2-Mensagens de erro explicativas exibidas |
| **Resultado** |  |

![Evidência:](./video/--.mov)

| **Caso de Teste** | CT014 - Perfil de usuário |
|---|---|
| **Procedimento** | 1- Verificar se consta a exibição de informações publicas do usuário; 2-Verificar se os botões padrões se encontram na parte inferior da pagina; |
| **Requisitos associados** | RF-007; RNF-003; RNF-004; |
| **Resultado esperado** | 1-Exibição das informações publicas do usuário; |
| **Resultado esperado (dados inválidos)** | 1-Não exibição das informações; 2-Mensagens de erro explicativas exibidas |
| **Resultado** | Sucesso |

Evidência:

https://github.com/ICEI-PUC-Minas-PMV-SI/pmv-si-2024-1-pe1-t3-si_t3_app_web_1osem2024_gp02/assets/44041066/21f460fa-758d-4537-aa0f-afb8d6703c78


| **Caso de Teste** | CT015- Reclamação |
|---|---|
| **Procedimento** | 1-Preencher as informações solicitadas sobre a vaga; 2-Descrever o ocorrido; 3-Confirma a reclamação; 4-Verificar se os botões padrões se encontram na parte inferior da pagina; |
| **Requisitos associados** | RF-004; RF-017; RNF-003; RNF-004; |
| **Resultado esperado** | 1- Reclamação enviada com sucesso; 2- Redirecionamento para a pagina principal; |
| **Resultado esperado (dados inválidos)** | 1-Reclamação não enviada; 2-Mensagens de erro explicativas exibidas |
| **Dados de entrada** | 1-Selecionar o tipo de ocorrido;  2- Selecionar vaga a que se refere; 3- Mensagem do ocorrido; |
| **Dados de entrada (inválidos)** | 1- Vaga invalida; 2-Qualquer campo de preenchimento em branco; |
| **Resultado** |  |

![Evidência:](./video/--.mov)

| **Caso de Teste** | CT016- Histórico de reservas |
|---|---|
| **Procedimento** | 1-Verificar se consta a exibição de informações de cada reserva anteriormente feita; 2-Verificar se nas reservas antigas possuem os botões avaliar e reportar; 3-Verificar se na reserva atualmente em vigor se os botões mensagem e reportar estão disponíveis; 4-Verificar se os botões padrões se encontram na parte inferior da pagina; |
| **Requisitos associados** | RF-004; RF-014; RF-016; RF-017; RNF-003; RNF-004; |
| **Resultado esperado** | 1- Exibição das informações das reservas antigas e atuais; 2- Redirecionamento para chat com o locatário; 3- Redirecionamento para pagina de reclamação; 4-Redirecionamento para a pagina de avaliação; |
| **Resultado esperado (dados inválidos)** | 1-Não exibição das informações sobre as reservas antigas e atuais; 2-Não redirecionamento para as paginas correspondentes; 3-Mensagens de erro explicativas exibidas; |
| **Resultado** |  |

![Evidência:](./video/--.mov)

<!-- > **Links Úteis**: -->
<!-- > - [Ferramentas deTestes de Usabilidade](https://www.usability.gov/how-to-and-tools/resources/templates.html) -->

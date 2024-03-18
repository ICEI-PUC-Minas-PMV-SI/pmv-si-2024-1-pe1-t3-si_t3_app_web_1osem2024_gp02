# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Os moradores de condomínio que compartilham vagas com seus vizinhos enfrentam problemas relacionados à centralização ineficiente das informações o que leva a uma comunicação fragmentada e a um processo de reserva desordenado. Os canais de conversa também tem a rastreabilidade comprometida pois a ausência de um sistema estruturado impede o acompanhamento adequado das reservas, criando confusão sobre a ocupação das vagas. Além disso, o compartilhamento de dados em um grupo aberto do WhatsApp coloca em risco a privacidade dos moradores.

<!-- Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto -->

## Personas

### 1 - Pessoa administradora

Joana tem 48 anos, é dona de casa, síndica do condomínio onde mora. Por ser a ponte entre os moradores e a administração do local, ela também administra o grupo de vagas no WhatsApp, um espaço virtual por onde os moradores organizam o empréstimo e aluguel de suas vagas de garagem. No entanto, o fluxo de mensagens a frequência de pequenos conflitos relacionados à dinâmica de empréstimos são altos.\
Joana se esforça para manter a ordem e resolver questões rapidamente, mas a natureza caótica das conversas em grupo muitas vezes dificulta a localização de informações específicas.

### 2 - Pessoa locadora

Daniela é uma profissional de 30 anos que trabalha em tempo integral e almoça fora para otimizar seu tempo. Daniela transformou sua vaga de garagem ociosa em uma oportunidade de renda extra. Através do grupo de WhatsApp ela anuncia a disponibilidade da vaga, e costuma alugá-la por horas ou dias, o que lhe permite uma fonte adicional de renda para ajudar no custeio do combustível do seu carro.\
Apesar de apreciar a visibilidade que o grupo dá a sua oferta, Daniela enfrentou desafios com a plataforma. Durante uma negociação anterior, um mal-entendido expôs falhas na organização do grupo, resultando em dificuldades para obter informações e assistência. Desde então Daniela se sente mais receosa em relação ao uso do grupo, buscando um equilíbrio entre a exposição e a segurança nas transações.

### 3 - Pessoa locatária

José tem 40 anos e equilibra sua vida profissional e familiar em casa. Como desenvolvedor de software, ele tem a flexibilidade de trabalhar remotamente, e gosta de receber amigos e família para almoços e jantares sempre que possível. A única vaga de garagem de José é normalmente ocupada pelo carro da família, e para acomodar seus convidados ele recorre ao grupo de vagas do Whatsapp. Embora ele geralmente tenha sucesso em garantir um espaço, o processo pode ser estressante devido ao grande número de mensagens e negociações simultâneas no grupo.

<!-- Pedro Paulo tem 26 anos, é arquiteto recém-formado e autônomo. Pensa em se desenvolver profissionalmente através de um mestrado fora do país, pois adora viajar, é solteiro e sempre quis fazer um intercâmbio. Está buscando uma agência que o ajude a encontrar universidades na Europa que aceitem alunos estrangeiros.

Enumere e detalhe as personas da sua solução. Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina e/ou nos seguintes links:

> **Links Úteis**:
>
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja. -->

## Histórias de Usuários

Com base na análise das personas foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
| Administrador | Criar um condomínio e definir as regras de participação | Permitir que moradores entrem e participem das negociações |
| Administrador | Controlar quais usuários podem entrar e quais devem ser removidos do condomínio | Garantir um ambiente seguro e justo para todos que usam o aplicativo |
| Administrador | Receber alertas sobre solicitações de ajuda | Mediar conflitos |
| Administrador | Ter acesso aos registros de reservas e negociações de forma estruturada | Consultar informações de forma eficiente e mediar conflitos |
| Locador | Criar um perfil e cadastrar minhas informações de contato, do meu apartamento e da minha vaga | Poder ser identificado e ingressar em um condomínio |
| Locador | Anunciar minha vaga e informar o período, valor e recorrência da disponibilidade | Alcançar usuários que precisam ocupar uma vaga nas mesmas condições |
| Locador | Ter um canal para responder dúvidas sobre a vaga antes de receber a proposta de reserva | Facilitar o acesso à informações e agilizar as negociações |
| Locador | Receber propostas de reserva com detalhes como período e método de pagamento, bem como sobre o perfil do locatário e suas avaliações | Avaliar as propostas de forma eficiente e tomar decisões bem fundamentadas |
| Locador | Conversar com o usuário solicitante pra negociar as condições antes de resolver a solicitação de reserva | Poder ajustar detalhes sobre a reserva e pagamento antes de resolver a negociação |
| Locador | Poder aceitar ou rejeitar uma solicitação de reserva | Resolver a solicitação, encerrando-a ou iniciando o agendamento |
| Locador | Reportar o locatário que tenha descumprido os acordos da reserva ou do condomínio diretamente ao administrador | Ter o caso mediado e resolvido rapidamente |
| Locador | Avaliar o locatário ao fim do período de reserva | Compartilhar a experiência e ajudar na tomada de decisão dos demais usuários e incentivar o bom uso da plataforma |
| Locatário | Criar um perfil e cadastrar minhas informações de contato e do meu apartamento | Poder ser identificado e ingressar em um condomínio |
| Locatário | Buscar vagas disponíveis no condomínio e visualizar os detalhes sobre a disponibilidade, valor, formas de pagamento, localização, bem como sobre o proprietário e suas avaliações | Escolher a melhor opção com base em minhas necessidades |
| Locatário | Fazer perguntas sobre uma vaga antes de solicitar a reserva | Poder tirar dúvidas sobre algum detalhe ou condição e agilizar o processo de reserva |
| Locatário | Informar as condições e solicitar a reserva de uma vaga | Notificar o locador sobre meu interesse |
| Locatário | Poder receber mensagem do locador a quem fiz a solicitação | Confirmar dados e fazer ajustes antes de resolver a solicitação |
| Locatário | Ser notificado quando uma solicitação for resolvida | Poder saber se foi aceita ou rejeitada |
| Locatário | Reportar o Locador que tenha descumprido os acordos da reserva ou do condomínio diretamente ao administrador | Ter o caso mediado e resolvido rapidamente |
| Locatário | Avaliar o Locador ao fim do período de reserva | Compartilhar a experiência e ajudar na tomada de decisão dos demais usuários e incentivar o bom uso da plataforma |

<!-- Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
>
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/) -->

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
| RF-001 | Permitir que os usuários se cadastrem e definam seu tipo de perfil | ALTA |
| RF-002 | Permitir a edição dos dados do perfil | BAIXA |
| RF-003 | Permitir ao usuário administrador criar e gerenciar membros de um condomínio | ALTA |
| RF-004 | Permitir que o administrador receba reportes de usuários e as informações das reservas a que o incidente diz respeito | MÉDIA |
| RF-005 | Permitir que o locatário anuncie sua vaga e informe período, valor e recorrência da disponibilidade| ALTA |
| RF-006 | Exibir a listagem de vagas disponíveis e suas informações relevantes | ALTA |
| RF-007 | Exibir a página de detalhes de cada vaga com informações sobre o proprietário | MÉDIA |
| RF-008 | Disponibilizar na página de detalhes um espaço para que locatários façam perguntas e locadores as respondam | BAIXA |
| RF-009 | Enviar notificações ao locador sobre novas dúvidas e solicitações de reserva de sua vaga | MÉDIA |
| RF-010 | Permitir que o locador envie mensagem ao usuário que solicitou a reserva | BAIXA |
| RF-011 | Permitir ao locatário editar ou cancelar a solicitação de reserva | MÉDIA |
| RF-012 | Permitir ao locador aceitar ou rejeitar a solicitação | ALTA |
| RF-013 | Permitir ao locatário informar as condições necessárias e solicitar a reserva de uma vaga | ALTA |
| RF-014 | Enviar notificações ao locatário sobre novas mensagens, respostas à suas dúvidas e status de suas solicitações |  |
| RF-015 | Exibir ao usuário a listagem de suas reservas ativas e o histórico de suas reservas e seus detalhes | MÉDIA |
| RF-016 | Permitir aos usuários locadores e locatários avaliar uns aos outros ao final do período de reserva | BAIXA |
| RF-017 | Permitir aos usuários locadores e locatários reportar uns aos outros em casos mais graves que precisem da mediação do administrador | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O aplicativo deve ser MobileFirst para atender principalmente o público que costuma usar o WhatsApp | ALTA |
|RNF-002| O aplicativo precisa ser responsivo e compatível com variados dispositivos e sistemas operacionais | MÉDIA |
|RNF-003| A interface do usuário deve ser intuitiva e fácil de usar |  BAIXA |
|RNF-004| O aplicativo web deve garantir a segurança dos dados dos usuários, utilizando criptografia e práticas de segurança. | ALTA|

<!-- Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos. -->

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

<!-- > **Links Úteis**:
>
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/) -->

<br id="topo">

![Capa](docs/images/capa-readme.png)

# 🚗 FaculRide | Sistema de Caronas Acadêmicas

Projeto de caronas acadêmicas desenvolvido pelos alunos da **FATEC Votorantim**, promovendo economia, segurança e sustentabilidade no deslocamento diário.  

[Sobre](#-sobre-o-projeto) | [Backlogs & User Stories](#-backlogs--user-stories) | [Requisitos Funcionais & Não Funcionais](#-requisitos-funcionais) | [Diagrama de Caso de Uso](#-diagrama-de-caso-de-uso) | [Documentação](#-documentação) | [Deploy & Infraestrutura](#-deploy--Infraestrutura) | [Equipe](#-equipe)

---

## 💡 Sobre o Projeto

O **FaculRide** é uma plataforma inovadora de caronas criada especialmente para a comunidade acadêmica, com o propósito de reduzir a emissão de carbono e facilitar o deslocamento diário de estudantes, professores e funcionários.  
Mais do que um site, o FaculRide é um projeto sustentável que reforça o compromisso ambiental da instituição.

Com um sistema de compartilhamento de viagens, o FaculRide ajuda a diminuir o estresse do trânsito, reduzir custos e promover a integração social dentro da faculdade.  
Pensado para a segurança e conveniência dos usuários, oferece funcionalidades como cadastro verificado e agendamento flexível de caronas, proporcionando uma experiência prática e confiável.

O **FaculRide** é mais do que uma solução de transporte: é uma iniciativa que conecta pessoas, promove a sustentabilidade e transforma o dia a dia acadêmico.


## 🌱 Sustentabilidade

Nosso projeto é comprometido com o desenvolvimento sustentável.  
Atendemos às metas da **ODS 11** (Cidades e Comunidades Sustentáveis) e da **ODS 13** (Ação Contra a Mudança Global do Clima), promovendo uma mobilidade urbana mais consciente e responsável.


## 🚗 Como Funciona

Cadastre-se, encontre ou ofereça uma carona, conecte-se e combine os detalhes e aproveite sua viagem rumo ao futuro!

![Como Funciona](./docs/images/como-funciona.png)


## 🧪 Tecnologias Utilizadas

![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-e34c26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-264de4?style=for-the-badge&logo=css3&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Google API](https://img.shields.io/badge/Google%20API-4285F4?style=for-the-badge&logo=google&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)
![Render](https://img.shields.io/badge/Render-4285F4?style=for-the-badge&logo=render&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

→ [Voltar ao topo](#topo)

---

## 📌 Backlogs & User Stories

Durante o desenvolvimento do projeto **FaculRide**, utilizamos a metodologia ágil **Scrum**, com o objetivo de garantir entregas iterativas, incrementais e com valor contínuo ao usuário final. O projeto foi dividido em **5 Sprints**, cada uma com seus respectivos objetivos e entregáveis.


### 🔁 Metodologia Scrum Aplicada

> O Scrum foi escolhido por sua abordagem flexível e adaptável, permitindo respostas rápidas a mudanças e feedbacks contínuos ao longo do ciclo de desenvolvimento.


### 📅 Sprints do Projeto

| Sprint | Período         | Principais Entregas                                                                 |
|--------|------------------|-------------------------------------------------------------------------------------|
| 01     | Início do projeto | Estruturação do sistema, cadastro e autenticação de usuários, acessibilidade inicial |
| 02     | Iteração Visual   | Melhorias visuais e funcionais, integração com Google Maps, refinamento da interface |
| 03     | Integração Total  | Integração dos fluxos Angular, back-end e banco (PostgreSQL), testes de integração   |
| 04     | Qualidade Final   | Testes de acessibilidade e usabilidade, ajustes de desempenho                       |
| 05     | Entrega Final     | Documentação técnica, manuais, deploy final no Render                               |


### 🧾 User Stories

![User-Stories](./docs/images/user-stories.png)


## ✅ Requisitos Funcionais

| Nº Requisito Funcional | Nome              | Descrição                                                             |
|------------------------|-------------------|-----------------------------------------------------------------------|
| RF001                  | Login             | Fazer Login Intranet                                                  |
| RF002                  | Gerenciar Usuário | Consultar, cadastrar, alterar ou excluir usuário do site              |
| RF003                  | Chamar Carona     | Solicitar, passageiro solicita a sua carona ao motorista              |
| RF004                  | Oferecer Carona   | Oferecer carona, motorista disponibiliza a sua carona ao passageiro   |
| RF005                  | Procurar Carona   | Pesquisar e visualizar lista de motoristas disponíveis                |
| RF006                  | Geolocalização    | Rastrear localização dos passageiros e motoristas                     |
| RF007                  | Notificações      | Enviar notificações via e-mail ou pelo site para informar os usuários |
| RF008                  | Avaliação         | Implementar um sistema de avaliação de 1 a 5 para os usuários         |
| RF009                  | Comentários       | Comentários relacionados aos usuários                                 |


## 🚫 Requisitos Não Funcionais

| Nº Requisito Não Funcional | Nome              | Descrição                                                                 |
|----------------------------|-------------------|---------------------------------------------------------------------------|
| RNF001                     | Banco de dados    | Utilização de Banco de dados SQL Server                                   |
| RNF002                     | HTML              | Utilizar linguagem HTML                                                   |
| RNF003                     | Segurança         | O sistema deve ser protegido contra acessos não autorizados              |
| RNF004                     | Escalabilidade    | O sistema deve ser capaz de aumentar ou diminuir sua capacidade          |
| RNF005                     | Velocidade e Eficiência | O sistema deve ser capaz de escalar o tráfego conforme necessário        |
| RNF006                     | Disponibilidade   | O sistema deve estar disponível 24h por dia, 7 dias por semana           |
| RNF007                     | Usabilidade       | Interface intuitiva e fácil de usar, mesmo para iniciantes               |
| RNF008                     | Confiabilidade    | O sistema deve ser robusto e resistente a falhas                         |
| RNF009                     | Portabilidade     | Deve funcionar em diversos dispositivos e sistemas operacionais          |
| RNF010                     | Manutenibilidade  | Código organizado e documentado para facilitar atualizações futuras      |

## 📌 Diagrama de Caso de Uso

O diagrama abaixo ilustra os principais casos de uso do sistema **FaculRide**, evidenciando as interações dos usuários (alunos e colaboradores) com as funcionalidades disponíveis.

![Diagrama de Caso de Uso](./docs/images/diagrama-caso-uso.jpg)


→ [Voltar ao topo](#topo)

---

## 📄 Documentação

Toda a documentação do projeto está disponível na pasta [docs](./docs/), incluindo os arquivos:

- 📘 [`Projeto IHC - FaculRide`](./docs/Projeto%20IHC%20-%20Grupo%20-WI%20(FaculRide).pdf)
- 📙 [`Projeto Gestão Ágil - FaculRide`](./docs/Projeto%20Gestao%20Agil%20-%20Grupo%20-WI%20(FaculRide).pdf)

Esses documentos apresentam detalhadamente os objetivos, requisitos, sprints, metodologias utilizadas e análises realizadas durante o desenvolvimento.


## 🧩 Protótipo (Figma)

O protótipo de interface do sistema foi desenvolvido no **Figma** e está disponível para visualização no link abaixo:

👉 [Acessar Protótipo no Figma](https://www.figma.com/proto/lZtEPZcnFiRQ74FWPF2CKd/FaculRide?node-id=1-2&p=f&t=5LuytFEyusGnC6hb-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2)

→ [Voltar ao topo](#topo)

---

## 🚀 Deploy & Infraestrutura

O projeto foi implementado com separação entre **front-end**, **back-end** e **banco de dados** utilizando as plataformas **Vercel**, **Render** e **Supabase (PostgreSQL)**.

### 📦 Back-end (Render)

- Plataforma: [Render](https://render.com/)
- Tecnologias: Node.js, TypeScript, Express, Sequelize ORM
- Banco de Dados: PostgreSQL (hospedado no [Supabase](https://supabase.com/))
- Autenticação via JWT
- Endpoints RESTful protegidos por middleware `authorize`
- Deploy automático via GitHub

🔗 Link da API: https://projeto-faculride.onrender.com

### 📘 Documentação da API com Swagger

A documentação dos endpoints da API foi gerada automaticamente com o **Swagger**, facilitando a visualização e testes da interface RESTful.

- Ferramenta utilizada: [`swagger-jsdoc`](https://www.npmjs.com/package/swagger-jsdoc) + [`swagger-ui-express`](https://www.npmjs.com/package/swagger-ui-express)
- Disponível publicamente junto à API

🔗 Acesse a documentação Swagger:  
https://projeto-faculride.onrender.com/api-docs/

---

### 📑 Recursos disponíveis na documentação Swagger

- Autenticação e geração de token via login
- Cadastro de usuário e veículo
- Listagem de caronas disponíveis
- Filtros por origem, destino, horário e data
- Avaliação de motoristas
- Exclusão e atualização de dados
- Headers necessários, como `Authorization: Bearer <token>`

### 🌐 Front-end (Vercel)

- Plataforma: [Vercel](https://vercel.com/)
- Framework: Angular
- Responsivo, com design moderno e tema escuro
- Integração total com a API (login, cadastro, busca de caronas, avaliação, etc.)

🔗 Link da aplicação: https://faculride.vercel.app

## 🛠️ Variáveis de Ambiente

O projeto utiliza variáveis para conexão com o banco e validação JWT. Exemplo de `.env` para o back-end:

```env
PORT=3000
DB_HOST=db.supabase.co
DB_USER=postgres
DB_PASSWORD=****
DB_NAME=faculride
DB_PORT=5432
JWT_SECRET=chave-secreta
```

📎 Observações Finais
O deploy é contínuo, integrado ao GitHub.

A estrutura foi organizada em pastas padronizadas para facilitar o desenvolvimento colaborativo.

Testes e validações foram realizados com usuários reais da comunidade acadêmica para validar a proposta.

→ [Voltar ao topo](#topo)

---

## 👥 Equipe

> *Breno Jose Da Silva*  
> Fatec Votorantim – Desenvolvimento de Software Multiplataforma  
> 3º Semestre – 2024/2025

> *Gabriel Ribeiro Correa*  
> Fatec Votorantim – Desenvolvimento de Software Multiplataforma  
> 3º Semestre – 2024/2025

> *Herivelton Henrique Gonçalves*  
> Fatec Votorantim – Desenvolvimento de Software Multiplataforma  
> 3º Semestre – 2024/2025

> *Wendel Augusto Lopes Vasco*  
> Fatec Votorantim – Desenvolvimento de Software Multiplataforma  
> 3º Semestre – 2024/2025

---


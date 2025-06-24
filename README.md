
# 🚗 FaculRide | Sistema de Caronas Acadêmicas

O **FaculRide** é uma plataforma web desenvolvida para facilitar o compartilhamento de caronas entre estudantes da FATEC Votorantim, promovendo economia, segurança e sustentabilidade no deslocamento diário.

---

## 🧩 Problema

Muitos estudantes enfrentam dificuldades para chegar à FATEC, seja pela distância, falta de transporte público eficiente ou custos com deslocamento individual. O FaculRide surge como uma solução colaborativa que conecta alunos motoristas e passageiros.

---

## 🎯 Objetivo

Criar um sistema intuitivo onde alunos possam:

- Cadastrar e gerenciar caronas (oferecer ou buscar);
- Avaliar motoristas e passageiros;
- Visualizar rotas no mapa com apoio do Google Maps;
- Se conectar via WhatsApp com colegas para combinar os trajetos.

---

## 🧪 Tecnologias Utilizadas

### 🖥️ Front-end (Angular)
- Angular 17
- TypeScript
- Google Maps API
- Bootstrap

### ⚙️ Back-end (Node.js + Sequelize)
- Node.js
- Express
- Sequelize (ORM)
- PostgreSQL (via Supabase)
- Autenticação JWT
- Deploy via Render

---

## 🔐 Funcionalidades Principais

- Cadastro e login com segurança via JWT
- Distinção entre usuário **Motorista** e **Passageiro**
- Cadastramento de caronas (com mapa)
- Avaliação entre usuários com sistema de estrelas e comentários
- Listagem e exclusão de caronas
- Conexão via WhatsApp com usuários da plataforma

---

## 📱 Protótipo

O protótipo do sistema foi desenvolvido no Figma e validado com base nos princípios da IHC:

📎 [Acessar Protótipo Interativo](https://www.figma.com/proto/...) *(link fictício – substitua pelo real caso tenha)*

---

## 🧠 Heurísticas de Nielsen Aplicadas

Durante o processo de desenvolvimento, foram analisadas as 10 heurísticas de usabilidade de Nielsen para garantir uma boa experiência de uso. Exemplos incluem:

- Feedback imediato após ações do usuário (confirmações de carona, erros etc.)
- Consistência visual e de linguagem
- Prevenção de erros com validações de formulário

---

## 📈 Metodologia Ágil

O projeto foi estruturado com base nos princípios do **Scrum**, incluindo:

### 🏃‍♂️ Sprints
- Sprint 1: Levantamento do problema e construção do protótipo
- Sprint 2: Desenvolvimento do front-end com mapa e cadastro
- Sprint 3: Integração com back-end e testes
- Sprint 4: Ajustes finais, deploy e documentação

---

## 👨‍💻 Equipe

| Nome | RA | Função |
|------|----|--------|
| Anthonny Lima | XXXXXXX | Desenvolvedor |
| Breno Vieira | XXXXXXX | Desenvolvedor |
| Gabriel Custódio | XXXXXXX | Desenvolvedor |
| Herivelton Henrique | XXXXXXX | Desenvolvedor |
| Wendel Almeida | XXXXXXX | Desenvolvedor |
| Wesley Rosa | XXXXXXX | Desenvolvedor |

---

## 🚀 Como Executar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/faculride-front.git
```

2. Instale as dependências:

```bash
cd faculride-front
npm install
```

3. Execute o projeto:

```bash
ng serve
```

4. O back-end deve estar rodando em `http://localhost:3000` (ou configure via proxy).

---

## 📦 Deploy

- **Front-end:** Vercel
- **Back-end:** Render
- **Banco de dados:** Supabase (PostgreSQL)

---

## 📄 Licença

Este projeto é de uso acadêmico e está sob a Licença MIT.

---

## 📌 Observações

- A comunicação entre front e back utiliza um interceptor JWT.
- O projeto é responsivo e pensado para dispositivos móveis.

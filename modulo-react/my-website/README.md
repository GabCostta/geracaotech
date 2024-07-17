# Projeto de Aprendizado React Router

## Objetivo
Aprender a configurar rotas usando o React Router, criar componentes de página, trabalhar com componentes de layout e melhorar a performance do aplicativo. Além disso, tratar rotas inválidas e utilizar parâmetros de URL.

## Descrição da Atividade
Este projeto simula um website simples com múltiplas páginas, utilizando React. As funcionalidades incluem:

### 1. Configuração do React Router
- Instale o React Router no projeto.
- Configure o Router na aplicação principal (`App.js` ou `index.js`).

### 2. Criando Componentes de Página
- Crie componentes para pelo menos três páginas diferentes (por exemplo, Home, About e Contact).
- Cada página deve ter conteúdo básico e links para as outras páginas.

### 3. Utilizando o Componente de Rotas
- Defina as rotas para cada componente de página utilizando o componente `Route` do React Router.
- Configure links de navegação entre essas páginas usando o componente `Link`.

### 4. Trabalhando com Rotas e Componentes
- Adicione um componente de layout comum (por exemplo, Header e Footer) que será exibido em todas as páginas.
- Assegure que o conteúdo principal de cada página seja renderizado dentro do layout.

### 5. Componentes de Layout e Melhoria de Performance com Rotas
- Utilize o componente `React.Suspense` para lazy loading das páginas.
- Crie componentes de layout (por exemplo, Sidebar, Header, Footer) que sejam compartilhados entre diferentes páginas para melhorar a organização e performance.

### 6. Tratamento de Rotas Inválidas e Parâmetros de URL
- Implemente uma página 404 para tratar rotas inválidas.
- Adicione uma rota que utilize parâmetros de URL e exiba conteúdo dinâmico com base nesses parâmetros (por exemplo, um perfil de usuário com `/user/:id`).

### 7. Criando o Header
- Crie um componente Header que será exibido em todas as páginas.
- Adicione links de navegação no Header para permitir a navegação entre as páginas Home, About e Contact.

### 8. Arquivar o Código no Repositório do GitHub
- Versione seu código usando Git e armazene-o em um repositório no GitHub.

## Estrutura do Projeto
O projeto deve seguir a seguinte estrutura:

```plaintext
my-website/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── ... (outros componentes de layout)
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── NotFound.jsx
│   │   └── UserProfile.jsx
│   │
│   ├── App.jsx
│   ├── index.jsx
│   └── ... (outros arquivos e estilos)
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Como Executar
1. Clone o repositório:
   ```bash
   git clone https://github.com/usuario/my-website.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd my-website
   ```
3. Instale as dependências:
   ```bash
   npm install
   npm install react-router-dom 
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

## Conclusão
Ao final da atividade, você entenderá como trabalhar com rotas e componentes em React, além de implementar técnicas para melhorar a performance do aplicativo.

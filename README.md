# 💊 Farmácia Online | Projeto Final - Bloco 03

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.4.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### 🚀 Sistema de Gerenciamento de Farmácia Desenvolvido com React + TypeScript

*Projeto desenvolvido como parte do bootcamp **Generation Brasil** - Módulo Front-end*

[🔗 Ver Demo](https://projeto-farmacia-demo.vercel.app) • [📚 Documentação](https://github.com/cristianoforner/projeto_final_bloco_03/wiki) • [🐛 Reportar Bug](https://github.com/cristianoforner/projeto_final_bloco_03/issues)

</div>

## 📋 Sobre o Projeto

O **Farmácia Online** é uma aplicação web moderna que simula um sistema de gerenciamento para farmácias, permitindo o controle completo de categorias de produtos através de operações CRUD (Create, Read, Update, Delete). 

O projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento front-end, com foco em:
- 🎯 **Experiência do usuário** intuitiva e responsiva
- 🏗️ **Arquitetura componentizada** e escalável
- 🔒 **Tipagem forte** com TypeScript
- 🎨 **Design system** consistente com Tailwind CSS
- 🌐 **Integração com API REST** real

### 🎯 Funcionalidades Principais

- ✅ **Listagem de Categorias**: Visualize todas as categorias cadastradas
- ✅ **Cadastro de Categorias**: Adicione novas categorias com nome e descrição
- ✅ **Edição de Categorias**: Atualize informações de categorias existentes
- ✅ **Exclusão de Categorias**: Remova categorias com confirmação de segurança
- ✅ **Navegação Intuitiva**: Sistema de rotas com React Router DOM

## 🏗️ Arquitetura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── categorias/      # Componentes específicos de categoria
│   ├── navbar/          # Componente de navegação
│   └── footer/          # Componente de rodapé
├── pages/               # Páginas da aplicação
│   ├── home/            # Página inicial
│   └── categorias/      # Páginas relacionadas a categorias
├── models/              # Interfaces TypeScript
├── services/            # Configuração de APIs e serviços
└── App.tsx              # Componente raiz
```

## 📁 Estrutura de Desenvolvimento por Branches

O projeto foi desenvolvido de forma incremental, com cada branch representando uma etapa específica:

| Branch | Descrição | Status |
|--------|-----------|--------|
| `main` | Estrutura inicial com Vite + Tailwind + TS | ✅ |
| `01_Componente_Home_navbar_footer` | Implementação dos componentes básicos: Home, Navbar e Footer | ✅ |
| `02_CRUD_Categoria` | CRUD completo da entidade Categoria | ✅ |
| `03_Rotas` | Configuração de rotas e navegação | ✅ |

## 🛠️ Tecnologias e Ferramentas

### Core Technologies
- **[React 18](https://reactjs.org/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Vite](https://vitejs.dev/)** - Build tool rápida e moderna

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones modernas

### Data & API
- **[Axios](https://axios-http.com/)** - Cliente HTTP para requisições
- **[React Router DOM](https://reactrouter.com/)** - Roteamento para React

### Development Tools
- **[ESLint](https://eslint.org/)** - Linter para qualidade de código
- **[Prettier](https://prettier.io/)** - Formatador de código

## 🚀 Como Executar o Projeto

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- **Node.js** (versão 16.x ou superior) - [Download](https://nodejs.org/)
- **npm** ou **yarn** - Gerenciador de pacotes

### Passo a Passo

1. **Clone o repositório**
   ```bash
   git clone https://github.com/cristianoforner/projeto_final_bloco_03.git
   ```

2. **Acesse o diretório**
   ```bash
   cd projeto_final_bloco_03
   ```

3. **Instale as dependências**
   ```bash
   # Com npm
   npm install
   
   # Ou com yarn
   yarn install
   ```

4. **Execute o projeto**
   ```bash
   # Com npm
   npm run dev
   
   # Ou com yarn
   yarn dev
   ```

5. **Acesse a aplicação**
   ```
   http://localhost:5173
   ```

## 🌐 API Integration

O projeto consome a API pública da farmácia:
- **Base URL**: `https://farmacia-jk1x.onrender.com`
- **Documentação**: [Swagger UI](https://farmacia-jk1x.onrender.com/swagger-ui/swagger-ui/index.html)

### Endpoints Utilizados
- `GET /categorias` - Listar todas as categorias
- `POST /categorias` - Criar nova categoria
- `PUT /categorias/{id}` - Atualizar categoria
- `DELETE /categorias/{id}` - Deletar categoria

## 📱 Screenshots

<div align="center">

### 🏠 Página Inicial
*Interface principal com design moderno e intuitivo*

### 📋 Lista de Categorias
*Visualização completa de todas as categorias cadastradas*

### ✏️ Formulário de Categoria
*Interface para cadastro e edição de categorias*

</div>

## 🎓 Aprendizados e Desafios

Durante o desenvolvimento deste projeto, foram aplicados e aprofundados conceitos importantes:

### 🧠 Conceitos Técnicos
- **Hooks do React**: `useState`, `useEffect`, `useNavigate`
- **Componentização**: Criação de componentes reutilizáveis e modulares
- **Gerenciamento de Estado**: Controle de estado local e global
- **Requisições HTTP**: Integração com APIs RESTful usando Axios
- **Roteamento**: Navegação SPA com React Router DOM
- **TypeScript**: Tipagem forte para maior segurança e produtividade

### 🎨 UI/UX e Design
- **Design Responsivo**: Layout adaptável para diferentes dispositivos
- **Design System**: Consistência visual com Tailwind CSS
- **Feedback Visual**: Loading states e mensagens informativas
- **Acessibilidade**: Práticas básicas de acessibilidade web

### 🏗️ Arquitetura e Boas Práticas
- **Separação de Responsabilidades**: Organização clara de componentes e serviços
- **Clean Code**: Código limpo e legível
- **Versionamento**: Controle de versão com Git e estratégia de branches

## 🤝 Como Contribuir

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add: Amazing Feature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

## 📄 Licença

Este projeto é desenvolvido para fins **educacionais** como parte do bootcamp da Generation Brasil. Não possui fins comerciais.

## 👨‍💻 Desenvolvedor

<div align="center">

**Cristiano Forner**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/cristianoforner)
[![GitHub](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/cristianoforner)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=google-chrome&logoColor=white)](https://cristianoforner.dev)

*Desenvolvedor Full Stack | Estudante Generation Brasil*

</div>

---

<div align="center">

### 🙏 Agradecimentos

Agradecimento especial à **[Generation Brasil](https://brazil.generation.org/)** pela oportunidade de aprendizado e crescimento profissional.

</div>
# Desafio ISI Dev - Front-end

Sistema de gerenciamento de produtos com interface moderna e responsiva, desenvolvido em React com TypeScript.

## 📋 Índice

- [Como rodar o projeto](#como-rodar-o-projeto)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Funcionalidades](#funcionalidades)
- [Decisões técnicas](#decisões-técnicas)

## 🚀 Como rodar o projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Back-end da aplicação rodando na porta 3001

### Instalação e execução

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd desafio-isi-dev-1-front-end
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

```bash
cp .env.example .env
```

4. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

5. Acesse a aplicação em `http://localhost:5173`

### Scripts disponíveis

- `npm run dev` - Executa a aplicação em modo de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint

## 📁 Estrutura do projeto

```
src/
├── assets/                 # Recursos estáticos (ícones, imagens)
│   ├── modal/             # Ícones específicos para modais
│   ├── product-form/      # Ícones para formulários de produto
│   ├── product-list/      # Ícones para listagem de produtos
│   └── sidebar/           # Ícones da barra lateral
├── components/            # Componentes reutilizáveis
│   ├── button/           # Componente de botão customizado
│   ├── header/           # Cabeçalho da aplicação
│   ├── search-input/     # Campo de busca reutilizável
│   ├── sidebar/          # Barra lateral de navegação
│   ├── sidebar-header/   # Layout com sidebar
│   ├── table/            # Componente de tabela customizada
│   └── title/            # Componente de título padronizado
├── config/               # Configurações da aplicação
│   └── api.ts           # Configurações da API
├── hooks/               # Custom hooks
│   ├── use-app-routes.tsx # Gerenciamento de rotas
│   ├── use-coupons.ts    # Lógica de cupons
│   ├── use-icons.ts      # Gerenciamento de ícones
│   └── use-products.ts   # Lógica de produtos
├── pages/               # Páginas da aplicação
│   ├── product-form/    # Página de criação/edição de produtos
│   └── product-list/    # Página de listagem de produtos
├── services/            # Serviços de comunicação externa
│   └── api.service.ts   # Serviço de comunicação com API
├── styles/              # Estilos globais e tema
│   ├── global-styles.ts # Estilos globais
│   ├── styled.d.ts      # Tipagem do tema
│   └── theme.ts         # Definições do tema
├── types/               # Tipagens TypeScript
│   └── api.ts          # Tipos da API
└── utils/              # Utilitários e helpers
    ├── formatters.ts   # Formatadores de dados
    ├── get-initials.ts # Gerador de iniciais
    ├── validators.ts   # Validadores
    └── enums/         # Enumerações
        └── routes-url.ts # URLs das rotas
```

### Principais diretórios:

- **`/components`**: Componentes React reutilizáveis com arquitetura baseada em index.component.tsx, index.styles.tsx e types.ts
- **`/pages`**: Estrutura MVC com separação entre controller, view e components específicos
- **`/hooks`**: Custom hooks para encapsular lógica de negócio e estado
- **`/services`**: Camada de comunicação com APIs externas
- **`/styles`**: Sistema de design com tema centralizado usando styled-components
- **`/types`**: Definições de tipos TypeScript para garantir type safety
- **`/utils`**: Funções utilitárias e helpers reutilizáveis

## 🛠 Tecnologias utilizadas

### Core

- **React (19.1.0)** - Biblioteca principal para construção da interface
- **TypeScript (5.8.3)** - Superset do JavaScript para tipagem estática
- **Vite (6.3.5)** - Bundler moderno e rápido para desenvolvimento

### Roteamento e Navegação

- **React Router DOM (7.6.2)** - Gerenciamento de rotas client-side

### Estilização

- **Styled Components (6.1.19)** - CSS-in-JS para estilização componetizada

### Formulários

- **React Hook Form (7.58.1)** - Biblioteca para gerenciamento de formulários performáticos

### Desenvolvimento

- **ESLint (9.25.0)** - Linter para manter qualidade e consistência do código
- **TypeScript ESLint** - Regras específicas para TypeScript

## ✨ Funcionalidades

### Gerenciamento de Produtos

- ✅ Listagem de produtos com paginação
- ✅ Busca e filtros avançados
- ✅ Criação de novos produtos
- ✅ Edição de produtos existentes
- ✅ Exclusão de produtos
- ✅ Visualização detalhada

### Sistema de Cupons

- ✅ Aplicação de cupons de desconto
- ✅ Desconto percentual
- ✅ Validação de cupons

### Interface de Usuário

- ✅ Design responsivo e moderno
- ✅ Tema customizável
- ✅ Componentes reutilizáveis
- ✅ Feedback visual para ações do usuário

## 🎯 Decisões técnicas

### Arquitetura de Componentes

**Escolha**: Estrutura baseada em index.component.tsx + index.styles.tsx + types.ts

**Motivo**: Esta abordagem garante separação clara entre lógica, estilização e tipagem, facilitando manutenção e reutilização. Cada componente é auto-contido e pode ser facilmente importado através do index.

### Gerenciamento de Estado

**Escolha**: Custom hooks + React useState/useEffect

**Motivo**: Para o escopo atual, esta abordagem é suficiente e mantém a aplicação simples. Os custom hooks encapsulam a lógica de negócio, permitindo reutilização e testabilidade.

### Estilização

**Escolha**: Styled Components

**Motivo**:

- CSS-in-JS permite estilização componetizada
- Suporte nativo a temas
- Type safety com TypeScript
- Estilos dinâmicos baseados em props
- Eliminação de CSS não utilizado

### Formulários

**Escolha**: React Hook Form

**Motivo**:

- Performance superior comparado a alternativas
- Validação robusta
- Baixo re-rendering
- API intuitiva
- Excelente integração com TypeScript

### Comunicação com API

**Escolha**: Fetch API nativo com classe de serviço

**Motivo**:

- Reduz dependências externas
- Controle total sobre requisições
- Implementação de interceptors customizados
- Tratamento de erros centralizado

### Estrutura de Páginas

**Escolha**: Pattern MVC (Model-View-Controller)

**Motivo**:

- Separação clara de responsabilidades
- Controller gerencia lógica de negócio
- View focada apenas na apresentação
- Facilita testes unitários
- Escalabilidade para funcionalidades complexas

### TypeScript

**Escolha**: Tipagem estrita em toda aplicação

**Motivo**:

- Detecção precoce de erros
- Melhor experiência de desenvolvimento
- Documentação automática através de tipos
- Refatoração mais segura
- Integração perfeita com React e styled-components

### Sistema de Ícones

**Escolha**: SVGs organizados por contexto

**Motivo**:

- Melhor performance comparado a icon fonts
- Customização completa (cores, tamanhos)
- Carregamento otimizado
- Suporte a temas

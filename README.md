# crud-pessoas

Este é meu primeiro projeto de API REST desenvolvido em Node.js com MongoDB. A API permite autenticação de usuários e operações CRUD completas para Categorias, Produtos, Clientes e Vendas, tudo seguindo a lógica que aprendi em sala de aula.

## 🚀 Tecnologias Utilizadas
- **Linguagem:** Node.js
- **Banco de Dados:** MongoDB Atlas
- **Framework:** Express
- **Bibliotecas:** Mongoose, Cors

---

## 📦 Instalação e Execução

### Pré-requisitos:
- Ter o Node.js instalado
- Ter uma conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Passos para rodar o projeto:
1. Clonar o repositório:
```bash
 git clone https://github.com/seuusuario/seuprojeto.git
 cd seuprojeto
```

2. Instalar as dependências:
```bash
 npm install
```

3. Configurar a string de conexão no arquivo `models/database.js` com minha URL do MongoDB

4. Rodar o projeto:
```bash
 node index.js
```

O servidor irá rodar em: `http://localhost:3000`

---

## 🔐 Autenticação

### Registrar Usuário
`POST /auth/register`
```json
{
  "usuario": "admin",
  "senha": "123",
  "confirma": "123"
}
```

### Login
`POST /auth/usuario`
```json
{
  "usuario": "admin",
  "senha": "123"
}
```

---

## 📁 Endpoints CRUD

### Categorias
- `GET /api/categoria`
- `GET /api/categoria/:nome`
- `POST /api/categoria`
- `PUT /api/categoria`
- `DELETE /api/categoria`

### Produtos
- `GET /api/produto`
- `GET /api/produto/:nome`
- `POST /api/produto`
- `PUT /api/produto`
- `DELETE /api/produto`

### Clientes
- `GET /api/cliente`
- `GET /api/cliente/:nome`
- `POST /api/cliente`
- `PUT /api/cliente`
- `DELETE /api/cliente`

### Vendas
- `GET /api/venda`
- `GET /api/venda/:id`
- `POST /api/venda`
- `DELETE /api/venda`

---

## 💡 Observações
- Todas as rotas foram feitas separadamente usando o `express.Router()`
- Os modelos foram feitos com `mongoose`
- A lógica de autenticação e validações foi aplicada como vimos nas aulas
- O projeto não usa autenticação com token JWT, pois segui o que foi proposto para a atividade

---

## 👨‍💻 Desenvolvido por:
**Daniel Boaventura**

Curso: **[ARQUITETURA DA TECNOLOGIA DE INFORMAÇÃO]**
Prof. Esp. Rodrigo Neves de Oliveira Escobar
Entrega: **06/06/2025**

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
git clone https://github.com/danielboaventura/crud-pessoas.git
cd crud-pessoas
Instalar as dependências:

bash
Copiar
Editar
npm install
Configurar a string de conexão no arquivo models/database.js com minha URL do MongoDB

Rodar o projeto:

bash
Copiar
Editar
node index.js
O servidor irá rodar em: http://localhost:3000

🔐 Autenticação
Registrar Usuário
POST /auth/register

json
Copiar
Editar
{
  "usuario": "admin",
  "senha": "123",
  "confirma": "123"
}
Login
POST /auth/usuario

json
Copiar
Editar
{
  "usuario": "admin",
  "senha": "123"
}
📁 Endpoints CRUD
Categorias
GET /api/categoria

GET /api/categoria/:nome

POST /api/categoria

PUT /api/categoria

DELETE /api/categoria

Produtos
GET /api/produto

GET /api/produto/:nome

POST /api/produto

PUT /api/produto

DELETE /api/produto

Clientes
GET /api/cliente

GET /api/cliente/:nome

POST /api/cliente

PUT /api/cliente

DELETE /api/cliente

Vendas
GET /api/venda

GET /api/venda/:id

POST /api/venda

DELETE /api/venda



👨‍💻 Desenvolvido por:
Daniel Boaventura

Curso: [ARQUITETURA DA TECNOLOGIA DE INFORMAÇÃO]
Prof. Esp. Rodrigo Neves de Oliveira Escobar
Entrega: 06/06/2025
```

const express = require("express")
// Cria um roteador do Express para definir rotas específicas
const route = express.Router()
// Importa o modelo da Categoria do banco de dados
const CategoriaDb = require("../models/categoria")

// Lista todas as categorias ou filtra por nome com regex
route.get("/categoria", async (req, res) => {
  const nome = req.query.nome
  // Se for passada uma query string ?nome=algo, faz uma busca por nome com filtro (regex, sem diferenciar maiúsculas/minúsculas)
  if (nome) {
    var categoria = await CategoriaDb.find({ nome: { $regex: nome, $options: "i" } })
  } else {
    // Se não houver nome na query, busca todas as categorias
    var categoria = await CategoriaDb.find()
  }
  return res.send(categoria)
})

// Busca uma categoria pelo ID
route.get("/categoria/:id", async (req, res) => {
  // Busca uma categoria pelo ID passado como parâmetro na URL
  var categoria = await CategoriaDb.findById(req.params.id)
  return res.send(categoria)
})

// Cadastra nova categoria
route.post("/categoria", async (req, res) => {
  // Recebe nome e descrição do corpo da requisição (JSON)
  const { nome, descricao } = req.body
  // Cria uma nova categoria no banco
  const categoria = new CategoriaDb({ nome, descricao })
  await categoria.save()
  return res.send({ message: "Categoria criada com sucesso" })
})

// Atualiza os dados de uma categoria existente
route.put("/categoria/:id", async (req, res) => {
  await CategoriaDb.findByIdAndUpdate(req.params.id, req.body)
  return res.send({ message: "Categoria atualizada com sucesso" })
})

// Remove uma categoria pelo ID
route.delete("/categoria/:id", async (req, res) => {
  await CategoriaDb.findByIdAndDelete(req.params.id)
  return res.send({ message: "Categoria removida com sucesso" })
})

// Exporta as rotas com o prefixo /api
module.exports = app => app.use("/api", route)

const express = require("express")
const route = express.Router()
var ProdutoDb = require("../models/produto")

// Lista todos os produtos
route.get("/produto", async (req, res) => {
    var produtos = await ProdutoDb.find()
    return res.send(produtos)
})

// Busca produto por nome com regex (ou lista tudo se não passar nome)
route.get("/produto/:nome", async (req, res) => {
    const nome = req.params.nome || req.query.nome || ""
    if (nome) {
        var produtos = await ProdutoDb.find({ nome: { $regex: nome, $options: "i" } })
    } else {
        var produtos = await ProdutoDb.find()
    }
    return res.send(produtos)
})

// Cadastra novo produto
route.post("/produto", async (req, res) => {
    var { codigoInterno, nome, descricao, preco, categoria } = req.body

    if (!codigoInterno || !nome || !preco || !categoria)
        return res.send({ error: "Campos obrigatórios não informados" })

    var retorno = await ProdutoDb.insertMany([{ codigoInterno, nome, descricao, preco, categoria }])
    if (retorno)
        return res.send({ message: "Produto criado com sucesso" })

    return res.send({ error: "Erro ao criar produto." })
})

// Atualiza dados de um produto existente
route.put("/produto", async (req, res) => {
    var { id, nome, descricao, preco, categoria } = req.body

    if (!id || !preco)
        return res.send({ error: "Id e Preço são obrigatórios." })

    var produto = await ProdutoDb.findOne({ _id: id })
    if (produto == null)
        return res.send({ error: "Produto não encontrado." })

    produto.nome = nome
    produto.descricao = descricao
    produto.preco = preco
    produto.categoria = categoria
    await produto.save()

    return res.send({ message: "Produto atualizado com sucesso." })
})

// Exclui um produto pelo ID
route.delete("/produto", async (req, res) => {
    var { id } = req.body
    if (!id)
        return res.send({ error: "Id do produto não encontrado." })

    var retorno = await ProdutoDb.deleteOne({ _id: id })
    if (retorno == null)
        return res.send({ error: "Erro ao excluir produto." })

    return res.send({ message: "Produto removido com sucesso." })
})

// Exporta as rotas com o prefixo /api
module.exports = app => app.use("/api", route)

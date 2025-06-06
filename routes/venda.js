const express = require("express")
const route = express.Router()
var VendaDb = require("../models/venda")

// Lista todas as vendas
route.get("/venda", async (req, res) => {
    var vendas = await VendaDb.find()
    return res.send(vendas)
})

// Busca uma venda pelo ID (usado para detalhar uma venda específica)
route.get("/venda/:id", async (req, res) => {
    var venda = await VendaDb.findOne({ _id: req.params.id })
    return res.send({ venda })
})

// Cadastra uma nova venda com cliente, produtos e total
route.post("/venda", async (req, res) => {
    var { numeroNota, cliente, produtos, totalVenda } = req.body

    if (!numeroNota || !cliente || !produtos || !totalVenda)
        return res.send({ error: "Dados da venda incompletos." })

    var retorno = await VendaDb.insertMany([{ numeroNota, cliente, produtos, totalVenda }])
    if (retorno)
        return res.send({ message: "Venda registrada com sucesso" })

    return res.send({ error: "Erro ao registrar venda." })
})

// Exclui uma venda pelo ID
route.delete("/venda", async (req, res) => {
    var { id } = req.body
    if (!id)
        return res.send({ error: "Id da venda não informado." })

    var retorno = await VendaDb.deleteOne({ _id: id })
    if (retorno == null)
        return res.send({ error: "Erro ao excluir venda." })

    return res.send({ message: "Venda removida com sucesso." })
})

// Exporta as rotas com o prefixo /api
module.exports = app => app.use("/api", route)

const express = require("express")
const route = express.Router()
var ClienteDb = require("../models/cliente")

// Lista todos os clientes
route.get("/cliente", async (req, res) => {
    var clientes = await ClienteDb.find()
    return res.send(clientes)
})

// Busca cliente por nome usando regex (ou lista todos se não enviar nome)
route.get("/cliente/:nome", async (req, res) => {
    const nome = req.params.nome || req.query.nome || ""
    if (nome) {
        var clientes = await ClienteDb.find({ nome: { $regex: nome, $options: "i" } })
    } else {
        var clientes = await ClienteDb.find()
    }
    return res.send(clientes)
})

// Cadastra novo cliente
route.post("/cliente", async (req, res) => {
    var { cpf, nome, endereco, telefone, email } = req.body

    if (!cpf || !nome)
        return res.send({ error: "CPF e Nome são obrigatórios." })

    var retorno = await ClienteDb.insertMany([{ cpf, nome, endereco, telefone, email }])
    if (retorno)
        return res.send({ message: "Cliente criado com sucesso" })

    return res.send({ error: "Erro ao criar cliente." })
})

// Atualiza os dados de um cliente pelo ID
route.put("/cliente", async (req, res) => {
    var { id, nome, endereco, telefone, email } = req.body

    if (!id)
        return res.send({ error: "Id é obrigatório." })

    var cliente = await ClienteDb.findOne({ _id: id })
    if (cliente == null)
        return res.send({ error: "Cliente não encontrado." })

    cliente.nome = nome
    cliente.endereco = endereco
    cliente.telefone = telefone
    cliente.email = email
    await cliente.save()

    return res.send({ message: "Cliente atualizado com sucesso." })
})

// Remove um cliente pelo ID
route.delete("/cliente", async (req, res) => {
    var { id } = req.body
    if (!id)
        return res.send({ error: "Id do cliente não encontrado." })

    var retorno = await ClienteDb.deleteOne({ _id: id })
    if (retorno == null)
        return res.send({ error: "Erro ao excluir cliente." })

    return res.send({ message: "Cliente removido com sucesso." })
})

// Exporta as rotas com o prefixo /api
module.exports = app => app.use("/api", route)

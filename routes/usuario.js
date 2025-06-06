const express = require("express")
const route = express.Router()

var UsuarioDb = require("../models/usuario")

// Lista todos os usuários
route.get("/usuario", async (req, res) => {
    var usuarios = await UsuarioDb.find()
    
    return res.send( usuarios )
})

// Busca usuários por nome (ou lista todos se não informar)
route.get("/usuario/:nome", async (req, res) => {
    const usuario = req.params.nome || req.query.nome || ""
    if ( usuario )
    {
        var usuarios = await UsuarioDb.find(
                { usuario: { $regex: usuario, $options: "i" } }
        )
    }
    else 
    {
        var usuarios = await UsuarioDb.find()
    }
    
    return res.send( usuarios )
})

// Registra um novo usuário
route.post("/register", async (req, res) => {
    var { usuario, senha, confirma } = req.body

    if ( usuario == undefined || usuario == "")
        return res.send({ error: "Usuario não pode ser vazio."})

    if ( senha == undefined || senha == "" )
        return res.send({ error: "Senha não pode ser nula."})

    if ( senha != confirma )
        return res.send({ error: "Senha e Confirma são diferentes."})

    var retorno = await UsuarioDb.insertOne( { usuario, senha })
    if ( retorno )
        return res.send({ message: "Usuário criado com sucesso"})

    return res.send({ error: "Erro ao criar usuário."})
})

// Login de usuário (valida usuário e senha)
route.post("/usuario", async (req, res) =>{
    var { usuario, senha } = req.body

    if ( usuario == undefined || usuario == "")
        return res.send({ error: "Usuario não pode ser vazio."})

    if ( senha == undefined || senha == "" )
        return res.send({ error: "Senha não pode ser nula."})  
    
    var retorno = await UsuarioDb.findOne({ usuario })
    if (retorno == null)
        return res.send({ error: "Usuário e/ou Senha inválidos."})

    if ( retorno.senha != senha )
        return res.send({ error: "Usuário e/ou Senha inválidos."})

    return res.send({ token: "sdjkasdhuisaohduiasgduiagsduagsd"})
})

// Altera a senha do usuário (enviando o mesmo usuário e nova senha)
route.put("/usuario", async (res, req) => {
    var { usuario, senha, confirma } = req.body

    if ( usuario == undefined || usuario == "")
        return res.send({ error: "Usuario não pode ser vazio."})

    if ( senha == undefined || senha == "" )
        return res.send({ error: "Senha não pode ser nula."})

    if ( senha != confirma )
        return res.send({ error: "Senha e Confirma são diferentes."})

    var retorno = await UsuarioDb.findOne({ usuario })
    if (retorno == null)
        return res.send({ error: "Usuário e/ou Senha inválidos."})

    retorno.senha = senha
    retorno.save()

    return res.send({ message: "Senha alteradaq com sucesso."})
        
})

// Exclui um usuário pelo id
route.delete("/usuario", async (req, res) => {
    var { id } = req.body
    if (id == undefined || id == "")
        return res.send({ error: "Id do usuário não encontrado." })

    var retorno = await UsuarioDb.deleteOne({ _id: id })
    if (retorno == null)
        return res.send({ error: "Erro ao excluir usuario."})

    return res.send({ message: "Usuario removido com sucesso."})    
})

// Exporta a rota no prefixo /auth
module.exports = app => app.use("/auth", route)

const mongoose = require('./database') // Importa conexão com o MongoDB
const { Schema } = mongoose // Usa Schema para estruturar os dados no MongoDB

// Estrutura da tabela de clientes
const ClienteSchema = new Schema({
    cpf: {
        type: String, // CPF único do cliente
        required: true,
        unique: true
    },
    nome: {
        type: String, // nome do cliente
        required: true
    },
    endereco: { // objeto com as informações do endereço
        rua: String,
        numero: Number,
        bairro: String,
        cidade: String,
        estado: String,
        cep: String
    },
    telefone: String, // telefone para contato
    email: String // email do cliente
})

// Crio e exporto o modelo Cliente
const Cliente = mongoose.model('Cliente', ClienteSchema)
module.exports = Cliente

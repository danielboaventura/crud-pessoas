const mongoose = require('./database') // Importa o mongoose já configurado no arquivo "database.js"
const { Schema } = mongoose // Extrai a classe Schema do mongoose para definir a estrutura do modelo

// Estrutura da tabela de vendas
const VendaSchema = new Schema({
    data: {
        type: Date, // data da venda
        default: Date.now
    },
    numeroNota: String, // número da nota fiscal
    cliente: { // objeto com os dados do cliente no momento da venda
        cpf: String,
        nome: String,
        endereco: {
            rua: String,
            numero: Number,
            bairro: String,
            cidade: String,
            estado: String,
            cep: String
        },
        telefone: String,
        email: String
    },
    produtos: [ // array com os produtos vendidos
        {
            codigoInterno: String, // código do produto
            nome: String,
            quantidade: Number,
            valorUnitario: Number
        }
    ],
    totalVenda: Number // valor total da venda
})

// Crio e exporto o modelo Venda
const Venda = mongoose.model('Venda', VendaSchema)
module.exports = Venda

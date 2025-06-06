const mongoose = require('./database') // Importa o mongoose já configurado no arquivo "database.js"
const { Schema } = mongoose // Extrai a classe Schema do mongoose para definir a estrutura do modelo

// Estrutura da tabela de produtos
const ProdutoSchema = new Schema({
    codigoInterno: {
        type: String, // código único do produto
        required: true,
        unique: true
    },
    nome: {
        type: String, // nome do produto
        required: true
    },
    descricao: String, // descrição opcional
    preco: {
        type: Number, // preço do produto
        required: true
    },
    categoria: {
        type: String, // nome da categoria associada
        required: true
    }
})

// Crio e exporto o modelo Produto
const Produto = mongoose.model('Produto', ProdutoSchema)
module.exports = Produto

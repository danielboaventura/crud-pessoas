const mongoose = require('./database') // Importa o mongoose já configurado no arquivo "database.js"
const { Schema } = mongoose // Extrai a classe Schema do mongoose para definir a estrutura do modelo

// Crio o schema da tabela de categorias
const CategoriaSchema = new Schema({
  nome: {
    type: String, // nome da categoria
    required: true // obrigatório
  },
  descricao: String // descrição opcional
})

// Crio e exporto o modelo Categoria
const Categoria = mongoose.model("Categoria", CategoriaSchema)
module.exports = Categoria

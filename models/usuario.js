const mongoose = require('./database') // Importa o mongoose já configurado no arquivo "database.js"
const { Schema } = mongoose // Extrai a classe Schema do mongoose para definir a estrutura do modelo

// Crio o schema (estrutura) da tabela de usuários
const UsuarioTable = new Schema(
    {
        usuario: {
            type: String, // nome do usuário
            required: true, // obrigatório
            unique: true // não pode repetir
        },
        senha: {
            required: true, // senha é obrigatória
            type: String
        },
        data_criacao: { 
            type: Date, // data de criação automática
            default: Date.now 
        },
        nome: String, // nome real do usuário (opcional)
        nivel: [ // lista com níveis e observações
            {
                tipo: Number, // tipo de acesso (ex: 1 = admin)
                observacao: String // texto explicando o tipo
            }
        ]
    }
)

// Crio o modelo Usuario e exporto
const Usuario = mongoose.model('Usuario', UsuarioTable)
module.exports = Usuario

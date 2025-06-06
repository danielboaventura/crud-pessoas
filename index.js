const express = require("express")
const cors = require("cors")
var app = express() // Cria uma instância da aplicação Express

app.use(cors())// Libera o CORS (permite que acessem a API)
app.use(express.json()) // Permite que o servidor entenda requisições com JSON

// Importa e ativa as rotas definidas em outros arquivos
require("./routes/usuario")(app)
require("./routes/categoria")(app)
require("./routes/produto")(app)
require("./routes/cliente")(app)
require("./routes/venda")(app)

// Inicia o servidor na porta 3000
app.listen(3000, function() {
    console.log("Servidor online!!!")
})


app.get('/api/produtos', function(req, res) {
    return res.send("Ola mundo")
})

// Outra rota de teste para POST
app.post('/api/produtos', function(req, res) {
    return res.send("Inclusao de produto")
})

// Página inicial da API (rota raiz)
app.get("/", function(req, res) {
    var texto = "<marquee>Minha primeira API</marquee>"
    return res.send(texto)
})


// Teste de PUT com validação de preço
app.put("/api/produtos", function(req, res) {
    var { nome, modelo, ano, observacao, preco } = req.body

    // Verifica se o preço foi enviado corretamente
    if ( preco == undefined || preco == 0 )
        return res.send( { mensagem: "Preco é obrigatório"} )

    return res.send( nome )
})

// Teste de rota com parâmetro de rota (ID)
app.get("/api/vendas/:id", function(req, res) {
    console.log( req.params ) // Mostra o ID recebido

    return res.send({ mensagem: "Chegou" }) // Retorna mensagem 
})
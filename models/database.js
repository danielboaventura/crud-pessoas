//5.1 Importando componente mongoose 
const moongose = require("mongoose")

try {
    //5.3 String de conexão com o banco, pego no site do MongoDB
    const url = "mongodb+srv://admin:admin123@mycluster.wlviltp.mongodb.net/?retryWrites=true&w=majority&appName=mycluster"
    //5.2 abrir conexao com o MongoDB
    moongose.connect( url )

}
catch (err)
{
    // Se der erro na conexão, exibo no console
    console.log(err)
}

// Configuro para que o mongoose use as Promises padrão do JavaScript
moongose.Promise = global.Promise

// Exporto o mongoose para ser usado nos outros arquivos
module.exports = moongose

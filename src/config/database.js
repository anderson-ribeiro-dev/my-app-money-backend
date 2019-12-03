const mongoose = require('mongoose')
mongoose.Promise = global.Promise //atribui a promise global do node para o mongoose
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

//validar mensagem mongoose
// mongoose.Error.messages.general.required = "O atibuto '{PATH}' é obrigatório"
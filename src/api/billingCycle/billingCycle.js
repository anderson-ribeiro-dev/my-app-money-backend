const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name: { type: String, required: true }, 
    value: { type: Number, min: 0, required: true },
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: [true, 'Informe o valor do débito'] }, //personalizar mensagem mongoose
    status: { type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: [1, 'limite minimo de mês é 1'], max: [12, 'limite máximo de mês, 12'], required: [true, 'Mês é obrigatório!'] },
    year: { type: Number, min: [1970, 'limite minimo de anos é 1970'], max: [2100, 'Limite máximo de ano, 2100'], required: [true, 'Ano é obrigatório!'] },
    credits: [creditSchema],
    debts: [debtSchema]

})


module.exports = restful.model('BillingCycle', billingCycleSchema)
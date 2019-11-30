const express = require('express')

//passagem de parâmetro(server.js), módulo/modulo
module.exports = function(server) {
    //url base, rotas 
    const router = express.Router()
    server.use('/api', router)// rota padrão

    //rotas ciclo pagamento 
    const BillingCycle = require('../api/billingCycle/biilingCycleService')
    BillingCycle.register(router, '/billingCycles') //registrar a rotas, /api/billingCycles

}

const express = require('express')

//passagem de parâmetro(server.js), módulo/modulo
module.exports = function(server) {
    // console.log("server", server)
    //url base, rotas 
    const router = express.Router()
    server.use('/api', router)// rota padrão

    //rotas ciclo pagamento 
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles') //registrar a rotas, /api/billingCycle

}

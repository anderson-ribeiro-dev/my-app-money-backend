const BillingCycle = require('./billingCycle')
const errorHandler = require('../common/errorHandler')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true }) //mew -> trazer os dados novos depois de atualiazar, runValidators -> recebe a validação também no pudate


BillingCycle.after('post', errorHandler).after('put', errorHandler)//aplicar middleware validação

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({ value }) //objeto value
        }
    })
})


BillingCycle.route('summary', (req, res, next) => {
    BillingCycle.aggregate([{ 
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}  //extrair ciclo pagamento
    }, { 
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}} //agrupar valores - credit
    }, { 
        $project: {_id: 0, credit: 1, debt: 1} //tirar id
    }], (error, result) => {
        if(error) {
            res.status(500).json({errors: [error]}) //array errors
        } else {
            res.json(result[0] || {credit: 0, debt: 0})//resultado default
        }
    })
})



module.exports = BillingCycle
const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true}) //mew -> trazer os dados novos depois de atualiazar, runValidators -> recebe a validação também no pudate

module.exports = BillingCycle
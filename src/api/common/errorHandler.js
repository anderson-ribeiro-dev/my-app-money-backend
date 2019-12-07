const _ = require('lodash')

module.exports = (req, res, next) => {
    const bundle = res.locals.bundle //lista de erros restful

    if(bundle.errors) {
        const errors = parseErrors(bundle.errors)
        res.status(500).json({ errors })
    } else {
        next() //próximo middleware
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))

    return errors;
}
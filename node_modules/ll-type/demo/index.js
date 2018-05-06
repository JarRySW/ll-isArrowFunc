var llType = require('../index.js')
var log = console.log

log(llType(10))
log(llType('abc'))
log(llType(true))
log(llType(undefined))
log(llType(null))

log(llType([1, 2, 3]))
log(llType({name: 'll', age: 18}))
log(llType(function () {}))
log(llType(new Date()))
log(llType(/^[a-zA-Z]{5,20}$/))
log(llType(new Error()))


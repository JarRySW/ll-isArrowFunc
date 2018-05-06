var llisArrowFunc = require('../index.js')
var log = console.log

log(llisArrowFunc(() => {}))
log(llisArrowFunc(function () {}))
log(llisArrowFunc(null))
log(llisArrowFunc((a,b) => a*b))
log(llisArrowFunc(x => () => x*x))
log(llisArrowFunc(function* () {}))
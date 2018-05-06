var class2type = {}
var toString = class2type.toString, log = console.log

'Boolean Number String Function Array Date RegExp Object Error'.split(' ').forEach(function (type, index) {
    class2type['[object ' + type + ']'] = type.toLowerCase()
})

module.exports = function (arg) {
    // null在IE6下undefined，其他均为undefined
    if (arg === null) {
        return arg + ''
    }
    return (typeof arg === 'object' || typeof arg === 'function') ?
        (class2type[toString.call(arg)] || 'object') :
        typeof arg
}

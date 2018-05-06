'use strict'

var llType = require('ll-type')

var fnToStr = Function.prototype.toString
var isArrowFuncWidthParensReg = /^\([^\)]*\) *=>/
var isArrowFuncWidthoutParensReg = /^[^=]*=>/

module.exports = function (value) {
    if (llType(value) === 'function') {
        var fnStr = fnToStr.call(value)
        return isArrowFuncWidthParensReg.test(value) || isArrowFuncWidthoutParensReg.test(value)
    } else {
        return false
    }
}

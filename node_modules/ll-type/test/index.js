var assert = require('assert')
var llType = require('../index.js')

describe('#ll-type', function() {
    describe('#others', function() {
        it('llType(10) should return number', function () {
            assert.equal(llType(10), 'number')
        })
        it('llType("abc") should return string', function () {
            assert.equal(llType('abc'), 'string')
        })
        it('llType(true) should return boolean', function () {
            assert.equal(llType(true), 'boolean')
        })
        it('llType(undefined) should return undefined', function () {
            assert.equal(llType(undefined), 'undefined')
        })
        it('llType(null) should return null', function () {
            var x
            assert.equal(llType(null), 'null')
        })
    })
    describe('#object', function() {
        it('llType([1, 2, 3]) should return array', function () {
            assert.equal(llType([1, 2, 3]), 'array')
        })
        it('llType({name: "ll", age: 18}) should return object', function () {
            assert.equal(llType({name: "ll", age: 18}), 'object')
        })
        it('llType(function () {}) should return function', function () {
            assert.equal(llType(function () {}), 'function')
        })
        it('llType(new Date()) should return date', function () {
            assert.equal(llType(new Date()), 'date')
        })
        it('llType(/^[a-zA-Z]{5,20}$/) should return regexp', function () {
            assert.equal(llType(/^[a-zA-Z]{5,20}$/), 'regexp')
        })
        it('llType(new Error()) should return error', function () {
            assert.equal(llType(new Error()), 'error')
        })
    })
})
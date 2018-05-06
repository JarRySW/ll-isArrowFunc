var assert = require('assert')
var llisArrowFunc = require('../index.js')

describe('#ll-isArrowFunc', function() {
    it('llisArrowFunc(() => {}) should return true', function () {
        assert.equal(llisArrowFunc(() => {}), true)
    })
    it('llisArrowFunc(function () {}) should return false', function () {
        assert.equal(llisArrowFunc(function () {}), false)
    })
    it('llisArrowFunc(null) should return false', function () {
        assert.equal(llisArrowFunc(null), false)
    })
    it('llisArrowFunc((a,b) => a*b) should return true', function () {
        assert.equal(llisArrowFunc((a,b) => a*b), true)
    })
    it('llisArrowFunc(x => () => x*x) should return true', function () {
        assert.equal(llisArrowFunc(x => () => x*x), true)
    })
    it('llisArrowFunc(function* () {}) should return false', function () {
        assert.equal(llisArrowFunc(function* () {}), false)
    })
})
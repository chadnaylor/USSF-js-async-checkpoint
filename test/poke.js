var assert = require('assert');
var poke = require('../poke');
const testInput = 'charizard\npikachu';


describe('Poke', function () {
    describe('getTypes()', function () {
        it('should be a function', function () {
            assert.equal('function', typeof poke.getTypes);
        });
    });
});
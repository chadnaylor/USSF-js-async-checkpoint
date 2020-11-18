var assert = require('assert');
var poke = require('../poke');

describe('Poke', function () {
    describe('getTypes()', function () {
        it('should be a function', () => {
            assert.strictEqual('function', typeof poke.getTypes);
        });
        it('should throw error and give input file instructions if no input', () => {
            process.argv = []
            assert.throws(() => poke.getTypes(), Error,
                'NO INPUT SPECIFIED.'
            )
        })
    });
});
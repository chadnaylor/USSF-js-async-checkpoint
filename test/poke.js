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
        });
        it('should return a promise that eventually returns an array', () => {
            process.argv[0] = '../input.txt'
            poke.getTypes().then((result) => {
                assert.strictEqual(true, Array.isArray(result))
            })
        })
    });
});
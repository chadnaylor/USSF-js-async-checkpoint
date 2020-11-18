var assert = require('assert');
var poke = require('../poke');

describe('Poke', function () {
    describe('getTypes()', function () {
        it('should be a function', () => {
            assert.strictEqual('function', typeof poke.getTypes);
        });
        it('should throw error and give input file instructions if no input', () => {
            process.argv[2] = null

            assert.throws(() => poke.getTypes(), Error,
                'NO INPUT SPECIFIED.'
            )
        });
        it('should return a promise that eventually returns an array', () => {
            process.argv[2] = './input.txt'
            return poke.getTypes().then((result) => {
                assert.strictEqual(true, Array.isArray(result))
            })

        });
        it('should have correct pokemon types', () => {
            process.argv[2] = './input.txt'
            return poke.getTypes().then((result) => {
                assert.strictEqual('electric', result[1].type)
            })
        })
    });
});
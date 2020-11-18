const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path')
var getTypes = () => {
    if (!process.argv.length || typeof process.argv[0] !== 'string') {
        throw Error('NO INPUT SPECIFIED.')
    }
    let data = fs.readFileSync(path.resolve(__dirname, process.argv[0]), 'utf8')
    let result = []

    return new Promise((resolve, reject) => {
        resolve([])
    })
    //fetch(`https://pokeapi.co/api/v2/pokemon/${}`)
}

module.exports = { getTypes }
getTypes()
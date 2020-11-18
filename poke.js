const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path')
var getTypes = () => {
    if (!process.argv.length || typeof process.argv[0] !== 'string') {
        throw Error('NO INPUT SPECIFIED.')
    }
    let data = fs.readFileSync(path.resolve(__dirname, process.argv[0]), 'utf8')
    let pokemonNames = data.split('\n')
    let requests = []
    let result
    return new Promise((resolve, reject) => {
        pokemonNames.forEach((pokemonName) => {
            requests.push(fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`))
        })
        Promise.all(requests).then((pokemonArray) => {
            result = pokemonArray.map((pokemonJson) => {
                return { 'name': pokemonJson.species.name, 'type': 'none' }
            })
        })
        resolve(result)

    })


}

module.exports = { getTypes }
getTypes()
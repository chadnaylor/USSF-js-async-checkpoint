const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path')
var getTypes = () => {
    if (typeof process.argv[2] !== 'string') {
        throw Error('NO INPUT SPECIFIED.')
    }
    let data = fs.readFileSync(process.argv[2], 'utf8')
    let pokemonNames = data.split('\n')
    let requests = []
    let result
    return new Promise((resolve, reject) => {
        pokemonNames.forEach((pokemonName) => {
            requests.push(fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(response => response.json()))
        })
        Promise.all(requests).then((pokemonArray) => {
            result = pokemonArray.map((pokemonJson) => {
                return { 'name': pokemonJson.species.name, 'type': pokemonJson.types.map((type) => type.type.name).reduce((acc, type) => `${acc}, ${type}`) }
            })
            resolve(result)
        })
    })
}

module.exports = { getTypes }
let types = getTypes()
types.then((types) => types.forEach((type) => {
    console.log(`${type.name}: ${type.type}`)
}))
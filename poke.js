const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path')
var getTypes = () => {
    if (!process.argv.length) {
        throw Error('NO INPUT SPECIFIED.')
    }
    let data = fs.readFileSync(path.resolve(__dirname, 'input.txt'), 'utf8')
    console.log(data)
}

module.exports = { getTypes }
getTypes()
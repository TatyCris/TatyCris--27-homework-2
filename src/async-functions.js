const superagent = require('superagent')

function getTatooineResidents() {
    return superagent
            .get('https://swapi.co/api/planets/1/')
            .then(data => data.body.residents)
            .catch(err => console.log(err))

}

function promiseMeAString(string) {
    return new Promise((resolve, reject) => {
        if(string === null) reject ('You have failed me!')
        resolve ('You kept the Promise!')
    })
}

module.exports = { getTatooineResidents, promiseMeAString }
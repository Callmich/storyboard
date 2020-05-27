const dB = require('../../data/dbConfig.js')

module.exports = {
    find
}

function find(){
  return dB('stories as s')
    .leftJoin('characters as c', '')
}
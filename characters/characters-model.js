const dB = require('../data/dbConfig.js');

module.exports = {
    findCharacters,
    findCharacterById,
    addCharacter,
    updateCharacter,
    removeCharacter
}

function findCharacters(){
    return dB('characters')
}

function findCharacterById(id){
    return dB('characters')
    .where({ id })
    .first()
}

function addCharacter(char){
    return dB('characters')
    .insert(char, 'id')
    .then(([id]) => {
        return findCharacterById(id)
    })
    .catch(error => {
        console.log('Error on add project', error)
    })
}

function updateCharacter(id, changes){
    return dB('characters')
    .where({ id })
    .update(changes)
    .then(() => {
        return findCharacterById(id)
    })
    .catch(error => {
        console.log('Error on add project', error)
        return error
    })
}

function removeCharacter(id){

    findCharacterById(id)
      .then(item => {
          return (deletedItem = item)
      })

      return dB('characters')
        .where({ id })
        .del()
        .then(count => {
            return deletedItem
        })
        .catch(error => {
            console.log('Error on add project', error)
            return error
        })
}
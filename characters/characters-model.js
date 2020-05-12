const dB = require('../data/dbConfig.js');

module.exports = {
    findCharacters,
    findCharacterById,
    findCharactersByProjectId,
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

function findCharactersByProjectId(project_id){
    return dB('characters')
    .where({ project_id })
}

function addCharacter(char){
    return dB('characters')
    .insert(char, 'id')
    .then(([id]) => {
        return findCharacterById(id)
    })
    .catch(error => {
        console.log('Error on add character', error)
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
        console.log('Error on update character', error)
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
            console.log('Error on add character', error)
            return error
        })
}
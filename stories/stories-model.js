const dB = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find(){
    return dB('stories')
};

function findById(id){
    return dB('stories')
      .where({ id })
      .first()
}

function add(project){
    return dB('stories')
      .insert(project, 'id')
      .then(([id])=>{
          return findById(id)
      })
      .catch(error =>{
          console.log('Error on add project', error)
      })
}

function update(id, changes){
    return dB('stories')
      .where({ id })
      .update(changes)
      .then(() => {
          return findById(id)
      })
}

function remove(id){

    findById(id)
      .then(item => {
          return (deletedItem = item)
      })

    return dB('stories')
      .where({ id })
      .del()
      .then(count =>{
          return deletedItem
      })
}
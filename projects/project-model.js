const dB = require('../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find(){
    return dB('projects')
};

function findById(id){
    return dB('projects')
      .where({ id })
      .first()
}

function add(project){
    return dB('projects')
      .insert(project, 'id')
      .then(([id])=>{
          return findById(id)
      })
      .catch(error =>{
          console.log('Error on add project', error)
      })
}

function update(id, changes){
    return dB('projects')
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

    return dB('projects')
      .where({ id })
      .del()
      .then(count =>{
          return deletedItem
      })
}
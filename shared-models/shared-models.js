const dB = require('../data/dbConfig.js');

module.exports = {
    findAll,
    findById,
    findByProjectId,
    add,
    update,
    remove
}

function findAll(dataBase){
    const fA = () => {
        return dB(dataBase)
    }
    return fA()
};

function findById(dataBase, id){
    const fbId = () => {
        return dB(dataBase)
          .where({ id })
          .first()
    }
    return fbId()
};

function findByProjectId(dataBase, project_id){
    const fbpId = () => {
        return dB(dataBase)
          .where({ project_id })
    }
    return fbpId()
};

function add(dataBase, item){
  const ad = () => {
    return dB(dataBase)
    .insert(item, 'id')
    .then(([id]) => {
        return findById(dataBase, id)
    })
    .catch(error => {
        console.log('Error on add', error)
    })
  }
  return ad()
};

function update(dataBase, id, changes){
  const updt = () => {
    return dB(dataBase)
      .where({ id })
      .update(changes)
      .then(() => {
          return findById(dataBase, id)
      })
  }
  return updt()
}

function remove(dataBase, id){
  const remv = () => {
    findById(dataBase, id)
      .then(item => {
          return (deletedItem = item)
      })

    return dB(dataBase)
      .where({ id })
      .del()
      .then(count => {
          return deletedItem
      })
  }
  return remv()
}
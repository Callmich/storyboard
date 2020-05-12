const dB = require('../data/dbConfig.js');

module.exports = {
    findSettings,
    findSettingById,
    findSettingsByProjectId,
    addSetting,
    updateSetting,
    removeSetting
}

function findSettings(){
    return dB('settings')
}

function findSettingById(){
    return dB('settings')
    .where({ id })
    .first()
}

function findSettingsByProjectId(project_id){
    return dB('settings')
    .where({ project_id })
}

function addSetting(setting){
    return dB('settings')
    .insert(setting, 'id')
    .then(([id]) => {
        return findSettingById(id)
    })
    .catch(error => {
        console.log('Error on add setting', error)
    })
}

function updateSetting(id, changes){
    return dB('settings')
    .where({ id })
    .update(changes)
    .then(() => {
        return findSettingById(id)
    })
    .catch(error => {
        console.log('Error on update setting', error)
        return error
    })
}

function removeSetting(id){

    findSettingById(id)
      .then(item => {
          return (deletedItem = item)
      })

    return dB('settings')
      .where({ id })
      .del()
      .then(count => {
          return deletedItem
      })
      .catch(error => {
        console.log('Error on remove setting', error)
        return error
      })
}
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
const dB = require('../data/dbConfig.js');

module.exports = {
    findAll,
    findById,
    findByProjectId,
    add,
    update,
    remove
}

function findAll(database){
    const findInDb = () => {
        return dB(database)
    }

    return findInDb()
}
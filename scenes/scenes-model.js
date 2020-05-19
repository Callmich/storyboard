const dB = require('../data/dbConfig.js');

module.exports = {
    findScenes,
    findSceneById,
    findScenesByStoryId,
    addScene,
    updateScene,
    removeScene
};

function findScenes(){
    return dB('scenes')
};

function findSceneById(id){
    return dB('scenes')
    .where({ id })
    .first()
};

function findScenesByStoryId(story_id){
    return dB('scenes')
    .where({ story_id })
};

function addScene(scene){
    return dB('scenes')
    .insert(scene, 'id')
    .then(([id]) => {
        return findSceneById(id)
    })
    .catch(error => {
        console.log('Error on add scene', error)
    })
};

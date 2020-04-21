const dB = require('../data/dbConfig.js');

module.exports = {
    findStories,
    findStoryById,
    addStory,
    updateStory,
    removeStory
}

function findStories(){
    return dB('stories')
};

function findStoryById(id){
    return dB('stories')
      .where({ id })
      .first()
}

function addStory(story){
    return dB('stories')
      .insert(story, 'id')
      .then(([id])=>{
          return findStoryById(id)
      })
      .catch(error =>{
          console.log('Error on add project', error)
      })
}

function updateStory(id, changes){
    return dB('stories')
      .where({ id })
      .update(changes)
      .then(() => {
          return findStoryById(id)
      })
}

function removeStory(id){

    findStoryById(id)
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
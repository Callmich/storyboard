const dB = require('../data/dbConfig.js');

module.exports = {
    findAll,
    findById,
    findByProjectId,
    findByStoryId,
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
      if(dataBase == 'projects'){
        let project_id = id
        return dB(dataBase)
          .where({ project_id })
          .first()
      }else if(dataBase == 'stories'){
        let story_id = id
        return dB(dataBase)
          .where({ story_id })
          .first()
      }else if(dataBase == 'scenes'){
        let scene_id = id
        return dB(dataBase)
          .where({ scene_id })
          .first()
      }else if(dataBase == 'settings'){
        let setting_id = id
        return dB(dataBase)
          .where({ setting_id })
          .first()
      }else if(dataBase == 'characters'){
        let character_id = id
        return dB(dataBase)
          .where({ character_id })
          .first()
      }else if(dataBase == 'character_settings'){
        let character_setting_id = id
        return dB(dataBase)
          .where({ character_setting_id })
          .first()
      }else if(dataBase == 'scene_characters'){
        let scene_character_id = id
        return dB(dataBase)
          .where({ scene_character_id })
          .first()
      }else if(dataBase == 'scene_settings'){
        let scene_setting_id = id
        return dB(dataBase)
          .where({ scene_setting_id })
          .first()
      }else if(dataBase == 'story_characters'){
        let story_character_id = id
        return dB(dataBase)
          .where({ story_character_id })
          .first()
      }else if(dataBase == 'story_settings'){
        let story_setting_id = id
        return dB(dataBase)
          .where({ story_setting_id })
          .first()
      }   
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

function findByStoryId(dataBase, story_id){
  const fbsId = () => {
    return dB(dataBase)
      .where({ story_id })
  }
  return fbsId()
}

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
    if(dataBase == 'projects'){
      let project_id = id
      return dB(dataBase)
      .where({ project_id })
      .update(changes)
      .then(() => {
          return findById(dataBase, id)
      })
    }else if(dataBase == 'stories'){
      let story_id = id
      return dB(dataBase)
        .where({ story_id })
        .update(changes)
        .then(() => {
          return findById(dataBase, id)
        })
    }else if(dataBase == 'scenes'){
      let scene_id = id
      return dB(dataBase)
        .where({ scene_id })
        .update(changes)
        .then(() => {
          return findById(dataBase, id)
        })
    }else if(dataBase == 'settings'){
      let setting_id = id
      return dB(dataBase)
        .where({ setting_id })
        .update(changes)
        .then(() => {
          return findById(dataBase, id)
        })
    }else if(dataBase == 'characters'){
      let character_id = id
      return dB(dataBase)
        .where({ character_id })
        .update(changes)
        .then(() => {
          return findById(dataBase, id)
        })
    }else if(dataBase == 'character_settings'){
      let character_setting_id = id
      return dB(dataBase)
        .where({ character_setting_id })
        .update(changes)
        .then(() => {
          return findById(dataBase, id)
        })
    }else if(dataBase == 'scene_characters'){
      let scene_character_id = id
      return dB(dataBase)
        .where({ scene_character_id })
        .update(changes)
        .then(() => {
          return findById(dataBase, id)
        })
    }else if(dataBase == 'scene_settings'){
      let scene_setting_id = id
      return dB(dataBase)
        .where({ scene_setting_id })
        .update(changes)
        .then(() => {
          return findById(dataBase, id)
        })
    }else if(dataBase == 'story_characters'){
      let story_character_id = id
      return dB(dataBase)
        .where({ story_character_id })
        .update(changes)
        .then(() => {
          return findById(dataBase, id)
        })
    }else if(dataBase == 'story_settings'){
      let story_setting_id = id
      return dB(dataBase)
        .where({ story_setting_id })
        .update(changes)
        .then(() => {
          return findById(dataBase, id)
        })
    }
  }
  return updt()
}

function remove(dataBase, id){
  const remv = () => {
    findById(dataBase, id)
      .then(item => {
          return (deletedItem = item)
      })
    if(dataBase == 'projects'){
      let project_id = id
      return dB(dataBase)
      .where({ project_id })
      .del()
      .then(count => {
          return deletedItem
      })
    }else if(dataBase == 'stories'){
      let story_id = id
      return dB(dataBase)
      .where({ story_id })
      .del()
      .then(count => {
          return deletedItem
      })
    }else if(dataBase == 'scenes'){
      let scene_id = id
      return dB(dataBase)
      .where({ scene_id })
      .del()
      .then(count => {
          return deletedItem
      })
    }else if(dataBase == 'settings'){
      let setting_id = id
      return dB(dataBase)
      .where({ setting_id })
      .del()
      .then(count => {
          return deletedItem
      })
    }else if(dataBase == 'characters'){
      let character_id = id
      return dB(dataBase)
      .where({ character_id })
      .del()
      .then(count => {
          return deletedItem
      })
    }else if(dataBase == 'character_settings'){
      let character_setting_id = id
      return dB(dataBase)
      .where({ character_setting_id })
      .del()
      .then(count => {
          return deletedItem
      })
    }else if(dataBase == 'scene_characters'){
      let scene_character_id = id
      return dB(dataBase)
      .where({ scene_character_id })
      .del()
      .then(count => {
          return deletedItem
      })
    }else if(dataBase == 'scene_settings'){
      let scene_setting_id = id
      return dB(dataBase)
      .where({ scene_setting_id })
      .del()
      .then(count => {
          return deletedItem
      })
    }else if(dataBase == 'story_characters'){
      let story_character_id = id
      return dB(dataBase)
      .where({ story_character_id })
      .del()
      .then(count => {
          return deletedItem
      })
    }else if(dataBase == 'story_settings'){
      let story_setting_id = id
      return dB(dataBase)
      .where({ story_setting_id })
      .del()
      .then(count => {
          return deletedItem
      })
    }
  }
  return remv()
}
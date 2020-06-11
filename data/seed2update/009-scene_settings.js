exports.seed = (knex, Promise) => {
  return knex('scene_settings').truncate()
  .then(function (){
    return knex('scene_settings').insert([
      {
        
      }
  ])
  })
}
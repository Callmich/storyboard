exports.seed = (knex, Promise) => {
  return knex('scene_characters').truncate()
  .then(function (){
    return knex('scene_characters').insert([
      {
        
      }
  ])
  })
}
exports.seed = (knex, Promise) => {
  return knex('story_settings').truncate()
  .then(function (){
    return knex('story_settings').insert([
      {
        
      }
  ])
  })
}
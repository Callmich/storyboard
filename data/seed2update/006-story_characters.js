exports.seed = (knex, Promise) => {
  return knex('story_characters').truncate()
  .then(function (){
    return knex('story_characters').insert([
      {
        
      }
  ])
  })
}
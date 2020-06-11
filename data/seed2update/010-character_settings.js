exports.seed = (knex, Promise) => {
  return knex('character_settings').truncate()
  .then(function (){
    return knex('character_settings').insert([
      {
        
      }
  ])
  })
}
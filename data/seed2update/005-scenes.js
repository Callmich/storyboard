exports.seed = (knex, Promise) => {
  return knex('scenes').truncate()
  .then(function (){
    return knex('scenes').insert([
      {
        
      }
  ])
  })
}
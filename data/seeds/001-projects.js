
exports.seed = (knex, Promise) => {
  return knex('projects').truncate()
  .then(function (){
    return knex('projects').insert([
      {
        // For ref will be id 1
        project_name: "Star Wars",
        project_summary: "A battle in the Stars!",
        project_notes: "needs work"
      },
      {
        // For ref will be id 2
        project_name: "Community: Season 2",
        project_summary: null,
        project_notes: "Whats the show about?"
      }
  ])
  })
}
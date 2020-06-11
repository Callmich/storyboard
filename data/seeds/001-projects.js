
exports.seed = (knex) => {
  return knex('projects')
    .insert([
          {
            project_name: "Star Wars",
            project_summary: "A battle in the Stars!",
            project_notes: "needs work"
          },
          {
            project_name: "Community: Season 2",
            project_summary: null,
            project_notes: "Whats the show about?"
          }
      ])
}
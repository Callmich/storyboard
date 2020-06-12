exports.seed = (knex, Promise) => {
  return knex('settings').truncate()
  .then(function (){
    return knex('settings').insert([
      {
        // For ref will be id 1
        setting_name: "Tantive IV",
        setting_time: null,
        setting_desc: "Princess Leia's ship on a diplomatic mission to Alderon",
        setting_background: "A Battle",
        setting_activities: null,
        setting_url: null,
        project_id: 1
      },
      {
        // For ref will be id 2
        setting_name: "Tatooine",
        setting_time: null,
        setting_desc: "A desert planet. An endless vast sea of sand",
        setting_background: "If there's a bright center to the universe, you're on the planet that it's farthest from",
        setting_activities: null,
        setting_url: null,
        project_id: 1
      },
      {
        // For ref will be id 3
        setting_name: "Ice Planet Hoth",
        setting_time: null,
        setting_desc: "An Ice planet. Cold - white and blue colors.",
        setting_background: "The Rebels escaped to Hoth after Ep 4",
        setting_activities: null,
        setting_url: null,
        project_id: 1
      },
      {
        // For ref will be id 4
        setting_name: "The Rebel Base",
        setting_time: null,
        setting_desc: "The run down facility the Rebels are hiding",
        setting_background: null,
        setting_activities: "Prep for battle or running",
        setting_url: null,
        project_id: 1
      },
      {
        // For ref will be id 5
        setting_name: "The Wampa's Cave",
        setting_time: null,
        setting_desc: "scary cold ice cave",
        setting_background: "Where the Wampa lives and brings back its meals",
        setting_activities: "The Wampa is busy doing something in the back of the cave",
        setting_url: null,
        project_id: 1
      },
      {
        // For ref will be id 6
        setting_name: "Greendale Campus",
        setting_time: "Current Day",
        setting_desc: "A lovely open community college setting.",
        setting_background: null,
        setting_activities: null,
        setting_url: null,
        project_id: 2
      },
      {
        // For ref will be id 7
        setting_name: "The Study Room",
        setting_time: "Current Day",
        setting_desc: "A room in the library - lots of windows and a large table in the middle.",
        setting_background: null,
        setting_activities: null,
        setting_url: null,
        project_id: 2
      },
      {
        // For ref will be id 8
        setting_name: " Anthropology Class",
        setting_time: "Current Day",
        setting_desc: "A classroom full of students",
        setting_background: null,
        setting_activities: null,
        setting_url: null,
        project_id: 2
      },
      {
        // For ref will be id 9
        setting_name: "Cafeteria",
        setting_time: "Current Day",
        setting_desc: "A large basic cafeteria. Lots of students.",
        setting_background: null,
        setting_activities: null,
        setting_url: null,
        project_id: 2
      },
      {
        // For ref will be id 10
        setting_name: "Student Lounge",
        setting_time: "Current Day",
        setting_desc: null,
        setting_background: null,
        setting_activities: null,
        setting_url: null,
        project_id: 2
      },
      {
        // For ref will be id 11
        setting_name: "School Hallway",
        setting_time: "Current Day",
        setting_desc: null,
        setting_background: null,
        setting_activities: null,
        setting_url: null,
        project_id: 2
      },
      {
        // For ref will be id 12
        setting_name: "Greendale Student Health Center",
        setting_time: "Current Day",
        setting_desc: null,
        setting_background: null,
        setting_activities: null,
        setting_url: null,
        project_id: 2
      },
  ])
  })
}
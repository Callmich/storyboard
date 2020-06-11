exports.seed = (knex, Promise) => {
  return knex('scenes').truncate()
  .then(function (){
    return knex('scenes').insert([
      {
        scene_name: "A New Hope",
        scene_number: 1,
        scene_summary: "",
        scene_notes: "",
        story_id: 1,
        scene_timespan: ""
      },
      {
        scene_name: "Imperial Boarding Party",
        scene_number: 2,
        scene_summary: "",
        scene_notes: "",
        story_id: 1,
        scene_timespan: ""
      },
      {
        scene_name: "R2’s Mission",
        scene_number: 3,
        scene_summary: "",
        scene_notes: "",
        story_id: 1,
        scene_timespan: ""
      },
      {
        scene_name: "Vader Confronts the Princess",
        scene_number: 4,
        scene_summary: "",
        scene_notes: "",
        story_id: 1,
        scene_timespan: ""
      },
      {
        scene_name: "Lost in the Desert",
        scene_number: 5,
        scene_summary: "",
        scene_notes: "",
        story_id: 1,
        scene_timespan: ""
      },
      {
        scene_name: "The Empire Strikes Back",
        scene_number: 1,
        scene_summary: "",
        scene_notes: "",
        story_id: 2,
        scene_timespan: ""
      },
      {
        scene_name: "Ice Plant Hoth",
        scene_number: 2,
        scene_summary: "",
        scene_notes: "",
        story_id: 2,
        scene_timespan: ""
      },
      {
        scene_name: "The Rebel Base",
        scene_number: 3,
        scene_summary: "",
        scene_notes: "",
        story_id: 2,
        scene_timespan: ""
      },
      {
        scene_name: "Escape from the Wampa",
        scene_number: 4,
        scene_summary: "",
        scene_notes: "",
        story_id: 2,
        scene_timespan: ""
      },
      {
        scene_name: "Back to School",
        scene_number: 1,
        scene_summary: "",
        scene_notes: "",
        story_id: 4,
        scene_timespan: ""
      },
      {
        scene_name: "And We're Back",
        scene_number: 2,
        scene_summary: "",
        scene_notes: "",
        story_id: 4,
        scene_timespan: ""
      },
      {
        scene_name: "Anthropology 101",
        scene_number: 3,
        scene_summary: "",
        scene_notes: "",
        story_id: 4,
        scene_timespan: ""
      },
      {
        scene_name: "Pop and Locktober Fest",
        scene_number: 1,
        scene_summary: "",
        scene_notes: "",
        story_id: 5,
        scene_timespan: ""
      },
      {
        scene_name: "An Old Friend",
        scene_number: 2,
        scene_summary: "",
        scene_notes: "",
        story_id: 5,
        scene_timespan: ""
      },
      {
        scene_name: "Dance Try-Out",
        scene_number: 3,
        scene_summary: "",
        scene_notes: "",
        story_id: 5,
        scene_timespan: ""
      },
      {
        scene_name: "Diorama",
        scene_number: 1,
        scene_summary: "",
        scene_notes: "",
        story_id: 6,
        scene_timespan: ""
      },
      {
        scene_name: "Hallway to class",
        scene_number: 2,
        scene_summary: "",
        scene_notes: "",
        story_id: 6,
        scene_timespan: ""
      },
      {
        scene_name: "New Anth Teacher",
        scene_number: 3,
        scene_summary: "",
        scene_notes: "",
        story_id: 6,
        scene_timespan: ""
      }
  ])
  })
}
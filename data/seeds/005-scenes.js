exports.seed = (knex, Promise) => {
  return knex('scenes').truncate()
  .then(function (){
    return knex('scenes').insert([
      {
        // For ref will be id 1
        scene_name: "A New Hope",
        scene_number: 1,
        scene_summary: "A scrolling screen explaining the setting and characters the viewers will be seeing at the start. Explain the confilct and where we walk into the story.",
        scene_notes: "",
        story_id: 1,
        scene_timespan: null
      },
      {
        // For ref will be id 2
        scene_name: "Imperial Boarding Party",
        scene_number: 2,
        scene_summary: "Tantive IV is swallowed by a star destroyer. R2D2 and C3P0 walk a hallway as soldiers get ready for an attack. Storm troopers blast their way into the ship and a firefight ensues. R2 and 3P0 avoid laser fire. Darth Vader enters.",
        scene_notes: "Fast Paced with action and lasers",
        story_id: 1,
        scene_timespan: "A few minutes"
      },
      {
        // For ref will be id 3
        scene_name: "R2’s Mission",
        scene_number: 3,
        scene_summary: "Princess Leia gives R2 the plans to the Death Star and a mission (later revealed to get them to Ben Kenobi. Darth interigates a soldier and orders the place be torn apart to find the plans. Storm Troopers capture Leia. R2 and 3P0 escape on an escape pod.",
        scene_notes: "While not revealed until later the plans that Leia gives r2 drives the base line of the plot for the film.",
        story_id: 1,
        scene_timespan: "10-30 minutes"
      },
      {
        // For ref will be id 4
        scene_name: "Vader Confronts the Princess",
        scene_number: 4,
        scene_summary: "Leia is interogated by Vader. She tries to play coy but Vader does not believe it was a diplomatic mission. He has soldiers taker her away. He explains that Leia is his chance to find the Rebel Base. He orders a detachment to find the escape pod that was gettisoned durring the fighting.",
        scene_notes: "",
        story_id: 1,
        scene_timespan: "real time"
      },
      {
        // For ref will be id 5
        scene_name: "Lost in the Desert",
        scene_number: 5,
        scene_summary: "R2 and 3P0 walk through the desert. They argue and want to go differnt ways. R2 explains he has a mission but the two can't come to an agreement and go off in different directions to find a settlement.",
        scene_notes: "",
        story_id: 1,
        scene_timespan: "real time"
      },
      {
        // For ref will be id 6
        scene_name: "The Empire Strikes Back",
        scene_number: 1,
        scene_summary: "",
        scene_notes: "",
        story_id: 2,
        scene_timespan: ""
      },
      {
        // For ref will be id 7
        scene_name: "Ice Plant Hoth",
        scene_number: 2,
        scene_summary: "",
        scene_notes: "",
        story_id: 2,
        scene_timespan: ""
      },
      {
        // For ref will be id 8
        scene_name: "The Rebel Base",
        scene_number: 3,
        scene_summary: "",
        scene_notes: "",
        story_id: 2,
        scene_timespan: ""
      },
      {
        // For ref will be id 9
        scene_name: "Escape from the Wampa",
        scene_number: 4,
        scene_summary: "",
        scene_notes: "",
        story_id: 2,
        scene_timespan: ""
      },
      {
        // For ref will be id 10
        scene_name: "Back to School",
        scene_number: 1,
        scene_summary: "",
        scene_notes: "",
        story_id: 4,
        scene_timespan: ""
      },
      {
        // For ref will be id 11
        scene_name: "And We're Back",
        scene_number: 2,
        scene_summary: "",
        scene_notes: "",
        story_id: 4,
        scene_timespan: ""
      },
      {
        // For ref will be id 12
        scene_name: "Anthropology 101",
        scene_number: 3,
        scene_summary: "",
        scene_notes: "",
        story_id: 4,
        scene_timespan: ""
      },
      {
        // For ref will be id 13
        scene_name: "Pop and Locktober Fest",
        scene_number: 1,
        scene_summary: "",
        scene_notes: "",
        story_id: 5,
        scene_timespan: ""
      },
      {
        // For ref will be id 14
        scene_name: "An Old Friend",
        scene_number: 2,
        scene_summary: "",
        scene_notes: "",
        story_id: 5,
        scene_timespan: ""
      },
      {
        // For ref will be id 15
        scene_name: "Dance Try-Out",
        scene_number: 3,
        scene_summary: "",
        scene_notes: "",
        story_id: 5,
        scene_timespan: ""
      },
      {
        // For ref will be id 16
        scene_name: "Diorama",
        scene_number: 1,
        scene_summary: "",
        scene_notes: "",
        story_id: 6,
        scene_timespan: ""
      },
      {
        // For ref will be id 17
        scene_name: "Hallway to class",
        scene_number: 2,
        scene_summary: "",
        scene_notes: "",
        story_id: 6,
        scene_timespan: ""
      },
      {
        // For ref will be id 18
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
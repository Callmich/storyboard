exports.seed = (knex, Promise) => {
  return knex('story_characters').truncate()
  .then(function (){
    return knex('story_characters').insert([
      {
        story_id: 1, // Episode IV: A New Hope
        character_id: 1, // C3P0
        story_character_pov_changes: "C3P0 learns his affection for r2 and meets new friends"
      },
      {
        story_id: 2, // Episode V: The Empire Strikes back
        character_id: 1, // C3P0
        story_character_pov_changes: "C3P0 doesnt change much"
      },
      {
        story_id: 3, // Episode VI: The Return of the Jedi
        character_id: 1, // C3P0
        story_character_pov_changes: null
      },
      {
        story_id: 1, // Episode IV: A New Hope
        character_id: 2, // R2D2
        story_character_pov_changes: "Gains a mission and new friends"
      },
      {
        story_id: 2, // Episode V: The Empire Strikes back
        character_id: 2, // R2D2
        story_character_pov_changes: "Watches Luke do stuff"
      },
      {
        story_id: 3, // Episode VI: Return of the Jedi
        character_id: 2, // R2D2
        story_character_pov_changes: null
      },
      {
        story_id: 1, // Episode IV: A New Hope
        character_id: 3, // Rebel Soldiers
        story_character_pov_changes: null
      },
      {
        story_id: 2, // Episode V: The Empire Strikes back
        character_id: 3, // Rebel Soldiers
        story_character_pov_changes: null
      },
      {
        story_id: 3, // Episode VI: Return of the Jedi
        character_id: 3, // Rebel Soldiers
        story_character_pov_changes: null
      },
      {
        story_id: 1, // Episode IV: A New Hope
        character_id: 4, // Princess Leia
        story_character_pov_changes: null
      },
      {
        story_id: 2, // Episode V: The Empire Strikes back
        character_id: 4, // Princess Leia
        story_character_pov_changes: "Leia gains new allies in her fight"
      },
      {
        story_id: 3, // Episode VI: Return of the Jedi
        character_id: 4, // Princess Leia
        story_character_pov_changes: "Leia admits her love and loses Han"
      },
      {
        story_id: 1, // Episode IV: A New Hope
        character_id: 5, // Darth Vader
        story_character_pov_changes: null
      },
      {
        story_id: 2, // Episode V: The Empire Strikes back
        character_id: 5, // Darth Vader
        story_character_pov_changes: "Vader learns not to underestimate an opponent"
      },
      {
        story_id: 3, // Episode VI: Return of the Jedi
        character_id: 5, // Darth Vader
        story_character_pov_changes: "Vader attempts to regain his son but pushes him further away"
      },
      {
        story_id: 1, // Episode IV: A New Hope
        character_id: 17, // Luke Skywalker
        story_character_pov_changes: "Luke goes from the farm to fighting in a rebellion"
      },
      {
        story_id: 2, // Episode V: The Empire Strikes back
        character_id: 17, // Luke
        story_character_pov_changes: "Learns more about the force and the truth about Vader"
      },
      {
        story_id: 3, // Episode VI: Return of the Jedi
        character_id: 17, // luke
        story_character_pov_changes: null
      },
      {
        story_id: 1, // Episode IV: A New Hope
        character_id: 18, // Chewie
        story_character_pov_changes: "Brings more people into his family"
      },
      {
        story_id: 2, // Episode V: The Empire Strikes back
        character_id: 18, // Chewie
        story_character_pov_changes: "Loses Han"
      },
      {
        story_id: 3, // Episode VI: Return of the Jedi
        character_id: 18, // Chewie
        story_character_pov_changes: null
      },
      {
        story_id: 1, // Episode IV: A New Hope
        character_id: 19, // Han Solo
        story_character_pov_changes: "Gains perspective that there is more than money in the universe"
      },
      {
        story_id: 2, // Episode V: The Empire Strikes back
        character_id: 19, // Han Solo
        story_character_pov_changes: "falls in love"
      },
      {
        story_id: 3, // Episode VI: Return of the Jedi
        character_id: 19, // Han Solo
        story_character_pov_changes: null
      },
      {
        story_id: 4, // Community 2.1
        character_id: 6, // Jeff
        story_character_pov_changes: ""
      },
      {
        story_id: 5, // Community 2.2
        character_id: 6, // Jeff
        story_character_pov_changes: ""
      },
      {
        story_id: 6, // Community 2.3
        character_id: 6, // Jeff
        story_character_pov_changes: ""
      },
      {
        story_id: 7, // Community 2.4
        character_id: 6, // Jeff
        story_character_pov_changes: null
      },
      {
        story_id: 4, // Community 2.1
        character_id: 7, // Britta
        story_character_pov_changes: ""
      },
      {
        story_id: 5, // Community 2.2
        character_id: 7, // Britta
        story_character_pov_changes: ""
      },
      {
        story_id: 6, // Community 2.3
        character_id: 7, // Britta
        story_character_pov_changes: ""
      },
      {
        story_id: 7, // Community 2.4
        character_id: 7, // Britta
        story_character_pov_changes: null
      },
      {
        story_id: 4, // Community 2.1
        character_id: 8, // Abed
        story_character_pov_changes: ""
      },
      {
        story_id: 5, // Community 2.2
        character_id: 8, // Abed
        story_character_pov_changes: ""
      },
      {
        story_id: 6, // Community 2.3
        character_id: 8, // Abed
        story_character_pov_changes: ""
      },
      {
        story_id: 7, // Community 2.4
        character_id: 8, // Abed
        story_character_pov_changes: null
      },
      {
        story_id: 4, // Community 2.1
        character_id: 9, // Annie
        story_character_pov_changes: ""
      },
      {
        story_id: 5, // Community 2.2
        character_id: 9, // Annie
        story_character_pov_changes: ""
      },
      {
        story_id: 6, // Community 2.3
        character_id: 9, // Annie
        story_character_pov_changes: ""
      },
      {
        story_id: 7, // Community 2.4
        character_id: 9, // Annie
        story_character_pov_changes: null
      },
      {
        story_id: 4, // Community 2.1
        character_id: 10, // Troy
        story_character_pov_changes: ""
      },
      {
        story_id: 5, // Community 2.2
        character_id: 10, // Troy
        story_character_pov_changes: ""
      },
      {
        story_id: 6, // Community 2.3
        character_id: 10, // Troy
        story_character_pov_changes: ""
      },
      {
        story_id: 7, // Community 2.4
        character_id: 10, // Troy
        story_character_pov_changes: null
      },
      {
        story_id: 4, // Community 2.1
        character_id: 11, // Shirley
        story_character_pov_changes: ""
      },
      {
        story_id: 5, // Community 2.2
        character_id: 11, // Shirley
        story_character_pov_changes: ""
      },
      {
        story_id: 6, // Community 2.3
        character_id: 11, // Shirley
        story_character_pov_changes: ""
      },
      {
        story_id: 7, // Community 2.4
        character_id: 11, // Shirley
        story_character_pov_changes: null
      },
      {
        story_id: 4, // Community 2.1
        character_id: 12, // Pierce
        story_character_pov_changes: ""
      },
      {
        story_id: 5, // Community 2.2
        character_id: 12, // Pierce
        story_character_pov_changes: ""
      },
      {
        story_id: 6, // Community 2.3
        character_id: 12, // Pierce
        story_character_pov_changes: ""
      },
      {
        story_id: 7, // Community 2.4
        character_id: 12, // Pierce
        story_character_pov_changes: null
      },
      {
        story_id: 1, // Episode IV: A New Hope
        character_id: 13, // Storm Troopers
        story_character_pov_changes: null
      },
      {
        story_id: 2, // Episode V: The Empire Strikes back
        character_id: 13, // Storm Troopers
        story_character_pov_changes: null
      },
      {
        story_id: 3, // Episode VI: The Return of the Jedi
        character_id: 13, // Storm Troopers
        story_character_pov_changes: null
      },
      {
        story_id: 4, // Community 2.1
        character_id: 14, // Betty White
        story_character_pov_changes: ""
      },
      {
        story_id: 5, // Community 2.2
        character_id: 14, // Betty White
        story_character_pov_changes: ""
      },
      {
        story_id: 6, // Community 2.3
        character_id: 15, // Ian Duncan
        story_character_pov_changes: ""
      },
      {
        story_id: 4, // Community 2.1
        character_id: 16, // students
        story_character_pov_changes: null
      },
      {
        story_id: 5, // Community 2.2
        character_id: 16, // students
        story_character_pov_changes: null
      },
      {
        story_id: 6, // Community 2.3
        character_id: 16, // students
        story_character_pov_changes: null
      },
      {
        story_id: 7, // Community 2.4
        character_id: 16, // students
        story_character_pov_changes: null
      },
      {
        story_id: 5, // Community 2.2
        character_id: 20, // Alan Conner
        story_character_pov_changes: ""
      },
  ])
  })
}
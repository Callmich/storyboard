exports.seed = (knex, Promise) => {
  return knex('scene_characters').truncate()
  .then(function (){
    return knex('scene_characters').insert([
      {
        scene_id: 2, // Imperial Boarding Party
        character_id: 1, // C3PO
        scene_character_pov_changes: "C3P0 is concerned that there is no escape. They and the princess will be caught."
      },
      {
        scene_id: 2, // Imperial Boarding Party
        character_id: 2, // R2D2
        scene_character_pov_changes: "R2D2 is also concerned about their current situation."
      },
      {
        scene_id: 2, // Imperial Boarding Party
        character_id: 3, // Rebel Soldiers
        scene_character_pov_changes: null
      },
      {
        scene_id: 2, // Imperial Boarding Party
        character_id: 5, // Darth Vader
        scene_character_pov_changes: null
      },
      {
        scene_id: 2, // Imperial Boarding Party
        character_id: 13, // Storm Troopers
        scene_character_pov_changes: null
      },
      {
        scene_id: 3, // R2’s Mission
        character_id: 1, // C3PO
        scene_character_pov_changes: "C3P0 is concerned with R2 getting away from him. He does not like the idea of getting into an escape pod."
      },
      {
        scene_id: 3, // R2’s Mission
        character_id: 2, // R2D2
        scene_character_pov_changes: "R2 has been given a mission and is now determined to complete it. It knows it must escape and get to the planet below."
      },
      {
        scene_id: 3, // R2’s Mission
        character_id: 3, // Rebel Soldiers
        scene_character_pov_changes: "Soldier gives his life to protect the mission."
      },
      {
        scene_id: 3, // R2’s Mission
        character_id: 4, // Princess Leia
        scene_character_pov_changes: "Leia sees one shot to get the plans off the ship and away from the empire. She will fight to keep them safe."
      },
      {
        scene_id: 3, // R2’s Mission
        character_id: 5, // Darth Vader
        scene_character_pov_changes: "He is searching and will find the plans by any means necessary."
      },
      {
        scene_id: 3, // R2’s Mission
        character_id: 13, // Storm Troopers
        scene_character_pov_changes: null
      },
      {
        scene_id: 4, // Vader Confronts the Princess
        character_id: 4, // Princess Leia
        scene_character_pov_changes: "Leia tries to keep her cool and convince vader the plans were not aboard."
      },
      {
        scene_id: 4, // Vader Confronts the Princess
        character_id: 5, // Darth Vader
        scene_character_pov_changes: "Vader'd resolve is increased - he has the princess in his grasp. The plans must be off the ship but will be retrived."
      },
      {
        scene_id: 4, // Vader Confronts the Princess
        character_id: 13, // Storm Troopers
        scene_character_pov_changes: null
      },
      {
        scene_id: 5, // Lost in the Desert
        character_id: 1, // C3PO
        scene_character_pov_changes: "C3P0 thinks they'll die out in the dessert and doesnt want to understand anything about R2's mission. It feels the best way to find a settlement is to avoid the mountains."
      },
      {
        scene_id: 5, // Lost in the Desert
        character_id: 2, // R2D2
        scene_character_pov_changes: "R2D2 is has a strong resolve to find Kenobi and thinks the mountains is the way to go. It is willing to leave its friend to get the plans to Ben."
      },
      {
        scene_id: 7, // Ice Plant Hoth
        character_id: 17, // Luke
        scene_character_pov_changes: "Luke is curious about the meteor crash. Wants to check it out after a long day of work."
      },
      {
        scene_id: 7, // Ice Plant Hoth
        character_id: 19, // Han
        scene_character_pov_changes: "Han is ready to get back to Echo Base. Shows concern for Luke as a friend."
      },
      {
        scene_id: 8, // The Rebel Base
        character_id: 19, // Han
        scene_character_pov_changes: "Han needs to tell everyone that he is leaving. He tries to get Leai to confess her feelings for him but gets frustrated."
      },
      {
        scene_id: 8, // The Rebel Base
        character_id: 18, // Chewie
        scene_character_pov_changes: "Chewie is frustrated working on the Falcon. There are many issues still going on with the ship."
      },
      {
        scene_id: 8, // The Rebel Base
        character_id: 3, // Rebel Soldiers
        scene_character_pov_changes: null
      },
      {
        scene_id: 8, // The Rebel Base
        character_id: 4, // Princess Leia
        scene_character_pov_changes: "Leia is concerned with the plans for the Rebels. She cannot lose good people from their side. She is unwilling to see her feelings for Han as anything beyond that and becomes very frustrated with Han for suggesting otherwise."
      },
      {
        scene_id: 19, // Where's Luke?
        character_id: 1, // C3PO
        scene_character_pov_changes: "C3P0 is checking with Han if Luke has been seen. Leai has not heard about him returning to base. It becomes more concerned when it learns Han has not seen Luke."
      },
      {
        scene_id: 19, // Where's Luke?
        character_id: 2, // R2D2
        scene_character_pov_changes: "R2D2 is very concerned"
      },
      {
        scene_id: 19, // Where's Luke?
        character_id: 19, // Han
        scene_character_pov_changes: "Han becomes extremely concerned when he finds out no one has seen Luke. That concern grows as he checks other parts of the base without any luck. He decides to risk his life to find Luke by going back out into the cold unforgiving landscape of Hoth."
      },
      {
        scene_id: 19, // Where's Luke?
        character_id: 3, // Rebel Soldiers
        scene_character_pov_changes: "Soldiers cannot believe Han would go back out into the cold."
      },
      {
        scene_id: 9, // Escape from the Wampa
        character_id: 17, // Luke
        scene_character_pov_changes: "Luke uses the force to get out of a dangerous situation and runs out into the cold to escape. The danger of being exposed to the elements is less than that of the wampa."
      },
      {
        scene_id: 9, // Where's Luke?
        character_id: 19, // Han
        scene_character_pov_changes: "Han's concern is growing as he searches out in the cold for Luke."
      },
      {
        scene_id: 10, // Back to School
        character_id: 6, // Jeff
        scene_character_pov_changes: "Jeff is doing crunches in the bed bit to start."
      },
      {
        scene_id: 10, // Back to School
        character_id: 7, // Britta
        scene_character_pov_changes: "Britta could not sleep. When arriving she is embarrassed as all the women are obviously talking about her on campus."
      },
      {
        scene_id: 10, // Back to School
        character_id: 8, // Abid
        scene_character_pov_changes: "Abid is ready to start a new semester. he has big plans and hopes!"
      },
      {
        scene_id: 10, // Back to School
        character_id: 9, // Annie
        scene_character_pov_changes: "Annie is combing her hair thinking of Jeff to start the scene."
      },
      {
        scene_id: 10, // Back to School
        character_id: 10, // Troy
        scene_character_pov_changes: "Troy is insulted by Pierce and takes it out by posting the racist stuff he says to his twitter."
      },
      {
        scene_id: 10, // Back to School
        character_id: 11, // Shirley
        scene_character_pov_changes: "Shirley is enjoying the moring playing with her boys."
      },
      {
        scene_id: 10, // Back to School
        character_id: 12, // Pierce 
        scene_character_pov_changes: "Pierce is happy to have Troy with him and to be starting a new year."
      },
      {
        scene_id: 11, // And We're Back
        character_id: 6, // Jeff
        scene_character_pov_changes: "Is happy to see everyone."
      },
      {
        scene_id: 11, // And We're Back
        character_id: 7, // Britta
        scene_character_pov_changes: "Pops up scraring the group. She explains she is extremely embarrassed to be in this situation."
      },
      {
        scene_id: 11, // And We're Back
        character_id: 8, // Abid
        scene_character_pov_changes: "Is happy to see everyone"
      },
      {
        scene_id: 11, // And We're Back
        character_id: 9, // Annie
        scene_character_pov_changes: "Is concerned as Britta has not returned any communication over the break. Glad to see everyone."
      },
      {
        scene_id: 11, // And We're Back
        character_id: 10, // Troy
        scene_character_pov_changes: "Is happy to see everyone. Gets confused."
      },
      {
        scene_id: 11, // And We're Back
        character_id: 11, // Shirley
        scene_character_pov_changes: "Is concerned as Britta has not returned any communication over the break. Glad to see everyone."
      },
      {
        scene_id: 11, // And We're Back
        character_id: 12, // Pierce 
        scene_character_pov_changes: "Is happy to see everyone."
      },
      {
        scene_id: 12, // Hallway to Class
        character_id: 6, // Jeff
        scene_character_pov_changes: "Takes Britta's appology and says she deserves the embarrassment she is recieveing. Sees that the women talk to Britta and say they admire her and realizes he may be in trouble. Recognizes that Annie has feelings for him and is not hiding it well. He relizes again he may be in trouble."
      },
      {
        scene_id: 12, // Hallway to Class
        character_id: 7, // Britta
        scene_character_pov_changes: "Britta goes from embarrassment to being empowered by the women of the school."
      },
      {
        scene_id: 12, // Hallway to Class
        character_id: 9, // Annie
        scene_character_pov_changes: "Annie tries to get Jeff to realize she cares and she is the right woman for her. Promises to keep their kiss silent but can not hide her feelings."
      },
  ])
  })
}

exports.seed = (knex, Promise) => {
  return knex('stories').truncate()
  .then(function (){
    return knex('stories').insert([
      {
        // For ref will be id 1
        story_number: 4,
        story_name: "Episode IV: A New Hope",
        story_summary: "Luke Skywalker gains two droids and a set of plans to the Death Star. He meets many other characters and an understanding of the force.",
        story_notes: "Need more plans for the other characters. The summary should include them",
        project_id: 1,
       },
       {
         // For ref will be id 2
        story_number: 5,
        story_name: "Episode V: The Empire Strikes Back",
        story_summary: "The Rebel Alliance is attacked on Hoth and escape broken. Leia, Han, Chewy, and C3PO are chased by the empire while Luke goes with R2D2 to Degoba to train.",
        story_notes: "Need to figure out the 2nd half of the movie",
        project_id: 1,
       },
       {
         // For ref will be id 3
        story_number: 6,
        story_name: "Episode VI: The Return of the Jedi",
        story_summary: null,
        story_notes: null,
        project_id: 1,
       },
       {
         // For ref will be id 4
        story_number: 2.1,
        story_name: "Anthropology 101",
        story_summary: "The study group attend their first series of classes in Anthropology 101, the course which they had decided to take together for the new semester. The episode also picks up on the storyline that began in the season one finale involving a love triangle between Jeff, Britta and Annie. Jeff and Britta begin what is seemingly a passionate relationship, but the revelation that Jeff got involved with Annie at the end of the previous year disgusts the group. Each member begins taking out their frustrations on each other. With the group on the verge of breaking up, it's up to Jeff to bring them to reconciliation.",
        story_notes: "Pulled from Wikipedia",
        project_id: 2,
       },
       {
         // For ref will be id 5
        story_number: 2.2,
        story_name: "Accounting for Lawyers",
        story_summary: "Jeff meets up with an old friend and colleague from his law firm, Alan, a spineless unprincipled character. He temporarily abandons the group to join Alan and other former colleagues at an office party, which he is invited to by Alan who wants to use him to get promoted. The study group suspects that Alan was the one who got Jeff disbarred, and set out to find the truth at the party.",
        story_notes: "Pulled from Wikipedia",
        project_id: 2,
       },
       {
         // For ref will be id 6
        story_number: 2.3,
        story_name: "The Psychology of Letting Go",
        story_summary: "Pierce's mom dies and the group is concerned about the way he's handling it. His deep faith in his cult causes him to believe that his mother is only temporarily gone and will return after a while. Meanwhile, Jeff becomes upset when told that his cholesterol levels are a little high, and tries to take out his frustration by mocking Pierce's beliefs and attempting to prove to Pierce that his mom is dead. The episode's subplot covered the tension between Annie and Britta that began in Anthropology 101.",
        story_notes: "Pulled from Wikipedia",
        project_id: 2,
       },
       {
         // For ref will be id 7
        story_number: 2.4,
        story_name: "Basic Rocket Science",
        story_summary: "In the episode, the study group, except Abed, are trapped in a space flight simulator being towed from Greendale Community College. When they discover it was a plot hatched by rival City College, they work together to complete the simulation mission and bring the simulator back on Greendale in time for the college's simulator launch.",
        story_notes: "Pulled from Wikipedia",
        project_id: 2,
       }
  ])
  })
}
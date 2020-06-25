exports.seed = (knex, Promise) => {
  return knex("story_characters")
    .then(function () {
      return knex("story_characters").insert([
        {
          story_id: 1, // Episode IV: A New Hope
          character_id: 1, // C3P0
          story_character_combo: "1,1,1", //storyId,characterId,projectId
          story_character_pov_changes:
            "C3P0 learns his affection for r2 and meets new friends",
        },
        {
          story_id: 2, // Episode V: The Empire Strikes back
          character_id: 1, // C3P0
          story_character_combo: "2,1,1",
          story_character_pov_changes: "C3P0 doesnt change much",
        },
        {
          story_id: 3, // Episode VI: The Return of the Jedi
          character_id: 1, // C3P0
          story_character_combo: "3,1,1",
          story_character_pov_changes: null,
        },
        {
          story_id: 1, // Episode IV: A New Hope
          character_id: 2, // R2D2
          story_character_combo: "1,2,1",
          story_character_pov_changes: "Gains a mission and new friends",
        },
        {
          story_id: 2, // Episode V: The Empire Strikes back
          character_id: 2, // R2D2
          story_character_combo: "2,2,1",
          story_character_pov_changes: "Watches Luke do stuff",
        },
        {
          story_id: 3, // Episode VI: Return of the Jedi
          character_id: 2, // R2D2
          story_character_combo: "3,2,1",
          story_character_pov_changes: null,
        },
        {
          story_id: 1, // Episode IV: A New Hope
          character_id: 3, // Rebel Soldiers
          story_character_combo: "1,3,1",
          story_character_pov_changes: null,
        },
        {
          story_id: 2, // Episode V: The Empire Strikes back
          character_id: 3, // Rebel Soldiers
          story_character_combo: "2,3,1",
          story_character_pov_changes: null,
        },
        {
          story_id: 3, // Episode VI: Return of the Jedi
          character_id: 3, // Rebel Soldiers
          story_character_combo: "3,3,1",
          story_character_pov_changes: null,
        },
        {
          story_id: 1, // Episode IV: A New Hope
          character_id: 4, // Princess Leia
          story_character_combo: "1,4,1",
          story_character_pov_changes: null,
        },
        {
          story_id: 2, // Episode V: The Empire Strikes back
          character_id: 4, // Princess Leia
          story_character_combo: "2,4,1",
          story_character_pov_changes: "Leia gains new allies in her fight",
        },
        {
          story_id: 3, // Episode VI: Return of the Jedi
          character_id: 4, // Princess Leia
          story_character_combo: "3,4,1",
          story_character_pov_changes: "Leia admits her love and loses Han",
        },
        {
          story_id: 1, // Episode IV: A New Hope
          character_id: 5, // Darth Vader
          story_character_combo: "1,5,1",
          story_character_pov_changes: null,
        },
        {
          story_id: 2, // Episode V: The Empire Strikes back
          character_id: 5, // Darth Vader
          story_character_combo: "2,5,1",
          story_character_pov_changes:
            "Vader learns not to underestimate an opponent",
        },
        {
          story_id: 3, // Episode VI: Return of the Jedi
          character_id: 5, // Darth Vader
          story_character_combo: "3,5,1",
          story_character_pov_changes:
            "Vader attempts to regain his son but pushes him further away",
        },
        {
          story_id: 1, // Episode IV: A New Hope
          character_id: 17, // Luke Skywalker
          story_character_combo: "1,17,1",
          story_character_pov_changes:
            "Luke goes from the farm to fighting in a rebellion",
        },
        {
          story_id: 2, // Episode V: The Empire Strikes back
          character_id: 17, // Luke
          story_character_combo: "2,17,1",
          story_character_pov_changes:
            "Learns more about the force and the truth about Vader",
        },
        {
          story_id: 3, // Episode VI: Return of the Jedi
          character_id: 17, // luke
          story_character_combo: "3,17,1",
          story_character_pov_changes: null,
        },
        {
          story_id: 1, // Episode IV: A New Hope
          character_id: 18, // Chewie
          story_character_combo: "1,18,1",
          story_character_pov_changes: "Brings more people into his family",
        },
        {
          story_id: 2, // Episode V: The Empire Strikes back
          character_id: 18, // Chewie
          story_character_combo: "2,18,1",
          story_character_pov_changes: "Loses Han",
        },
        {
          story_id: 3, // Episode VI: Return of the Jedi
          character_id: 18, // Chewie
          story_character_combo: "3,18,1",
          story_character_pov_changes: null,
        },
        {
          story_id: 1, // Episode IV: A New Hope
          character_id: 19, // Han Solo
          story_character_combo: "1,19,1",
          story_character_pov_changes:
            "Gains perspective that there is more than money in the universe",
        },
        {
          story_id: 2, // Episode V: The Empire Strikes back
          character_id: 19, // Han Solo
          story_character_combo: "2,19,1",
          story_character_pov_changes: "falls in love",
        },
        {
          story_id: 3, // Episode VI: Return of the Jedi
          character_id: 19, // Han Solo
          story_character_combo: "3,19,1",
          story_character_pov_changes: null,
        },
        {
          story_id: 4, // Community 2.1
          character_id: 6, // Jeff
          story_character_combo: "4,6,2",
          story_character_pov_changes:
            "Realizes respect is missing from the relationships in the study group. Helps build it back with a speech at the end.",
        },
        {
          story_id: 5, // Community 2.2
          character_id: 6, // Jeff
          story_character_combo: "5,6,2",
          story_character_pov_changes:
            "Jeff relizes that the caring that he's grown to have over his time at Greendale makes him a better person. He likes who he has become.",
        },
        {
          story_id: 6, // Community 2.3
          character_id: 6, // Jeff
          story_character_combo: "6,6,2",
          story_character_pov_changes:
            "Learns that he will die and also comes to accept it.",
        },
        {
          story_id: 7, // Community 2.4
          character_id: 6, // Jeff
          story_character_combo: "7,6,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 4, // Community 2.1
          character_id: 7, // Britta
          story_character_combo: "4,7,2",
          story_character_pov_changes:
            "Learns to put the respect for the others in the group over winning and being seen as popular.",
        },
        {
          story_id: 5, // Community 2.2
          character_id: 7, // Britta
          story_character_combo: "5,7,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 6, // Community 2.3
          character_id: 7, // Britta
          story_character_combo: "6,7,2",
          story_character_pov_changes:
            "Learns to respect Annie as well as herself.",
        },
        {
          story_id: 7, // Community 2.4
          character_id: 7, // Britta
          story_character_combo: "7,7,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 4, // Community 2.1
          character_id: 8, // Abed
          story_character_combo: "4,8,2",
          story_character_pov_changes:
            "Realizes he was trying too hard to fit troups onto the group.",
        },
        {
          story_id: 5, // Community 2.2
          character_id: 8, // Abed
          story_character_combo: "5,8,2",
          story_character_pov_changes:
            "Annie will cloroform a man if she needs to.",
        },
        {
          story_id: 6, // Community 2.3
          character_id: 8, // Abed
          story_character_combo: "6,8,2",
          story_character_pov_changes:
            "Has a series of background stories with a couple about to give birth.",
        },
        {
          story_id: 7, // Community 2.4
          character_id: 8, // Abed
          story_character_combo: "7,8,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 4, // Community 2.1
          character_id: 9, // Annie
          story_character_combo: "4,9,2",
          story_character_pov_changes:
            "Loses crush on Jeff. Realizes he's gross.",
        },
        {
          story_id: 5, // Community 2.2
          character_id: 9, // Annie
          story_character_combo: "5,9,2",
          story_character_pov_changes:
            "She will cloroform a man if she needs to.",
        },
        {
          story_id: 6, // Community 2.3
          character_id: 9, // Annie
          story_character_combo: "6,9,2",
          story_character_pov_changes: "Learns to respect britta and herslf.",
        },
        {
          story_id: 7, // Community 2.4
          character_id: 9, // Annie
          story_character_combo: "7,9,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 4, // Community 2.1
          character_id: 10, // Troy
          story_character_combo: "4,10,2",
          story_character_pov_changes:
            "Realizes he took twitter too far and it has hurt Pierce.",
        },
        {
          story_id: 5, // Community 2.2
          character_id: 10, // Troy
          story_character_combo: "5,10,2",
          story_character_pov_changes:
            "Annie will cloroform a man if she needs to.",
        },
        {
          story_id: 6, // Community 2.3
          character_id: 10, // Troy
          story_character_combo: "6,10,2",
          story_character_pov_changes:
            "Is almost taken in by a cult- realizes it when hearing Pierce's mom speak from beyond the grave.",
        },
        {
          story_id: 7, // Community 2.4
          character_id: 10, // Troy
          story_character_combo: "7,10,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 4, // Community 2.1
          character_id: 11, // Shirley
          story_character_combo: "4,11,2",
          story_character_pov_changes:
            "Loses Respect for the members of the study group but gains it back.",
        },
        {
          story_id: 5, // Community 2.2
          character_id: 11, // Shirley
          story_character_combo: "5,11,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 6, // Community 2.3
          character_id: 11, // Shirley
          story_character_combo: "6,11,2",
          story_character_pov_changes:
            "Tries to tell the women she feels left out but when they don't realize it she enjoys watching them fight.",
        },
        {
          story_id: 7, // Community 2.4
          character_id: 11, // Shirley
          story_character_combo: "7,11,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 4, // Community 2.1
          character_id: 12, // Pierce
          story_character_combo: "4,12,2",
          story_character_pov_changes:
            "Realizes he's been a butt of a joke - wants to make money from it.",
        },
        {
          story_id: 5, // Community 2.2
          character_id: 12, // Pierce
          story_character_combo: "5,12,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 6, // Community 2.3
          character_id: 12, // Pierce
          story_character_combo: "6,12,2",
          story_character_pov_changes:
            "Chooses to keep following his religion after an impassioned plea from his dead mother.",
        },
        {
          story_id: 7, // Community 2.4
          character_id: 12, // Pierce
          story_character_combo: "7,12,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 1, // Episode IV: A New Hope
          character_id: 13, // Storm Troopers
          story_character_combo: "1,13,1",
          story_character_pov_changes: null,
        },
        {
          story_id: 2, // Episode V: The Empire Strikes back
          character_id: 13, // Storm Troopers
          story_character_combo: "2,13,1",
          story_character_pov_changes: null,
        },
        {
          story_id: 3, // Episode VI: The Return of the Jedi
          character_id: 13, // Storm Troopers
          story_character_combo: "3,13,1",
          story_character_pov_changes: null,
        },
        {
          story_id: 4, // Community 2.1
          character_id: 14, // Betty White
          story_character_combo: "4,14,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 6, // Community 2.2
          character_id: 14, // Betty White
          story_character_combo: "6,14,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 6, // Community 2.3
          character_id: 15, // Ian Duncan
          story_character_combo: "6,15,2",
          story_character_pov_changes:
            "Uses his powers for evil against chang but learns to respect him.",
        },
        {
          story_id: 4, // Community 2.1
          character_id: 16, // students
          story_character_combo: "4,16,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 5, // Community 2.2
          character_id: 16, // students
          story_character_combo: "5,16,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 6, // Community 2.3
          character_id: 16, // students
          story_character_combo: "6,16,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 7, // Community 2.4
          character_id: 16, // students
          story_character_combo: "7,16,2",
          story_character_pov_changes: null,
        },
        {
          story_id: 5, // Community 2.2
          character_id: 20, // Alan Conner
          story_character_combo: "5,20,2",
          story_character_pov_changes: "Learns 0 lessons. Is scummy.",
        },
      ]);
    });
};

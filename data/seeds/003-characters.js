exports.seed = (knex, Promise) => {
  return knex("characters")
    .then(function () {
      return knex("characters").insert([
        {
          // For ref will be id 1
          character_name: "C3P0",
          character_type: "Deuteragonist",
          character_age: null,
          character_gender_identity: "droid",
          character_role: "comic relief",
          character_physical_desc: "Gold Plated Robot",
          character_notes: null,
          character_status: null,
          character_url: null,
          project_id: 1,
        },
        {
          // For ref will be id 2
          character_name: "R2D2",
          character_type: "Deuteragonist",
          character_age: null,
          character_gender_identity: "droid",
          character_role: "comic relief",
          character_physical_desc:
            "small trashcan shaped droid - silver and blue",
          character_notes: null,
          character_status: null,
          character_url: null,
          project_id: 1,
        },
        {
          // For ref will be id 3
          character_name: "Rebel Soldiers",
          character_type: "Tertiary characters",
          character_age: null,
          character_gender_identity: null,
          character_role: "fodder",
          character_physical_desc: null,
          character_notes: "Soldiers waiting for the attack",
          character_status: null,
          character_url: null,
          project_id: 1,
        },
        {
          // For ref will be id 4
          character_name: "Princess Leia",
          character_type: "Protagonist",
          character_age: 25,
          character_gender_identity: "female",
          character_role: "Leading Character",
          character_physical_desc: "Wears white",
          character_notes: "needs more description",
          character_status: null,
          character_url: null,
          project_id: 1,
        },
        {
          // For ref will be id 5
          character_name: "Darth Vader",
          character_type: "Antagonist",
          character_age: 55,
          character_gender_identity: "more machine than man",
          character_role: "Main Antagonist",
          character_physical_desc: "Wears Black",
          character_notes: "needs more description",
          character_status: null,
          character_url: null,
          project_id: 1,
        },
        {
          // For ref will be id 6
          character_name: "Jeff Winger",
          character_type: "Protagonist",
          character_age: 30,
          character_gender_identity: "male",
          character_role: null,
          character_physical_desc: null,
          character_notes: null,
          character_status: null,
          character_url: null,
          project_id: 2,
        },
        {
          // For ref will be id 7
          character_name: "Britta Perry",
          character_type: "Protagonist",
          character_age: 25,
          character_gender_identity: "female",
          character_role: null,
          character_physical_desc: null,
          character_notes: null,
          character_status: null,
          character_url: null,
          project_id: 2,
        },
        {
          // For ref will be id 8
          character_name: "Abed Nadir",
          character_type: "Protagonist",
          character_age: 22,
          character_gender_identity: "male",
          character_role: null,
          character_physical_desc: null,
          character_notes: null,
          character_status: null,
          character_url: null,
          project_id: 2,
        },
        {
          // For ref will be id 9
          character_name: "Annie Edison",
          character_type: "Protagonist",
          character_age: 19,
          character_gender_identity: "female",
          character_role: null,
          character_physical_desc: null,
          character_notes: null,
          character_status: null,
          character_url: null,
          project_id: 2,
        },
        {
          // For ref will be id 10
          character_name: "Troy Barnes",
          character_type: "Protagonist",
          character_age: 19,
          character_gender_identity: "male",
          character_role: null,
          character_physical_desc: null,
          character_notes: null,
          character_status: null,
          character_url: null,
          project_id: 2,
        },
        {
          // For ref will be id 11
          character_name: "Shirley Bennett",
          character_type: "Protagonist",
          character_age: 40,
          character_gender_identity: "female",
          character_role: null,
          character_physical_desc: null,
          character_notes: null,
          character_status: null,
          character_url: null,
          project_id: 2,
        },
        {
          // For ref will be id 12
          character_name: "Pierce Hawthorne",
          character_type: "Protagonist/Antagonist",
          character_age: 60,
          character_gender_identity: "male",
          character_role: null,
          character_physical_desc: null,
          character_notes: null,
          character_status: null,
          character_url: null,
          project_id: 2,
        },
        {
          // For ref will be id 13
          character_name: "StormTroopers",
          character_type: "Tertiary characters",
          character_age: null,
          character_gender_identity: null,
          character_role: "fodder",
          character_physical_desc: null,
          character_notes: "Soldiers attacking",
          character_status: null,
          character_url: null,
          project_id: 1,
        },
        {
          // For ref will be id 14
          character_name: "Professor June Bauer",
          character_type: "Deuteragonist",
          character_age: null,
          character_gender_identity: null,
          character_role: "Teacher",
          character_physical_desc: null,
          character_notes: "Let Betty White cook",
          character_status: null,
          character_url: null,
          project_id: 2,
        },
        {
          // For ref will be id 15
          character_name: "Ian Duncan",
          character_type: "Deuteragonist",
          character_age: null,
          character_gender_identity: "male",
          character_role: "Teacher",
          character_physical_desc: null,
          character_notes: null,
          character_status: null,
          character_url: null,
          project_id: 2,
        },
        {
          // For ref will be id 16
          character_name: "Group of Students",
          character_type: "Tertiary characters",
          character_age: null,
          character_gender_identity: null,
          character_role: "background characters",
          character_physical_desc: null,
          character_notes: "Students doing student things",
          character_status: null,
          character_url: null,
          project_id: 2,
        },
        {
          // For ref will be id 17
          character_name: "Luke Skywalker",
          character_type: "Protagonist",
          character_age: 18,
          character_gender_identity: "male",
          character_role: "Leading Character",
          character_physical_desc: null,
          character_notes: null,
          character_status: null,
          character_url: null,
          project_id: 1,
        },
        {
          // For ref will be id 18
          character_name: "Chewie",
          character_type: "Deuteragonist",
          character_age: 60,
          character_gender_identity: "male",
          character_role: "Co-pilot of Milenium falcon",
          character_physical_desc: "Walking Carpet",
          character_notes: null,
          character_status: null,
          character_url: null,
          project_id: 1,
        },
        {
          // For ref will be id 19
          character_name: "Han Solo",
          character_type: "Deuteragonist",
          character_age: 30,
          character_gender_identity: "male",
          character_role: "Pilot of Milenium falcon",
          character_physical_desc: "Scruffy Looking Nerf-herder",
          character_notes: null,
          character_status: null,
          character_url: null,
          project_id: 1,
        },
        {
          // For ref will be id 20
          character_name: "Alan Conner",
          character_type: "Antagonist",
          character_age: 40,
          character_gender_identity: "male",
          character_role: "foil to what Jeff was in the past",
          character_physical_desc: null,
          character_notes: "Scummy guy",
          character_status: null,
          character_url: null,
          project_id: 2,
        },
      ]);
    });
};

exports.seed = (knex, Promise) => {
  return knex("scenes")
    .truncate()
    .then(function () {
      return knex("scenes").insert([
        {
          // For ref will be id 1
          scene_name: "A New Hope",
          scene_number: 1,
          scene_summary:
            "A scrolling screen explaining the setting and characters the viewers will be seeing at the start. Explain the confilct and where we walk into the story.",
          scene_notes: null,
          story_id: 1,
          scene_timespan: null,
        },
        {
          // For ref will be id 2
          scene_name: "Imperial Boarding Party",
          scene_number: 2,
          scene_summary:
            "Tantive IV is swallowed by a star destroyer. R2D2 and C3P0 walk a hallway as soldiers get ready for an attack. Storm troopers blast their way into the ship and a firefight ensues. R2 and 3P0 avoid laser fire. Darth Vader enters.",
          scene_notes: "Fast Paced with action and lasers",
          story_id: 1,
          scene_timespan: "A few minutes",
        },
        {
          // For ref will be id 3
          scene_name: "R2’s Mission",
          scene_number: 3,
          scene_summary:
            "Princess Leia gives R2 the plans to the Death Star and a mission (later revealed to get them to Ben Kenobi. Darth interigates a soldier and orders the place be torn apart to find the plans. Storm Troopers capture Leia. R2 and 3P0 escape on an escape pod.",
          scene_notes:
            "While not revealed until later the plans that Leia gives r2 drives the base line of the plot for the film.",
          story_id: 1,
          scene_timespan: "10-30 minutes",
        },
        {
          // For ref will be id 4
          scene_name: "Vader Confronts the Princess",
          scene_number: 4,
          scene_summary:
            "Leia is interogated by Vader. She tries to play coy but Vader does not believe it was a diplomatic mission. He has soldiers taker her away. He explains that Leia is his chance to find the Rebel Base. He orders a detachment to find the escape pod that was gettisoned durring the fighting.",
          scene_notes: null,
          story_id: 1,
          scene_timespan: "real time",
        },
        {
          // For ref will be id 5
          scene_name: "Lost in the Desert",
          scene_number: 5,
          scene_summary:
            "R2 and 3P0 walk through the desert. They argue and want to go differnt ways. R2 explains he has a mission but the two can't come to an agreement and go off in different directions to find a settlement.",
          scene_notes: null,
          story_id: 1,
          scene_timespan: "real time",
        },
        {
          // For ref will be id 6
          scene_name: "The Empire Strikes Back",
          scene_number: 1,
          scene_summary:
            "A scrolling screen explaining what has happened since episode iv. It sets the stage for the rebels to be on Hoth and the Empire & vader searching for them.",
          scene_notes: "Make sure to spellcheck.",
          story_id: 2,
          scene_timespan: null,
        },
        {
          // For ref will be id 7
          scene_name: "Ice Plant Hoth",
          scene_number: 2,
          scene_summary:
            "A star destroyer sends out probes. One crashes on the ice planet Hoth. Luke calls Han on the radio. They have finished work and Luke is going to check out the meteor impact. He is then attacked by a large beast and knocked out.",
          scene_notes: null,
          story_id: 2,
          scene_timespan:
            "Could be weeks between probes launching and scene on Hoth",
        },
        {
          // For ref will be id 8
          scene_name: "The Rebel Base",
          scene_number: 3,
          scene_summary:
            "Han arrives back at Echo base. Chewie is working on the Falcon which is having issues. Han advises a general the job was done and learns Luke has not yet arrived. He says he needs to leave to pay off a debt and coly says goodby to Leia. She follows him and they argue. Han tries to get Leia to confess she has feelings for him.",
          scene_notes: null,
          story_id: 2,
          scene_timespan: "20 or so minutes",
        },
        {
          // For ref will be id 9
          scene_name: "Escape from the Wampa",
          scene_number: 5,
          scene_summary:
            "Luke awakes in the Wampa's cave with his feet frozen to the ceiling. He is trapped. He uses the force to get his lightsaber - frees himself and attacks the beast. He then collapses in the cold. Han is out searching but it is getting darker, windier, and colder.",
          scene_notes: "make it scary",
          story_id: 2,
          scene_timespan: "real time",
        },
        {
          // For ref will be id 10
          scene_name: "Back to School",
          scene_number: 1,
          scene_summary:
            "It's the first day of the Fall 2010 Semester at Greendale Community College as the various members of the study group prepare to return to class. Britta is apprehensive when she shows up on campus noticing some students staring at her. Troy arrives with Pierce who he now lives with. After Pierce makes a particularly racist comment, Troy posts it on a twitter account he created called Old White Man Says. Annie and Abed also arrive amused at Troy's latest tweet.",
          scene_notes: "Summary taken from community-sitcom.fandom.com",
          story_id: 4,
          scene_timespan: null,
        },
        {
          // For ref will be id 11
          scene_name: "And We're Back",
          scene_number: 2,
          scene_summary:
            "Later, everyone meets up in Group Study Room F but they immediately notice Britta isn't there. She then emerges from her hiding place and tells the group she's trying to avoid the gossip mongers of the school after her embarrassing declaration at the Dance.",
          scene_notes: "Summary taken from community-sitcom.fandom.com",
          story_id: 4,
          scene_timespan: null,
        },
        {
          // For ref will be id 12
          scene_name: "Hallway to Class",
          scene_number: 3,
          scene_summary:
            "Britta apologizes to Jeff for putting him on the spot last year and admits that she only said she loved him because she was competing with Slater. She suggests that they put everything that happened last year behind them and just go to class. In the hallway, she is identified by a group of female students. They explain how they admire her for having the courage to declare her love so publicly. Jeff watches the situation, worried where it might lead. He turns to see Annie standing behind him. He takes her aside and reiterates what he told her several months ago: the kiss between them was a mistake. Annie reassures him that she understands and quickly leaves. Jeff becomes concerned when he sees her steal a glance at him as she walks away.",
          scene_notes: "Summary taken from community-sitcom.fandom.com",
          story_id: 4,
          scene_timespan: null,
        },
        {
          // For ref will be id 13
          scene_name: "Pop and Locktober Fest",
          scene_number: 1,
          scene_summary:
            "The study group is in the cafeteria when Dean Pelton shows up and tells them about the upcoming Pop and Locktober Fest dance contest. While everyone else is excited about competing, Jeff is annoyed and leaves accompanied by Abed.",
          scene_notes: "Summary taken from community-sitcom.fandom.com",
          story_id: 5,
          scene_timespan: null,
        },
        {
          // For ref will be id 14
          scene_name: "An Old Friend",
          scene_number: 2,
          scene_summary:
            "Jeff goes to the student lounge is shocked when he runs into a lawyer from his old law firm named Alan Conner. Jeff reluctantly reveals he is attending school to replace his degree while Alan freely admits he's here for a N.A. meeting. Jeff agrees when Alan proposes he ditch class to join him for a drink.",
          scene_notes: "Summary taken from community-sitcom.fandom.com",
          story_id: 5,
          scene_timespan: null,
        },
        {
          // For ref will be id 15
          scene_name: "Dance Try-Out",
          scene_number: 3,
          scene_summary:
            "In the study room , Chang is auditioning in for a spot in the study group's dance team. Troy tells him they'll think about it, as everyone wonders where Jeff is currently. Annie believes they should all should be glad he reconnected with an old friend, but Abed worries that Alan will end up being a bad influence on Jeff. Jeff finally arrives with Alan in tow and introduces his ex-co-worker. Annie recognizes Alan but can't place him. After Alan ends up upsetting Pierce, the two men leave.",
          scene_notes: "Summary taken from community-sitcom.fandom.com",
          story_id: 5,
          scene_timespan: null,
        },
        {
          // For ref will be id 16
          scene_name: "Diorama",
          scene_number: 1,
          scene_summary:
            "Shirley enters the study room and notices Annie and Britta working on a diorama together. It's the centerpiece for a fundraiser they are holding for a recent oil spill. Jeff arrives, having just gotten back from a medical check-up. It's then that a despondent Troy shows up and tells everyone that he found the dead body of Pierce's mom while trying to do the laundry at Pierce's mansion. The ladies comfort him as Pierce arrives seemingly unaffected. The others express concern over how he is handling his mother's death, but Pierce responds that she didn't actually die. According to his religion, it was merely her corporeal body that died. He further explains that her spirit is being stored inside an energy pod and that she will eventually be reborn into a new body.",
          scene_notes: "Summary taken from community-sitcom.fandom.com",
          story_id: 6,
          scene_timespan: null,
        },
        {
          // For ref will be id 17
          scene_name: "Hallway to class",
          scene_number: 2,
          scene_summary:
            "On their way to the Anthropology classroom, the study group implores Jeff to talk to Pierce. Jeff tells them that they should just respect his religion and let him grieve in his own way. After entering the classroom, they meet up with Pierce and try to do as Jeff says.",
          scene_notes: "Summary taken from community-sitcom.fandom.com",
          story_id: 6,
          scene_timespan: null,
        },
        {
          // For ref will be id 18
          scene_name: "New Anth Teacher",
          scene_number: 3,
          scene_summary:
            "As they settle in, Professor Ian Duncan shows up and introduces himself as the new teacher for Anthropology, taking over from Professor Bauer who has been temporarily suspended. Chang enters the room, upsetting Duncan who had a restraining order placed on him after his physical assault on Duncan at last semester's Tranny Dance. Duncan reminds Chang that he must stay 25 feet away from him, or he'll be expelled.",
          scene_notes: "Summary taken from community-sitcom.fandom.com",
          story_id: 6,
          scene_timespan: null,
        },
        {
          // For ref will be id 19
          scene_name: "Where's Luke?",
          scene_number: 4,
          scene_summary:
            "R2 and 3P0 find Han and Chewie to check if Luke has arrived. Han goes accross the base to find him and finds out no one has seen him. Han leaves into the cold wild to find Luke and is advised his taun-taun will die in the cold out there.",
          scene_notes:
            "It is important for Han's concern to grow and climax into his leaving.",
          story_id: 2,
          scene_timespan: "an hour",
        },
      ]);
    });
};

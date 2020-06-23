# StoryBoard
### Michael E Callahan
[GitHub](https://github.com/Callmich) | [LinkedIn](https://www.linkedin.com/in/michael-callahan-a640551a3/)

Current version: 1.0

Future Updates Plans: After Front End is Created I will be updating this back end to have a userbase table. I will add Authorization and provate routes. Also more testing of endpoints needs to be written.


## What is StoryBoard?
It is a back end database to store the information a group of writters would need to put together a storyboard of a project or series of films/episodes. During a long talk with a writter friend in LA - he let me know one of the largest areas in his work that was impacted due to the shift to Work From Home was the lack of a good tool to replicate the feeling in a writters room when trying to break a story. 
I am looking to solve that problem. This is StoryBoard's back end - it will be the first step in a tool for writters to work together from afar. 


### Tech/Languages Used:
node.js | expres | javaScript | knex | sqlite3 | postgres


### Build Instructions for a Dev Server:
1. Clone the repository: `git clone https://github.com/Callmich/storyboard`
2. Navigate to the directory: `cd storyboard`
3. Install the necessary dependencies: `npm install`
4. Start server with `npm run server`
4. If SQLite3 is installed - run `knex migrate:latest` to set up database
5. Seed data `knex seed:run`


### API Documentation:
The EndPoints documentation is located [here](https://documenter.getpostman.com/view/10662887/Szzhdy91)


### Structure:
![alt text](https://github.com/Callmich/storyboard/blob/master/designs/StoryBoard%20DB%20final%20V1.jpg)

The basic structure of this project in its current state is that on the top level there are Projects. Next there are tables for Stories, Characters, and Settings that relate back to a project_id. After that there is a table for Scenes that relates back to a story_id. Lastly there are middle tables that connect the tables from the second and third level.

Level 1: Projects

Level 2: Stories | Characters | Settings

Level 3: Scenes

Level 4: story_characters | story_settings | scene_characters | scene_settings | character_settings


### Feedback:
Do you have any suggestions for refactoring the code or additional features you'd like to see implemented? Please feel free to reach out to me on [GitHub](https://github.com/Callmich) or my [LinkedIn](https://www.linkedin.com/in/michael-callahan-a640551a3/). Looking forward to hearing from you and talking code! 


### Thanks:
Many thanks to my friends Marc Muszynski, Alex Nimmer, and Hannah McMahon for the inspiration and letting me pick their brains with questions and then questions about those answers and then more questions.

### License:
Using an MIT License
MIT © Michael Callahan
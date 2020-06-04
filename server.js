const express = require('express');

//create Router for tables
const ProjectRouter = require('./routers/project-router.js')
const StoryRouter = require('./routers/stories-router.js');
const SettingRouter = require('./routers/settings-router.js');
const CharacterRouter = require('./routers/characters-router.js');
const StoryCharactersRouter = require('./routers/middleTableRouters/story_characters-Router.js')
const StorySettingsRouter = require('./routers/middleTableRouters/story_Settings-Router.js')

const server = express();

server.use(express.json());

//server.use('***URL***', ***RouterGoesHere***)
server.use('/api/projects', ProjectRouter)
server.use('/api/stories', StoryRouter)
server.use('/api/characters', CharacterRouter)
server.use('/api/settings', SettingRouter)

server.use('/api/storyCharacters', StoryCharactersRouter)
server.use('/api/storySettings', StorySettingsRouter)

module.exports = server;
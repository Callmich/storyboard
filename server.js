const express = require('express');

//create Router for tables
const ProjectRouter = require('./projects/project-router.js')
const StoryRouter = require('./stories/stories-router.js');
const SettingRouter = require('./settings/settings-router.js');
const CharacterRouter = require('./characters/characters-router.js');

const server = express();

server.use(express.json());

//server.use('***URL***', ***RouterGoesHere***)
server.use('/api/projects', ProjectRouter)
server.use('/api/stories', StoryRouter)
server.use('/api/characters', CharacterRouter)
server.use('/api/settings', SettingRouter)

module.exports = server;
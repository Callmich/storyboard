const express = require('express');
const helmet = require('helmet')

//create Router for tables
const ProjectRouter = require('./routers/project-router.js')
const StoryRouter = require('./routers/stories-router.js');
const SettingRouter = require('./routers/settings-router.js');
const CharacterRouter = require('./routers/characters-router.js');
const SceneRouter = require('./routers/scenes-router.js');
const StoryCharactersRouter = require('./routers/middleTableRouters/story_characters-Router.js')
const StorySettingsRouter = require('./routers/middleTableRouters/story_Settings-Router.js')
const CharacterSettingsRouter = require('./routers/middleTableRouters/character_Settings-Router.js')
const SceneCharactersRouter = require('./routers/middleTableRouters/scene_characters-Router.js')
const SceneSettingsRouter = require('./routers/middleTableRouters/scene_settings-Router.js')

const server = express();

server.use(helmet());
server.use(express.json());

//server.use('***URL***', ***RouterGoesHere***)
server.use('/api/projects', ProjectRouter)
server.use('/api/stories', StoryRouter)
server.use('/api/characters', CharacterRouter)
server.use('/api/settings', SettingRouter)
server.use('/api/scenes', SceneRouter)

server.use('/api/storyCharacters', StoryCharactersRouter)
server.use('/api/storySettings', StorySettingsRouter)
server.use('/api/characterSettings', CharacterSettingsRouter)
server.use('/api/sceneCharacters', SceneCharactersRouter)
server.use('/api/sceneSettings', SceneSettingsRouter)

module.exports = server;
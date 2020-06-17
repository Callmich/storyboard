const supertest = require('supertest');
const server = require('../server');


// jest.mock("../shared-models/shared-models.js");
// const Projects = require('../shared-models/shared-models.js');

// describe('projects endpoints', () => {
//   describe('GET/', () => {
//     it('should return mesage with 0', async () => {
//       Projects.findAll = (dataBase) => {
//         dataBase = 'projects'
//         return ['test']}
//       const res = await supertest(server).get('/api/projects/')

//     //   expect(200)
//       expect(res.body).toEqual("message: Nope!")
//     });
//   })
// })

jest.mock("../shared-models/middleTable-Models/character_settings-model");
const CS = require('../shared-models/middleTable-Models/character_settings-model');

describe('projects endpoints', () => {
  describe('GET/', () => {
    it('should return mesage with 0', async () => {
      // CS.find = () => {}
      const res = await supertest(server).get('/api/characterSettings/1')

    //   expect(200)
      expect(res.body).toEqual("message: Nope!")
    });
  })
})
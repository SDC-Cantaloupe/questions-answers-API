const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../servers/mongo/server-mongo.js');

const {Questions} = require('../dbs/mongo/models.js')






describe('API Testing', () => {
  test('get test', async () => {
    let testRes = 'yes'

    await request(app).get('/test')
    .expect(200)
    .then(res => {
      expect(res.text).toBe('yes')
    })
  })


})
const app = require('../servers/mongo/server-mongo.js');
const supertest = require('supertest');
const {performance} = require('perf_hooks');
const redis = require('redis');
const request = supertest(app);
const {Questions, Answers, Answer_Photos} = require('../dbs/mongo/models.js')
const mongoose = require('mongoose')


beforeEach(async () => {
  const url = `mongodb://127.0.0.1/qa`
  await mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, autoIndex: false})
})

afterEach(async () => {
  await mongoose.connection.close()
})

test('Connects to db', async () => {
  await Questions.find({question_id: 1})
  .then(res => {
    expect(res).toBeTruthy()
    expect(res[0].question_body).toBe('What fabric is the top made of?')
  })
  .catch(err => console.log('SOMETHINGS WRONGSSSSS'))
})

describe('Paginates results', () => {
  test('Paginates GET Questions', async() => {
    let responsePageOne;
    await request
    .get('/qa/questions')
    .query({
      product_id: 1,
      count: 5,
      page: 1
    })
    .then(res => {
      responsePageOne = JSON.parse(res.text)
    })
    .catch(err => console.log('error querying db', err))

    expect(responsePageOne.results.length).toBe(4)

    let responsePageTwo;

    await request
    .get('/qa/questions')
    .query({
      product_id: 1,
      count: 5,
      page: 2
    })
    .then(res => {
      responsePageTwo = JSON.parse(res.text)
    })
    .catch(err => console.log('error querying db', err))

    expect(responsePageTwo.results.length).toBe(0)
  })
  test('Paginates GET Answers', async() => {
    let responsePageOne;
    await request
      .get('/qa/questions/2/answers')
      .query({
        question_id: 1,
        count: 5,
        page: 1
      })
      .then(res => {
        expect(res.status).toBe(200)
        responsePageOne = JSON.parse(res.text)
      })
      .catch(err => console.log(err))

      expect(responsePageOne.results.length).toBe(4)

      let responsePageTwo;
      await request
      .get('/qa/questions/2/answers')
      .query({
        question_id: 1,
        count: 5,
        page: 2
      })
      .then(res => {
        expect(res.status).toBe(200)
        responsePageOne = JSON.parse(res.text)
      })
      .catch(err => console.log(err))

      expect(responsePageOne.results.length).toBe(0)
  })
})
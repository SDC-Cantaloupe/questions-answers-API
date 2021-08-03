const app = require('../servers/mongo/server-mongo.js');
const supertest = require('supertest');
const {performance} = require('perf_hooks')
const request = supertest(app);
const {Questions, Answers, Answer_Photos} = require('../dbs/mongo/models.js')
const mongoose = require('mongoose')


beforeAll(async () => {
  const url = `mongodb://127.0.0.1/qa`
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
})

afterAll(async () => {
  await mongoose.connection.close()
})

test('Connects to db', async () => {
  await Questions.find({question_id: 1})
  .then(res => {
    expect(res).toBeTruthy()
    expect(res[0].question_body).toBe('What fabric is the top made of?')
  })
})

describe('Read queries under 50ms response time', () => {
  test('GET questions responds in under 50ms', async () => {
    let startTime = performance.now();
    let endTime;
    await request
      .get('/qa/questions')
      .query({
        product_id: 1,
        count: 5
      })
      .then(res => {
        endTime = performance.now();
      })
      .catch(err => console.log('error querying db', err))

      console.log(startTime, endTime, performance.now())


    let executionTime = Math.floor(endTime - startTime)

    console.log(`GET Questions call took ${executionTime} milliseconds`)

    expect(executionTime).toBeLessThan(50)
  })
  test('GET Answers responds in under 50ms', async () => {
    let startTime = performance.now();
    let endTime;
    await request
      .get('/qa/questions/3518962/answers')
      .query({
        question_id: 3518962,
        count: 5
      })
      .then(res => {
        endTime = performance.now();
      })
      .catch(err => console.log('error querying answer collection', err))

    let executionTime = Math.floor(endTime - startTime)

    console.log(`GET Answers call took ${executionTime} milliseconds`)

    expect(executionTime).toBeLessThan(50)
  })
})

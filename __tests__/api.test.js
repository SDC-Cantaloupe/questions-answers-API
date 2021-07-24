const app = require('../servers/mongo/server-mongo.js');
const supertest = require('supertest');
const request = supertest(app);
const {Questions, Answers, Answer_Photos} = require('../dbs/mongo/models.js')
const { setupDB } = require('../test-setup')

setupDB('apiTest');

describe('Test API routes', () => {
  describe('Get Questions', () => {


  })
  describe('Get Answers', () => {


  })
  describe('Post Question', () => {
    test('Can POST new question', async () => {
      let postQuestion = await
      request
        .post('/qa/questions')
        .query({
          body: 'test',
          name: 'Jest',
          email: 'j@mail.com',
          product_id: 1
        })

      let savedEntry = await Questions.find({asker_name: 'Jest'})

      expect(savedEntry).toBeTruthy();
      expect(savedEntry[0].question_body).toBe('test')
      expect(savedEntry[0].asker_email).toBe('j@mail.com')

    })
  })
  describe('Post Answer', () => {
    test('Can POST new Answer, no Photos', async () => {
      await request.post('/qa/questions/1/answers')
      .query({
        question_id: 1,
        body: 'test',
        name: 'Jest',
        email: 'j@mail.com',
        photos: []
      })

      let savedAnswer = await Answers.find({answerer_name: 'Jest'})

      expect(savedAnswer).toBeTruthy()
      expect(savedAnswer[0].body).toBe('test')
      expect(savedAnswer[0].answerer_email).toBe('j@mail.com')
    })

    test('Can POST new Answer, with Photos', async () => {
      await request.post('/qa/questions/1/answers')
      .query({
        question_id: 1,
        body: 'test',
        name: 'Jest',
        email: 'j@mail.com',
        photos: ['www.google.com', 'www.yahoo.com']
      })

      let savedAnswer = await Answers.find({answerer_name: 'Jest'});

      let answerID = savedAnswer[0].answer_id;

      let savedPhotos = await Answer_Photos.find({answer_id: answerID});

      expect(savedPhotos.length).toBe(2)
      expect(savedPhotos[0].url).toBe('www.google.com')
      expect(savedPhotos[1].url).toBe('www.yahoo.com')

      // expect(savedAnswer).toBeTruthy()
      // expect(savedAnswer[0].body).toBe('test')
      // expect(savedAnswer[0].answerer_email).toBe('j@mail.com')
    })

  })
  describe('Mark Question', () => {


  })
  describe('Mark Answer', () => {


  })
})

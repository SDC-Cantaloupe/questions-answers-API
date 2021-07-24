const app = require('../servers/mongo/server-mongo.js');
const supertest = require('supertest');
const request = supertest(app);
const {Questions, Answers, Answer_Photos} = require('../dbs/mongo/models.js')
const { setupDB } = require('../testHelpers/test-setup')
const {checkQuestionResponseFormat} = require('../testHelpers/checkQuestionFormat.js')
const {checkAnswerResponseFormat} = require('../testHelpers/checkAnswerFormat.js')

const util = require('util')


setupDB('apiTest');

describe('Test API routes', () => {
  describe('Get Questions', () => {
    test('Returns question data', async () => {
      await request
      .get('/qa/questions')
      .query({
        product_id: 1,
        count: 5
      })
      .then(res => {
        expect(res.status).toBe(200);
        let data = JSON.parse(res.text)
        expect(checkQuestionResponseFormat(data)).toBeTruthy()

      })
    })
  })
  describe('Get Answers', () => {
    test('Returns answer data', async() => {
      await request
      .get('/qa/questions/1/answers')
      .query({
        question_id: 1,
        count: 5
      })
      .then(res => {
        expect(res.status).toBe(200)
        let data = JSON.parse(res.text)

        expect(checkAnswerResponseFormat(data)).toBeTruthy()

      })
    })

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

      expect(savedAnswer).toBeTruthy()
      expect(savedAnswer[0].body).toBe('test')
      expect(savedAnswer[0].answerer_email).toBe('j@mail.com')
    })

  })
  describe('Mark Question', () => {
    test('Marks Question Helpful', async () => {
      let preMarkedHelpful;
      let postMarkedHelpful;

      await Questions.find({question_id: 1})
      .then(res => {
        preMarkedHelpful = res[0].question_helpfulness;
      })

      await request.put('/qa/questions/1/helpful')

      await Questions.find({question_id: 1})
      .then(res => {
        postMarkedHelpful = res[0].question_helpfulness;
      })

      expect(postMarkedHelpful).toBe(preMarkedHelpful + 1)
    })
    test('Marks Question Reported', async () => {
      let question = await Questions.find({question_id: 1});

      await request.put('/qa/questions/1/report');

      let reported = await Questions.find({question_id: 1});

      expect(question[0].reported).toBe(0);
      expect(reported[0].reported).toBe(1);

    })

  })
  describe('Mark Answer', () => {
    test('Marks Answer Helpful', async () => {
      let preMarkedHelpful;
      let postMarkedHelpful;

      await Answers.find({answer_id: 5})
      .then(res => {
        console.log(res)
        preMarkedHelpful = res[0].helpfulness;
      })

      await request.put('/qa/answers/5/helpful')

      await Answers.find({answer_id: 5})
      .then(res => {
        postMarkedHelpful = res[0].helpfulness;
      })

      expect(postMarkedHelpful).toBe(preMarkedHelpful + 1)
    })
    test('Marks Answer Reported', async () => {
      let answer= await Answers.find({answer_id: 5});

      await request.put('/qa/answers/5/report');

      let reported = await Answers.find({answer_id: 5});

      expect(answer[0].reported).toBe(0);
      expect(reported[0].reported).toBe(1);

    })

  })
})

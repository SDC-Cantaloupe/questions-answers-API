const {Questions, Answers, Answer_Photos} = require('../dbs/mongo/models.js')
const { setupDB } = require('../test-setup')

setupDB('seed')

it('Seeding test', async () => {
  const questions = await Questions.find()
  const answers = await Answers.find()
  const photos = await Answer_Photos.find()
  expect(questions.length).toBe(6)
  expect(answers.length).toBe(6)
  expect(photos.length).toBe(3)

})
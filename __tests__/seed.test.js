const {Questions} = require('../dbs/mongo/models.js')
const { setupDB } = require('../test-setup')

setupDB('seed', true)

it('Seeding test', async () => {
  const questions = await Questions.find({})
  console.log(questions)

})
const {Answers, Answer_Photos} = require('../models.js');
const {formatAnswerResponse} = require('../controllers/answerResponse.js')

async function getAnswerData(q_id, page, count) {

  let answers;

  await Answers.paginate({question_id: q_id, reported: 0}, {page: page, limit:count, projection: {_id: 0}}, function (err, results) {
    if (err) {
      console.log('error paginating answers', err)
    } else {
      answers = results.docs
    }
  })

  let answerPhotos = await Promise.all(answers.map(async (answer) => {
    let photos = await Answer_Photos.find({answer_id: answer.answer_id}, {_id:0});
    return photos
  }))
  return formatAnswerResponse(q_id, page, count, answers, answerPhotos)
}

module.exports = {
  getAnswerData
}
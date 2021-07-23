const {Answers, Answer_Photos} = require('../models.js');
const {formatAnswerResponse} = require('../controllers/answerResponse.js')

async function getAnswerData(q_id, page, count) {

  let answers = await Answers.find({question_id: q_id, reported:false}, {_id: 0}).limit(count);

  let answerPhotos = await Promise.all(answers.map(async (answer) => {
    let photos = await Answer_Photos.find({answer_id: answer.answer_id}, {_id:0});
    return photos
  }))
  return formatAnswerResponse(q_id, page, count, answers, answerPhotos)
}

module.exports = {
  getAnswerData
}